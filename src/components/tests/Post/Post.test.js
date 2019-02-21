import React from 'react';
import { shallow } from '../../../enzyme';

import Post from './Post';

describe('hashtag tests', () => {

  it('renders hashtag items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<Post hashtags={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.tags')).toBeDefined();
  });
});