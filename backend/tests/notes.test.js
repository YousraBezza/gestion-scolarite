const app = require('../server') // Link to your server file
const axios=require('axios')
const supertest = require('supertest')
const request = supertest(app)

describe('Get Endpoints', () => {
 

        it('get notes', async done => {
            const response = await  request.get('/courss')
            expect(response.status).toBe(200)
            expect
            expect(response.body.length).toBe(28)
            done()
        
})
})
