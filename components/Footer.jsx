import React from 'react';

// Date & Time
let newDate = new Date()
let date = newDate.getDate()
let month = newDate.getMonth()
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let year = newDate.getFullYear()

function Footer() {
    return (
        <>
            <footer>
                <div className="date">
                    {`${date} ${monthName[month]}, ${year} / ${new Date().toLocaleTimeString()}`}
                </div>
            </footer >
        </>
    );
}

export default Footer;