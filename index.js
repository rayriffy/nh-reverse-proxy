const cors = require('cors');
const express = require('express');
const proxy = require('http-proxy-middleware')

const server = express();

const apiEndpoint = 'https://nhentai.net'

server.use(cors())

server.use('*', proxy({ target: apiEndpoint, changeOrigin: true }))

server.listen(3000)

module.exports = server
