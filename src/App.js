import './App.css';
import React from 'react'
import { Cardlist } from './components/Card-list';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    // let monsters = this.state.monsters;
    // let search = this.state.search;

    const { monsters, search } = this.state;

    const filterd = monsters.filter((monster) => monster.name.toLowerCase().includes(search))

    return (
      <>
        <h1 className="heading">Indigenious Art of Indus Valley</h1>
        <div className="inputSer">

              <input type='search' placeholder='search' onChange={e => this.setState({ search: e.target.value })} />
        </div>
             
        <Cardlist names={filterd} />
      </>
    )
  }
}

export default App
