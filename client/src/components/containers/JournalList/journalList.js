import React from 'react';
import JournalCard from '../../JournalCard/journalCard';

import './journalList.scss';

/**
 * @function JournalList
 * @params {object} props
 * @returns {object} JSX
 */
function JournalList({
  allJournals,
  authenticated,
  deleteJournal,
  updateJournal
}) {
  return (
    <div className="journal-list">
      {allJournals && !allJournals.length && (
        <p className="journal-list__message">Please add a journal</p>
      )}

      {allJournals &&
        allJournals.map(journal => (
          <JournalCard
            journal={journal}
            key={journal._id}
            authenticated={authenticated}
            deleteJournal={deleteJournal}
            updateJournal={updateJournal}
          />
        ))}
    </div>
  );
}

export default JournalList;
