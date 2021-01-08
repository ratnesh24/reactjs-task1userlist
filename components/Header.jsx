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
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))

        return (
            <>
                <header>
                    {
                        isLogin ?
                            <>
                                <h1 className="logo">Logo Comes Here</h1>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/home">Home</NavLink></li>
                                        <li><NavLink to="/users">User List</NavLink></li>
                                        <li><i className="fa fa-user-circle-o" aria-hidden="true"></i>
                                            <ul>
                                                <li>
                                                    <div className="profileBox">
                                                        <div className="profile">
                                                            <i className="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
                                                            <strong>{fullName}</strong>
                                                            <em>{greetings}</em>
                                                        </div>
                                                        <Link to="/" onClick={logout} className="logout">Logout</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                            :

                            <>
                                <h1 className="logo">{`Guest, ${greetings} `}</h1>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/">Login/Register</NavLink></li>
                                    </ul>
                                </nav>
                            </>
                    }
                </header >
                <div className="clearfix"></div>
            </>
        );
    }
}


export default Header;