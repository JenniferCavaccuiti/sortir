import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Docs</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/community">Community</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;