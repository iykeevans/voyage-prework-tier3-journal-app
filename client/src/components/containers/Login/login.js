import React, { useState } from 'react';
import { X } from 'react-feather';
import Loader from 'react-loader-spinner';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';
import { signin } from '../../../services/users';
import { setToken } from '../../../services/token';


function Login({ toggleForm, formSubmitted }) {

  const [loading, setLoading] = useState(false);

  const [ state, setState ] = useState({
    email: '',
    password: '',
  });

  const { email, password } = state;

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const { data } = await signin(state);
      const { token } = data;

      setToken(token);
      formSubmitted();
      setLoading(false);
      toggleForm();
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalOverlay>
      <form className="journal-form" onSubmit={ handleSubmit }>
        <div className="journal-form__head">
          <p className="journal-form__title">Log in</p>
          <button className="journal-form__btn-close" onClick={ toggleForm }>
            <X className="journal-form__close"/>
          </button>
        </div>

        <TextField 
          label="email"
          value={ email }
          type="email"
          handleChange={handleChange}
        />

        <TextField 
          label="password"
          value={ password }
          type="password"
          handleChange={handleChange}
        />
        
        <button className="journal-form__btn">
          {!loading && 'Log in'}
          {loading && <Loader type="ThreeDots" height="24" width="24" color="white"/>}
        </button>
        
      </form>
    </ModalOverlay>
  )
}

export default Login;
