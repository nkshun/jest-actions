// super agentでserver立てて確認する
const request = require('supertest')
const app = require('../server')

describe('Get Endpoints (not mocking)', () => {
    it('/', async () => {
        const res = await request(app).get('/').query({'id': 'shun'})
        expect(res.status).toEqual(200)
        expect(res.text).toEqual('Hi! shun')
    })
})