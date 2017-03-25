import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Questlist from '../../views/modules/pages/Questlist/Questlist'

describe('Questlist', function () {
   it('should contain banner', function () {
        const wrapper = shallow(<Questlist/>);
        expect(wrapper.find('.banner')).to.have.length(1);
   });
});
