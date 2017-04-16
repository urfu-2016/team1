import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

let should = chai.should();
chai.use(chaiHttp);

process.env.CONNECTION_STRING = 'sqlite://db.sqlite/';

describe('Api.Users', function () {
    // it('should give token', done => {
    //     chai.request(app)
    //         .post('/api/users/register', {user: 'user', password: 'qwer'})
    //         .end((err, res) => {
    //             res.should.have.status(201);
    //             console.log(res);
    //             done();
    //         });
    // });
});
