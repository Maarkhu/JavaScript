const {createServer} = require('http');
const { cal } = require('./calc')

const server = createServer();

server
  .on('request', (req, res)  => {
    const [, operation, num1, num2] = req.url.split('/');

    const result = cal(operation, Number(num1), Number(num2));


      res.end(result + '');
}

  )
server.listen(3000, 'localhost');