import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Questlist from '../../views/component/pages/questlist/banner/Banner';

describe('Banner', function () {
   it('should contain class banner', function () {
        const wrapper = shallow(<Questlist/>);
        expect(wrapper.find('.banner')).to.have.length(1);
   });
});
