import { expect } from 'chai';

import { getQuestsByName } from '../../api/utils';

describe('Autocomplete', function () {
    it('should work', function () {
        const withTitle = x => ({title: x});
        expect(getQuestsByName([
            'abc',
            'def',
            'qwer',
            'abd'
        ].map(withTitle), 'ab')).to.deep.equal(['abc', 'abd'].map(withTitle));
    })
});
