const dns = require('dns');

dns.lookup('google.co.in', (err, addresses, family) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('Result', addresses);
  }
});

//  More information here: https://en.wikipedia.org/wiki/List_of_DNS_record_types

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
