import React, {Component} from 'react';
import axios from "axios";

class Publish extends Component {

    publish = e => {

        const iriStatePublished = '/api/states/2'

        axios.put(`https://127.0.0.1:8000${this.props.iriSortie}`, {
            "state": iriStatePublished
        }).catch(error => {
            this.setState({error : true})
            this.setState({message : error.response.data.violations[0].message})
        }).then(response => console.log(response))

        this.props.handlePublish();

    }

    render() {
        return (
            <button disabled={this.props.isPublished} type={this.props.buttonType} name="publishButton" className="publishButton" onClick={this.props.isSaved ? this.publish :  this.props.handlePublish}>Publier la sortie</button>
        );
    }
}

export default Publish;