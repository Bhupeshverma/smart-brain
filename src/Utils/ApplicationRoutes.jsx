import React, { useContext, useEffect } from 'react';
import { Switch, Route, Link, BrowserRouter, Redirect} from 'react-router-dom';
import { AuthRoutes } from '../Views/Auth';
import { ProtectedRoutes } from './ProtectedRoutes';
import { HomeRoutes } from '../Views/Home/HomeRoutes';
import AuthProvider, { AuthContext } from '../Context/AuthProvider';

export const ApplicationRoutes = (props) => {
    const {isAuthenticated , dispatch} = useContext(AuthContext)
    console.log(isAuthenticated, 'applicationRoute');
    
    return (
        <BrowserRouter>
            <Switch>
                <ProtectedRoutes exact path="/" component={HomeRoutes}/> 
                <Route path="/auth" component={AuthRoutes} />
                {/* <Redirect to="/auth" from= "/" /> */}
            </Switch>
		</BrowserRouter>
    )
}
