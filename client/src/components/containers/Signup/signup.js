import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import TextField from '../../Textfield/textfield';
import ModalOverlay from '../../ModalOverlay/modalOverlay';


function SignUp({toggleForm}) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
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
        
        <button className="journal-form__btn">Sign up</button>
        
      </form>
    </ModalOverlay>
  )
}

export default SignUp;
