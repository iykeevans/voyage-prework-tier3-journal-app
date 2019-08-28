import React, { useState } from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';

import './addJournal.scss';

/**
 * @function AddJournal
 * @description adds a journal to the database
 * @param {object} props
 * @returns {object} JSX
 */
function AddJournal({ toggleForm, submitJournal }) {
  const [journal, setJournal] = useState({
    title: '',
    body: ''
  });

  const { title, body } = journal;

  const handleChange = ({ target }) => {
    setJournal({
      ...journal,
      [target.name]: target.value
    });
  };

  return (
    <ModalOverlay>
      <form className="journal-form" onSubmit={e => submitJournal(e, journal)}>
        <div className="journal-form__head">
          <p className="journal-form__title">Create a journal</p>
          <button
            type="submit"
            className="journal-form__btn-close"
            onClick={toggleForm}
          >
            <X className="journal-form__close" />
          </button>
        </div>

        <TextField label="title" value={title} handleChange={handleChange} />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label className="journal-form__label" htmlFor="body">
            Body
          </label>
          <textarea
            name="body"
            className="journal-form__content"
            value={body}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="journal-form__btn">
          Create
        </button>
      </form>
    </ModalOverlay>
  );
}

export default AddJournal;

AddJournal.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  submitJournal: PropTypes.func.isRequired
};
