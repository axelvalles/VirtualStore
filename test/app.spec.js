const request = require('../src/index')
const supertest = require('supertest')
const expect = require('chai').expect

describe('GET /user', (_)=> {
    it("testing route", (done) =>{
        supertest(request)
        .get('/user')
        .expect(200)
        .expect( (res) => {
            console.log(res.body)
            expect(res.body.status).to.eql(true)
            expect(res.body.message).to.eql('OK all correct')
        })
        .end( (err) => {
            if(err) return done(err)

            return done()
        })
    })
})

