import React from 'react';
import TemplatePicker from './templatePicker';
import CardForm from './cardForm';

const CreateCard = ({
  selectedTemplate,
  handleSelectTemplate,
  answer,
  setAnswer,
  question,
  setQuestion,
  handleSave,
}) => {
  return (
    <>
      {!selectedTemplate ? (
        <TemplatePicker
          orientation="portrait"
          onSelectTemplate={handleSelectTemplate}
          selectedTemplate={selectedTemplate}
        />
      ) : (
        <CardForm
          handleSave={handleSave}
          answer={answer}
          setAnswer={setAnswer}
          question={question}
          setQuestion={setQuestion}
          orientation="portrait"
        />
      )}
    </>
  );
};

export default CreateCard;
