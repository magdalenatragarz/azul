import express from 'express'

const api = require('./api/send-file')

const port = 8080

const server = express()
server.use('/', api)
server.listen(port)