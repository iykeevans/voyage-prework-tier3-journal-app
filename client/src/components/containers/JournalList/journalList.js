import React from 'react';
import JournalCard from '../../JournalCard/journalCard';

import './journalList.scss';

function JournalList({ allJournals }) {
  return (
    <div className="journal-list">
      {allJournals && allJournals.map((journal) => <JournalCard journal={journal} key={journal.id}/>)}
    </div>
  );
}

export default JournalList;
