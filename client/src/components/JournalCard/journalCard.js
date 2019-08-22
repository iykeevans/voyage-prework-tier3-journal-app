import React from 'react';
import { Link } from 'react-router-dom';

import './journalCard.scss';

function JournalCard({ journal }) {

  const { title, created_at, id } = journal;

  return (
    <Link to={`/journal/${id}`}className="card">
      <div className="card__head">
        <p className="card__author">Posted by Evan</p>
      </div>
      <p className="card__date">{ created_at }</p>
      <p className="card__content">{ `${title.substring(0, 33)}...` }</p>
    </Link>
  );
}

export default JournalCard;
