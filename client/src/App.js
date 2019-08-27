import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import Navbar from './components/containers/Navbar/navbar';
import Home from './pages/Home/home';
import Journal from './pages/Journal/journal';
import { setToken, crushToken, getToken } from './services/token';

import 'react-toastify/dist/ReactToastify.css';

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
      toast.success(data.message);
      setToken(data.token);
      setAuthenticated(true);
      toggleForm();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.error);
        toggleForm();
      }
    }
  };

  const registerUser = async (e, userInfo, toggleForm) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${endpoint}/signup`, userInfo);
      toast.success(data.message);
      setToken(data.token);
      setAuthenticated(true);
      toggleForm();
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(error.response.data.error);
        toggleForm();
      }
    }
  };

  const logout = () => {
    crushToken();
    toast.warn('you have been logged out');
    setAuthenticated(false);
  };

  return (
    <Router>
      <ToastContainer />
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
