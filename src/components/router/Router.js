import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/home/HomePage';
import LoginPage from '../../containers/login/LoginPage';

/**
 * The component route would be route all page and  Switch
 * component and inside it, a list or our routes using the Route component.
 */

const Router = () => (
        <Switch>
            <Route exact path='/' component={ HomePage }/>
            <Route exact path='/login' component={ LoginPage }/>
        </Switch>
);

export default Router;
