import React from 'react';
import { Redirect } from 'react-router-dom';

function Protected(props) {
    const Comp = props.comp
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    console.log(isLogin)
    return (
        <>
            {
                isLogin ?
                    <Comp />
                    :
                    <Redirect to="/login" />
            }
        </>
    );
}

export default Protected;