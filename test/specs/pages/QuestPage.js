import PageBase from './PageBase';

export default class QuestPage extends PageBase {
    constructor(browser, questId) {
        super(browser, `/question/${questId}`);

        this.browser = browser;
        this.questTitle = this.getElementByTestId('quest-title');
        this.questDescription = this.getElementByTestId('quest-description');
        this.questAuthor = this.getElementByTestId('quest-author');
    }

    waitTitle(title) {
        this.questTitle.waitForText(title);
    }

    waitDescription(description) {
        this.questDescription.waitForText(description);
    }

    waitAuthor(author) {
        this.questAuthor.waitForText(author);
    }
}
