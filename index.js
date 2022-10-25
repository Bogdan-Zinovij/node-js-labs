const http = require('http');

const PORT = 8000;

const data = 'Node.js lab #1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data);
});

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
