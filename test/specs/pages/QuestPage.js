import PageBase from './PageBase';

export default class QuestPage extends PageBase {
    constructor(browser, questId) {
        super(browser, `/question/${questId}`);

        this.browser = browser;
        this.questTitle = this.getElementByTestId('quest-title');
        this.questDescription = this.getElementByTestId('quest-description');
        this.questAuthorLink = this.getElementByTestId('quest-author-link');
        this.questDeleteLink = this.getElementByTestId('quest-delete-link');
        this.commentInput = this.getElementByTestId('comment-text-input');
        this.commentSubmitButton = this.getElementByTestId('comment-submit-button');
    }

    waitTitle(title) {
        this.questTitle.waitForText(title);
    }

    waitDescription(description) {
        this.questDescription.waitForText(description);
    }

    getComment(index) {
        return {
            username: this.getElementByTestId(`comment-${index}-username`),
            text: this.getElementByTestId(`comment-${index}-text`)
        };
    }
}
