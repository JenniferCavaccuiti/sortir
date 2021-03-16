import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './connexion.css';

export default class Connexion extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        console.log('test');
        console.log(event.target.elements.namedItem('login').value);
        console.log(event.target.elements.namedItem('password').value);
    }

    render() {
        return (
            <div className="container">
                <form className="login" onSubmit={this.handleFormSubmit}>
                    <div className="inline-form">
                        <label htmlFor="login">
                            Identifiant :
                        </label>
                        <input type="text" id="login"
                               ref={this.loginInput}
                               name="login"
                               required="required"/>
                    </div>
                    <div className="inline-form">
                        <label htmlFor="password">
                            Mot de passe :
                        </label>
                        <input type="password" id="password"
                               ref={this.passwordInput}
                               name="password"
                               required="required"/>
                    </div>
                    <button type="submit" className="submit-button">Connexion
                    </button>
                </form>
            </div>
        );
    }
}

// RepLogCreator.propTypes = {
//     onNewItemSubmit: PropTypes.func.isRequired,
// };
