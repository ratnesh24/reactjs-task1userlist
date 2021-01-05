import React from 'react';
import { Link } from 'react-router-dom';

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

let welcomeMsg = ""

function Header(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        welcomeMsg = 'Hi ' + fullName
    }
    else {
        welcomeMsg = 'Hi Guest'
    }

    return (
        <>
            <header>
                <h1 className="logo">{`${welcomeMsg}, ${greetings} `}</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">User List</Link></li>
                    </ul>
                </nav>
            </header >
            <div className="clearfix"></div>
        </>
    );
}

export default Header;