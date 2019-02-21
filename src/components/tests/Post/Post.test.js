import React from 'react';
import { shallow } from '../../../enzyme';

import Post from './Post';

describe('hashtag tests', () => {

  it('renders hashtag items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = shallow(<Post hashtags={items} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.tags')).toBeDefined();
    // expect(wrapper.find('.tags')).toHaveLength(items.length);
  });

//   it('renders a list item', () => {
//     const items = ['Thor', 'Loki'];
//     const wrapper = shallow(<Post hashtags={items} />);

//     // Check if an element in the Component exists
//     expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();
//   });

//   it('renders correct text in item', () => {
//     const items = ['John', 'James', 'Luke'];
//     const wrapper = shallow(<Post hashtags={items} />);

//     //Expect the child of the first item to be an array
//     expect(wrapper.find('.item').get(0).props.children).toEqual('John');
//   });
});