import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    login() {
        alert('Login');
        console.log("Login", this.state)
    }
    register() {
        alert('Register');
        console.log("Register", this.state)
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="row col-2">
                        <div className="form login box ma-auto">
                            <h3 className="title">Login</h3>
                            <input type="email" placeholder="Email ID"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <input type="password" placeholder="Password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <button className="btn " onClick={() => this.login()}>Login</button>
                            <div className="note row col-1">
                                <div>
                                    <Link to="#">Forgot password?</Link>
                                </div>
                            </div>
                        </div>
                        <div className="form login box ma-auto">
                            <h3 className="title">Create an account</h3>
                            <input type="text" placeholder="Name"
                                onChange={(e) => { this.setState({ name: e.target.value }) }} />
                            <input type="email" placeholder="Email ID"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} />
                            <input type="password" placeholder="Password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <button className="btn " onClick={() => this.register()}>Register</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
