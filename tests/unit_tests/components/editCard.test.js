import React from 'react';
import renderer from 'react-test-renderer';
import EditCard from '../../../components/editCard';

test('should render', () => {
  const component = renderer.create(
    <EditCard
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
