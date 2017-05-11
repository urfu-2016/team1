import http from 'http';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd } from 'mocha-classes';

import app from '../../app';
import DatabaseTestBase from './DatabaseTestBase';

chai.use(chaiHttp);
const should = chai.should();
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

    async get(url, expectedStatus) {
        let result = await chai.request(this.server).get(url);
        result.should.have.status(expectedStatus);
        return result.body;
    }

    async post(url, data, expectedStatus) {
        let result = await chai.request(this.server).post(url).send(data);
        result.should.have.status(expectedStatus);
        return result.body;
    }
}
