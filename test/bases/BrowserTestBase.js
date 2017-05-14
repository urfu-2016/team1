import { bdd } from 'mocha-classes';

import DatabaseTestBase from './DatabaseTestBase';
import MainPage from '../specs/pages/MainPage';
import FacebookLoginPage from '../specs/pages/FacebookLoginPage';

const { before, beforeEach } = bdd;

export default class BrowserTestBase extends DatabaseTestBase {
    @before
    setUpUser() {
        this.mainPage = new MainPage(browser);
        this.mainPage.open();

        if (browser.isExisting(this.mainPage.fbLoginLink.selector)) {
            this.mainPage.goToFacebookLoginPage();
            const facebookLoginPage = new FacebookLoginPage(browser);
            this.mainPage = facebookLoginPage.login();
        }
        this.mainPage.userDropdown.click();
        this.mainPage.logoutLink.click();

        this.mainPage = new MainPage(browser);
        this.mainPage.open();
    }

    @beforeEach
    setUpBrowser() {
        this.mainPage = new MainPage(browser);
        this.mainPage.open();

        if (browser.isExisting(this.mainPage.userDropdown.selector)) {
            this.mainPage.userDropdown.click();
            this.mainPage.logoutLink.click();
        }

        this.mainPage = new MainPage(browser);
        this.mainPage.open();
    }

    loginUsingFacebook() {
        this.mainPage.fbLoginLink.click();
    }
}
