// var http = require('http');
// var date = require('./myfirstmodule');

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('The date and time is: ' + date.myDateTime());
//     res.end('Hello!');
//   })
//   .listen(8080);

const express = require('express');
const app = express();
const port = 3000;

app.get('/abc', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
