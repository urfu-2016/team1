import PageBase from './PageBase';

export default class UserPage extends PageBase {
    constructor(browser) {
        super(browser);

        this.username = this.getElementByTestId('username-text');
    }

    getUserQuest(index) {
        return this.getElementByTestId(`user-created-quest-${index}`);
    }
}
