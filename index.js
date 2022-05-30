const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

app.use(express.static(path.join(__dirname, 'react-web/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/react-web/build/index.html'));
});

http.listen(22555, function () {
  console.log('listening on 22555')
});

