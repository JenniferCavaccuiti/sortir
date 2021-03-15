import React, {Component, Fragment} from 'react';
import TripList from "./TripList";

class TripFilters extends Component {

    render() {

        console.log()

        return (

            <Fragment>

            <h3>Filtrer les sorties</h3>

            <form method="post" action="" id="trip-filters">

                <div className="col">


                    <div className="row">
                        <label>Campus : </label>
                        <select>
                            {/*TODO Afficher les campus via une rêquete ?*/ }
                            <option>ST HERBLAIN</option>
                            <option>LA ROCHE SUR YON</option>
                        </select>
                    </div>
                    <div className="row">
                        <label>Le nom de la sortie contient : </label>
                        <input type="text"/>
                    </div>
                    <div className="row">
                        Entre <input type="date"/> et <input type="date"/>
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
                <TripList search="{search}"></TripList>
            </Fragment>

        );
    }
}

export default TripFilters;