import path from 'path';
import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import models from '../../models';
import MainPage from './pages/MainPage';
import DatabaseTestBase from '../bases/DatabaseTestBase';

const { describe, before, it } = bdd;

@describe('Create Quest Page')
class CreateQuestTest extends DatabaseTestBase {
    @before
    setUpDatabase() {
        models.Quest.truncate();
    }

    @it('should create quest')
    testCreateQuest() {
        const mainPage = new MainPage(browser);
        mainPage.open();

        const createQuestPage = mainPage.goToCreqteQuest();
        createQuestPage.questTitleInput.setValue('Quest 1');
        createQuestPage.questDescriptionInput.setValue('Description');
        createQuestPage.questBannerInput.chooseFile(path.resolve(__dirname, 'files', 'plug.jpg'));

        const place = createQuestPage.getPlace(0);
        place.titleInput.setValue('Place 1');
        place.descriptionInput.setValue('Place description');
        place.bannerInput.chooseFile(path.resolve(__dirname, 'files', 'plug.jpg'));

        createQuestPage.createQuestButton.click();

        mainPage.open();
        mainPage.refreshUntilQuestsPresent(1);
        const quest = mainPage.getQuest(0);
        expect(quest.title).to.equal('QUEST 1');
        expect(quest.description).to.equal('Description');
    }
}

runTest(new CreateQuestTest());
