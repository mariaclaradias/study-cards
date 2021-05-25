import React from 'react';
import renderer from 'react-test-renderer';
import CreateCard from '../../../components/createCard';

test('should render', () => {
  const component = renderer.create(
    <CreateCard
      selectedTemplate="0"
      handleSelectTemplate={() => {}}
      answer="Question test answer!"
      setAnswer={() => {}}
      question="Question test?"
      setQuestion={() => {}}
      handleSave={() => {}}
    />
  );
});
