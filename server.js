const fs = require('fs')
const path = require('path')
const micro = require('micro')
const next = require('next')
const Router = require('router')
const finalhandler = require('finalhandler')
const firebase = require('firebase')
const hackernews = require('firebase-hackernews')

// instance for services
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const hnservice = hackernews.init(firebase)

// serve functions
const page = async (req, res) => {
	req.url = req.originalUrl
	micro.send(res, 200, await handle(req, res))
}
const stories = async (req, res) => {
	micro.send(res, 200, await hnservice.fetch(req.originalUrl))
}
const static = (req, res, dest) => {
	return new Promise((resolve, reject) => {
		if (!dest || typeof dest !== 'string') {
			dest = `.${req.originalUrl}`
		}

		fs.readFile(dest, (err, data) => {
			if (err) {
				reject(err)
				return
			}

			if (/\.js$/.test(dest)) {
				res.setHeader('Content-Type', 'application/javascript')
			} else if (/\.json$/.test(dest)) {
				res.setHeader('Content-Type', 'application/json')
			}

			micro.send(res, 200, data)

			resolve()
		})
	})
}

app.prepare()
	.then(() => hnservice.watch())
	.then(() => {
		const router = new Router()
		const routes = {
			'/sw.js': `./static/workbox/sw.js`,
			'/manifest.json': `./static/manifest.json`,
			'/favicon.ico': `./static/favicon.ico`
		}

		for (const [k, v] of Object.entries(routes)) {
			router.get(k, async (req, res) => await static(req, res, v))
		}

		router.use('/hackernews/:story', stories)
		router.use('/_next', page)
		router.use('/static', static)
		router.get('/', page)

		const server = micro((req, res) => router(req, res, finalhandler(req, res)))
		server.listen(3000)
	})
