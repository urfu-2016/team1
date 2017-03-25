import { expect } from 'chai';

describe('Main page', function () {
    it('should have banner', function () {
        browser.url('/');
        const title = browser.getTitle();
        expect(title).to.equal('we are affective team');
    });
});
