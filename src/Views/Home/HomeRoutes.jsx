import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './Home'

export const HomeRoutes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    )
}
