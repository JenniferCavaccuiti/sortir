import React, {Component} from 'react';
import './connexion.css';
import axios from 'axios';

export default class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pseudo: 'admin',
            password: 'admin',
            rememberMe: '',
            person: '',
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleChangePseudo(event) {
        this.setState({pseudo: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    handleChangeRememberMe(event) {
        this.setState({password: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();

        axios.post('/login', {
            pseudo: this.state.pseudo,
            password: this.state.password,
            withCredentials: true
        }).then(response => {
            const person = response.data
            this.setState({ person })

            this.props.history.push('/app/loggedIn');
        }).catch(error => {
            console.log(error.data);
        })
    }

    render() {
        return (
            <div className="container">
                <form className="pseudo" onSubmit={this.handleFormSubmit}>
                    <div className="inline-form">
                        <label htmlFor="pseudo">Identifiant :
                        </label>
                        <input type="text" id="pseudo"
                               defaultValue={this.state.pseudo}
                               onChange={this.handleChangePseudo}
                               name="pseudo"
                               required="required"/>
                    </div>
                    <div className="inline-form">
                        <label htmlFor="password">
                            Mot de passe :
                        </label>
                        <input type="password" id="password"
                               defaultValue={this.state.password}
                               onChange={this.handleChangePassword}
                               name="password"
                               required="required"/>
                    </div>
                    <input type="checkbox" id="rememberMe" onChange={this.handleChangeRememberMe} name="rememberMe" checked/>
                    <label htmlFor="rememberMe">Keep me logged in</label>
                    <button type="submit" className="submit-button">Connexion
                    </button>
                </form>
            </div>
        );
    }
}