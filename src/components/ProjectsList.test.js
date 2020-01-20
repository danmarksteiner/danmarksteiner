import React from 'react';
import { shallow } from 'enzyme';

import ProjectsList from './ProjectsList';

describe('ProjectsList', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<ProjectsList />);
  });
  test('renders without error', () => {
    expect(wrapped.length).toBe(1);
  });
});
