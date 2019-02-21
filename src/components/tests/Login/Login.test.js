import React from 'react';
import { shallow } from '../../../enzyme';

import Login from './Login';

// describe('hashtag tests', () => {

//   it('renders hashtag items', () => {
//     const items = ['one', 'two', 'three'];
//     const wrapper = shallow(<Post hashtags={items} />);

//     // Expect the wrapper object to be defined
//     expect(wrapper.find('.tags')).toBeDefined();
//   });
// });

describe('User signin', () => {
    // it('should fail if no credentials are provided', () => {
    //     const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    //     const loginComponent = shallow(<Login />);
    //     expect(loginComponent.find('.form-login').length).toBe(1);
    //     loginComponent.find('.form-login').simulate('submit', fakeEvent);
    //     expect(loginComponent.find(Notification).length).toBe(1);
    // });

    it('Test', () => {
        const wrapper = shallow(<Login/>);

        const mockSubmit= jest.fn();
      wrapper.instance().handleBtnClick= mockSubmit;
      wrapper.instance().handleBtnClick();
      expect(mockSubmit).toHaveBeenCalled();
      });
});