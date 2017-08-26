import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    loged: false
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
fetch('/tasks')
   .then(res => res.json())
   .then(tasks => this.setState({
     tasks,
     loading: false
   }));
}

  render() {
    const { loged } = this.state
    return (
      <div className="App">
        <Login loged={loged} />

      </div>
    );
  }
}

export default App;
