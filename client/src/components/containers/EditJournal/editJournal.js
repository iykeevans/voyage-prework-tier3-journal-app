import React, { useState } from 'react';
import { X } from 'react-feather';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';

/**
 * @function EditJournal
 * @description edit's a journal to the database
 * @param {object} props
 * @returns {object} JSX
 */
function EditJournal({ toggleForm, getFormValues }) {
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
    <ModalOverlay onClick={toggleForm}>
      <form className="journal-form" onSubmit={e => getFormValues(e, journal)}>
        <div className="journal-form__head">
          <p className="journal-form__title">Edit Journal</p>
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
          Edit
        </button>
      </form>
    </ModalOverlay>
  );
}

export default EditJournal;
