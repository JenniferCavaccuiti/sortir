import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from "./connexion/Connexion";
import Tutorials from "./Tutorials";
import Menu from "./Menu";
import Community from "./Community";



function Container(props) {

    return (

        <BrowserRouter>


            <Menu/>
            <Switch>
                <Route exact path="/" component={Connexion}/>
                <Route path="/tutorial" component={Tutorials}/>
                <Route path="/community" component={Community}/>
            </Switch>

        </BrowserRouter>

    )

}

export default Container;