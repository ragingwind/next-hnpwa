const path = require('path')
const express = require('express')
const next = require('next')
const hackernews = require('firebase-hackernews')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => hackernews().watch())
  .then(() => {
    const server = express()

    server.use('/service-worker.js',
      express.static(path.resolve(__dirname, './.next/service-worker.js'))
    )

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
