require("babel-core/register")({
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime', 'transform-decorators-legacy']
});

global.CONNECTION_STRING = 'sqlite://db.sqlite/';

exports.config = {
    specs: ['./test/specs/**/*.spec.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    host: 'localhost',
    port: 4444,
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost:3000',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    },
};
