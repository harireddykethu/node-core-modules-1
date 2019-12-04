const http = require('http');
const data = [
  {
    id: 1,
    title: 'Sofa',
    description: 'A comfortable sofa to recline and relax for employees',
    voteCount: 0
  },
  {
    id: 2,
    title: 'Foosball',
    description: 'Lets play the game to unwind ourselves and have fun',
    voteCount: 0
  },
  {
    id: 3,
    title: 'Gym',
    description: 'Fitness cannot be ignored folks! Lets be healthy first!',
    voteCount: 0
  }
];

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Get all
    if (req.method === 'GET' && req.url === '/api/items') {
      res.writeHead(200);
      res.write(JSON.stringify(data));
      res.end();
      return;
    }

    // Create
    if (req.method === 'POST' && req.url === '/api/items') {
      let requestBody = '';
      let item;
      req.on('data', fragment => {
        requestBody += fragment.toString();
      });
      req.on('end', () => {
        item = JSON.parse(requestBody);
        data.push(item);

        res.writeHead(200);
        const message = { items: data };
        res.end(JSON.stringify(message));
      });

      return;
    }

    // Get by Id
    if (req.method === 'GET' && /\/api\/items\/\d+$/.test(req.url)) {
      const id = +req.url.split('/')[3];
      const item = data.find(p => p.id == id);

      if (item) {
        res.writeHead(200);
        res.end(JSON.stringify(item));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not found' }));
      }

      return;
    }

    // Increment vote by Id
    if (req.method === 'PUT' && /\/api\/items\/vote\/\d+$/.test(req.url)) {
      const id = +req.url.split('/')[4];
      const item = data.find(p => p.id == id);

      if (item) {
        item.voteCount++;
        res.writeHead(200);
        res.end(JSON.stringify(item));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Not found' }));
      }

      return;
    } else {
      //    404
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Not found' }));
    }
  })
  .listen(3000);
