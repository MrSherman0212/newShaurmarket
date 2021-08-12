import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Component />
            }}
        >

        </Route>
    );
};

export default PrivateRoute;