import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

const { before, describe, it } = bdd;

@describe('Api.Comments')
class ApiCommentsTest extends ApiTestBase {
    @before
    async setUpDatabase() {
        const questName = 'kek';
        const comments = [
            {text: 'cool quest'},
            {text: 'awesome quest'}
        ];

        await this.createQuests([{title: questName, description: 'kek1'}]);
        this.questId = await this.getQuestIdByName(questName);
        await this.createCommentsForQuest(comments, this.questId);
    }

    @it('should get all comments for quest')
    async getCommentsForQuest() {
        let quests = await this.get(`/api/comments/quest/${this.questId}`, 200);
        quests.should.have.lengthOf(2);
        quests[0].text.should.equal('cool quest');
        quests[1].text.should.equal('awesome quest');
    }

    @it('should post comment')
    async postComment() {
        await this.post(`/api/comments/quest/${this.questId}`, {text: 'added comment'}, 201);
        let quests = await this.get(`/api/comments/quest/${this.questId}`, 200);
        quests.should.have.lengthOf(3);
        quests[2].text.should.equal('added comment');
    }
}

runTest(new ApiCommentsTest());
