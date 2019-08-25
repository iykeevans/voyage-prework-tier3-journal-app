import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/containers/Navbar/navbar';
import Home from './pages/Home/home';
import Journal from './pages/Journal/journal';
import MyJournals from './pages/MyJournals/myJournals';
import { getToken } from './services/token';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const formSubmitted = () => {
    setAuthenticated(!authenticated);
  }

  useEffect(() => {
    console.log('=====++++++++>', getToken());
    getToken() && setAuthenticated(true);
  }, [authenticated]);

  return (
    <Router>
      <Navbar
        isAuthenticated={authenticated}
        formSubmitted={formSubmitted}
      />
      <Switch>
        <Route 
          path='/'
          exact 
          render={ (props) =><Home isAuthenticated={authenticated} {...props} /> } 
        />
        <Route path='/journal/:id' component={Journal} />
        <Route
          path="/myjournals"
          render={ (props) => <MyJournals isAuthenticated={authenticated} {...props} /> }
        />
      </Switch>
    </Router>
  );
}

export default App;
