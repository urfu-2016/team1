import http from 'http';
import { bdd } from 'mocha-classes';

import app from '../../app';
import models from '../../models';

const { before, after } = bdd;

export default class ApiTestBase {
    @before
    setUp(done) {
        this.server = http.createServer(app);
        models.sequelize.sync().then(() => done());
    }

    @after
    tearDown() {
        this.server.close();
    }
}
