import React, { Component } from 'react';


class Login extends Component {



  render() {
    const { loged } = this.props

    return (
      <div>
        <div className="navCon">
          <div className="header">
            <div className="title">Task Manager</div>
            </div>
          <div className="loginCon">
            {!loged &&<button
              onClick={()=>{
                this.props.toggleLoginForm()
              }}
              >Log In</button>}
            {loged &&
              <button
              onClick={()=> this.props.isLoged()}
              >Log Out</button>}

          </div>
        </div>

      </div>
    );
  }
}

export default Login;
