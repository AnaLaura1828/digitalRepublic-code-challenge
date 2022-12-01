import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from '../Services/connection';

class Login extends Component {
    state = {
        users:[],
        id:0,
        userState: {
            name:"",
            cpf:""
        }
    };

    componentDidMount() {
        this.loadUsuarios();
        
    }

    loadUsuarios = async () => { 
        const response = await api.get(`/user`);
        const usuario = response.data;

        this.setState({ users: usuario });   
        
    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
          userState: { ...prevState.userState, [name]: value }
        }));
    };

    handleEventSubmite = (event) => {
        event.preventDefault();
        const { users, userState } = this.state
        const { history } = this.props

        const result = users.find((elem) => elem.cpf === userState.cpf && elem.name === userState.name);
        const getID = result.id
        history.push(`/profile/${getID}`)
    };

    render(){

    return (
        <div>
            <h1>Faça seu Login</h1>
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <br />
                <input type="text" 
                id="name" 
                name="name"
                placeholder="Digite seu Nome"
                required
                value={this.state.userState.name}
                onChange={ this.handleChange }
                />
            </div>
            <div>
                <label htmlFor="cpf">CPF</label>
                <br />
                <input type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                required
                value={this.state.userState.cpf}
                onChange={ this.handleChange }
                />
            </div>
            <div>
               <button 
               type="button" 
               onClick={ this.handleEventSubmite }
               >
                 Login
                 </button>
                <br />
                <button>
                <Link to={`/cadastro`}>Crie sua conta aqui</Link>
                </button>
            </div>

        </form>
        </div>
    )
    }
}

export default Login