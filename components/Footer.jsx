import React, { useState, useEffect } from 'react';

// Date & Time
let newDate = new Date()
let date = newDate.getDate()
let month = newDate.getMonth()
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let year = newDate.getFullYear()
//let time = new Date().toLocaleTimeString()
let curdate = date + ' ' + monthName[month] + ', ' + year

const Footer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });
    function tick() {
        setDate(new Date());
    }
    return (
        <>
            <footer>
                <div className="date" >{curdate + ' / ' + date.toLocaleTimeString()}</div>
            </footer >
        </>
    );
}

// function tick() {
// }

export default Footer;

