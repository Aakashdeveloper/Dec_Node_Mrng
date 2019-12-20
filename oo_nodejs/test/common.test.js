let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing my API',() => {
    it('should be return status 200 for default',(done) =>{
        chai.request('http://localhost:8778')
        .get('/')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should be return status 200 for getProduct',(done) =>{
        chai.request('http://localhost:8778')
        .get('/getProduct')
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should be return status 404 for getProducts',(done) =>{
        chai.request('http://localhost:8778')
        .get('/getProducts')
        .then((res) => {
            expect(res).to.have.status(404);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
    it('should insert data',(done) =>{
        chai.request('http://localhost:8778')
        .post('/postProduct')
        .send({name:"abc"})
        .then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw err
        })
    })
})