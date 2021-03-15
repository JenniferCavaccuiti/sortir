import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TripFilters from "./TripFilters";


class TripView extends Component {


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
                <TripFilters/>

            <button><Link to="/">Créer une sortie</Link></button>
            </div>
        );
    }
}



export default TripView;