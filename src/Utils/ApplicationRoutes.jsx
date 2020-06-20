import React from 'react';
import { Switch, Route, Link, BrowserRouter, Redirect} from 'react-router-dom';
import { AuthRoutes } from '../Containers/Auth';

export const ApplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth" component={AuthRoutes} />
                <Redirect to="/auth" from= "/" />
            </Switch>
		</BrowserRouter>
    )
}
