import http from 'http';
import { bdd } from 'mocha-classes';

import app from '../../app';
import DatabaseTestBase from './DatabaseTestBase';

const { before, after } = bdd;

export default class ApiTestBase extends DatabaseTestBase {
    @before
    setUpServer() {
        this.server = http.createServer(app);
    }

    @after
    tearDown() {
        this.server.close();
    }
}
