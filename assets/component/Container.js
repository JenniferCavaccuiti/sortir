import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from "./connexion/Connexion";
import Tutorials from "./Tutorials";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import ActivitiesView from "./activities_view/ActivitiesView";

function Container() {

        return (

            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Connexion}/>
                    <Route path="/activites" component={ActivitiesView}/>
                    <Route path="/tutorial" component={Tutorials}/>
                    <Route path="/profil" component={Profil}/>
                </Switch>

            </BrowserRouter>

        )

}

export default Container;