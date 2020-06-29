const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5000, () => {
  console.log("Server is running!")
})