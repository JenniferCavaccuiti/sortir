import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Logout(props) {
    handleClickLogout = handleClickLogout.bind(this);

    function handleClickLogout(event) {
        localStorage.clear();
        axios.get('/logout')
            .then(res => {
                localStorage.remove('id');
                localStorage.removeItem('pseudo');
                localStorage.removeItem('isAdmin');
                console.log('deconnexion ok');
                this.props.history.push('/');
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return(
        <li className="nav__item">
            <a href={"/app"} onClick={handleClickLogout(event)}>Deconnexion</a>
        </li>

    );
}

export default Logout;