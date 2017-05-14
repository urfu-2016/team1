import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import models from '../../models';
import MainPage from './pages/MainPage';
import BrowserTestBase from '../bases/BrowserTestBase';

const { describe, before, it } = bdd;

@describe('Login Test')
class LoginTest extends BrowserTestBase {
    @before
    setUpDatabase() {
        models.Quest.truncate();
    }

    @it('should login with facebook')
    testLogin() {
        this.loginUsingFacebook();
        this.mainPage = new MainPage(browser);
        this.mainPage.username.waitForText('Test User');

        this.mainPage.userDropdown.click();
        this.mainPage.profileLink.click();

        this.mainPage.userDropdown.click();
        this.mainPage.logoutLink.click();

        this.mainPage.fbLoginLink.waitForVisible();
    }
}

runTest(new LoginTest());
