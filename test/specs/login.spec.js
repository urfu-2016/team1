import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import models from '../../models';
import MainPage from './pages/MainPage';
import FacebookLoginPage from './pages/FacebookLoginPage';
import DatabaseTestBase from '../bases/DatabaseTestBase';

const { describe, before, it } = bdd;

@describe('Login Test')
class LoginTest extends DatabaseTestBase {
    @before
    setUpDatabase() {
        models.Quest.truncate();
    }

    @it('should login with facebook')
    testLogin() {
        let mainPage = new MainPage(browser);
        mainPage.open();
        mainPage.goToFacebookLoginPage();
        const facebookLoginPage = new FacebookLoginPage(browser);
        mainPage = facebookLoginPage.login();
        mainPage.username.waitForText('Test User');

        mainPage.userDropdown.click();
        mainPage.profileLink.click();

        mainPage.userDropdown.click();
        mainPage.logoutLink.click();

        mainPage.fbLoginLink.waitForVisible();
    }
}

runTest(new LoginTest());
