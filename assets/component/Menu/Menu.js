import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Redirect} from "react-router-dom";
import './menu.css'
import './script.js'
import Logout from "../logout/Logout";

function IsConnected(props) {
    // console.log('isConnected');
    // localStorage.clear();
    console.log('pseudo de l\'user connecté' + localStorage.getItem('id'));

    if (localStorage.getItem('id') !== null) {
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
                        <li className="nav__item">
                            <a onClick={Logout}>Deconnexion</a>
                        </li>
                    </ul>
                </nav>
        );
    } else {
        return <Redirect to="/app"/>
    }

}

function Menu() {
    console.log('je suis dans menu');
    return (
        <>
            <header className="site-header">
                <div className="wrapper site-header__wrapper">
                    <IsConnected/>
                </div>
            </header>
            </>
    );
}

export default Menu;