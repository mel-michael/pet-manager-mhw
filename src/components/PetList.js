import React, { PureComponent } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { IoIosSearch } from "react-icons/io";

import Pet from './Pet';
import Heart from '../library/Heart';
import { ANIMALS } from '../data'
import '../App.css';

const loadingStyle = {
  display: 'block',
  margin: '300px auto',
}

const savedStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  zIndex: '100',
  cursor: 'pointer'
}

class PetList extends PureComponent {
  state = {
    searchValue: '',
    animalList: [],
    filtered: [],
    isSearched: false,
    type: 'all'
  }

  componentDidMount() {
    // setTimeout is added here to simulate loading
    setTimeout(() => {
      // store data to state
      this.setState({ animalList: ANIMALS, filtered: ANIMALS });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value, isSearched: false });
  }

  handleSearch = () => {
    const { searchValue, animalList } = this.state;
    const result = animalList.filter(animal => animal.name.toLowerCase().includes(searchValue.toLowerCase()))
    this.setState({ isSearched: true, filtered: result })
  }

  handleFilter = (type) => {
    let result;
    const { animalList } = this.state;

    if (type === 'all') {
      result = animalList;
    } else {
      result = animalList.filter(animal => animal.type.toLowerCase().includes(type.toLowerCase()))
    }
    this.setState({ type, isSearched: true, filtered: result })
  }

  handleSave = (petId) => {
    const { animalList } = this.state;
    const updatedAnimalList = animalList.map(animal => {
      if (animal.id === petId) {
        animal.saved = !animal.saved;
        return animal;
      }
      return animal;
    });
    this.setState({ animalList: updatedAnimalList })
  }

  render() {
    const { searchValue, animalList, isSearched, filtered, type } = this.state;
    let List;

    const isEmpty = animalList.length === 0;
    // show loading component if 'pet list' is empty
    if (isEmpty) {
      return (
        <ClimbingBoxLoader
          css={loadingStyle}
          sizeUnit={'px'}
          size={20}
          color={'#05d5a6'}
          loading={isEmpty}
        />
      );
    }

    if (isSearched) {
      List = filtered.map(animal => (
        <li key={animal.id} style={{ position: 'relative' }}>
          <Pet pet={animal} />
          <div style={savedStyle}onClick={() => this.handleSave(animal.id)}>
            <Heart saved={animal.saved} />
          </div>
        </li>
      ))
    } else {
      List = animalList.map(animal => (
        <li key={animal.id} style={{ position: 'relative' }}>
          <Pet pet={animal} />
          <div style={savedStyle} onClick={() => this.handleSave(animal.id)}>
            <Heart style={savedStyle} saved={animal.saved} />
          </div>
        </li>
      ))
    }

    return (
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="Search Pets..."
            className="search_input" value={searchValue}
            onChange={this.handleChange}
          />
          <button className="search_icon" onClick={this.handleSearch}><IoIosSearch /></button>
        </header>
        <div className="filter_section">
          <h4>Type</h4>
          <ul className="pet_type">
            <li className={type === 'all' ? 'active' : ''}
              onClick={() => this.handleFilter('all')}>
              All
            </li>
            <li className={type === 'bunny' ? 'active' : ''}
              onClick={() => this.handleFilter('bunny')}>
              Bunnies
            </li>
            <li className={type === 'cat' ? 'active' : ''}
              onClick={() => this.handleFilter('cat')}>
              Cats
            </li>
            <li className={type === 'dog' ? 'active' : ''}
              onClick={() => this.handleFilter('dog')}>
              Dogs
            </li>
          </ul>
        </div>
        <div className="pet_wrapper">
          <ul className="pet_list">{List}</ul>
        </div>
      </div>
    );
  }
}

export default PetList;
