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
		server.use('/service-worker.js', serve('./.next/service-worker.js'))
		server.use('/firebase-hackernews-sw.js', serve('./firebase-hackernews-sw.js'))
		server.use('/manifest.json', serve('./static/manifest.json'))

		server.get('/', (req, res) => {
			renderAndCache(req, res, '/')
		})

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

// code snippets from [next.js/server.js - zeit/next.js](https://goo.gl/wn1WBK)
const ssrCache = new LRUCache({
	max: 100,
	maxAge: 1000 * 60 * 60
})

function getCacheKey(req) {
	return `${req.url}`
}

function renderAndCache(req, res, pagePath, queryParams) {
	const key = getCacheKey(req)

	// If we have a page in the cache, let's serve it
	if (ssrCache.has(key)) {
		res.send(ssrCache.get(key))
		return
	}

	// If not let's render the page into HTML
	app.renderToHTML(req, res, pagePath, queryParams)
		.then(html => {
			ssrCache.set(key, html)
			res.send(html)
		})
		.catch(err => {
			app.renderError(err, req, res, pagePath, queryParams)
		})
}
