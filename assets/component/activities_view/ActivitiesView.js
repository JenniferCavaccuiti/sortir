import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ActivitiesFilters from "./ActivitiesFilters";
import '/assets/styles/activities_view.css'
import axios from "axios";



class ActivitiesView extends Component {

    state = {
        user : '',
        name:'',


    }

    componentDidMount() {

        //TODO modifier le participant codé en dur

        //const numb = localStorage.getItem("id");
        const numb = 5;

        axios.get(`https://127.0.0.1:8000/api/participants/${numb}` )
            .then(res => {
                const user = res.data;
                this.setState({
                    user : user
                });
            })
    }

    //TODO ajouter le nom du participant

    render() {

        let date = new Date().toLocaleDateString();
        //date = date.toLocaleDateString();
        const user = this.state.user;

        return (
            <div id="trip-view">
                <div id="trip-view-info">
                    <label>Date : </label>{date}<br/>
                    <label>Pseudo : </label>{user.pseudo}<br/>
                </div>

                <ActivitiesFilters user={user} date={date}/>


                {/* TODO add le chemin sur le bouton */}
            <button><Link to="/app/create_activity">Créer une sortie</Link></button>
            </div>
        );
    }
}



export default ActivitiesView;