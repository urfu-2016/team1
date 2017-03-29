require("babel-core/register")({
    presets: ['es2015']
});

exports.config = {
    specs: ['./test/specs/**/*.spec.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost:3000/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd'
    },
};
