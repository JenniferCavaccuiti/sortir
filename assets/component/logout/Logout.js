import React from "react";
import axios from "axios";

const Logout = function (props) {
    console.log('je rentre dans le logout');
    localStorage.clear();
    console.log('localstorage vide');
    axios.get('/logout').then(r => {
        window.location.href = '/app';
    });
}

export default Logout;