import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import Login from '../../Login';
import Dashboard from '../../Dashboard';
import About from '../../About';
import Register from '../../pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
           
             <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/Dashboard">
                    <Dashboard />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
            
            </Switch>
        </Router>
    );
}

export default Routes;