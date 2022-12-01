import React, { Component } from "react";
import api from '../Services/connection'

class Profile extends Component {
    state = {
        user: {
            name: "",
            cpf: "",
            balance: 0,
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/user/${id}`);
        this.setState({ user: response.data });
    }
    
    render() {
        const { user } = this.state
            return (
                <div>
                    <p>{ user.name }</p>
                    <p>{ user.balance }</p>
                </div>
            )
        }
    
}

export default Profile;