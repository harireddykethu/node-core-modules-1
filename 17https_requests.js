const https = require('https');
const http = require('http');

// https.get('https://jsonplaceholder.typicode.com/todos/', response => {
//   let data = '';
//   response.on('data', chunk => {
//     data += chunk;
//   });

//   response.on('end', () => {
//     console.log(JSON.parse(data));
//   });
// });

var post_options = {
  host: 'http://localhost:3000',
  path: '/api/items',
  method: 'GET'
};

//Set up the request
var post_req = http.request(post_options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    console.log('Response: ' + chunk);
  });
  res.on('error', error => {
    console.log('Error', error);
  });
});

post_req.write('{ today: "Hello" }');
post_req.end();

post_req.on('error', error => {
  console.log('Error', error);
});
