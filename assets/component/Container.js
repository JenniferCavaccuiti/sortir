import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Connexion from "./connexion/Connexion";
import Tutorials from "./Tutorials";
import Menu from "./Menu/Menu";
import Profil from "./Profil/Profil";
import Footer from "./Footer/Footer"
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";

function Container() {

        return (

            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route exact path="/" component={Connexion}/>
                    <Route path="/activites" component={ActivitiesView}/>
                    <Route path="/tutorial" component={Tutorials}/>
                    <Route path="/create_activity" component={CreateActivity}/>
                    <Route path="/profil" component={Profil}/>
                </Switch>
                <Footer/>
            </BrowserRouter>

        )

}

export default Container;