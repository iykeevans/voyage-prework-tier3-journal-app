import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { User, Menu } from 'react-feather';
import jwtDecode from 'jwt-decode';

import SignUp from '../Signup/signup';
import Login from '../Login/login';
import { crushToken, getToken } from '../../../services/token';

import './navbar.scss';

function Navbar({ isAuthenticated, formSubmitted }) {

  const { username } = (getToken()) ? jwtDecode(getToken()) : '';
  console.log('--------->', username);

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

  const logOut = () => {
    crushToken();
    formSubmitted();
  }

  const { loginForm, signupForm } = state;

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo"><span>Digital</span> Journal</Link>
      <Menu className="nav__menu" />

      { isAuthenticated && <button className="nav__auth nav__auth--true" onClick={logOut}>
        <div className="nav__user">
          <User className="nav__user-icon" color="#F2994A" />
        </div>
        <p className="nav__username">{ username }</p>
      </button> }

      { !isAuthenticated && <div className="nav__auth">
        <button className="nav__btn" onClick={toggleLoginForm}>Log in</button>
        <button className="nav__btn" onClick={toggleSignupForm}>Sign up</button>
      </div> }

      {signupForm && <SignUp 
        toggleForm={toggleSignupForm}
        formSubmitted={formSubmitted}
      />}

      {loginForm && <Login
        toggleForm={toggleLoginForm}
        formSubmitted={formSubmitted}
      />}
    </nav>
  );
}

export default Navbar;
