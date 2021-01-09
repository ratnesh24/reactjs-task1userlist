// import React, { Component } from 'react';
import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Header from './Header';

// const history = createBrowserHistory();

class Login extends Component {
    constructor() {
        super()
        this.state = {
            log_email: "",
            log_password: "",
            reg_name: "",
            reg_email: "",
            reg_password: "",
            isRegister: false
        }
    }

    login() {


        // alert('Login');
        //console.log("Login", this.state)
        if (this.state.log_email === "") {
            alert("Please enter email");
            return;
        } else if (this.state.log_password === "") {
            alert("Please enter password");
            return;
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.log_email, password: this.state.log_password })
        };

        fetch('https://reqres.in/api/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("loginResponse", data);
                console.log("loginToken", data.token);
                //localStorage.setItem("isLogin", JSON.stringify(data.token))
                // data.token
                //     ? localStorage.setItem("isLogin", JSON.stringify(data.token))

                //     : alert("Invalid login");
                if (data.token) {
                    localStorage.setItem("isLogin", JSON.stringify(data.token))
                    this.props.history.push("/");
                } else {
                    alert("Invalid login");
                }
            });

    }
    register() {
        // alert('Register');
        if (this.state.reg_name === "") {
            alert("Please enter name");
            return;
        } else if (this.state.reg_email === "") {
            alert("Please enter email");
            return;
        } else if (this.state.reg_password === "") {
            alert("Please enter password");
            return;
        }
        console.log("Register", this.state)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: this.state.reg_name, email: this.state.reg_email, password: this.state.reg_password })
        };
        fetch('https://reqres.in/api/register', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("registerResponse", data);
                console.log("isLogin", data.token);
                //localStorage.setItem("isLogin", JSON.stringify(data.token))
                data.token
                    ? localStorage.setItem("isLogin", JSON.stringify(data.token))
                    : alert("Invalid Register");
            });
    }
    render() {
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))
        return (
            <>
                {isLogin ? <Redirect to="/home" /> : null}
                <Header />
                <div className="container">
                    <div className="row col-xs-1">
                        {
                            !this.state.isRegister ?
                                <div className="form login logReg box">
                                    <h3 className="title">Login</h3>
                                    <input type="email" id="log_email" placeholder="Email ID as username"
                                        onChange={(e) => { this.setState({ log_email: e.target.value }) }} />
                                    <input type="password" id="log_password" placeholder="Your password"
                                        onChange={(e) => { this.setState({ log_password: e.target.value }) }} />
                                    <div className="row col-xs-2">
                                        <button className="btn " onClick={() => this.login()}>Login</button>
                                        <Link to="#" className="note forgotPass">Forgot password?</Link>
                                    </div>
                                    <div className="note row col-2">
                                        <button className="btn btn-secondary"
                                            onClick={() => this.setState({ isRegister: true })}>
                                            Create an account!</button>
                                    </div>
                                </div>
                                :
                                <div className="form login logReg box">
                                    <h3 className="title">Create an account</h3>
                                    <input type="text" id="reg_name" placeholder="Your name"
                                        onChange={(e) => { this.setState({ reg_name: e.target.value }) }} />
                                    <input type="email" id="reg_email" placeholder="Email ID as username"
                                        onChange={(e) => { this.setState({ reg_email: e.target.value }) }} />
                                    <input type="password" id="reg_password" placeholder="Your password"
                                        onChange={(e) => { this.setState({ reg_password: e.target.value }) }} />
                                    <div className="row col-xs-2">
                                        <button className="btn" onClick={() => this.register()}>Register</button>
                                    </div>
                                    <div className="row col-xs-1">
                                        <button className="btn btn-secondary"
                                            onClick={() => this.setState({ isRegister: false })}>
                                            Have an account? Log in.</button>
                                    </div>
                                </div>
                        }

                    </div>
                </div >
            </>
        )
    }
}

export default withRouter(Login);