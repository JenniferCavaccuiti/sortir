import React, {Component, Fragment} from 'react';
import ActivitiesList from "./ActivitiesList";

class ActivitiesFilters extends Component {

    state = {
        campus : '',
        searchNameTrip : '',
        startDate : '',
        endDate : '',
    }

    handleCampus = e => {
        this.setState({
            campus : e.target.value,
        })
    }

    handleSearchName = e => {
        this.setState({
            searchNameTrip : e.target.value,
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
    }

    render() {

        return (

            <Fragment>
                <h3>Filtrer les sorties</h3>

                <form onSubmit={this.handleSubmit} id="trip-filters">

                    <div className="col">

                        <div className="row">
                            <label>Campus : </label>
                            <select value={this.state.campus} onChange={this.handleCampus}>
                                {/*TODO Afficher les campus via une rêquete ?*/ }
                                <option>ST HERBLAIN</option>
                                <option>LA ROCHE SUR YON</option>
                            </select>
                        </div>
                        <div className="row">
                            <label>Le nom de la sortie contient : </label>
                            <input type="text" value={this.state.searchNameTrip} onChange={this.handleSearchName}/>
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
                    <button type="submit">Rechercher</button>
                </form>
                <ActivitiesList campus={this.state.campus} name={this.state.searchNameTrip} startDate={this.state.startDate} endDate={this.state.endDate}></ActivitiesList>

            </Fragment>

        );
    }
}

export default ActivitiesFilters;