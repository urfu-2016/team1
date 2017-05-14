import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import BrowserTestBase from '../bases/BrowserTestBase';

const { describe, before, it } = bdd;

@describe('Main Page')
class MainPageTest extends BrowserTestBase {
    @before
    setUpDatabase() {
        this.quests = [
            {title: 'FirstQuest', description: 'no description'},
            {title: 'SecondQuest', description: 'second description'},
            {title: 'ThirdQuest', description: 'really long long long long long long long long long long long long long long long long long long long long long long long long long description'},
            {title: 'FourthQuest', description: 'no description'},
            {title: 'FifthQuest', description: 'no description'},
            {title: 'SixthQuest', description: 'no description'},
        ];
        this.createQuests(this.quests);
    }

    @it('should have banner')
    testBanner() {
        const title = this.mainPage.getTitle();
        expect(title).to.equal('we are effective team');
    }

    @it.skip('should correctly search quests')
    testSearch() {
        this.mainPage.refresh();

        this.mainPage.waitQuests(6);
        this.mainPage.waitQuestTitle(0, 'FirstQuest');
        this.mainPage.waitQuestDescription(0, 'no description');

        this.mainPage.searchQuests('f');
        this.mainPage.waitQuests(3);
        this.mainPage.getQuests(3).every(x => x.title.startsWith('f'));

        this.mainPage.searchQuests('s');
        this.mainPage.waitQuests(2);
        this.mainPage.getQuests(2).every(x => x.title.startsWith('s'));
    }

    @it('should go to quest page')
    testQuestPage() {
        this.mainPage.waitQuests(1);
        const questPage = this.mainPage.goToQuest(0);
        questPage.refresh();
        questPage.waitTitle('Квест FirstQuest');
        questPage.waitDescription('Описание: no description');
        questPage.waitAuthor('Автор: имя автора');
    }
}

runTest(new MainPageTest());
