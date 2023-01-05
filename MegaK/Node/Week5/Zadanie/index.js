const {createServer} = require('http');

const server = createServer();
let counter = 0;
server
  .on('request', (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {'Content-type':'text/html'});
      console.log('Ok');

      res.end(`<h1>${++counter}</h1>`);
    } else {
      res.writeHead(404, {'Content-type':'text/html'});
      console.log('Hi man');
      res.end('<h1>Not found</h1>');

    }});
server.listen(3000, 'localhost');