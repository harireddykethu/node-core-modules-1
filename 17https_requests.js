const https = require('https');
const http = require('http');

https.get('https://jsonplaceholder.typicode.com/todos/', response => {
  let data = '';
  response.on('data', chunk => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(JSON.parse(data));
  });
});

// var post_options = {
//   host: 'localhost:3000/api/items',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

// //Set up the request
// var post_req = http.request(post_options, function(res) {
//   res.setEncoding('utf8');
//   res.on('data', function(chunk) {
//     console.log('Response: ' + chunk);
//   });
//   res.on('error', error => {
//     console.log('Error', error);
//   });
// });

// post_req.write('{ today: new Date() }');
// post_req.end();
