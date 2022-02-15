import './App.css';
import React from 'react'
import { Cardlist } from './components/Card-list';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {



    return (
      <>
        <Cardlist names={this.state.monsters} />
      </>
    )
  }
}

export default App
