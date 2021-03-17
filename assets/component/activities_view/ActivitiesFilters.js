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
            activitiesList : [],

        }
        this.handleSearchName = this.handleSearchName.bind(this);
        this.actualisation = this.actualisation.bind(this);
    }

    componentDidMount() {

        axios.get(`http://127.0.0.1:8000/api/campuses?page=1`)
            .then(res => {
                const campusList = res.data['hydra:member'];
                this.setState({
                    campusList : campusList
                });
            })

        axios.get(`http://127.0.0.1:8000/api/activities?page=1&name=${this.state.searchActivityName}`)
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

        console.log("Je suis là" + name);
        console.log(e.target.value);

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
        console.log("Je suis dans le submit")

    }

    actualisation(campus, name, startDate, endDate) {
        axios.get(`http://127.0.0.1:8000/api/activities?page=1&name=${name}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })
        console.log("Je suis dans l'actualisation")
        console.log(this.state.activitiesList);
    }

    render() {

        console.log("Début du render");

        return (

            <Fragment>
                <h3>Filtrer les sorties</h3>

                <form onSubmit={this.handleSubmit} id="trip-filters">

                    <div className="col">
                        <div className="row">
                            <label>Campus : </label>
                            <select value={this.state.campus} onChange={this.handleCampus}>
                                {this.state.campusList.map(campus => <option key={campus.id}>{campus.name}</option>)}
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
                    <ul>
                        {this.state.activitiesList.map(trip => <li key={trip.id}>{trip.id + ' ' + trip.name}</li>)}
                    </ul>
                </div>
                {console.log(this.state.activitiesList)}
                {console.log("Fin du render")}
            </Fragment>

        );
    }
}

export default ActivitiesFilters;

//<ActivitiesList campus={this.state.campus} name={this.state.searchActivityName} startDate={this.state.startDate} endDate={this.state.endDate}></ActivitiesList>
//                 {console.log(this.state)}