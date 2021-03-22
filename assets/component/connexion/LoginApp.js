import React, {Component} from 'react';
import './connexion.css';
import axios from 'axios';
import LoginForm from './LoginForm';
import addLocalStorage from "./LoginStorage";
import {Redirect} from "react-router-dom";


export default class LoginApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pseudo: '',
            isAdmin: '',
            message: '',
            connexion: '',
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        axios.post('/login', {
            pseudo: this.state.pseudo,
            password: this.state.password,
            withCredentials: true
        }).then(response => {
            const connexion = response.data;
            this.setState({connexion: connexion});
            console.log('dans le then de connexion');
            addLocalStorage();
            console.log('je repasse dans le then');


            // this.props.history.push('/app/menu');
        }).catch(error => {
            const message = 'mot de passe ou login invalide';
            this.setState({message: message});
        });

        return <Redirect to="/app/menu"/>;
    }

    handleChangePassword(password) {
        this.setState({password: password});
    }

    handleChangePseudo(pseudo) {
        this.setState({pseudo: pseudo});
    }

    render() {
        const pseudo = this.state.pseudo;
        const password = this.state.password;

        return (
            <div className="container">
                <p>{this.state.message}</p>
                <LoginForm
                    loginListener={this.handleFormSubmit}
                    pseudoChange={this.handleChangePseudo}
                    pseudo={pseudo}
                    passwordChange={this.handleChangePassword}
                    password={password}
                />
            </div>
        );
    }
}