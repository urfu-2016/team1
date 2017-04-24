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
        this.quests = [
            {title: 'FirstQuest', description: 'no description'},
            {title: 'SecondQuest', description: 'second description'},
            {title: 'ThirdQuest', description: 'really long long long long long long long long long long long long long long long long long long long long long long long long long description'},
            {title: 'FourthQuest', description: 'no description'},
            {title: 'FifthQuest', description: 'no description'},
            {title: 'sixthQuest', description: 'no description'}
        ];
        models.Quest.truncate().then(() => models.Quest.bulkCreate(this.quests).then(() => done()));
    }

    @it('should return all quests')
    returnAllQuests(done) {
        chai.request(this.server)
            .get('/api/quests')
            .end((err, res) => {
                res.should.have.status(200);
                let quests = res.body;
                quests.should.have.lengthOf(6);
                quests.map(x => ({title: x.title, description: x.description})).should.deep.equal(this.quests);
                done();
            });
    }

    @it('should search by name')
    searchByName(done) {
        chai.request(this.server)
            .get('/api/quests/name/s')
            .end((err, res) => {
                res.should.have.status(200);
                let quests = res.body;
                console.log(quests);
                quests.should.have.lengthOf(2);
                quests.map(x => ({title: x.title, description: x.description})).should.deep.equal([
                    {title: 'SecondQuest', description: 'second description'},
                    {title: 'sixthQuest', description: 'no description'}
                ]);
                done();
            });
    }

    @it('should search by id')
    searchById(done) {
        chai.request(this.server)
            .get('/api/quests/name/SecondQuest')
            .end((err, res) => {
                res.should.have.status(200);
                let quests = res.body;
                quests.should.have.lengthOf(1);
                let quest = quests[0];
                chai.request(this.server)
                    .get(`/api/quests/id/${quest.id}`)
                    .end((err, res) => {
                        let questById = res.body;
                        questById.should.be.deep.equal(quest);
                        done();
                    });
            });
    }
}

runTest(new ApiQuestsTest());
