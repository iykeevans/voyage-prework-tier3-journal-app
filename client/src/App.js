import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/containers/Navbar/navbar';
import Home from './pages/Home/home';
import Journal from './pages/Journal/journal';
import { setToken, crushToken, getToken } from './services/token';

/**
 * @function App
 * @description main app component
 * @returns {object} JSX
 */
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setAuthenticated(true);
    }
  }, [authenticated]);

  const endpoint = 'https://chingu-journal-app.herokuapp.com/api/v1/auth';

  const login = async (e, userInfo, toggleForm) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${endpoint}/signin`, userInfo);
      alert(data.message);
      setToken(data.token);
      setAuthenticated(true);
      toggleForm();
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (e, userInfo) => {
    e.preventDefault();
    try {
      console.log('register button clicked', userInfo);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    crushToken();
    alert('you have been logged out');
    setAuthenticated(false);
  };

  return (
    <Router>
      <Navbar
        authenticated={authenticated}
        login={login}
        logout={logout}
        registerUser={registerUser}
      />

      <Switch>
        <Route
          path="/"
          exact
          render={props => <Home authenticated={authenticated} {...props} />}
        />
        <Route path="/journal/:id" component={Journal} />
      </Switch>
    </Router>
  );
}

export default App;
