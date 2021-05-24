import React from 'react';
import cn from 'classnames';
import { IoPhonePortrait } from 'react-icons/io5';

const CardForm = ({
  answer,
  setAnswer,
  question,
  setQuestion,
  handleSave,
  orientation,
}) => {
  let isEditing = orientation === 'landscape';

  return (
    <div className="card-form-container">
      <div
        className={cn({
          'card-form-landscape': isEditing,
          'card-form-portrait': !isEditing,
        })}
      >
        <div className="text-area-container">
          <label htmlFor="question-textarea">Qual sua pergunta?</label>
          <textarea
            id="question-textarea"
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="text-area-container">
          <label htmlFor="answer-textarea">Qual sua resposta?</label>
          <textarea
            id="answer-textarea"
            rows="4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
      </div>
      <div className="button-create-form">
        <button
          className="contained-button"
          onClick={() => handleSave(isEditing)}
        >
          {!isEditing ? 'Criar Card' : 'Salvar'}
        </button>
      </div>
    </div>
  );
};

export default CardForm;
