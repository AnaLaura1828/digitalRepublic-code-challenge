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
        if (userState.cpf.length !==14){
            global.alert('CPF ou Caracteres inválidos')
        } else {
            const getID = result.id
            history.push(`/profile/${getID}`)
        }
    };

    render(){
    return (
        <div className="div-login">
        <form className="form-login">
            <h2 className="h1-login">Faça seu Login</h2>
            <div className="label-nome">
                <label htmlFor="name">Nome</label>
                <br />
                <input className="inputs" type="text" 
                id="name" 
                name="name"
                placeholder="Digite seu Nome"
                required
                value={this.state.userState.name}
                onChange={ this.handleChange }
                />
            </div>
            <div className="label-cpf">
                <label htmlFor="cpf">CPF</label>
                <br />
                <input className="inputs" type="text"
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
               className="btn-login"
               type="button" 
               onClick={ this.handleEventSubmite }
               >
                 Login
                 </button>
                <br />
                <button className="link-login">
                <Link to={`/cadastro`}>Crie sua conta aqui</Link>
                </button>
            </div>

        </form>
        </div>
    )
    }
}

export default Login