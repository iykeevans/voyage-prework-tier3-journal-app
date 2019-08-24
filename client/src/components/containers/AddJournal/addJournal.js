import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import Loader from 'react-loader-spinner'

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';
import { createJournal } from '../../../services/journals';

import './addJournal.scss';

function AddJournal({ toggleForm, checkForm }) {

  const [loading, setLoading] = useState(false);

  const [ state, setState ] = useState({
    title: '',
    body: ''
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
      await createJournal(state);

      checkForm();
      setLoading(false);
      toggleForm();
    }
    catch (error) {
      console.log('||||||||>', error);
    }
  }

  return (
    <ModalOverlay>
      <form className="journal-form" onSubmit={ handleSubmit }>
        <div className="journal-form__head">
          <p className="journal-form__title">Create a journal</p>
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
          {!loading && 'Create'}
          {loading && <Loader type="ThreeDots" height="24" width="24" color="white"/>}
        </button>
        
      </form>
    </ModalOverlay>
  )
}

export default AddJournal;
