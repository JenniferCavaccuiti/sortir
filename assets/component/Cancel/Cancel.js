import React, {Component} from "react";
import './cancel.css';
import axios from 'axios';




export default class Cancel extends Component {

    state = {
        error : false,
        message: '',
        activity: this.props.location.state.activity
    }


    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }


    render() {
        const activity = this.state.activity;
        console.log(activity)
        return (
            <div className="cancel_container">
               <h2 className="cancel_title">Annuler une sortie</h2>
               <p className={ this.state.error ? 'profile_message_error' : 'profile_message_success' }>{this.state.message}</p>
               <div className="cancel_form_container">
                    <div className="cancel_form">
                        <div className="cancel_box">
                            <label>Nom de la sortie :</label>
                            <span>{activity.name}</span>
                        </div>
                        <div className="cancel_box">
                            <label>Date de la sortie :</label>
                            <span>{new Date(activity.dateTimeStart).toLocaleDateString()}</span>
                        </div>
                        <div className="cancel_box">
                            <label htmlFor="act_name">Campus :</label>
                            <span>{activity.campus.name}</span>
                        </div>
                        <div className="cancel_box">
                            <label htmlFor="act_name">Lieu :</label>
                            <div className="cancel_address">
                                <em>{activity.place.name + ' ' + activity.place.street}</em>
                                <em>{activity.place.city.postalCode + ' ' + activity.place.city.name}</em>
                            </div>
                        </div>
                    </div>

               </div>
            </div>


        )

    }


}
