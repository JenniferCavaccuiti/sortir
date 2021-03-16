import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ActivitiesFilters from "./ActivitiesFilters";
import '/assets/styles/activities_view.css'

class ActivitiesView extends Component {


    //TODO ajouter le nom du participant

    render() {

        let date = new Date();
        date = date.toLocaleDateString();

        return (
            <div id="trip-view">
                <div id="trip-view-info">
                    <label>Date : </label>{date}<br/>
                    <label>Nom : </label>XXXXX
                </div>
                <ActivitiesFilters/>
                {/* TODO add le chemin sur le bouton */}
            <button><Link to="/">Créer une sortie</Link></button>
            </div>
        );
    }
}



export default ActivitiesView;