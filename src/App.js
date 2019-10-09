import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PetList from './components/PetList';

function App() {
  return (
    <Router>
      <Route exact path="/" component={PetList} />
    </Router>
  );
}

export default App;
