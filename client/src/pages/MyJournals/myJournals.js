import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';

import Heading from '../../components/Heading/heading';
import JournalList from '../../components/containers/JournalList/journalList';
import AddJournal from '../../components/containers/AddJournal/addJournal';
import { getJournals, mutateJournal } from '../../services/journals';

function MyJournal({ isAuthenticated }) {
  const [loading, setLoading] = useState(true);
  const [journals, setJournals] = useState(null);
  const [journalForm, setJournalForm] = useState(false);
  const [submittedJournal, setSubmittedJournal] = useState(false);

  const [state, setState] = useState({})

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

  const handleEdit = async (id, data) => {
    setJournalForm(true);
    setState({ id, ...state, ...data });
    checkForm();
  }

  const handleDelete = async (id) => {
    try {
      await mutateJournal(id);
      checkForm();
    }
    catch (error) {
      // handle errors;
      console.log(error);
    }
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
        heading="My Journals"
      />

      <JournalList
        allJournals={journals}
        myJournal={true}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      { journalForm && <AddJournal
        toggleForm={ toggleForm }
        checkForm={ checkForm }
        editValues={ state }
      /> }

    </div>
  );
}

export default MyJournal;
