import chai from 'chai';
import chaiHttp from 'chai-http';
import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from './ApiTestBase';
import models from '../../models';

chai.use(chaiHttp);
const should = chai.should();
const { before, describe, it } = bdd;

@describe('Api.Quests')
class ApiCommentsTest extends ApiTestBase {
    @before
    setUpDatabase(done) { }

    @it.skip('should get all comments for quest')
    getCommentsForQuest() { }
}

runTest(new ApiCommentsTest());
