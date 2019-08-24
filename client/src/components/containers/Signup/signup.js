import React, { useState } from 'react';
import { X } from 'react-feather';
import Loader from 'react-loader-spinner';

import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';
import { signup } from '../../../services/users';
import { setToken } from '../../../services/token';


function SignUp({ toggleForm, formSubmitted }) {

  const [loading, setLoading] = useState(false);

  const [ state, setState ] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = state;

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
      const { data } = await signup(state);
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
          <p className="journal-form__title">Sign up</p>
          <button className="journal-form__btn-close" onClick={ toggleForm }>
            <X className="journal-form__close"/>
          </button>
        </div>
        
        <TextField 
          label="username"
          value={ username }
          handleChange={handleChange}
        />

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
          { !loading && 'Sign up' }
          { loading && <Loader type="ThreeDots" height="24" width="24" color="white"/> }
        </button>
        
      </form>
    </ModalOverlay>
  )
}

export default SignUp;
