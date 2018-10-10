import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input.jsx';

describe('<Input />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      field: {},
      form: {
        touched: {},
        errors: {}
      }
    }

    wrapper = shallow(<Input { ...props } />);
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('renders properly', () => {
    expect(wrapper.find('.field').length).toBe(1);
  });
});
