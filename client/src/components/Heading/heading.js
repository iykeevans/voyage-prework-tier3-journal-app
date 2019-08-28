import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

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

Heading.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
  journal: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

Heading.defaultProps = {
  journal: null
};
