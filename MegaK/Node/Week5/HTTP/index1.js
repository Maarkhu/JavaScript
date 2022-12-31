const {createServer} = require('http');
const {readFile} = require('fs').promises;

const server = createServer();

server
  .on('request', async (req, res) => {
if (req.url === '/' && req.method === 'GET') {
  res.writeHead(200, {'Content-type':'text/html'});
  console.log('Hi man');

  const html = await readFile('./index.html', 'utf8');

  // res.statusCode = 200;
  // res.write('<h2>Pierdu, pierdu</h2>');
  res.end(html);
} else {
    res.writeHead(404, {'Content-type':'text/html'});
    console.log('Hi man');
    res.end('<h1>Not found</h1>');

  }});
server.listen(3000, 'localhost');