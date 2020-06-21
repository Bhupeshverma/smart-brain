import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';

export const ProtectedRoutes = ({component: RouteComponent, ...rest}) => {
    const {isAuthenticated, dispatch} = useContext(AuthContext)
    console.log(isAuthenticated, 'protectedRoute');
    return (
        <Route 
            {...rest}
            render={routeProps => 
                isAuthenticated ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={{pathname: "/auth/login", state: {prevPath: rest.path}}} />
                )
            }
        />
    );
}
