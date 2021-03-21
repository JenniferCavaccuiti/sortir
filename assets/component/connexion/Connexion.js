import React, {Component} from 'react';
import './connexion.css';
import axios from 'axios';

export default class Connexion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pseudo: 'admin',
            password: 'admin',
            rememberMe: '',
            person: '',
            firstName: '',
            isAdmin: '',
            isActive: '',
        };

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.localStorage = this.localStorage.bind(this);
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
            this.setState({person})
            this.localStorage();
        }).catch(error => {
            console.log(error.data);
        });
    }

    localStorage() {
        axios.get(`/getuser`, {
            withCredentials: true
        }).then(res => {
            const loggedUser = res.data
            this.setState(
                {
                    id: loggedUser.id,
                    pseudo: loggedUser.pseudo,
                    firstName: loggedUser.firstName,
                    isAdmin: loggedUser.isAdmin,
                    isActive: loggedUser.isActive,
                },
            )
            localStorage.setItem('id', this.state.id);
            localStorage.setItem('pseudo', this.state.pseudo);
            localStorage.setItem('firstName', this.state.firstName);
            localStorage.setItem('isAdmin', this.state.isAdmin);
            localStorage.setItem('isActive', this.state.isActive);
        });
        this.props.history.push('/app/activities')
    }

    render() {
        return (
            <div className="container">
                <form className="login" onSubmit={this.handleFormSubmit}>
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
                    <div className="btnBox-login">
                        <button type="submit" className="submit-button">Connexion
                        </button>
                        <input type="checkbox" id="rememberMe" onChange={this.handleChangeRememberMe} name="rememberMe" checked/>
                        <label htmlFor="rememberMe">Se souvenir de moi</label>
                    </div>
                </form>
            </div>
        );
    }
}