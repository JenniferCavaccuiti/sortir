import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Docs from "./Docs";
import Tutorials from "./Tutorials";
import Menu from "./Menu";
import Community from "./Community";

function Container() {

        return (

            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Docs}/>
                    <Route path="/tutorial" component={Tutorials}/>
                    <Route path="/community" component={Community}/>
                </Switch>

            </BrowserRouter>

        )

}

export default Container;