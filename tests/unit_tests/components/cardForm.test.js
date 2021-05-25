import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardForm from '../../../components/cardForm';

test('should render', () => {
  const component = renderer.create(
    <CardForm
      answer="Question test answer!"
      setAnswer={() => {}}
      question="Question test?"
      setQuestion={() => {}}
      handleSave={() => {}}
      orientation="landscape"
    />
  );
});

test('should call on click function', () => {
  const mockFunction = jest.fn();
  const component = shallow(
    <CardForm
      answer="Question test answer!"
      setAnswer={() => {}}
      question="Question test?"
      setQuestion={() => {}}
      handleSave={mockFunction}
      orientation="landscape"
    />
  );

  component.find('.contained-button').simulate('click');

  expect(mockFunction).toHaveBeenCalledTimes(1);
});
