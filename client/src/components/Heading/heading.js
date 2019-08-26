import React from 'react';
import moment from 'moment';

import './heading.scss';

function Heading({ toggleForm, authenticated, allJournals, heading }) {
  return (
    <div className="heading">
      <h1>{ heading || 'All Journals' } 
        <span>
          updated { allJournals && moment(allJournals[0].created_at).fromNow()}
        </span>
      </h1>
      {authenticated && <button onClick={ toggleForm }>Add new</button>}
    </div>
  );
}

export default Heading;
