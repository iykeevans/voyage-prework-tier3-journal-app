import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import Loader from 'react-loader-spinner'

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';
import { createJournal, mutateJournal } from '../../../services/journals';

import './addJournal.scss';

function AddJournal({ toggleForm, checkForm, editValues }) {

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [ state, setState ] = useState({
    title: editValues.title || '',
    body: editValues.body || ''
  });

  const { title, body } = state;

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (Object.keys(editValues).length) {
        await mutateJournal(editValues.id, state);
        checkForm();
        setLoading(false);
        toggleForm();
      } else {
        await createJournal(state);
        checkForm();
        setLoading(false);
        toggleForm();
      }
    }
    catch (error) {
      setErrors({
        ...errors,
        error: error.message
      })
    }
  }

  return (
    <ModalOverlay>
      <form className="journal-form" onSubmit={ handleSubmit }>
        <div className="journal-form__head">
          <p className="journal-form__title">
            { (Object.keys(editValues).length) ? 'Edit Journal' : 'Create a journal'}
          </p>
          <button className="journal-form__btn-close" onClick={ toggleForm }>
            <X className="journal-form__close"/>
          </button>
        </div>
        
        <TextField 
          label="title"
          value={ title }
          handleChange={handleChange}
        />

        <div style={{display: 'flex', flexDirection: 'column'}}>
          <label className="journal-form__label">Body</label>
          <textarea name="body" className="journal-form__content" value={body} onChange={handleChange} />
        </div>
        
        <button className="journal-form__btn">
          {!loading && (Object.keys(editValues).length) ? 'Edit' : 'Create'}
          {loading && <Loader type="TailSpin" height={24} width={24} color="white"/>}
        </button>
        
      </form>
    </ModalOverlay>
  )
}

export default AddJournal;
