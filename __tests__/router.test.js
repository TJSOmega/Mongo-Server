'use strict';


const server = require('../src/server.js')
const supertest = require('supertest')
const mockRequest = supertest(server)



describe('WEB SERVER', () => {
  it('should return 404 on a bad route', () => {
    mockRequest.get('/not-a-route')
    .then(results => {
      expect(results.status).toBe(404)
    });

  })

  it('should be able to create a new record',async () => {
    await mockRequest.post().send()
    expect()
  }) 
});