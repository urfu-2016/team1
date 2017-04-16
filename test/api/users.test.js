import http from 'http';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';
import database from '../../model/database';

let should = chai.should();
chai.use(chaiHttp);

describe('Api.Users', function () {
    let server = null;

    function waitUntil(condition, done) {
        (function wait() {
            if (condition()) {
                done();
            } else {
                setTimeout(wait, 500);
            }
        })();
    }

    before(function (done) {
        server = http.createServer(app);
        waitUntil(() => database.Quest, done);
    });

    after(function () {
        server.close();
    });

    it('should give token', done => {
        chai.request(server)
            .post('/api/users/register')
            .send({user: 'user', password: 'qwer'})
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});
