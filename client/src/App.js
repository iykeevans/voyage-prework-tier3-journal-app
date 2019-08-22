import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/containers/Navbar/navbar';
import Home from './pages/Home/home';
import Journal from './pages/Journal/journal';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar isAuthenticated={authenticated}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/journal/:id' component={Journal} />
      </Switch>
    </Router>
  );
}

export default App;
