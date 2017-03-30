export default class PageBase {
    constructor(browser, route) {
        this.browser = browser;
        this.route = route;
    }

    open() {
        this.browser.url('/');
    }

    getTitle() {
        return browser.getTitle();
    }
}
