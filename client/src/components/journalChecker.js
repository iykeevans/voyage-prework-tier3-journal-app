import React from 'react';
import { Link } from 'react-router-dom'

function JournalChecker({ children, myJournal, link, toggleOptions }) {
  if (myJournal) return <div className="card" onClick={toggleOptions}>{ children }</div>

  return <Link className="card" to={link}>{ children }</Link>
}

export default JournalChecker;
