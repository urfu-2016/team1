import http from 'http';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';
import models from '../../models';

let should = chai.should();
chai.use(chaiHttp);

describe('Api.Quests', function () {
    let server = null;

    before(function (done) {
        server = http.createServer(app);
        models.sequelize.sync().then(() => done());
    });

    after(function () {
        server.close();
    });

    it('should return all quests', done => {
        chai.request(server)
            .get('/api/quests')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
