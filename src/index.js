const express = require('express');
const httpProxy = require('http-proxy');

const server = express();
const apiProxy = httpProxy.createProxyServer();

const apiEndpoint = 'https://nhentai.net'

server.all('*', function (req, res) {
  apiProxy.web(req, res, {target: apiEndpoint})
})

module.exports = server
