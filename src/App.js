import React from 'react';
import {CardList} from './components/card-list/card-list-component'

import './App.css';
import { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
constructor() {
  super()

  this.state = {
    monsters: [],
    searchfield: ''

  }

}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
      this.setState({monsters: res})
      return res;
    })
    .then(res => console.log(res))
    }

  handleChange = (e)  => {
    this.setState({ searchfield: e.target.value})
  }

  render() {
    const {monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))


    return (
      <div className="App">
      <h1>Monster Search</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={this.handleChange}
        />

     
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
