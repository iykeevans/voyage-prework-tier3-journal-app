import React from 'react';

import './heading.scss';

function Heading({ toggleForm }) {
  return (
    <div className="heading">
      <h1>All Journals <span>updated 2 mins ago</span></h1>
      <button onClick={ toggleForm }>Add new</button>
    </div>
  );
}

export default Heading;
