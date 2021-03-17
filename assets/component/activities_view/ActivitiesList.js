import React, {Component} from 'react';
import axios from "axios";
import ActivitiesFilters from "./ActivitiesFilters";


class ActivitiesList extends Component {


    state = {
        activitiesList : [],
        name : '',
        campus : 'SAINT-HERBLAIN',
        searchActivityName : '',
        startDate : '',
        endDate : '',
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/activities?page=1&name=${this.state.name}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })
    }

    handleFiltersChange = (name) => {
        this.setState({
            name: name
        })

        axios.get(`http://127.0.0.1:8000/api/activities?page=1&name=${this.state.name}`)
            .then(res => {
                const activitiesList = res.data['hydra:member'];
                this.setState({
                    activitiesList : activitiesList
                });
            })


    }

        render() {

                return (
                    <div className="test" id="trip-list">
                        <ActivitiesFilters onFiltersChange={this.handleFiltersChange}/>
                        <ul>
                            {this.state.activitiesList.map(trip => <li key={trip.id}>{trip.id + ' ' + trip.name}</li>)}
                        </ul>
                    </div>
                )
    }
}

export default ActivitiesList;