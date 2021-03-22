import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


class Withdraw extends Component {

    state = {
        message: '',
        error: false
    }


    withdraw = () => {

        const participants = this.props.activity.participants;
        let IRIs = [];

        let userIRI = this.props.user["@id"];
        console.log(userIRI);

        for(let i=0; i < participants.length; i++) {
            IRIs.push(participants[i]["@id"]);
        }


        IRIs = IRIs.filter(item => item !== userIRI);
        console.log(IRIs);

        const activityIRI = this.props.activity["@id"];

        axios.put(`https://127.0.0.1:8000${activityIRI}`, {
            "participants": IRIs
        }).catch(error => {
            this.setState({error : true})
            this.setState({message : "Une erreur s'est produite lors du désistement"})
        }).then(response => console.log(response))


        if(this.state.error) {
            document.getElementById("error-message-activities").innerText = this.state.message;
        }

        this.props.withdraw();

    }

    render() {

        return (
                <Link onClick={this.withdraw}>Se désister</Link>
        );
    }
}


export default Withdraw;