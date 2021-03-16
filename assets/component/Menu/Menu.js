import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './menu.css'
import './script.js'
import logo from '../../images/logo_sortir.png'



function Menu() {

    return (
        <header className="site-header">
            <div className="wrapper site-header__wrapper">
                <Link to="/" className="brand"><img height="100" src={logo} alt="logo"/></Link>
                <nav className="nav">
                    <button className="nav__toggle" aria-expanded="false" type="button">
                        menu
                    </button>
                    <ul className="nav__wrapper">
                        <li className="nav__item">
                            <NavLink to="/tutorial">Accueil</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/profil">Mon profil</NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/">Se deconnecter</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Menu;