import React, { Component } from 'react';


class Login extends Component {

  handleLogin = ()=> {
    console.log('labas')
  }


  render() {
    const { loged } = this.props
    return (
      <div className="App">
        <div className="navCon">
          <div className="header">
            <div className="title">Task Manager</div>
            </div>
          <div className="loginCon">
            {!loged &&<button
              onClick={this.handleLogin}
              >Log In</button>}
            {loged && <button>Log Out</button>}
          </div>
        </div>

      </div>
    );
  }
}

export default Login;
