import React, { useState } from 'react';
import { X } from 'react-feather';
import PropTypes from 'prop-types';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';

/**
 * @function Login
 * @param {object} props
 * @return {object} JSX
 */
function Login({ toggleForm, login }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userInfo;

  const handleChange = ({ target }) => {
    setUserInfo({
      ...userInfo,
      [target.name]: target.value
    });
  };

  return (
    <ModalOverlay>
      <form
        className="journal-form"
        onSubmit={e => login(e, userInfo, toggleForm)}
      >
        <div className="journal-form__head">
          <p className="journal-form__title">Log in</p>
          <button
            type="submit"
            className="journal-form__btn-close"
            onClick={toggleForm}
          >
            <X className="journal-form__close" />
          </button>
        </div>

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
          Log in
        </button>
      </form>
    </ModalOverlay>
  );
}

export default Login;

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};
