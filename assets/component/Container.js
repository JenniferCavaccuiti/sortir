import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginApp from "./connexion/LoginApp";
import LoginForm from "./connexion/LoginForm";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import ViewParticpantProfil from "./Profil/ViewParticpantProfil";
import Logout from "./logout/Logout";
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";
import Cancel from "./Cancel/Cancel";
import Footer from "./Footer/Footer"
import addLocalStorage from "./connexion/LoginStorage";
import Logo from "./Menu/Logo";

function Container() {
        return (
            <BrowserRouter>
                {console.log('je passe dans le router')}
                <Logo/>
                <Menu/>
                <Switch>
                    <Route path="/app/cancel" component={Cancel}/>
                    <Route path="/app/create_activity" component={CreateActivity}/>
                    <Route path="/app/menu" component={Menu}/>
                    <Route exact path="/app" component={LoginApp}/>
                    <Route path="/app/sorties" component={ActivitiesView}/>
                    <Route path="/app/loginForm" component={LoginForm}/>
                    <Route path="/app/LoginStorage" component={addLocalStorage}/>
                    <Route path="/app/ajouter-une-sortie" component={CreateActivity}/>
                    <Route path="/app/profil" component={Profil}/>
                    <Route path="/app/logout" component={Logout}/>
                    <Route path="/app/participants/:id" component={ViewParticpantProfil}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
}

export default Container;