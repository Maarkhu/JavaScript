const {createServer} = require('http');
const {writeFile, readFile} = require('fs').promises;

const server = createServer();

server
  .on('request', async (req, res) => {
    if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, {'Content-type':'text/html'});
      console.log('Ok');
      counter = await readFile('./counter.txt', 'utf8');
      console.log(counter);
      await writeFile('./counter.txt', `${Number(++counter)}`);
      res.end(`<h1>${counter}</h1>`);
    } else {
      res.writeHead(404, {'Content-type':'text/html'});
      console.log('Hi man');
      res.end('<h1>Not found</h1>');
    }});
server.listen(3000, 'localhost');