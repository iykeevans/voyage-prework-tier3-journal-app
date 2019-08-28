import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import moment from 'moment';
import PropTypes from 'prop-types';

import { getJournals } from '../../services/journals';

import './journal.scss';

/**
 * @function Journal
 * @param {object} props
 * @returns {object} JSX
 */
function Journal({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(true);

  const [journal, setJournal] = useState('');

  useEffect(() => {
    const fetchJournal = async () => {
      const { data } = await getJournals(id);
      const { data: response } = data;

      setJournal(response);
    };

    fetchJournal();
    setLoading(false);
  }, [id]);

  const { title, created_at: createdAt, body } = journal;

  if (loading)
    return <Loader className="loader" type="TailSpin" color="#F2994A" />;

  return (
    <div className="journal">
      <p style={{ marginBottom: '2em' }}>Posted by Evan</p>
      <h1 style={{ fontFamily: 'Poppins', marginBottom: '1em' }}>{title}</h1>
      <p style={{ marginBottom: '2em' }}>{body}</p>
      <p>{moment(createdAt).format('DD MMM YYYY')}</p>
    </div>
  );
}

export default Journal;

Journal.propTypes = {
  match: PropTypes.object.isRequired
};
