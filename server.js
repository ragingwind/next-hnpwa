const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const hackernews = require('firebase-hackernews')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const serve = (subpath, cache) => express.static(
  path.resolve(__dirname, subpath), 
  {maxAge: cache && !dev ? 1000 * 60 * 60 * 24 * 30 : 0}
)

app.prepare()
  .then(() => hackernews().watch())
  .then(() => {
    const server = express()

    server.use(compression({ threshold: 0 }))
    server.use('/service-worker.js', serve('./.next/service-worker.js'))
    server.use('/manifest.json', serve('./static/manifest.json'))
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
