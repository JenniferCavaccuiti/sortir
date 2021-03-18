import React, {Component, Fragment} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class ActivitiesFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campusList : [],
            campus : '',
            searchActivityName : '',
            startDate : '',
            endDate : '',
            promoter : '',
            registered : '',
            notRegistered : '',
            pastActivities : '',
            activitiesList : [],
            date : new Date().toISOString(),

        }
        this.handleSearchName = this.handleSearchName.bind(this);
        this.actualisation = this.actualisation.bind(this);
        //this.isRegistered = this.isRegistered.bind(this);
    }

    componentDidMount() {

        console.log("Je suis dans le didmount");

        axios.get(`https://127.0.0.1:8000/api/campuses?page=1`)
            .then(res => {
                const campusList = res.data['hydra:member'];
                this.setState({
                    campusList : campusList
                });
            })

        axios.get(`https://127.0.0.1:8000/api/activities?page=1`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })


    }

    handleCampus = e => {
        this.setState({
            campus : e.target.value,
        })
    }

    handleSearchName = e => {
        this.setState({
            searchActivityName : e.target.value,
        })
    }

    handleStartDate = e => {
        this.setState({
            startDate : e.target.value,
        })
    }

    handleEndDate = e => {
        this.setState({
            endDate : e.target.value,
        })
    }

    handlePromoter = e => {

        let check = this.state.promoter ? (this.setState({promoter : false})) : (this.setState({promoter : true}));
    }

    handlePastActivities = e => {

        let check = this.state.pastActivities ? (this.setState({pastActivities : false})) : (this.setState({pastActivities : true}));

    }

    handleRegistered = e => {

        let check = this.state.registered ? (this.setState({registered : false})) : (this.setState({registered : true}));
    }

    handleSubmit = e => {
        e.preventDefault();
        const name = this.state.searchActivityName;
        const campus = this.state.campus;
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        const promoter = this.state.promoter;
        const pastActivities = this.state.pastActivities;
        const registered = this.state.registered;


        this.actualisation(campus, name, startDate, endDate, promoter, pastActivities, registered);
        console.log("Je suis dans le submit");

        //if(!this.state.activitiesList) {
        //    document.getElementById("trip-list").innerText = "Pas de sorties à afficher";
        //}


    }

    actualisation(campus, name, startDate, endDate, promoter, pastActivities, registered) {

        let date = this.state.date;
        console.log(date);
        let nameFilter = name ? (`&name=${name}`) : ("") ;
        let campusFilter = campus ? (`&campus.name=${campus}`) : ("") ;
        let endDateFilter = endDate ? (`&dateTimeStart%5Bbefore%5D=${endDate}`) : ("");
        let startDateFilter = startDate ? (`&dateTimeStart%5Bafter%5D=${startDate}`) : ("") ;
        let promoterFilter = promoter ? (`&promoter.pseudo=${this.props.user.pseudo}`) : ("");
        let pastActivitiesFilter = pastActivities ? (`&dateTimeStart%5Bstrictly_before%5D=${date}`) : ("") ;
        let registeredFilter = registered ? (`&participants.pseudo=${this.props.user.pseudo}`) : ("") ;

        axios.get(`https://127.0.0.1:8000/api/activities?page=1${nameFilter}${endDateFilter}${startDateFilter}${startDate}${campusFilter}${promoterFilter}${pastActivitiesFilter}${registeredFilter}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })

        console.log("Je suis dans l'actualisation");
    }

    isRegistered = (activity) => {

        let user = this.props.user;
        const participants = activity.participants;

        let res;

        if(participants.length === 0) {
            return "O";

        } else {
            let exist = 0;

            for(let i=0; i < participants.length; i++) {
                if(participants[i]["@id"] === user["@id"] ) {
                    exist += 1;
                }
            }

            res = (exist !== 0) ? ("X") : ("O");
        }
        return res;
    }


    actions = (activity) => {

        const userConnected = this.props.user;
        const registered = this.isRegistered(activity);
        let registeredBool = (registered === "X") ? (true) : (false);


        console.log(activity.dateTimeStart < this.state.date);

        if(activity.promoter.pseudo === userConnected.pseudo && (activity.state.id === 2 || activity.state.id === 3)) {
            return <tr><Link>Afficher</Link> - <Link>Annuler</Link></tr>;
        } else if (activity.promoter.pseudo === userConnected.pseudo && activity.state.id === 1) {
            return <tr><Link>Modifier</Link> - <Link>Publier</Link></tr>;
        } else if (activity.promoter.pseudo === userConnected.pseudo && (activity.state.id === 4 || activity.state.id === 5 || activity.state.id === 6)) {
            return <tr><Link>Afficher</Link></tr>;
        } else if(activity.promoter.pseudo !== userConnected.pseudo && registeredBool) {
            if(activity.state.id === 2 || activity.state.id === 3) {
                return <tr><Link>Afficher</Link> - <Link>Se désister</Link></tr>;
            } else if((activity.state.id === 4 || activity.state.id === 5 || activity.state.id === 6)) {
                return <tr><Link>Afficher</Link></tr>;
            } else if (activity.state.id === 1){
                return <tr>Pas d'actions</tr>;
            }
        } else if(activity.promoter.pseudo !== userConnected.pseudo && !registeredBool) {
            if(activity.state.id === 2 && activity.participants.length < activity.registrationsMax) {
                return <tr><Link>Afficher</Link> - <Link>S'inscrire</Link></tr>;
            } else if(activity.state.id === 1) {
                return <tr>Pas d'actions</tr>;
            } else {
                return <tr><Link>Afficher</Link></tr>;
            }
        }
    }


    render() {

        console.log("Début du render");
        const activity = this.state.activitiesList;

        return (

            <Fragment>
                <h3>Filtrer les sorties</h3>

                <form onSubmit={this.handleSubmit} id="trip-filters">

                    <div className="col">
                        <div className="row">
                            <label>Campus : </label>
                            <select value={this.state.campus} onChange={this.handleCampus}>
                                {this.state.campusList.map(campus => <option key={campus.id}>{campus.name}</option>)}
                                <option value="">Tous les campus</option>
                            </select>
                        </div>
                        <div className="row">
                            <label>Le nom de la sortie contient : </label>
                            <input type="text" value={this.state.searchActivityName} onChange={this.handleSearchName}/>
                        </div>
                        <div className="row">
                            Entre <input type="date" value={this.state.startDate} onChange={this.handleStartDate}/> et <input type="date" value={this.state.endDate} onChange={this.handleEndDate}/>
                        </div>
                    </div>

                    <div className="col">
                        <div>
                            <input type="checkbox" onChange={this.handlePromoter} value={this.state.promoter}/>
                            <label htmlFor="coding">Sorties dont je suis l'organisateur.trice</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={this.handleRegistered} value={this.state.registered}/>
                            <label htmlFor="music">Sorties auxquelles je suis inscrit.e</label>
                        </div>
                        <div>
                            <input type="checkbox" name="trip" value="not-registered"/>
                            <label htmlFor="music">Sorties auxquelles je ne suis pas inscrit.e</label>
                        </div>
                        <div>
                            <input type="checkbox" onChange={this.handlePastActivities} value={this.state.pastActivities}/>
                            <label htmlFor="music">Sorties passées</label>
                        </div>
                    </div>
                    <button type="submit" value={this.state} onSubmit={this.handleSubmit}>Rechercher</button>
                </form>

                <div className="test" id="trip-list">

                    <table>
                        <thead>
                        <tr>
                            <th>Nom de la sortie</th>
                            <th>Date de la sortie</th>
                            <th>Clôture</th>
                            <th>Inscrits/Place</th>
                            <th>Etat</th>
                            <th>Inscrit</th>
                            <th>Organisateur</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{activity.name}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{new Date(activity.dateTimeStart).toLocaleString()}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{new Date(activity.registrationDeadline).toLocaleDateString()}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{activity.participants.length}/{activity.registrationsMax}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{activity.state.label}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{this.isRegistered(activity)}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{activity.promoter.pseudo}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>{this.actions(activity)}</tr>)}
                        </td>
                        </tbody>

                    </table>

                    <ul>
                          {activity.map(activity => <li key={activity.name}></li>)}
                    </ul>

                </div>

                {console.log("Fin du render")}
            </Fragment>

        );
    }
}

export default ActivitiesFilters;

//<ActivitiesList campus={this.state.campus} name={this.state.searchActivityName} startDate={this.state.startDate} endDate={this.state.endDate}></ActivitiesList>
//
//

//{this.isRegistered(activity)}
//
//
//
//                 {console.log(this.state)}