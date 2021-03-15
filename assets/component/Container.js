import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Docs from "./Docs";
import Tutorials from "./Tutorials";
import Menu from "./Menu";
import Community from "./Community";

function IsConnected(props) {
    const {isLogged} = props;
    if (isLogged) {
        <Menu/>
    }
    return null;
}

function Container(props) {

    return (

        <BrowserRouter>

        <IsConnected/>
            <Switch>
                <Route exact path="/" component={Connexion}/>
                <Route path="/tutorial" component={Tutorials}/>
                <Route path="/community" component={Community}/>
            </Switch>

        </BrowserRouter>

    )

}

export default Container;