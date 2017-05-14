import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import BrowserTestBase from '../bases/BrowserTestBase';

const { describe, beforeEach, it } = bdd;

@describe('Quest Page')
class QuestPageTest extends BrowserTestBase {
    @beforeEach
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
        const questPage = this.mainPage.goToQuest(0);
        questPage.getComment(0).text.waitForText('cool quest');
        questPage.getComment(1).text.waitForText('awesome quests');
    }

    @it('should hide comments if not logged in')
    testNotLoggedInComments() {
        const questPage = this.mainPage.goToQuest(0);
        questPage.waitAbsent(questPage.commentInput);
        questPage.waitAbsent(questPage.commentSubmitButton);
    }

    @it('should not post empty comment')
    emptyComment() {
        this.loginUsingFacebook();

        const questPage = this.mainPage.goToQuest(0);
        questPage.commentInput.setValue('');
        questPage.commentSubmitButton.click();

        questPage.waitAbsent(questPage.getComment(2).text);
    }

    @it('should post comment')
    postComment() {
        this.loginUsingFacebook();

        const questPage = this.mainPage.goToQuest(0);
        questPage.commentInput.setValue('added comment');
        questPage.commentSubmitButton.click();
        let comment = questPage.getComment(2);
        comment.text.waitForText('added comment');
        comment.username.waitForText('Test User');
    }
}

runTest(new QuestPageTest());
