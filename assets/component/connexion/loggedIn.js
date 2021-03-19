import React, {Component} from "react";
import axios from "axios";

export default class LoggedIn extends Component {
    state = {
        id: '',
        pseudo: '',
        firstName: '',
        isAdmin: '',
        isActive: '',
    }

    componentDidMount() {
        axios.get(`/getuser`)
            .then(res => {
                const loggedUser = res.data
                this.setState(
                    {
                        id: loggedUser.id,
                        pseudo: loggedUser.pseudo,
                        firstName: loggedUser.firstName,
                        isAdmin: loggedUser.isAdmin,
                        isActive: loggedUser.isActive,
                    },
                )
                localStorage.setItem('id', this.state.id);
                localStorage.setItem('pseudo', this.state.pseudo);
                localStorage.setItem('firstName', this.state.firstName);
                localStorage.setItem('isAdmin', this.state.isAdmin);
                localStorage.setItem('isActive', this.state.isActive);
            });
    }

    componentDidUpdate() {
        this.props.history.push('/app/activities')
    }

    render() {
            return (
                <h2></h2>
            )
    }
}