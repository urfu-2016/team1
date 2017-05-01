import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

chai.use(chaiHttp);
const should = chai.should();
const { before, describe, it } = bdd;

@describe('Api.Comments')
class ApiCommentsTest extends ApiTestBase {
    @before
    setUpDatabase(done) {
        this.questId = null;
        const questName = 'kek';
        const comments = [
            {text: 'cool quest'},
            {text: 'awesome quest'}
        ];

        this.createQuests([{title: questName, description: 'kek1'}])
            .then(() => this.getQuestIdByName(questName))
            .then(id => this.questId = id)
            .then(() => this.createCommentsForQuest(comments, this.questId))
            .then(() => done());
    }

    @it('should get all comments for quest')
    getCommentsForQuest(done) {
        chai.request(this.server)
            .get(`/api/comments/quest/${this.questId}`)
            .end((err, res) => {
                res.should.have.status(200);

                let quests = res.body;
                quests.should.have.lengthOf(2);
                quests[0].text.should.equal('cool quest');
                quests[1].text.should.equal('awesome quest');

                done();
            })
    }

    @it('should post comment')
    postComment(done) {
        chai.request(this.server)
            .post(`/api/comments/quest/${this.questId}`)
            .send({text: 'added comment'})
            .end((err, res) => {
                res.should.have.status(201);

                chai.request(this.server)
                    .get(`/api/comments/quest/${this.questId}`)
                    .end((err, res) => {
                        res.should.have.status(200);

                        let quests = res.body;
                        console.log(quests);
                        quests.should.have.lengthOf(3);
                        quests[2].text.should.equal('added comment');

                        done();
                    });
            });
    }
}

runTest(new ApiCommentsTest());
