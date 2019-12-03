const dns = require('dns');

dns.lookup('google.co.in', (err, addresses, family) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Result', addresses);
  }
});

dns.resolve('google.co.in', 'CNAME', (err, result) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Result', result);
  }
});

dns.resolveNs('google.co.in', (err, addresses) => {
  if (err) {
    console.log(err);
  } else {
    console.log(addresses);
  }
});
