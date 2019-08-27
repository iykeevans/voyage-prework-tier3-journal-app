import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import Heading from '../../components/Heading/heading';
import JournalList from '../../components/containers/JournalList/journalList';
import AddJournal from '../../components/containers/AddJournal/addJournal';
import EditJournal from '../../components/containers/EditJournal/editJournal';
import { getJournals } from '../../services/journals';
import { getToken } from '../../services/token';
import { handleError } from '../../services/error';

import './home.scss';

/**
 * @function Journals
 * @description displays all journals in database
 * @param {object} props
 * @returns {object} JSX
 */
function Journals({ authenticated }) {
  const [formValues, setFormValues] = useState({});
  const [loading, setLoading] = useState(true);
  const [journals, setJournals] = useState(null);
  const [addJournalForm, setAddJournalForm] = useState(false);
  const [editJournalForm, setEditJournalForm] = useState(false);

  useEffect(() => {
    let subscribed = true;
    const fetchJournals = async () => {
      const { data: response } = await getJournals();
      const { data } = response;

      if (subscribed) {
        setJournals(data);
      }
    };

    fetchJournals();
    setLoading(false);

    return () => (subscribed = false);
  }, [addJournalForm, editJournalForm]);

  const endpoint = 'https://chingu-journal-app.herokuapp.com/api/v1/journals';

  const createJournal = async (e, journal) => {
    e.preventDefault();
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      await axios.post(endpoint, journal);
      setAddJournalForm(false);
    } catch (error) {
      handleError(error);
    }
  };

  const getFormValues = async (e, newJournal) => {
    e.preventDefault();
    try {
      const { id } = formValues;
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      await axios.patch(`${endpoint}/${id}`, newJournal);

      setEditJournalForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateJournal = id => {
    setEditJournalForm(true);
    setFormValues({ ...formValues, id });
  };

  const deleteJournal = async id => {
    try {
      const newJournals = journals.filter(journal => journal._id !== id);
      setJournals(newJournals);
      axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;
      await axios.delete(`${endpoint}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
    return <Loader className="loader" type="TailSpin" color="#F2994A" />;

  return (
    <div className="home">
      <Heading
        toggleForm={() => setAddJournalForm(!addJournalForm)}
        authenticated={authenticated}
        journal={journals && journals[0]}
      />

      <JournalList
        authenticated={authenticated}
        allJournals={journals}
        updateJournal={updateJournal}
        deleteJournal={deleteJournal}
      />

      {addJournalForm && (
        <AddJournal
          toggleForm={() => setAddJournalForm(!addJournalForm)}
          submitJournal={createJournal}
        />
      )}

      {editJournalForm && (
        <EditJournal
          toggleForm={() => setEditJournalForm(!editJournalForm)}
          getFormValues={getFormValues}
          formValues={formValues}
        />
      )}
    </div>
  );
}

export default Journals;
