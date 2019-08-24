import React, { useState, useEffect } from 'react';
import { getJournals } from '../../services/journals';

import './journal.scss';

function Journal({ match }) {
  const { id } = match.params;

  const [journal, setJournal] = useState('')

  useEffect(() => {
    const fetchJournal = async () => {
      const { data } = await getJournals(id);
      const { data: journal } = data;

      setJournal(journal);
    }

    fetchJournal()
  }, [id]);

  const { title, created_at, body } = journal;

  return (
    <div className="journal">
      <p style={{marginBottom: '2em'}}>Posted by Evan</p>
      <h1 style={{fontFamily: 'Poppins', marginBottom: '1em'}}>{ title }</h1>
      <p style={{marginBottom: '2em'}}>{ body }</p>
      <p>{ created_at }</p>
    </div>
  )
}

export default Journal;
