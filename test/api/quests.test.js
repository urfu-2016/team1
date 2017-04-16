import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../app';

let should = chai.should();
chai.use(chaiHttp);

process.env.CONNECTION_STRING = 'sqlite://db.sqlite/';

describe('Api.Quests', function () {
    // it('should return all quests', done => {
    //     chai.request(app)
    //         .get('/api/quests')
    //         .end((err, res) => {
    //             res.should.have.status(200);
    //             console.log(res);
    //             done();
    //         });
    // });
});
