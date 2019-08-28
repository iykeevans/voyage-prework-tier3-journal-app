import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Menu } from 'react-feather';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

import SignUp from '../Signup/signup';
import Login from '../Login/login';
import { getToken } from '../../../services/token';

import './navbar.scss';

/**
 * @function Navbar
 * @param {object} props
 * @returns {object} JSX
 */
function Navbar({ authenticated, login, logout, registerUser }) {
  const { username } = getToken() ? jwtDecode(getToken()) : '';

  const [loginForm, setLoginForm] = useState(false);
  const [signupForm, setSignupForm] = useState(false);

  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <span>Digital</span>
        &nbsp;Journal
      </Link>
      <Menu className="nav__menu" />

      {authenticated && (
        <button
          type="submit"
          className="nav__auth nav__auth--true"
          onClick={logout}
        >
          <div className="nav__user">
            <User className="nav__user-icon" color="#F2994A" />
          </div>
          <p className="nav__username">{username}</p>
        </button>
      )}

      {!authenticated && (
        <div className="nav__auth">
          <button
            type="submit"
            className="nav__btn"
            onClick={() => setLoginForm(!loginForm)}
          >
            Log in
          </button>

          <button
            type="submit"
            className="nav__btn"
            onClick={() => setSignupForm(!signupForm)}
          >
            Sign up
          </button>
        </div>
      )}

      {signupForm && (
        <SignUp
          toggleForm={() => setSignupForm(!signupForm)}
          registerUser={registerUser}
        />
      )}

      {loginForm && (
        <Login toggleForm={() => setLoginForm(!loginForm)} login={login} />
      )}
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};
