import React from 'react';
import JournalCard from '../../JournalCard/journalCard';

import './journalList.scss';

function JournalList({ allJournals }) {
  return (
    <div className="journal-list">
      {allJournals && !allJournals.length && <p>Please add a journal</p>}
      {allJournals && allJournals.map((journal) => <JournalCard journal={journal} key={journal._id}/>)}
    </div>
  );
}

export default JournalList;
