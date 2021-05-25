import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Dashboard from '../../../components/dashboard';

test('should render', () => {
  const component = renderer.create(<Dashboard />);
});
