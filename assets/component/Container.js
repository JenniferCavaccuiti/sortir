import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginApp from "./connexion/LoginApp";
import LoginForm from "./connexion/LoginForm";
import Profil from "./Profil/Profil";
import ViewParticpantProfil from "./Profil/ViewParticpantProfil";
import Logout from "./logout/Logout";
import ActivitiesView from "./activities_view/ActivitiesView";
import CreateActivity from "./Create_activity/CreateActivity";
import Cancel from "./Cancel/Cancel";
import Footer from "./Footer/Footer"
import Logo from "./Menu/Logo";
import Menu from "./Menu/Menu";
import UpdateActivity from "./Update_activity/UpdateActivity";

class Container extends Component {

    state = {
        menu : ''
    }

    render() {


        //let displayMenu = (localStorage.length > 0) ? (this.setState({menu : true})) : (this.setState({menu: false}));

        return (
            <BrowserRouter>
                {console.log('je passe dans le router')}

                <Logo/>

                {(localStorage.length > 0) ? <Menu/> : <div></div>}

                <Route exact path="/app">
                    {(localStorage.length > 0) ? <ActivitiesView/> : <LoginApp/>}
                </Route>

                <Footer/>

                <Switch>
                    <Route path="/app/annuler-une-sortie" component={Cancel}/>
                    <Route path="/app/accueil" component={ActivitiesView}/>
                    <Route path="/app/loginForm" component={LoginForm}/>
                    <Route path="/app/ajouter-une-sortie" component={CreateActivity}/>
                    <Route path="/app/modifier-une-sortie" component={UpdateActivity}/>
                    <Route path="/app/profil" component={Profil}/>
                    <Route path="/app/logout" component={Logout}/>
                    <Route exact path="/app/login" component={LoginApp}/>
                    <Route path="/app/participants/:id" component={ViewParticpantProfil}/>
                </Switch>

            </BrowserRouter>


        )
    }



}

export default Container;