import React from 'react';
import './App.css';
import { animals } from './data';
import PetCard from './library/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Search Pets..." className="search_input" />
      </header>
      <div className="pet_wrapper">
        <ul className="pet_list">
          {
            animals.map(animal => (<li key={animal.id}><PetCard pet={animal} /></li>))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
