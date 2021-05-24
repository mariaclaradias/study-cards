import React, { useState, useEffect, useCallback } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import Card from './card';

const Presentation = ({ data, handleCloseDialog, reset, setReset }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flip, setFlip] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let newData = [];

    if (data.descriptor.cards) {
      Object.entries(data.descriptor.cards).map(([id, card]) => {
        newData.push({ id, ...card });
      });

      setCards(newData);
    }
  }, [data]);

  useEffect(() => {
    setFlip(false);
    setCurrentCard(0);
    setReset(false);
  }, [reset]);

  const handleNextCard = useCallback(() => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setFlip(!flip);
    } else {
      handleCloseDialog();
      setFlip(false);
      setCurrentCard(0);
    }
  });

  return (
    <div className="presentation-container">
      <div className="presentation-card">
        {cards.length > 0 && (
          <div className={flip ? 'flipper' : ''}>
            <Card
              key={cards[currentCard].id}
              id={cards[currentCard].id}
              template={cards[currentCard].template}
              question={cards[currentCard].question}
              answer={cards[currentCard].answer}
              flip={flip}
              handleOpenEdit={() => {}}
              editable={false}
            />
          </div>
        )}
      </div>
      <div className="card-button-container">
        {flip ? (
          <>
            <button className="contained-button-right" onClick={handleNextCard}>
              <FiCheck />
            </button>
            <button className="contained-button-wrong" onClick={handleNextCard}>
              <FiX />
            </button>
          </>
        ) : (
          <button className="contained-button" onClick={() => setFlip(!flip)}>
            Ver Resposta
          </button>
        )}
      </div>
    </div>
  );
};

export default Presentation;
