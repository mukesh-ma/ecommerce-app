// app.test.js
const request = require('supertest');
const app = require('../server');  // Ensure this is the correct path to your server.js

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);  // Check for 200 OK status
    expect(res.text).toBe('Welcome to the eCommerce App');  // Optional, check the response body
  });
});
