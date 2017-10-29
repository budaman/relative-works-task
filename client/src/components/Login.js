import React, { Component } from 'react';


class Login extends Component {



  render() {
    const { logged } = this.props

    return (
        <div className="navCon">
          <div className="header">
            <div className="title">Praktikos Užduotis</div>
            </div>
          <div className="loginCon">
            {!logged &&<button
              onClick={()=>{
                this.props.toggleLoginForm()
              }}
              >Prisijungti</button>}
            {logged &&
              <button
              onClick={()=> {
                this.props.islogged()
                this.props.whologged('')
              }}
              >Atsijungti</button>}

          </div>
        </div>
    );
  }
}

export default Login;
