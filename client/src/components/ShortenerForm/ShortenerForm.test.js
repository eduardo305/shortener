import React from 'react';
import { mount } from 'enzyme';
import { ShortenerForm } from './ShortenerForm';

describe('<ShortenerForm />', () => {
  let wrapper, props;

  beforeEach(() => {
    wrapper = mount(<ShortenerForm />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('renders properly', () => {
    expect(wrapper.find('.shortener-form').length).toBe(1);
  });
});
