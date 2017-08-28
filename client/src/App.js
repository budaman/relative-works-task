import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    logged: false,
    toggleLogin: false,
    whologged: []
  }

  toggleLoginForm = () => {
    this.setState({
      toggleLogin: !this.state.toggleLogin
    })
  }

  islogged = ()=> {
    this.setState({
      logged: !this.state.logged
    })
  }

  whologged = (user)=> {
    this.setState({
      whologged: user
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
    const { logged, toggleLogin, whologged } = this.state
    return (
      <div className="App">
        <Login logged={logged}
          toggleLoginForm={this.toggleLoginForm}
          islogged={this.islogged}
          whologged={this.whologged}
        />
        {toggleLogin && <LoginForm
           toggleLoginForm={this.toggleLoginForm}
           islogged={this.islogged}
           whologged={this.whologged}
          />}
          <LoggedUser
          user={whologged}
        />
      </div>
    );
  }
}

export default App;


function LoggedUser (props) {
   return (
      <div className="admin">
      {  <div className="admin-name">
      { props.user.length!==0 && 'Connected as ' + props.user.username}
    </div> }
    {  <div className="admin-name">
    { props.user.length===0 && 'Connected as guess'}
  </div> }
      </div>
   )
}
