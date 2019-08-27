import React, { useState } from 'react';
import { X } from 'react-feather';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';

/**
 * function SignUp
 * @param {object} props
 * @returns {object} JSX
 */
function SignUp({ toggleForm, registerUser }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = userInfo;

  const handleChange = ({ target }) => {
    setUserInfo({
      ...userInfo,
      [target.name]: target.value
    });
  };

  return (
    <ModalOverlay>
      <form className="journal-form" onSubmit={e => registerUser(e, userInfo)}>
        <div className="journal-form__head">
          <p className="journal-form__title">Sign up</p>
          <button
            type="submit"
            className="journal-form__btn-close"
            onClick={toggleForm}
          >
            <X className="journal-form__close" />
          </button>
        </div>

        <TextField
          label="username"
          value={username}
          handleChange={handleChange}
        />

        <TextField
          label="email"
          value={email}
          type="email"
          handleChange={handleChange}
        />

        <TextField
          label="password"
          value={password}
          type="password"
          handleChange={handleChange}
        />

        <button type="submit" className="journal-form__btn">
          Sign up
        </button>
      </form>
    </ModalOverlay>
  );
}

export default SignUp;
