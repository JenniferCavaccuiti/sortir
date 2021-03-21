import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from "./connexion/Connexion";
import LoggedIn from "./connexion/loggedIn";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import ViewParticpantProfil from "./Profil/ViewParticpantProfil";
//import TestsJen from "./testsJen";
//import Logout from "./logout/Logout";
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";
import Cancel from "./Cancel/Cancel";
import Footer from "./Footer/Footer"

function Container() {
        return (
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/app" component={Connexion}/>
                    <Route path="/app/activities" component={ActivitiesView}/>
                    <Route path="/app/cancel" component={Cancel}/>
                    <Route path="/app/loggedIn" component={LoggedIn}/>
                    <Route path="/app/create_activity" component={CreateActivity}/>
                    <Route path="/app/profil" component={Profil}/>
                    <Route path="/app/participants" component={ViewParticpantProfil}/>
                    {/*<Route path="/app/test" component={TestsJen}/>*/}
                    {/*<Route path="/app/logout" component={Logout}/>*/}
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
}

export default Container;