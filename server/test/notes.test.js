const app = require('../index') // Link to your server file

const supertest = require('supertest')
const request = supertest(app)

describe('Get Endpoints', () => {
        it('get notes', async done => {
            const response = await  request.get('/api/classe/301')
            expect(response.status).toBe(200)
            done()
        
})
})
