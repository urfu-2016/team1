import path from 'path';
import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import models from '../../models';
import BrowserTestBase from '../bases/BrowserTestBase';
import UserPage from './pages/UserPage';

const { describe, before, it } = bdd;

@describe('Create Quest Page')
class CreateQuestTest extends BrowserTestBase {
    @before
    setUpDatabase() {
        models.Quest.truncate();
    }

    @it('should create quest')
    testCreateQuest() {
        this.loginUsingFacebook();

        const createQuestPage = this.mainPage.goToCreqteQuest();
        createQuestPage.questTitleInput.setValue('Quest 1');
        createQuestPage.questDescriptionInput.setValue('Description');
        createQuestPage.questBannerInput.chooseFile(path.resolve(__dirname, 'files', 'plug.jpg'));

        const place = createQuestPage.getPlace(0);
        place.titleInput.setValue('Place 1');
        place.descriptionInput.setValue('Place description');
        place.bannerInput.chooseFile(path.resolve(__dirname, 'files', 'plug.jpg'));

        createQuestPage.createQuestButton.click();

        this.mainPage.open();
        this.mainPage.refreshUntilQuestsPresent(1);
        const quest = this.mainPage.getQuest(0);
        expect(quest.title).to.equal('QUEST 1');
        expect(quest.description).to.equal('Description');

        let questPage = this.mainPage.goToQuest(0);
        questPage.questAuthorLink.click();
        const userPage = new UserPage(browser);
        userPage.username.waitForText('Test User');

        this.mainPage.open();
        questPage = this.mainPage.goToQuest(0);
        questPage.questDeleteLink.click();

        this.mainPage.open();
        this.mainPage.waitNoQuests();
    }
}

runTest(new CreateQuestTest());
