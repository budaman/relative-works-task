import React, { Component } from 'react';


class LoginForm extends Component {

  state = {
    username: "",
    password: "",
    login: [],
    islogged: false,
    warning: false
  }

  componentDidMount() {
    fetch('/login')
       .then(res => res.json())
       .then(login => this.setState({ login: login }))
  }

  handleLogin = ()=> {
    const { username, password, login } = this.state

    let islogged = login.find((log)=>{
     return  log.username === username && log.password === password ? true: false
    })
    if(islogged) {
    this.props.toggleLoginForm()
    this.props.whologged(islogged)
    this.props.islogged()
    this.setState({
      islogged,
      warning: false
     })
  } else {
    this.setState({warning: true})
  }
  }

  render() {
    const { warning } = this.state
    return (
      <div className="loginForm">
        <div
          className="closeButton"
          onClick={()=> {
            this.props.toggleLoginForm()
          }}
          > X </div>
        { warning && <div className="warning">
            Password or Username is incorect
          </div>}
          <div className="inputs">
            <input
              type='text'
              placeholder='username'
              onChange = {(e) =>this.setState({username: e.target.value})}
              ></input>
            <input
              type='password'
              placeholder='password'
              onChange = {(e) =>this.setState({password: e.target.value})}
              ></input>
            <button
              onClick={this.handleLogin}
              >Log In</button>
          </div>
      </div>
    );
  }
}

export default LoginForm;
