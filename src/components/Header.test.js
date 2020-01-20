import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<Header />);
  });
  test('renders without error', () => {
    expect(wrapped.length).toBe(1);
  });
});
