import React, { Component } from 'react';


class Login extends Component {



  render() {
    const { logged } = this.props

    return (
        <div className="navCon">
          <div className="header">
            <div className="title">Task Manager</div>
            </div>
          <div className="loginCon">
            {!logged &&<button
              onClick={()=>{
                this.props.toggleLoginForm()
              }}
              >Log In</button>}
            {logged &&
              <button
              onClick={()=> {
                this.props.islogged()
                this.props.whologged('')
              }}
              >Log Out</button>}

          </div>
        </div>
    );
  }
}

export default Login;
