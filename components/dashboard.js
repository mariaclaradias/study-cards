import React, { useState, useCallback, useEffect } from 'react';
import { VscArrowRight } from 'react-icons/vsc';
import Modal from './modal';
import Card from './card';
import { AiFillCheckCircle as CheckCircle } from 'react-icons/ai';
import CreateCard from './createCard';
import EditCard from './editCard';
import Presentation from './presentation';

const Dashboard = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogPage, setDialogPage] = useState('create');
  const [alert, setAlert] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const [currentCardId, setCurrentCardId] = useState('');
  const [data, setData] = useState(null);
  const [resetPresentation, setResetPresentation] = useState(false);

  const handleOpenCreate = useCallback(() => {
    setDialogPage('create');
    setShowDialog(true);
  });

  const handleOpenPresentation = useCallback(() => {
    setDialogPage('presentation');
    setShowDialog(true);
  });

  const handleOpenEdit = useCallback((id, template, question, answer) => {
    setDialogPage('edit');
    setShowDialog(true);
    setSelectedTemplate(template);
    setQuestion(question);
    setAnswer(answer);
    setCurrentCardId(id);
  });

  const handleCloseDialog = useCallback(() => {
    setShowDialog(false);
    setAnswer('');
    setQuestion('');
    setSelectedTemplate(null);
    setResetPresentation(true);
  });

  const handleSaveCards = useCallback((isEditing) => {
    let newData = { ...data };
    if (isEditing) {
      newData.descriptor.cards[currentCardId] = {
        template: selectedTemplate,
        question: question,
        answer: answer,
      };
    } else {
      let newId =
        parseInt(
          Object.keys(newData.descriptor.cards).reduce((a, b) =>
            a > b ? a : b
          )
        ) + 1;

      newData.descriptor.cards = {
        ...newData.descriptor.cards,
        [newId]: {
          template: selectedTemplate,
          question: question,
          answer: answer,
        },
      };
    }

    setData(newData);

    handleCloseDialog();
  });

  const handleSavePresentation = useCallback(() => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(data);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'https://606eeab20c054f0017657edc.mockapi.io/cardsstudy/v1/presentations/7',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 3000);
  });

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://606eeab20c054f0017657edc.mockapi.io/cardsstudy/v1/presentations/7',
      requestOptions
    )
      .then((response) => {
        response.json().then((data) => {
          if (data && data.descriptor.cards) {
            setData(data);
          }
        });
      })
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Modal show={showDialog} handleClose={handleCloseDialog}>
        {dialogPage === 'create' ? (
          <CreateCard
            selectedTemplate={selectedTemplate}
            handleSelectTemplate={setSelectedTemplate}
            answer={answer}
            setAnswer={setAnswer}
            question={question}
            setQuestion={setQuestion}
            handleSave={handleSaveCards}
          />
        ) : dialogPage === 'edit' ? (
          <EditCard
            selectedTemplate={selectedTemplate}
            handleSelectTemplate={setSelectedTemplate}
            answer={answer}
            setAnswer={setAnswer}
            question={question}
            setQuestion={setQuestion}
            handleSave={handleSaveCards}
          />
        ) : (
          <Presentation
            data={data}
            handleCloseDialog={handleCloseDialog}
            reset={resetPresentation}
            setReset={setResetPresentation}
          />
        )}
      </Modal>
      <div className="header-buttons">
        <button className="outlined-button" onClick={handleSavePresentation}>
          Salvar Apresentação
        </button>
        <button className="contained-button" onClick={handleOpenCreate}>
          Criar Card
        </button>
      </div>

      <div className="card-list">
        {alert && (
          <div className="alert">
            <CheckCircle className="icon-alert" />
            <span>Apresentação foi salva com sucesso!</span>
          </div>
        )}
        {data &&
          data.descriptor.cards &&
          Object.entries(data.descriptor.cards).map(([id, card]) => (
            <Card
              key={id}
              id={id}
              template={card.template}
              question={card.question}
              answer={card.answer}
              flip={false}
              editable
              handleOpenEdit={() => {
                handleOpenEdit(id, card.template, card.question, card.answer);
              }}
            ></Card>
          ))}
      </div>

      <div className="presentation-button">
        <button
          className="contained-button-secondary"
          onClick={handleOpenPresentation}
        >
          Apresentar Cards <VscArrowRight className="icon" />
        </button>
      </div>
    </>
  );
};

export default Dashboard;
