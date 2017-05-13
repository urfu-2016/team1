export default class PageBase {
    constructor(browser, route) {
        this.browser = browser;
        this.route = route;

        this.signInLink = this.getElementByTestId('header-signin-link');
        this.signUpLink = this.getElementByTestId('header-signup-link');
        this.username = this.getElementByTestId('logged-in-user-username');
        this.profileLink = this.getElementByTestId('user-profile-link');
        this.logoutLink = this.getElementByTestId('logout-link');
        this.userDropdown = this.getElementByTestId('user-dropdown');

        this.footerText = browser.element('.footer__copyright');
    }

    open() {
        this.browser.url(this.route);
    }

    getElementByTestId(testId) {
        return this.browser.element(`[data-tid="${testId}"]`);
    }

    refresh() {
        this.browser.refresh();
    }

    click(element) {
        this.browser.click(element.selector);
    }

    getTitle() {
        return browser.getTitle();
    }

    getFooterText() {
        return this.footerText;
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
