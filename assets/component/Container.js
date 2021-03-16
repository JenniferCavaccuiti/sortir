import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Docs from "./Docs";
import Tutorials from "./Tutorials";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";

function Container() {

        return (

            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Docs}/>
                    <Route path="/tutorial" component={Tutorials}/>
                    <Route path="/profil" component={Profil}/>
                </Switch>
            </BrowserRouter>

        )

}

export default Container;