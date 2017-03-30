import { expect } from 'chai';

import MainPage from "./pages/MainPage";

describe('Main page', function () {
    it('should have banner', function () {
        const mainPage = new MainPage(browser);
        mainPage.open();
        const title = mainPage.getTitle();

        expect(title).to.equal('we are affective team');
    });

    it('should move to sign in', function () {
        const mainPage = new MainPage(browser);
        mainPage.open();
        mainPage.goToSignIn();
    })
});
