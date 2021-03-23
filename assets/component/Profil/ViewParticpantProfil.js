import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default class ViewParticipantProfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            campusName: '',
        };
    }

    componentDidMount() {
        const url = window.location.href.replace('app', 'api')

        axios.get(url, {
            withCredentials: true
        }).catch(error => {
            this.setState({error: true})
            this.setState({message: 'Un problème est survenue, veuillez reesayer plus tard'})
        }).then(res => {
            const person = res.data
            this.setState({
                pseudo: person.pseudo,
                firstName: person.firstName,
                lastName: person.lastName,
                phoneNumber: person.phoneNumber,
                email: person.mail,
                campusName: person.campus.name
            })
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="hate_css">
                        <div>
                            <h2>{this.state.pseudo}</h2>
                        </div>
                        <p className={this.state.error ? 'profile_message_error' : 'profile_message_success'}>{this.state.message}</p>
                        <p>Nom : {this.state.firstName}</p>
                        <p>Nom : {this.state.lastName}</p>
                        <p>Téléphone : {this.state.phoneNumber}</p>
                        <p>Email : {this.state.email}</p>
                        <p>Campus : {this.state.campusName}</p>
                        <img src="" alt=""/>
                        <Link to="/app/accueil"><button>Retour</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}