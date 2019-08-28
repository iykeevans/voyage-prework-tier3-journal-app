import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * function JournalWrapper
 * @description checks if CRUD operations can happen on card
 * @param {object} props
 * @returns {object} JSX
 */
function JournalWrapper({ children, authenticated, link, toggleOptions }) {
  if (authenticated)
    return (
      <div className="card" onClick={toggleOptions}>
        {children}
      </div>
    );

  return (
    <Link className="card" to={link}>
      {children}
    </Link>
  );
}

export default JournalWrapper;

JournalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  authenticated: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  toggleOptions: PropTypes.func.isRequired
};
