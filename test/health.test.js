const test = require('node:test');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../server');

test('GET /health returns UP', async () => {
  const server = app.listen(0);
  const { port } = server.address();
  const body = await new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}/health`, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
  server.close();
  assert.strictEqual(JSON.parse(body).status, 'UP');
});
