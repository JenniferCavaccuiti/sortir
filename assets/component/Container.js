import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginApp from "./connexion/LoginApp";
import LoginForm from "./connexion/loginForm";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import ViewParticpantProfil from "./Profil/ViewParticpantProfil";
import TestsJen from "./testsJen";
import Logout from "./logout/Logout";
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";
import addLocalStorage from "./connexion/LoginStorage";
import Redirect from "react-router-dom";
import Logo from "./Menu/Logo";

function Container() {
        return (
            <BrowserRouter>
                {console.log('je passe dans le router')}
                <Logo/>
                <Switch>
                    <Route path="/app/menu" component={Menu}/>
                    <Route exact path="/app" component={LoginApp}/>
                    <Route path="/app/sorties" component={ActivitiesView}/>
                    <Route path="/app/loginForm" component={LoginForm}/>
                    <Route path="/app/LoginStorage" component={addLocalStorage}/>
                    <Route path="/app/ajouter-une-sortie" component={CreateActivity}/>
                    <Route path="/app/profil" component={Profil}/>
                    <Route path="/app/participants/:id" component={ViewParticpantProfil}/>
                    <Route path="/app/test" component={TestsJen}/>
                    <Route path="/app/deconnexion" component={Logout}/>
                </Switch>
            </BrowserRouter>
        )
}

export default Container;