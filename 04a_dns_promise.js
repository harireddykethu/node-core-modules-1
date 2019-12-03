const util = require('util');

const dns = require('dns');

const resolveNsPromise = util.promisify(dns.resolveNs);

resolveNsPromise('outlook.com')
  .then(result => console.log('Result', result))
  .catch(error => console.log('Error', error));
