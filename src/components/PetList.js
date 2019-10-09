import React, { PureComponent } from 'react';

import Pet from './Pet';
import { IoIosSearch } from "react-icons/io";

import { animals } from '../data'
import '../App.css';

class PetList extends PureComponent {
  state = {
    searchValue: '',
    animalList: [],
    filtered: [],
    isSearched: false,
  }

  componentDidMount() {
    this.setState({ animalList: animals, filtered: animals })
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value, isSearched: false });
  }

  handleSearch = () => {
    const { searchValue, animalList } = this.state;
    const result = animalList.filter(animal => animal.name.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState({ isSearched: true, filtered: result })
  }

  render() {
    const { searchValue, animalList, isSearched, filtered } = this.state;
    let List;

    if (isSearched) {
      List = filtered.map(animal => (<li key={animal.id}><Pet pet={animal} /></li>))
    } else {
      List = animalList.map(animal => (<li key={animal.id}><Pet pet={animal} /></li>))
    }

    return (
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="Search Pets..."
            className="search_input" value={searchValue}
            onChange={this.handleChange}
          />
          <span className="search_icon" onClick={this.handleSearch}><IoIosSearch /></span>
        </header>
        <div className="filter_section">
          <h4 className="title">Type</h4>
          <ul className="breeds">
            <li className="active">Bunnies</li>
            <li>Cats</li>
            <li>Dogs</li>
            <li>Toads</li>
          </ul>
        </div>
        <div className="pet_wrapper">
          <ul className="pet_list">
            {List}
          </ul>
        </div>
      </div>
    );
  }
}

export default PetList;
