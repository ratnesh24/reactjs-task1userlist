import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Protected = ({ component: Comp, ...rest }) => (
    //let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    < Route
        {...rest}
        render={(props) =>
            localStorage.getItem('isLogin') ? (<Comp {...props} />)
                : <Redirect to="/login" />
        }
    />
)

export default Protected;