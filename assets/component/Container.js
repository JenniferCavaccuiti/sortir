import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from "./connexion/Connexion";
import LoggedIn from "./connexion/loggedIn";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";

function Container() {
        return (
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/app" component={Connexion}/>
                    <Route path="/app/activities" component={ActivitiesView}/>
                    <Route path="/app/loggedIn" component={LoggedIn}/>
                    <Route path="/app/create_activity" component={CreateActivity}/>
                    <Route path="/app/profil" component={Profil}/>
                </Switch>
            </BrowserRouter>
        )
}

export default Container;