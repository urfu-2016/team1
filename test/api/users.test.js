import { bdd, runTest } from 'mocha-classes';

import ApiTestBase from '../bases/ApiTestBase';

const { describe, it } = bdd;

@describe('Api.Users')
class ApiUsersTest extends ApiTestBase {
    @it('should give token')
    async shouldGiveToken() {
        await this.post('/api/users/register', {user: 'user', password: 'qwer'}, 201);
    }
}

runTest(new ApiUsersTest());
