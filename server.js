const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const firebase = require('firebase')
const hackernews = require('firebase-hackernews')
const LRUCache = require('lru-cache')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const serve = (subpath, cache) => express.static(
	path.resolve(__dirname, subpath),
	{maxAge: cache && !dev ? 1000 * 60 * 60 * 24 * 30 : 0}
)

const hnservice = hackernews.init(firebase)

app.prepare()
	.then(() => hnservice.watch())
	.then(() => {
		const server = express()

		server.use(compression({threshold: 0}))
		server.use('/static', serve('./static', true))
		server.use('/service-worker.js', serve('./.next/service-worker.js', true))
		server.use('/manifest.json', serve('./static/manifest.json', true))

		server.get('/hackernews/*', (req, res) => {
			hnservice.fetch(req.path)
				.then(data => {
					res.send(typeof data === 'number' ? String(data) : data)
				})
				.catch(err => {
					console.error(err)
					res.status(500).send(err.toString())
				})
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, err => {
			if (err) {
				throw err
			}

			console.log('> Ready on http://localhost:3000')
		})
})
