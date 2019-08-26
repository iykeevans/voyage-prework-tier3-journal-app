import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import JournalChecker from '../journalChecker';

import './journalCard.scss';

function JournalCard({ journal, myJournal, handleDelete, handleEdit }) {

  const { title, created_at, _id: id, user, body } = journal;
  const { username } = user;

  const [options, setOptions] = useState(false);

  const toggleOptions = () => {
    setOptions(!options);
  }

  return (
    <JournalChecker
      myJournal={myJournal}
      link={`/journal/${id}`}
      toggleOptions={toggleOptions}
    >
      <div className="card__head">
        <p className="card__author">
          {(myJournal) ? moment(created_at).calendar() : `Posted by ${username}`}
        </p>
      </div>
      <p className="card__date">{moment(created_at).format("DD MMM YYYY")}</p>
      <p className="card__content">
        {(title.length >= 33) ? `${title.substring(0, 33)}...` : title}
      </p>
      {options &&
        <div className="card__overlay">
          <div className="card__options">
            <Link to={`/journal/${id}`}>View</Link>
            <button 
              onClick={ () => handleEdit(id, { title, body }) }
              >
                Edit
            </button>
            <button onClick={ () => handleDelete(id) }>Delete</button>
          </div>
        </div>
      }
    </JournalChecker>
  );
}

export default JournalCard;
