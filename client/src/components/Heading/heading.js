import React from 'react';
import moment from 'moment';

import './heading.scss';
/**
 * @function Heading
 * @param {object} props
 * @returns {object} JSX
 */
function Heading({ toggleForm, authenticated, journal }) {
  return (
    <div className="heading">
      <h1>
        {authenticated ? 'My journals' : 'All Journals'}
        <span>
          updated
          {journal && <span>{moment(journal.created_at).fromNow()}</span>}
        </span>
      </h1>

      {authenticated && (
        <button type="submit" onClick={toggleForm}>
          Add new
        </button>
      )}
    </div>
  );
}

export default Heading;
