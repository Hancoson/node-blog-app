const express = require('express')
const next = require('next')
const config = require('./config/config')

const port = parseInt(process.env.PORT, 10) || config.port
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const myRoutes = require('./server/routes')

app.prepare()
  .then(() => {
    const server = express()

    myRoutes(server, app, handle);

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on ${config.host}:${port}`)
    })
  })
