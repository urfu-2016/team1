import PageBase from './PageBase';
import QuestPage from './QuestPage';
import CreateQuestPage from './CreateQuestPage';

export default class MainPage extends PageBase {
    constructor(browser) {
        super(browser, '/');

        this.searchBar = browser.element('.questionlist-search__input');
        this.quests = browser.elements('.questitem__item');
    }

    searchQuests(name) {
        this.searchBar.setValue(name);
    }

    refreshUntilQuestsPresent(questsCount) {
        browser.waitUntil(() => {
            this.refresh();
            this.quests = browser.elements('.questitem__item');
            return this.quests.value.length >= questsCount;
        }, 20000, `Expected ${questsCount} Quests on MainPage, got ${this.quests.value.length}`, 500);
    }

    waitNoQuests() {
        browser.waitUntil(() => {
            this.quests = browser.elements('.questitem__item');
            return this.quests.value.length === 0;
        }, 20000, `Expected no Quests on MainPage, got ${this.quests.value.length}`, 500);
    }

    waitQuests(questsCount) {
        while (this.quests.value.length > questsCount) {
            this.quests = browser.elements('.questitem__item');
        }
    }

    getQuestTitle(questIndex) {
        return this.getElementByTestId(`quest-${questIndex}-title`);
    }

    getQuestDescription(questIndex) {
        return this.getElementByTestId(`quest-${questIndex}-description`);
    }

    getQuest(questIndex) {
        this.waitQuests(questIndex + 1);

        return {
            title: this.getQuestTitle(questIndex).getText(),
            description: this.getQuestDescription(questIndex).getText()
        };
    }

    getQuests(questsCount) {
        this.waitQuests(questsCount);

        let quests = [];
        for (let i = 0; i < questsCount; i++) {
            quests.push(this.getQuest(i));
        }

        return quests;
    }

    waitQuestTitle(questIndex, questTitle) {
        this.waitQuests(questIndex + 1);
        let title = this.getElementByTestId(`quest-${questIndex}-title`);
        title.waitForText(questTitle);
    }

    waitQuestDescription(questIndex, questDescription) {
        this.waitQuests(questIndex + 1);
        let description = this.getElementByTestId(`quest-${questIndex}-description`);
        description.waitForText(questDescription);
    }

    goToQuest(questIndex) {
        this.click(this.getElementByTestId(`quest-${questIndex}-link`));
        return new QuestPage(this.browser, questIndex);
    }

    goToCreqteQuest() {
        this.click(this.getElementByTestId('createquest-link'));
        return new CreateQuestPage(this.browser);
    }
}
