const {createServer} = require('http');

/* createServer((request, response) => {

  response.writeHead(200, {'content-type':'text/html'});
  console.log('Hi man');
  response.end('<h1>Hello from Marek</h1>');

}).listen(3000, '127.0.0.1'); */

const server = createServer();

server
  .on('request',(req, res) => {

    res.writeHead(200, {'Content-type':'text/html'});
    console.log('Hi man');
    res.end('<h1>Hello from Marek</h1>');

  });
server.listen(3000, 'localhost');