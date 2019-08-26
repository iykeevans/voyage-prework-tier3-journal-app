import React from 'react';
import JournalCard from '../../JournalCard/journalCard';

import './journalList.scss';

function JournalList({ allJournals, myJournal, handleEdit, handleDelete }) {
  return (
    <div className="journal-list">
      { allJournals && !allJournals.length && 
        <p className="journal-list__message">Please add a journal</p>}

      {allJournals && allJournals.map((journal) => (
        <JournalCard
          journal={journal}
          key={journal._id}
          myJournal={myJournal}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default JournalList;
