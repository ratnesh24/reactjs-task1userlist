import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';

class Error404 extends React.Component {
    render() {
        return <>
            <Header />
            <h1 className="title">Error 404</h1>
            <p style={{ textAlign: "center" }}>
                Content not found...<br /><br />
                <Link to="/" className="btn text-white">Go to Home </Link>
            </p>
        </>;
    }
}
export default Error404;
