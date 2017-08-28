import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import LoginForm from './components/LoginForm';
import Admin from './components/Admin.js'

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    logged: false,
    toggleLogin: false,
    whologged: [],
    loginList: []
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
   fetch('/login')
      .then(res => res.json())
      .then(login => this.setState({ loginList: login }))
}

  render() {
    const { logged, toggleLogin, whologged, loginList, tasks } = this.state
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
           loginList={loginList}
          />}
          <LoggedUser
          user={whologged}
        />
        {whologged.status ==="admin" && <Admin /> }
        <Admin
          tasks={tasks}
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
      { props.user.status==="admin" && 'Connected as admin: ' + props.user.username}
    </div> }
    {  <div className="admin-name">
    { props.user.status==="user" && 'Connected as user: ' + props.user.username}
  </div> }
      </div>
   )
}
