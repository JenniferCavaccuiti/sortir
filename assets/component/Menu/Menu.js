import React from 'react';
import { NavLink} from "react-router-dom";
import './menu.css'
import './script.js'
import Logout from "../logout/Logout";

function Menu() {
    console.log('je suis dans menu');
    return (
        <>
            <header className="site-header">
                <div className="wrapper site-header__wrapper">
                    <nav className="nav">
                        <button className="nav__toggle" aria-expanded="false" type="button">
                            menu
                        </button>
                        <ul className="nav__wrapper">
                            <li className="nav__item">
                                <NavLink to="/app/accueil">Accueil</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink to="/app/profil">Mon profil</NavLink>
                            </li>
                            <li className="nav__item">
                                <a onClick={Logout}>Deconnexion</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            </>
    );
}

export default Menu;