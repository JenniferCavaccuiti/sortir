import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './menu.css'
import './script.js'
import logo from '../../images/logo_sortir.png'
//import Logout from "../logout/Logout";

function IsConnected(props) {
    if (localStorage.length) {
        console.log('loggué');
        return (
            <nav className="nav">
                <button className="nav__toggle" aria-expanded="false" type="button">
                    menu
                </button>
                <ul className="nav__wrapper">
                    <li className="nav__item">
                        <NavLink to="/app/activities">Accueil</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="/app/profil">Mon profil</NavLink>
                    </li>
                    {/*<Logout/>*/}
                </ul>
            </nav>
        )
    }
    console.log('pas loggué');
    return null;
}


function Menu() {
    return (
        <header className="site-header">
            <div className="wrapper site-header__wrapper">
                <Link to="/" className="brand"><img height="100" src={logo} alt="logo"/></Link>
                <IsConnected/>
            </div>
        </header>
    );
}

export default Menu;