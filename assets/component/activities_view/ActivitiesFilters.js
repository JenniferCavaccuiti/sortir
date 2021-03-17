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

        console.log("Je suis dans le didmount");

        axios.get(`http://127.0.0.1:8000/api/campuses?page=1`)
            .then(res => {
                const campusList = res.data['hydra:member'];
                this.setState({
                    campusList : campusList
                });
            })

        console.log(this.state.campusList);

        console.log(this.state.campusList[0]);

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

        console.log("Je suis là");

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
        const state = this.state;
        console.log(state);
        console.log(name);
        this.actualisation(campus, name, startDate, endDate);
        console.log("Je suis dans le submit");

        //if(!this.state.activitiesList) {
        //    document.getElementById("trip-list").innerText = "Pas de sorties à afficher";
        //}

    }

    //TODO conditions en cas de dates vides

    actualisation(campus, name, startDate, endDate) {
        axios.get(`http://127.0.0.1:8000/api/activities?page=1&name=${name}&dateTimeStart%5Bbefore%5D=${endDate}&dateTimeStart%5Bafter%5D=${startDate}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })


        console.log("Je suis dans l'actualisation");

    }


    render() {

        console.log("Début du render");

        const activity = this.state.activitiesList;
        console.log(activity[0]);

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
                        {this.state.activitiesList.map(activity => <li key={activity["@id"]}>{activity.id + ' ' + activity.name}</li>)}
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