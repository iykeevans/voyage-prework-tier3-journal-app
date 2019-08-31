import React from 'react';
import PropTypes from 'prop-types';

import './modalOverlay.scss';

/**
 * @function ModalOverlay
 * @param {JSX} props
 * @returns {object} JSX
 */
function ModalOverlay({ children }) {
  return <div className="modal-overlay">{children}</div>;
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired
};
