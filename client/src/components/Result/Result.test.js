import React from 'react';
import { shallow } from 'enzyme';
import Result from './Result'
import { clientURI } from '../../util/Constants'

describe('<Result />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      originalUrl: 'original',
      shortUrl: 'short'
    }

    wrapper = shallow(<Result { ...props } />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('renders properly', () => {
    expect(wrapper.find('.result-container').length).toBe(1);
    expect(wrapper.find('.original-url').text()).toBe('Original URL: original')
    expect(wrapper.find('.short-url').text()).toBe(`Short URL: ${clientURI}/short`)
  });
});
