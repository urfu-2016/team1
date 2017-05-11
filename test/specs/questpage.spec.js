import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import MainPage from './pages/MainPage';
import DatabaseTestBase from '../bases/DatabaseTestBase';

const { describe, before, it } = bdd;

@describe('Quest Page')
class QuestPageTest extends DatabaseTestBase {
    @before
    setUpDatabase() {
        this.quest = {title: 'FirstQuest', description: 'no description'};
        this.comments = [
            {text: 'cool quest'},
            {text: 'awesome quest'}
        ];
        this.createQuests([this.quest])
            .then(() => this.getQuestIdByName(this.quest.title))
            .then(id => this.createCommentsForQuest(this.comments, id));
    }

    @it('should have comments')
    testComments() {
        const mainPage = new MainPage(browser);
        mainPage.open();

        const questPage = mainPage.goToQuest(0);
        questPage.getComment(0).waitForText('cool quest');
        questPage.getComment(1).waitForText('awesome quests');
    }

    @it('should not post empty comment')
    emptyComment() {
        const mainPage = new MainPage(browser);
        mainPage.open();

        const questPage = mainPage.goToQuest(0);
        questPage.commentInput.setValue('');
        questPage.commentSubmitButton.click();

        expect(browser.isExisting(questPage.getComment(2).selector)).to.be.false;
    }

    @it('should post comment')
    postComment() {
        const mainPage = new MainPage(browser);
        mainPage.open();

        const questPage = mainPage.goToQuest(0);
        questPage.commentInput.setValue('added comment');
        questPage.commentSubmitButton.click();
        questPage.getComment(2).waitForText('added comment');
    }
}

runTest(new QuestPageTest());
