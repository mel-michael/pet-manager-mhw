import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PetList from './components/PetList';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <Router>
      <Route exact path="/" component={PetList} />
      <Route exact path="/details" component={PetDetails} />
    </Router>
  ); 
}

export default App;
