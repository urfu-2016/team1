import webdriverio from 'webdriverio';

describe('Main page', function () {
    it('should have banner', function () {
        const options = {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        };

        webdriverio
            .remote(options)
            .init()
            .url('http://localhost:3000')
            .getTitle().then(function () {

            })
            .end();
    });
});
