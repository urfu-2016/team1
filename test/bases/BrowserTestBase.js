import { bdd } from 'mocha-classes';

import DatabaseTestBase from './DatabaseTestBase';
import MainPage from '../specs/pages/MainPage';
import FacebookLoginPage from '../specs/pages/FacebookLoginPage';

const { beforeEach } = bdd;

export default class BrowserTestBase extends DatabaseTestBase {
    @beforeEach
    setUpBrowser() {
        this.mainPage = new MainPage(browser);
        this.mainPage.open();
    }

    loginUsingFacebook() {
        this.mainPage.goToFacebookLoginPage();
        const facebookLoginPage = new FacebookLoginPage(browser);
        this.mainPage = facebookLoginPage.login();
    }
}
