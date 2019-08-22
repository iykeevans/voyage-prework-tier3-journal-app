import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import SignUp from '../Signup/signup';
import Login from '../Login/login';

import './navbar.scss';

function Navbar({ isAuthenticated }) {

  const [state, setState] = useState({
    loginForm: false,
    signupForm: false
  });

  const toggleSignupForm = () => {
    setState({
      ...state,
      signupForm: !signupForm
    })
  }

  const toggleLoginForm = () => {
    setState({
      ...state,
      loginForm: !loginForm
    })
  }

  const { loginForm, signupForm } = state;

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo"><span>Digital</span> Journal</Link>
      { !isAuthenticated && <div className="nav__auth">
        <button className="nav__btn" onClick={toggleLoginForm}>Log in</button>
        <button className="nav__btn" onClick={toggleSignupForm}>Sign up</button>
      </div> }
      {signupForm && <SignUp toggleForm={toggleSignupForm} />}
      {loginForm && <Login toggleForm={toggleLoginForm} />}
    </nav>
  );
}

export default Navbar;
