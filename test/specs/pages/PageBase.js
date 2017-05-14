export default class PageBase {
    constructor(browser, route) {
        this.browser = browser;
        this.route = route;

        this.vkLoginLink = this.getElementByTestId('vk-login-link');
        this.fbLoginLink = this.getElementByTestId('fb-login-link');
        this.username = this.getElementByTestId('logged-in-user-username');
        this.profileLink = this.getElementByTestId('user-profile-link');
        this.logoutLink = this.getElementByTestId('logout-link');
        this.userDropdown = this.getElementByTestId('user-dropdown');
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
        return this.browser.getTitle();
    }

    goToFacebookLoginPage() {
        this.fbLoginLink.waitForVisible();
        this.browser.click(this.fbLoginLink.selector);
    }
}
