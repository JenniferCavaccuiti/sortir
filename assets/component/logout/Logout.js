import React from "react";
import axios from "axios";
import  {Redirect} from "react-router-dom";

const Logout = function (props) {
        console.log('je rentre dans le logout');
        localStorage.clear();
        console.log('localstorage vide');
        axios.get('/logout').then(r => {
                    // this.props.history.push('/app');
        });
        // return <Redirect to="/app"/>;
}

export default Logout;