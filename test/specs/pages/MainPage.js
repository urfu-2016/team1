import PageBase from './PageBase';

export default class MainPage extends PageBase {
    constructor(browser) {
        super(browser, '/');

        this.signInLink = browser.element('.registration__item_signin');
        this.signUpLink = browser.element('.registration__item_signup');
    }

    goToSignIn() {
        this.signInLink.waitForVisible();
        this.browser.click(this.signInLink.selector);
    }

    goToSignUp() {
        this.signUpLink.waitForVisible();
        this.browser.click(this.signUpLink.selector);
    }
}
