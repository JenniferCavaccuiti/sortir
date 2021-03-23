import React, {Component} from "react";
import './connexion.css';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {button: 'connexion'}

        this.handlePseudoChange = this.handlePseudoChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handlePseudoChange(event) {
        this.props.pseudoChange(event.target.value);
    }

    handlePasswordChange(event) {
        this.props.passwordChange(event.target.value);
    }

    render() {
        const pseudo = this.props.pseudo;
        const password = this.props.password;

        return (
            <div className="login">
                <div className="inline-form">
                    <legend>Identifiant :</legend>
                    <input type="text"
                           value={pseudo}
                           onChange={this.handlePseudoChange}
                           required="required"/>
                </div>
                <div className="inline-form">
                    <legend>Mot de passe :</legend>
                    <input type="password"
                           value={password}
                           onChange={this.handlePasswordChange}
                           required="required"/>
                </div>
                <input type="checkbox" id="remember_me" name="_remember_me"/>
                <label htmlFor="remember_me">Se souvenir de moi</label>
                <button type="submit" className="submit-button" onClick={this.props.loginListener}>Connexion</button>
               </div>
        );
    }
}