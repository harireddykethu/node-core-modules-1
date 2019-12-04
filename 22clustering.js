const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  console.log('loading for the master');
  cluster.fork();
  cluster.fork();
} else {
  console.log('loading for the child');
  http
    .createServer(function(req, res) {
      setTimeout(() => {
        res.writeHead(200);
        res.end(`This is from ${process.pid}`);
      }, 2000);
    })
    .listen(8000);
}
