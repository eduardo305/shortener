import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  let wrapper, props;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('renders properly', () => {
    expect(wrapper.find('.header-container').length).toBe(1);
    expect(wrapper.find('.header-container').text()).toBe('Want your url shortned? So let\'s do it!!!')
  });
});
