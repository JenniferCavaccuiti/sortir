import React, {Component} from "react";
import './profil.css';
import photo from '../../images/photo-profil.jpg'
import axios from 'axios';
import { Redirect } from "react-router-dom";



export default class Profil extends Component {

    state = {
        person: '',
        campusList: [],
        redirect: null,
        message: '',
        error: false
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    cancel(e) {
        e.preventDefault();
        {/* TODO : Redirection a faire vers sorties*/}
        this.setState({ redirect: "/" });
    }

    componentDidMount() {
        {/* TODO : Passer l'id du user connecté dans l'url */}
        axios.get(`https://127.0.0.1:8000/api/participants/1`)
            .catch(error => {
                this.setState({error : true})
                this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
            })
            .then(res => {
                const person = res.data
                this.setState({ person : person })
            });

        axios.get(`https://127.0.0.1:8000/api/campuses`)
            .catch(error => {
                this.setState({error : true})
                this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
            })
            .then(res => {
            const campuses = res.data['hydra:member'];
            this.setState({ campusList : campuses });
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        if(e.target.elements.namedItem('password').value != e.target.elements.namedItem('confirmation_pass').value) {
            this.setState({error : true});
            this.setState({message : 'Les mots de passe ne correspondent pas...'});
        } else {
            {/* TODO : Passer l'id du user connecté dans l'url */}
            axios.put(`https://127.0.0.1:8000/api/participants/1`, {
                "pseudo" : e.target.elements.namedItem('pseudo').value,
                "firstName" : e.target.elements.namedItem('prenom').value,
                "lastName" : e.target.elements.namedItem('nom').value,
                "phoneNumber" : e.target.elements.namedItem('telephone').value,
                "mail" : e.target.elements.namedItem('email').value,
                "password" : e.target.elements.namedItem('password').value,
                "campus" : e.target.elements.namedItem('campus').value
            })
                .catch(error => {
                    this.setState({error : true})
                    this.setState({message : error.response.data.violations[0].message})
                })
                .then(response => console.log(response))
            this.setState({error : false});
            this.setState({message : 'Votre profil a bien été modifié'});
        }
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const user = this.state.person;
        return (
            <div className="container_p">
                <div className="profile_picture">
                    <img src={photo} width="250"  alt="photo de profil"/>
                </div>
                <div className="profile_container">
                    <h2>Mon profil</h2>
                    <p className={ this.state.error ? 'profile_message_error' : 'profile_message_success' }>{this.state.message}</p>
                    <div className="profile_form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input_box">
                                <label htmlFor="pseudo">Pseudo :</label>
                                <input type="text" id="pseudo" name="pseudo" required="required" defaultValue={user.pseudo}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="prenom">Prenom :</label>
                                <input type="text" id="prenom" name="prenom" required="required" defaultValue={user.firstName}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="nom">Nom :</label>
                                <input type="text" id="nom" name="nom" required="required" defaultValue={user.lastName}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="telephone">Telephone :</label>
                                <input type="tel" id="telephone" name="telephone" required="required" defaultValue={user.phoneNumber}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="email">Email :</label>
                                <input type="email" id="email" name="email" required="required" defaultValue={user.mail}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="password">Mot de passe :</label>
                                <input type="password" id="password" name="password" required="required" defaultValue={user.password}/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="confirmation_pass">Confirmation :</label>
                                <input type="password" id="confirmation_pass" name="confirmation_pass" required="required"/>
                            </div>
                            <div className="input_box">
                                <label htmlFor="campus">Campus :</label>
                                <select name="campus" id="campus" >
                                    {this.state.campusList.map(campus =>
                                        <option key={campus.id} value={campus["@id"]}>{ campus.name }</option>
                                    )}
                                </select>
                            </div>
                            {/* TODO : Upload de la photo de profil */}
                            <div className="input_box">
                                <label htmlFor="picture">Ma photo :</label>
                                <input type="file" id="picture" name="picture"/>
                            </div>
                            <div className="button_box">
                                <button type="submit">Enregistrer</button>
                                <button onClick={this.cancel}>Annuler</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }


}
