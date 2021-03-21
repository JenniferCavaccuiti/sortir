import React, {Component} from "react";
import './cancel.css';
import axios from 'axios';




export default class Cancel extends Component {



    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }


    render() {
        const activity = this.props.location.state.activity;
        console.log(activity)
        return (
               <div className="create_act_container">
               <h2 className="create_act_title">Annuler une sortie</h2>
               <p className={ this.state.error ? 'profile_message_error' : 'profile_message_success' }>{this.state.message}</p>
               <div className="">

               </div>
                   <h1>Annulation</h1>
                   <p>{activity.promoter.pseudo}</p>
                   <p>{new Date(activity.dateTimeStart).toLocaleDateString()}</p>
                   <p>{activity.campus.name}</p>
                   <p>{activity.place.name}</p>

           </div>


        )

    }


}
