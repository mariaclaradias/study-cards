import React from 'react';
import TemplatePicker from './templatePicker';
import CardForm from './cardForm';

const EditCard = ({
  handleSave,
  handleSelectTemplate,
  selectedTemplate,
  answer,
  setAnswer,
  question,
  setQuestion,
}) => {
  return (
    <div>
      <TemplatePicker
        orientation="landscape"
        onSelectTemplate={handleSelectTemplate}
        selectedTemplate={selectedTemplate}
      />
      <CardForm
        handleSave={handleSave}
        answer={answer}
        setAnswer={setAnswer}
        question={question}
        setQuestion={setQuestion}
        orientation="landscape"
      />
    </div>
  );
};

export default EditCard;
