import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

const { before, describe, it } = bdd;

@describe('Api.Quests')
class ApiQuestsTest extends ApiTestBase {
    @before
    async setUpDatabase() {
        this.quests = [
            {title: 'FirstQuest', description: 'no description'},
            {title: 'SecondQuest', description: 'second description'},
            {
                title: 'ThirdQuest',
                description: 'really long long long long long long long long long long long long long long long long long long long long long long long long long description'
            },
            {title: 'FourthQuest', description: 'no description'},
            {title: 'FifthQuest', description: 'no description'},
            {title: 'sixthQuest', description: 'no description'}
        ];
        await this.createQuests(this.quests);
    }

    getQuest(questItem) {
        return {title: questItem.title, description: questItem.description}
    }

    @it('should return all quests')
    async returnAllQuests() {
        let quests = await this.get('/api/quests', 200);
        quests.should.have.lengthOf(6);
        quests.map(this.getQuest).should.deep.equal(this.quests);
    }

    @it('should search by name')
    async searchByName() {
        let quests = await this.get('/api/quests/name/s', 200);
        quests.should.have.lengthOf(2);
        quests.map(this.getQuest).should.deep.equal([
            {title: 'SecondQuest', description: 'second description'},
            {title: 'sixthQuest', description: 'no description'}
        ]);
    }

    @it('should search by id')
    async searchById() {
        let id = await this.getQuestIdByName('SecondQuest');
        let questById = await this.get(`/api/quests/id/${id}`, 200);
        this.getQuest(questById).should.be.deep.equal({
            title: 'SecondQuest',
            description: 'second description'
        });
    }
}

runTest(new ApiQuestsTest());
