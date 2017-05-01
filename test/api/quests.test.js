import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

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
        this.createQuests(this.quests)
            .then(() => done());
    }

    getQuest(questItem) {
        return {title: questItem.title, description: questItem.description}
    }

    @it('should return all quests')
    returnAllQuests(done) {
        chai.request(this.server)
            .get('/api/quests')
            .end((err, res) => {
                res.should.have.status(200);

                let quests = res.body;
                quests.should.have.lengthOf(6);
                quests.map(this.getQuest).should.deep.equal(this.quests);

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
                quests.should.have.lengthOf(2);
                quests.map(this.getQuest).should.deep.equal([
                    {title: 'SecondQuest', description: 'second description'},
                    {title: 'sixthQuest', description: 'no description'}
                ]);

                done();
            });
    }

    @it('should search by id')
    searchById(done) {
        this.getQuestIdByName('SecondQuest')
            .then(id => {
                chai.request(this.server)
                    .get(`/api/quests/id/${id}`)
                    .end((err, res) => {
                        res.should.have.status(200);

                        let questById = res.body;
                        this.getQuest(questById).should.be.deep.equal({
                            title: 'SecondQuest',
                            description: 'second description'
                        });

                        done();
                    });
            })
    }
}

runTest(new ApiQuestsTest());
