import React, {Component} from 'react';
import './connexion.css';
import axios from 'axios';
import LoginForm from './LoginForm';



class LoginApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pseudo: '',
            isAdmin: '',
            message: '',
            connexion: '',
            redirect: false,
            getUser : false,
            push : ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangePseudo = this.handleChangePseudo.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("Je suis dans le didUpate du LogApp");
        console.log(this.state.redirect && this.state.getUser)


    }

    handleFormSubmit(event) {

        event.preventDefault();

        axios.post('/login', {
            pseudo: this.state.pseudo,
            password: this.state.password,
            withCredentials: true
        })
            .catch(error => {
                const message = 'mot de passe ou login invalide';
                this.setState({message: message});
            })
            .then(response => {
                const connexion = response.data;
                this.setState({connexion: connexion});
                console.log('dans le then de connexion');
                this.setState({
                    redirect: true
                })
                //addLocalStorage();
            })
            .then(res => {
                axios.get(`/getuser`, {
                    withCredentials: true
                })
                    .catch(error => {
                        const message = 'mot de passe ou login invalide';
                        this.setState({message: message});
                    })
                    .then(res => {
                        const loggedUser = res.data;
                        localStorage.setItem('id', loggedUser.id);
                        localStorage.setItem('pseudo', loggedUser.pseudo);
                        localStorage.setItem('isAdmin', loggedUser.isAdmin);
                        console.log("localStorage : l'id de l'user est : " + localStorage.getItem('id'));
                        this.setState({
                            getUser : true
                        })

                        if(this.state.redirect && this.state.getUser) {
                            window.location.href='/app/accueil';
                        }

                    })
            });
    }

    handleChangePassword(password) {
        this.setState({password: password});
    }

    handleChangePseudo(pseudo) {
        this.setState({pseudo: pseudo});
    }

    render() {

        console.log("Je suis dans le render du LoginApp")
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

export default LoginApp;