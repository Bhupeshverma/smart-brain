import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Login from '../Login';
import Register from '../Register';
export const AuthRoutes = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    )
}
