import { expect } from 'chai';
import { bdd, runTest } from 'mocha-classes';

import models from '../../models';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import DatabaseTestBase from '../bases/DatabaseTestBase';

const { describe, before, it } = bdd;

@describe('Create Quest Page')
class LoginTest extends DatabaseTestBase {
    @before
    setUpDatabase() {
        models.Quest.truncate();
    }

    @it('should login with facebook')
    testLogin() {
        let mainPage = new MainPage(browser);
        mainPage.open();
        mainPage.goToSignIn();

        const signInPage = new SignInPage(browser);
        const facebookLoginPage = signInPage.goToFacebookLoginPage();
        mainPage = facebookLoginPage.login();
        mainPage.username.waitForText('Test User');

        mainPage.userDropdown.click();
        mainPage.profileLink.click();

        mainPage.userDropdown.click();
        mainPage.logoutLink.click();

        mainPage.signInLink.waitForVisible();
    }
}

runTest(new LoginTest());
