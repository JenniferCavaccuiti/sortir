import React, {Component} from "react";
import './create_activity.css';
import axios from "axios";


export default class CreateActivity extends Component {


    state = {
        cities: [],
        message: '',
        error: false,
        selectedCity: '',
        selectedPlace: '',
        places:[],
        actState: '',
        createdState: '/api/states/1',
        publishedState : '/api/states/2',
        connectedUser: '',
        campusName : '',
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    cancel(e) {
        e.preventDefault();
        this.props.history.push('/app/activities');
    }
    handleSave() {
        this.setState({actState : this.state.createdState});
    }
    handlePublish() {
        this.setState({actState : this.state.publishedState});
    }
    handleSubmit(e) {
        e.preventDefault();
        if (e.target.elements.namedItem('act_city').value === "" || e.target.elements.namedItem('act_place').value === "") {
            this.setState({error : true});
            this.setState({message : 'Selectionnez une ville'});
        } else {
        const dateStart =e.target.elements.namedItem('act_startdate').value + ' ' + e.target.elements.namedItem('act_start_time').value + ':00';
        axios.post(`https://127.0.0.1:8000/api/activities`, {
            "name" : e.target.elements.namedItem('act_name').value,
            "dateTimeStart" : dateStart,
            "duration" : parseInt(e.target.elements.namedItem('act_duration').value),
            "registrationDeadline" : e.target.elements.namedItem('act_maxdate').value,
            "registrationsMax" : parseInt(e.target.elements.namedItem('act_maxplaces').value),
            "description" : e.target.elements.namedItem('act_infos').value,
            "promoter" : '/api/participants/'+this.state.connectedUser.id,
            "campus" : '/api/campuses/'+this.state.connectedUser.campus.id,
            "state" :  this.state.actState,
            "place" : e.target.elements.namedItem('act_place').value,
        })
            .catch(error => {
                this.setState({error : true})
                this.setState({message : error.response.data.violations[0].message})
            })
            .then(response => console.log(response))
                this.setState({error : false});
                this.setState({message : 'La sortie a bien été créée'});
        }
    }
    handleChange(e) {
        axios.get(`https://127.0.0.1:8000`+e.target.value)
            .catch(error => {
                this.setState({error : true})
                this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
            })
            .then(res => {
                const selectedCity = res.data;

                this.setState({ selectedCity : selectedCity });
            })
            .then(res =>
                axios.get(`https://127.0.0.1:8000/api/places?city.id=`+this.state.selectedCity.id)
                    .catch(error => {
                        this.setState({error : true})
                        this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
                    })
                    .then(res => {
                        const places = res.data['hydra:member'];
                        this.setState({ places : places });
                    }
            ))

    }
    handlePlaceChange(e) {
        axios.get(`https://127.0.0.1:8000`+e.target.value)
            .catch(error => {
                this.setState({error : true})
                this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
            })
            .then(res => {
                    const selectedPlace = res.data;
                    this.setState({ selectedPlace : selectedPlace });
                }
            )
    }

    componentDidMount() {
        axios.get(`https://127.0.0.1:8000/api/cities`)
            .catch(error => {
                this.setState({error : true})
                this.setState({message : 'Un problème est survenue, veuillez reesayer plus tard'})
            })
            .then(res => {
                const cities = res.data['hydra:member'];
                this.setState({ cities : cities });
            })
            .then(res => {
                axios.get(`https://127.0.0.1:8000/getuser`)
                    .catch(error=> {
                        this.setState({error : true})
                        this.setState({message : 'Impossible de récuperer l\'utilisateur'})
                    })
                    .then(res => {
                        const connectedUser = res.data
                        this.setState({ connectedUser : connectedUser })
                        this.setState({campusName: this.state.connectedUser.campus.name })
                    })
            })


    }


    render() {
    return(
        <div className="create_act_container">
            <h2 className="create_act_title">Créer une sortie</h2>
            <p className={ this.state.error ? 'profile_message_error' : 'profile_message_success' }>{this.state.message}</p>
            <div className="create_act_form_container">
                <form onSubmit={this.handleSubmit}>
                    <div className="create_act_form">
                        <div className="form_left_col form_act_box">
                            <div className="create_act_box">
                                <label htmlFor="act_name">Nom de la sortie :</label>
                                <input type="text" name="act_name" id="act_name" required="required"/>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_startdate">Date et heure du début de la sortie :</label>
                                <input type="date" id="act_startdate" name="act_startdate" required="required"/>
                                <input type="time" id="act_start_time" name="act_start_time" required="required"/>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_maxdate">Date limite d'inscription :</label>
                                <input type="date" id="act_maxdate" name="act_maxdate" required="required"/>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_maxplaces">Nombres de places (<em>hors organisateur</em>):</label>
                                <input type="number" id="act_maxplaces" name="act_maxplaces" required="required"/>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_duration">Durée :</label>
                                <input type="number" id="act_duration" name="act_duration" required="required"/>
                            </div>
                            <div className="create_act_box">
                                <label className="textarea_label" htmlFor="act_infos">Description et infos :</label>
                                <textarea name="act_infos" id="act_infos" cols="30" rows="5" required="required" defaultValue=""></textarea>
                            </div>
                        </div>
                        <div className="form_right_col form_act_box">
                            <div className="create_act_box">
                                <label>Campus :</label>
                                <em>{this.state.campusName}</em>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_city">Ville :</label>
                                <select name="act_city" id="act_city" onChange={this.handleChange} required="required" defaultValue="">
                                    <option disabled value="">Selectionnez une ville</option>
                                    {this.state.cities.map(city =>
                                        <option key={city.name} value={city["@id"]}>{ city.name }</option>
                                    )}
                                </select>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_place">Lieu :</label>
                                <select name="act_place" id="act_place" onChange={this.handlePlaceChange} required="required" defaultValue="">
                                    <option disabled value="">Selectionnez un lieu</option>
                                    {this.state.places.map(place =>
                                        <option key={place.name} value={place["@id"]}>{ place.name }</option>
                                    )}
                                </select>
                            </div>
                            <div className="create_act_box">
                                <label>Rue :</label>
                                <em>{this.state.selectedPlace.street}</em>
                            </div>
                            <div className="create_act_box">
                                <label>Code postal :</label>
                                <em>{this.state.selectedCity.postalCode}</em>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_latitude">Latitude :</label>
                                <input defaultValue={this.state.selectedPlace.latitude} name="act_latitude" id="act_latitude" type="text" disabled="disabled"/>
                            </div>
                            <div className="create_act_box">
                                <label htmlFor="act_longitude">Longitude :</label>
                                <input defaultValue={this.state.selectedPlace.longitude} type="text" name="act_longitude" id="act_longitude" disabled="disabled"/>
                            </div>
                        </div>
                    </div>
                    <div className="create_act_box_button">
                        <button onClick={this.handleSave} type="submit">Enregistrer</button>
                        <button type="submit" name="publishButton" onClick={this.handlePublish}>Publier la sortie</button>
                        <button onClick={this.cancel}>Annuler</button>
                    </div>
                </form>
            </div>


        </div>
    )
}

}
