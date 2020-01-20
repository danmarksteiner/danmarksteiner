import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });
  test('renders without error', () => {
    expect(wrapped.length).toBe(1);
  });
});
