import React, { useState, useEffect } from 'react';

import Heading from '../../components/Heading/heading';
import JournalList from '../../components/containers/JournalList/journalList';
import AddJournal from '../../components/containers/AddJournal/addJournal';
import { getJournals } from '../../services/journals';

import './home.scss'

function Home() {

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
  }, [submittedJournal]);

  const toggleForm = () => {
    setJournalForm(!journalForm);
  }

  const checkForm = () => {
    setSubmittedJournal(!submittedJournal);
  }

  return (
    <div className="home">
      <Heading toggleForm={ toggleForm } />
      <JournalList allJournals={journals}/>
      { journalForm && <AddJournal toggleForm={ toggleForm } checkForm={ checkForm }/> }>
    </div>
  );
}

export default Home;
