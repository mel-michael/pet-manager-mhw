import React from 'react';

import Pet from './Pet';
import { animals } from '../data'
import '../App.css';

const PetList = () => (
  <div className="App">
    <header className="App-header">
      <input type="text" placeholder="Search Pets..." className="search_input" />
    </header>
    <div className="pet_wrapper">
      <ul className="pet_list">
        {
          animals.map(animal => (<li key={animal.id}><Pet pet={animal} /></li>))
        }
      </ul>
    </div>
  </div>
);

export default PetList;
