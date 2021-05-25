import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/index';

test('should render', () => {
  const component = renderer.create(<Home></Home>);
});
