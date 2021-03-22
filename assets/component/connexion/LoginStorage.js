import axios from "axios";
import React from "react";
import Redirect from "react-router-dom";

const addLocalStorage = function () {
    console.log('je suis dans localStorage');

    axios.get(`/getuser`, {
        withCredentials: true
    }).then(res => {
        const loggedUser = res.data;

        localStorage.setItem('id', loggedUser.id);
        localStorage.setItem('pseudo', loggedUser.pseudo);
        localStorage.setItem('isAdmin', loggedUser.isAdmin);
        console.log("localStorage : l'id de l'user est : " + localStorage.getItem('id'));
    });
    // return <Redirect to="/app/menu"/>;

}
export default addLocalStorage;