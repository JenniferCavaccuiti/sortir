import React from "react";
import axios from "axios";

const Logout = function (props) {
    localStorage.clear();
    axios.get('/logout').then(r => {
        window.location.href = '/app';
    });
}

export default Logout;