import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from './ApiTestBase';

chai.use(chaiHttp);
const should = chai.should();
const { describe, it } = bdd;

@describe('Api.Quests')
class ApiQuestsTest extends ApiTestBase {
    @it('should return all quests')
    returnAllQuests(done) {
        chai.request(this.server)
            .get('/api/quests')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    }
}

runTest(new ApiQuestsTest());
