const http = require('http');

const PORT = 3001; // Замените на нужный порт
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3001}`);
});
