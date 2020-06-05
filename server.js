const express = require('express');
const jsonServer = require('json-server');
const chokidar = require('chokidar');
const cors = require('cors');
const filename = process.argv[2] || './data.js';
const port = process.argv[3] || 3500;

const app = express();

let router = undefined;

const createServer = () => {
  delete require.cache[require.resolve(filename)];
  setTimeout(() => {
    router = jsonServer.router(filename.endsWith('.js')
    ? require(filename)() : filename);
  }, 100);
};

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use('/api', (req, res, next) => router(req, res, next));

chokidar.watch(filename).on('change', () => {
  console.log('Reloding Web Service data...');
  createServer();
  console.log('Reloding web service data complete');
});

app.listen(port, () => {
  console.log(`Web Service listening on port: ${port}`)
})