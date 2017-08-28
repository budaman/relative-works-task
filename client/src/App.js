import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    loged: false,
    toggleLogin: false,
    whoLoged: []
  }

  toggleLoginForm = () => {
    this.setState({
      toggleLogin: !this.state.toggleLogin
    })
  }

  isLoged = ()=> {
    this.setState({
      loged: !this.state.loged
    })
  }

  whoLoged = (user)=> {
    this.setState({
      whoLoged: user
    })
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
    const { loged, toggleLogin } = this.state
    return (
      <div className="App">
        <Login loged={loged}
          toggleLoginForm={this.toggleLoginForm}
          isLoged={this.isLoged}
        />
        {toggleLogin && <LoginForm
           toggleLoginForm={this.toggleLoginForm}
           isLoged={this.isLoged}
           whoLoged={this.whoLoged}
          />}
          <LogedUser />
      </div>
    );
  }
}

export default App;
