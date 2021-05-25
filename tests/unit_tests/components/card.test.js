import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from '../../../components/card';

test('should render', () => {
  const component = renderer.create(
    <Card
      template={1}
      question="Question test?"
      answer="Question test answer!"
      flip={false}
      editable={true}
      handleOpenEdit={() => {}}
    />
  );
});

test('should render question', () => {
  const component = shallow(
    <Card
      template={1}
      question="Question test?"
      answer="Question test answer!"
      flip={false}
      editable={true}
      handleOpenEdit={() => {}}
    />
  );
  const question = component.find('.card-text').text();

  expect(question).toEqual('Question test?');
});

test('should call on click function', () => {
  const mockFunction = jest.fn();
  const component = shallow(
    <Card
      template={1}
      question="Question test?"
      answer="Question test answer!"
      flip={false}
      editable={true}
      handleOpenEdit={mockFunction}
    />
  );

  component.find('.contained-button').simulate('click');

  expect(mockFunction).toHaveBeenCalledTimes(1);
});
