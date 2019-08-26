import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import Heading from '../../components/Heading/heading';
import JournalList from '../../components/containers/JournalList/journalList';
import AddJournal from '../../components/containers/AddJournal/addJournal';
import { getJournals } from '../../services/journals';

import './home.scss'

function Home({ isAuthenticated }) {
  const [loading, setLoading] = useState(true);
  const [journals, setJournals] = useState(null);
  const [journalForm, setJournalForm] = useState(false);
  const [submittedJournal, setSubmittedJournal] = useState(false);

  useEffect(() => {

    const fetchJournals = async () => {
      const { data } = await getJournals();
      const { data: journals } = data;

      setJournals(journals);
    }

    fetchJournals();
    setLoading(false);
  }, [submittedJournal]);

  const toggleForm = () => {
    setJournalForm(!journalForm);
  }

  const checkForm = () => {
    setSubmittedJournal(!submittedJournal);
  }
  
  if (loading) return <Loader 
    className="loader"
    type="TailSpin"
    color="#F2994A" 
  />

  return (
    <div className="home">

      <Heading
        toggleForm={ toggleForm }
        authenticated={isAuthenticated}
        allJournals={journals}
      />

      <JournalList allJournals={journals}/>

      { journalForm && <AddJournal
        toggleForm={ toggleForm }
        checkForm={ checkForm }
        editValues={{}}
      /> }

    </div>
  );
}

export default Home;
