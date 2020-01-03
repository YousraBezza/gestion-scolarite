const app = require('../index') // Link to your server file

const supertest = require('supertest')
const request = supertest(app)

describe('PUT Endpoints', () => {
        it('changer les notes de l"etudiant 170163', async done => {
            const response = await  request.put('/api/notes/1').send([
                {"id_etud":170163,
                "Note1":18,
                "note2":19,
                "note3":7}
                
        ])
        
            expect(response.status).toBe(200)
            expect(response.text).toBe('notes updated ....')
            done()
        
})
})