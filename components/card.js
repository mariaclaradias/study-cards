import React from 'react';
import cn from 'classnames';
import { VscEdit as Edit, VscPreview as Rectangle } from 'react-icons/vsc';
import { FiHexagon as Hexagon } from 'react-icons/fi';

const Card = ({
  template,
  question,
  answer,
  flip,
  editable,
  handleOpenEdit,
}) => {
  return (
    <div style={{ display: 'flex' }}>
      {template === 3 && <div className="triangle-left" />}

      <div
        className={cn({
          'card-container': [1, 2].includes(template),
          'landscape-container': template === 1,
          'portrait-container': template === 2,
          'hexagon-container': template === 3,
          'non-editable': !editable,
        })}
      >
        {editable && (
          <div className="card-button-container">
            <button className="contained-button" onClick={handleOpenEdit}>
              <Edit />
            </button>
          </div>
        )}
        <div
          className={cn({
            'card-type-icon': true,
            'answer-flip': flip,
          })}
        >
          {template === 3 ? (
            <Hexagon className="icon-template" />
          ) : (
            <Rectangle className="icon-template" />
          )}
        </div>
        {flip ? (
          <div
            className={cn({
              'answer-flip': true,
              'card-text': template !== 2,
              'card-text-portrait': template === 2,
            })}
          >
            Resposta: <br />
            <br />
            {answer}
          </div>
        ) : (
          <div
            className={cn({
              'card-text': template !== 2,
              'card-text-portrait': template === 2,
            })}
          >
            {question}
          </div>
        )}
      </div>
      {template === 3 && <div className="triangle-right" />}
    </div>
  );
};

export default Card;
