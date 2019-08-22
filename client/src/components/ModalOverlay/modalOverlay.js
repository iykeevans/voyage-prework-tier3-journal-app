import React from 'react';

import './modalOverlay.scss';

function ModalOverlay({ children }) {
  return (
    <div className="modal-overlay">
      { children }
    </div>
  );
}

export default ModalOverlay;
