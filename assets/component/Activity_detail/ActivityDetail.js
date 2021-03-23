import React, {Component} from "react";
import './activity_detail.css';
import axios from 'axios';
import {Link} from "react-router-dom";


export default class ActivityDetail extends Component {

    state = {
        activity: this.props.location.state.activity
    }


    constructor(props) {
        super(props);
        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.props.history.push('/app/accueil');
    }

    componentDidMount() {


    }

    render() {
        const activity = this.state.activity;
        console.log(activity)
        return (
            <div className="detail_container">
                <h2 className="detail_title">Afficher une sortie</h2>
                <div className="detail_form_container">
                    <div className="detail_form">
                        <div className="left-detail-box">
                            <div className="detail_box">
                                <label className="info_label">Nom de la sortie :</label>
                                <span>{activity.name}</span>
                            </div>
                            <div className="detail_box">
                                <label className="info_label">Date de la sortie :</label>
                                <span>{new Date(activity.dateTimeStart).toLocaleString()}</span>
                            </div>
                            <div className="detail_box">
                                <label className="info_label">Date limite d'inscription :</label>
                                <span>{new Date(activity.registrationDeadline).toLocaleDateString()}</span>
                            </div>
                            <div className="detail_box">
                                <label className="info_label">Nombre de places :</label>
                                <span>{activity.registrationsMax}</span>
                            </div>
                            <div className="detail_box">
                                <label className="info_label">Durée :</label>
                                <span>{activity.duration} minutes</span>
                            </div>
                            <div className="detail_box">
                                <label>Description et infos :</label>
                                <span>{activity.description}</span>
                            </div>
                        </div>
                        <div className="right-detail-box">
                            <div className="detail_box">
                                <label>Campus :</label>
                                <span>{activity.campus.name}</span>
                            </div>
                            <div className="detail_box">
                                <label>Lieu :</label>
                                <span>{activity.place.name}</span>
                            </div>
                            <div className="detail_box">
                                <label>Rue :</label>
                                <span>{activity.place.street}</span>
                            </div>
                            <div className="detail_box">
                                <label>Code postal :</label>
                                <span>{activity.place.city.postalCode}</span>
                            </div>
                            <div className="detail_box">
                                <label>Latitude :</label>
                                <span>{activity.place.latitude}</span>
                            </div>
                            <div className="detail_box">
                                <label>Longitude :</label>
                                <span>{activity.place.longitude}</span>
                            </div>
                        </div>

                    </div>
                </div>
                <label className="label-list">Liste des participants :</label>
                <div className="part-container">

                    <div className="tab-container">
                        <table className="part-table">
                            <thead>
                            <tr>
                                <th className="th-pseudo">Pseudo</th>
                                <th className="th-name">Nom</th>
                            </tr>
                            </thead>
                            <tbody>
                            {activity.participants.map(participant =>
                                <tr key={participant.pseudo}>
                                    <td><Link to={`/app/participants/${participant.id}`}>{participant.pseudo}</Link></td>
                                    <td>{participant.firstName} {participant.lastName}</td>
                                </tr>
                            )}
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            <tr><td></td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button_box_detail">
                        <button type="button" onClick={this.cancel}>Retour</button>
                    </div>
                </div>
            </div>


        )

    }


}
