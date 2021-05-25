import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TemplatePicker from '../../../components/templatePicker';

test('should render', () => {
  const component = renderer.create(
    <TemplatePicker
      orientation="portrait"
      onSelectTemplate={() => {}}
      selectedTemplate={0}
    />
  );
});
