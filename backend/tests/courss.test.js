const app = require('../server') // Link to your server file
const axios=require('axios')
const supertest = require('supertest')
const request = supertest(app)

describe('Post Endpoints', () => {
 

        it('addes a new course', async done => {
            const response = await  request.post('/courss/add').send({
               
                titre :"cours1",
                promo:"1cpi",
                description:"teest!"
            })
            expect(response.status).toBe(200)
            expect(response.body.titre).toBe('cours1')
            expect(response.body.promo).toBe('1cpi')
            expect(response.body.description).toBe('teest!')
            done()
        
})
})
