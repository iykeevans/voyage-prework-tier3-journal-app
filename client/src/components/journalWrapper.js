import React from 'react';
import { Link } from 'react-router-dom';

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
