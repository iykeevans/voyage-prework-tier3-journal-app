import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { MoreVertical } from 'react-feather'

import './journalCard.scss';

function JournalCard({ match, journal }) {

  // console.log('=====-----?', match)

  const [ showOptions, setShowOptions ] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  }

  const { title, created_at, _id, user } = journal;
  const { username } = user;
  console.log('----->', username);

  return (
    <Link to={`/journal/${_id}`}className="card">
      <div className="card__head">
        <p className="card__author">{ `Posted by ${username}` || 'Posted by Evan' }</p>

        <Link className="card__options" onClick={ toggleOptions }>
          <MoreVertical />
        </Link>

        { showOptions && <div className="card__options-box">
          <Link>Edit</Link>
          <Link>Delete</Link>
        </div> }
      </div>
      <p className="card__date">{ moment(created_at).format("DD MMM YYYY") }</p>
      <p className="card__content">
        { (title.length >= 33) ? `${title.substring(0, 33)}...` : title }
      </p>
    </Link>
  );
}

export default JournalCard;
