import React, {Component} from 'react';
import axios from "axios";


class ActivitiesList extends Component {


    state = {
        tripList : [],
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const tripList = res.data;
                this.setState({
                    tripList : tripList
                });
            })

        console.log(this.state + "in le didmount")
    }


    //TODO Axios recherche dans l'API



        render() {
                return (
                    <div className="test" id="trip-list">
                            {console.log(this.props)}
                            {console.log(this.state.tripList[0])}
                        <ul>
                            { this.state.tripList.map(trip => <li>{trip.id + ' ' + trip.title}</li>)}
                        </ul>
                    </div>
                )
    }
}

export default ActivitiesList;