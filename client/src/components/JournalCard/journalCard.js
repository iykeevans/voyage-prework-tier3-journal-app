import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import JournalWrapper from '../journalWrapper';

import './journalCard.scss';

/**
 * @function JournalCard
 * @param {object} props
 * @returns {object} JSX
 */
function JournalCard({ journal, authenticated, updateJournal, deleteJournal }) {
  const { title, created_at: createdAt, _id: id, username } = journal;

  const [options, setOptions] = useState(false);

  return (
    <JournalWrapper
      authenticated={authenticated}
      link={`/journal/${id}`}
      toggleOptions={() => setOptions(!options)}
    >
      <div className="card__head">
        <p className="card__author">
          {authenticated
            ? moment(createdAt).calendar()
            : `Posted by ${username}`}
        </p>
      </div>
      <p className="card__date">{moment(createdAt).format('DD MMM YYYY')}</p>
      <p className="card__content">
        {title.length >= 33 ? `${title.substring(0, 33)}...` : title}
      </p>
      {options && (
        <div className="card__overlay">
          <div className="card__options">
            <Link to={`/journal/${id}`}>View</Link>
            <button type="submit" onClick={() => updateJournal(id)}>
              Edit
            </button>

            <button type="submit" onClick={() => deleteJournal(id)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </JournalWrapper>
  );
}

export default JournalCard;

JournalCard.propTypes = {
  journal: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  authenticated: PropTypes.bool.isRequired,
  deleteJournal: PropTypes.func.isRequired,
  updateJournal: PropTypes.func.isRequired
};
