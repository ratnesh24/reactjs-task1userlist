import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

// Name
let name = {
    fName: 'Ratnesh',
    lName: 'Sharma'
};
let fullName = name.fName + ' ' + name.lName;

// Date & Time
let newDate = new Date()
let currHours = newDate.getHours()

// Greetings
let greetings = ""
if (currHours > 1 && currHours < 12) {
    greetings = "Good Morning"
} else if (currHours >= 12 && currHours < 16) {
    greetings = "Good Noon"
} else if (currHours >= 16 && currHours < 20) {
    greetings = "Good Everning"
} else if (currHours >= 20 && currHours <= 24) {
    greetings = "Good Night"
}

function logout() {
    //let isLogin = JSON.parse(localStorage.clear())

    console.log(localStorage.clear())
}

//let welcomeMsg = ""
class Header extends React.Component {
    render() {

        return (
            <>
                <header>
                    <h1 className="logo">{`${fullName}, ${greetings} `}</h1>
                    <nav>
                        <ul>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/users">User List</NavLink></li>
                            <li><NavLink to="/login">Login/Register</NavLink></li>
                            <li><Link onClick={logout}>Logout</Link></li>
                        </ul>
                    </nav>
                </header >
                <div className="clearfix"></div>
            </>
        );
    }
}


export default Header;