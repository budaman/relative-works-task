import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import LoginForm from './components/LoginForm';
import Admin from './components/Admin'
import CreateTask from './components/CreateTask'
import ToggleEdit from './components/ToggleEdit'
import User from './components/User'

class App extends Component {

  state = {
    tasks: [],
    loading: true,
    logged: false,
    toggleLogin: false,
    toggleCreateTask: false,
    toggleEdit: false,
    whologged: [],
    loginList: [],
    editId: ""
  }


  editId = (id)=> {
    this.setState({editId: id})
  }


  toggleLoginForm = () => {
    this.setState({
      toggleLogin: !this.state.toggleLogin
    })
  }

  toggleEdit = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  toggleCreateTask = () => {
    this.setState({
      toggleCreateTask: !this.state.toggleCreateTask
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

refresh = ()=> {
  fetch('/tasks')
     .then(res => res.json())
     .then(tasks => this.setState({
       tasks,
       loading: false
     }));
}



  render() {
    const { logged, toggleLogin, toggleCreateTask, whologged, loginList, tasks, toggleEdit } = this.state
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
        {whologged.status ==="admin" && <Admin
          tasks={tasks}
          toggleCreateTask={this.toggleCreateTask}
          toggleEdit={this.toggleEdit}
          refresh={this.refresh}
          editId={this.editId}
         /> }


        {toggleCreateTask  && <CreateTask
          toggleCreateTask={this.toggleCreateTask}
           loginList={loginList}
           refresh={this.refresh}
         />}
         {toggleEdit && <ToggleEdit
             toggleEdit={this.toggleEdit}
             loginList={loginList}
             refresh={this.refresh}
             editId={this.state.editId}
             tasks={tasks} />}
        {whologged.status ==="user" && <User
         tasks={tasks}
         whologged={whologged}
         refresh={this.refresh}
       />}


      </div>
    );
  }
}

export default App;


function LoggedUser (props) {
   return (
      <div className="admin">
      {  <div className="admin-name">
      { props.user.status==="admin" && 'Adminas: ' + props.user.username}
    </div> }
    {  <div className="admin-name">
    { props.user.status==="user" && 'Vartotojas: ' + props.user.username}
  </div> }
      </div>
   )
}
