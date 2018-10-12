import React from 'react';
import { mount } from 'enzyme';
import { ShortenerForm } from './ShortenerForm';

describe('<ShortenerForm />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      error: {
        error: ''
      }
    }
    wrapper = mount(<ShortenerForm { ...props } />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('renders properly', () => {
    expect(wrapper.find('.shortener-form').length).toBe(1);
  });
});
