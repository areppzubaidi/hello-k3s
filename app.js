const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.end('Hello K3s from Jenkins CI/CD Pipeline!\n');
});
server.listen(port, () => console.log(`App running on port ${port}`));
