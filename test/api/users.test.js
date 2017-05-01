import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

chai.use(chaiHttp);
const should = chai.should();
const { describe, it } = bdd;

@describe('Api.Users')
class ApiUsersTest extends ApiTestBase {
    @it('should give token')
    shouldGiveToken(done) {
        chai.request(this.server)
            .post('/api/users/register')
            .send({user: 'user', password: 'qwer'})
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    }
}

runTest(new ApiUsersTest());
