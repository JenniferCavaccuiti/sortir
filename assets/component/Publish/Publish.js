import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Publish extends Component {

    state = {
        message: '',
        error: false
    }

    publish = () => {

        const iriStatePublished = '/api/states/2'

        axios.put(`https://127.0.0.1:8000${this.props.activity["@id"]}`, {
            "state": iriStatePublished
        }).catch(error => {
            this.setState({error : true})
            this.setState({message : "Une erreur s'est produite a la publication"})
        }).then(response => console.log(response))

        this.props.publish();

    }

    render() {
        return (
            <Link onClick={this.publish}>Publier</Link>
        );
    }
}

export default Publish;