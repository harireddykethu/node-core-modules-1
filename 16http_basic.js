const http = require('http');

console.log('Starting the server');

process.nextTick(() => {
  console.log('Tick!');
});

http
  .createServer((req, res) => {
    console.log('Request arrived');
    res.writeHead(200);
    res.write('<h2>Hello from Node</h2>');
    res.write('<h2>Another header</h2>');
    res.end();
  })
  .listen(3000);

let interval = setInterval(() => {
  console.log('Timer');
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);

setImmediate(() => {
  console.log('Immediate: Check Queue');
});
