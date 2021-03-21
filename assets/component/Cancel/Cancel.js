import React, {Component} from "react";
import './cancel.css';
import axios from 'axios';




export default class Cancel extends Component {



    constructor(props) {
        super(props);

    }


    componentDidMount() {


    }


    render() {
        const activity = this.props.location.state.activity;
        console.log(activity)
        return (
               <div className="create_act_container">
               <h2 className="create_act_title">Annuler une sortie</h2>
               <p className={ this.state.error ? 'profile_message_error' : 'profile_message_success' }>{this.state.message}</p>
               <div className="create_act_form_container">
                   <form onSubmit={this.handleSubmit} onChange={this.handleChangeForm} >
                       <div className="create_act_form">
                           <div className="form_left_col form_act_box">
                               <div className="create_act_box">
                                   <label htmlFor="act_name">Nom de la sortie :</label>
                                   <input type="text" name="act_name" id="act_name" required="required"/>
                               </div>
                               <div className="create_act_box">
                                   <label htmlFor="act_startdate">Date et heure du début de la sortie :</label>
                                   <input defaultValue={this.state.dateNow} min={this.state.dateNow}  type="date" id="act_startdate" name="act_startdate" required="required" onChange={this.handleTimeChange}/>
                                   <input defaultValue={this.state.timeNow} type="time" id="act_start_time" name="act_start_time" required="required"/>
                               </div>
                               <div className="create_act_box">
                                   <label htmlFor="act_maxdate">Date limite d'inscription :</label>
                                   <input defaultValue={this.state.maxDateRegistration ? this.state.maxDateRegistration : this.state.dateNow} max={this.state.maxDateRegistration ? this.state.maxDateRegistration : this.state.dateNow} min={this.state.dateNow} type="date" id="act_maxdate" name="act_maxdate" required="required"/>
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
                                   <textarea name="act_infos" id="act_infos" cols="30" rows="5" required="required" defaultValue=""/>
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
                                       <option value="">Selectionnez une ville</option>
                                       {this.state.cities.map(city =>
                                           <option key={city.name} value={city["@id"]}>{ city.name }</option>
                                       )}
                                   </select>
                               </div>
                               <div className="create_act_box">
                                   <label htmlFor="act_place">Lieu :</label>
                                   <select name="act_place" id="act_place" onChange={this.handlePlaceChange} required="required" defaultValue={this.state.selectedPlace.id ? 'api/places/'+this.state.selectedPlace.id : ""}>
                                       <option value="">Selectionnez un lieu</option>
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
                                   <input value={this.state.selectedPlace.latitude} name="act_latitude" id="act_latitude" type="text" disabled="disabled"/>
                               </div>
                               <div className="create_act_box">
                                   <label htmlFor="act_longitude">Longitude :</label>
                                   <input value={this.state.selectedPlace.longitude} type="text" name="act_longitude" id="act_longitude" disabled="disabled"/>
                               </div>
                           </div>
                       </div>
                       <div className="create_act_box_button">
                           <button disabled={this.state.isSaved} onClick={this.handleSave} type="submit">Enregistrer</button>
                           <button disabled={this.state.isPublished} type='submit' name="publishButton" className="publishButton" onClick={this.handlePublish}>Publier la sortie</button>
                           <button onClick={this.cancel} type="button">Annuler</button>
                       </div>
                   </form>
               </div>
                   <h1>Annulation</h1>
                   <p>{activity.promoter.pseudo}</p>
                   <p>{new Date(activity.dateTimeStart).toLocaleDateString()}</p>
                   <p>{activity.campus.name}</p>
                   <p>{activity.place.name}</p>

           </div>


        )

    }


}
