import React from 'react';
import { FiX } from 'react-icons/fi';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="card-button-container">
          <button className="button-modal-close" onClick={handleClose}>
            <FiX />
          </button>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
