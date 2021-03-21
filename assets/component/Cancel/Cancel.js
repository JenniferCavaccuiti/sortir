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
           <div>
                <h1>Annulation</h1>
               <p>{activity.promoter.pseudo}</p>
               <p>{new Date(activity.dateTimeStart).toLocaleDateString()}</p>
               <p>{activity.campus.name}</p>
               <p>{activity.place.name}</p>

           </div>
        )

    }


}
