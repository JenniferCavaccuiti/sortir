import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import './menu.css'
import './script.js'
import Logo from './Logo'
import Logout from "../logout/Logout";

function IsConnected(props) {
    console.log('isConnected');
    console.log('pseudo de l\'user connecté' + localStorage.getItem('pseudo'));
    if (localStorage.getItem('id') !== '') {
        console.log('loggué');

        return (

                <nav className="nav">
                    <button className="nav__toggle" aria-expanded="false" type="button">
                        menu
                    </button>
                    <ul className="nav__wrapper">
                        <li className="nav__item">
                            <NavLink to="/app/sorties">Accueil</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/app/profil">Mon profil</NavLink>
                        </li>
                        <Logout/>
                    </ul>
                </nav>


        );
    } else {
        console.log('pas loggué');
        return null;
    }

}

function Menu() {
    console.log('je suis dans menu');
    return (
        <>
            <header className="site-header">
                <div className="wrapper site-header__wrapper">
                    <Logo/>
                    <IsConnected/>
                </div>
            </header>
            <Redirect to="/app/sorties"/>
        </>
    );
}

export default Menu;