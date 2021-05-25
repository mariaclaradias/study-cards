import React from 'react';
import renderer from 'react-test-renderer';
import Presentation from '../../../components/presentation';

test('should render', () => {
  const component = renderer.create(
    <Presentation
      data={{}}
      handleCloseDialog={() => {}}
      reset={false}
      setReset={() => {}}
    />
  );
});
