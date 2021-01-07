import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: false
    };
  }
  login() {
    // alert('Login');
    //console.log("Login", this.state)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.log_email,
        password: this.state.log_password
      })
    };
    fetch("https://reqres.in/api/login", requestOptions)
      .then(response => response.json())
      .then(data => console.log("loginResponse", data));
  }
  register() {
    // alert('Register');
    console.log("Register", this.state);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.reg_name,
        email: this.state.reg_email,
        password: this.state.reg_password
      })
    };
    fetch("https://reqres.in/api/register", requestOptions)
      .then(response => response.json())
      .then(data => console.log("registerResponse", data));
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row col-xs-1">
            {!this.state.isRegister ? (
              <div className="form login logReg box">
                <h3 className="title">Login</h3>
                <input
                  type="email"
                  placeholder="Email ID as username"
                  onChange={e => {
                    this.setState({ log_email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="Your password"
                  onChange={e => {
                    this.setState({ log_password: e.target.value });
                  }}
                />
                <div className="row col-xs-2">
                  <button className="btn " onClick={() => this.login()}>
                    Login
                  </button>
                  <Link to="#" className="note forgotPass">
                    Forgot password?
                  </Link>
                </div>
                <div className="note row col-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ isRegister: true })}
                  >
                    Create an account!
                  </button>
                </div>
              </div>
            ) : (
              <div className="form login logReg box">
                <h3 className="title">Create an account</h3>
                <input
                  type="text"
                  placeholder="Your name"
                  onChange={e => {
                    this.setState({ reg_name: e.target.value });
                  }}
                />
                <input
                  type="email"
                  placeholder="Email ID as username"
                  onChange={e => {
                    this.setState({ reg_email: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="Your password"
                  onChange={e => {
                    this.setState({ reg_password: e.target.value });
                  }}
                />
                <div className="row col-xs-2">
                  <button className="btn" onClick={() => this.register()}>
                    Register
                  </button>
                </div>
                <div className="row col-xs-1">
                  <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ isRegister: false })}
                  >
                    Have an account? Log in.
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
