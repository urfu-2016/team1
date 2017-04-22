import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from './ApiTestBase';
import models from '../../models';

chai.use(chaiHttp);
const should = chai.should();
const { before, describe, it } = bdd;

@describe('Api.Quests')
class ApiQuestsTest extends ApiTestBase {
    @before
    setUpDatabase(done) {
        let quests = [
            {title: 'FirstQuest', description: 'no description'},
            {title: 'SecondQuest', description: 'second description'},
            {title: 'ThirdQuest', description: 'really long long long long long long long long long long long long long long long long long long long long long long long long long description'},
            {title: 'FourthQuest', description: 'no description'},
            {title: 'FifthQuest', description: 'no description'},
            {title: 'SixthQuest', description: 'no description'},
        ];
        models.Quest.truncate().then(() => models.Quest.bulkCreate(quests).then(() => done()));
    }

    @it('should return all quests')
    returnAllQuests(done) {
        chai.request(this.server)
            .get('/api/quests')
            .end((err, res) => {
                res.should.have.status(200);
                let quests = res.body;
                quests.should.have.lengthOf(6);
                done();
            });
    }
}

runTest(new ApiQuestsTest());
