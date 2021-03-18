import React, {Component, Fragment} from 'react';
import axios from "axios";

class ActivitiesFilters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campusList : [],
            campus : '',
            searchActivityName : '',
            startDate : '',
            endDate : '',
            registered : '',
            notRegistered : '',
            activitiesList : [],

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

    handleSearchName(e) {
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

    handleSubmit = e => {
        e.preventDefault();
        const name = this.state.searchActivityName;
        const campus = this.state.campus;
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;

        this.actualisation(campus, name, startDate, endDate);
        console.log("Je suis dans le submit");

        //if(!this.state.activitiesList) {
        //    document.getElementById("trip-list").innerText = "Pas de sorties à afficher";
        //}
        let date = new Date(this.state.activitiesList[1].dateTimeStart).toLocaleString();
        console.log(date);

    }

    actualisation(campus, name, startDate, endDate) {

        let nameFilter = name ? (`&name=${name}`) : ("") ;
        let campusFilter = campus ? (`&campus.name=${campus}`) : ("") ;
        let endDateFilter = endDate ? (`&dateTimeStart%5Bbefore%5D=${endDate}`) : ("");
        let startDateFilter = startDate ? (`&dateTimeStart%5Bafter%5D=${startDate}`) : ("") ;

        axios.get(`https://127.0.0.1:8000/api/activities?page=1${nameFilter}${endDateFilter}${startDateFilter}${startDate}${campusFilter}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })

        console.log("Je suis dans l'actualisation");
    }

    isRegistered = (activity) => {

        let indice = "/api/participants/" + this.props.user.id;
        const participants = activity.participants;
        let res;

        if(participants.length === 0) {
            return "O";
        } else {
                res = (participants.indexOf(indice) === -1) ? ("O") : ("X");
        }

        return res;
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
                            <input type="checkbox" name="trip" value="organisation"/>
                            <label htmlFor="coding">Sorties dont je suis l'organisateur.trice</label>
                        </div>
                        <div>
                            <input type="checkbox" name="trip" value="registered"/>
                            <label htmlFor="music">Sorties auxquelles je suis inscrit.e</label>
                        </div>
                        <div>
                            <input type="checkbox" name="trip" value="not-registered"/>
                            <label htmlFor="music">Sorties auxquelles je ne suis pas inscrit.e</label>
                        </div>
                        <div>
                            <input type="checkbox" name="trip" value="past-trip"/>
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
                            {activity.map(activity => <tr key={activity.name}>{activity.promoter}</tr>)}
                        </td>
                        <td>
                            {activity.map(activity => <tr key={activity.name}>Actions</tr>)}
                        </td>
                        </tbody>

                    </table>

                    <ul>
                        {activity.map(activity => <li key={activity.name}>{this.isRegistered(activity)}</li>)}
                    </ul>

                </div>

                {console.log("Fin du render")}
            </Fragment>

        );
    }
}

export default ActivitiesFilters;

//<ActivitiesList campus={this.state.campus} name={this.state.searchActivityName} startDate={this.state.startDate} endDate={this.state.endDate}></ActivitiesList>
//                 {console.log(this.state)}