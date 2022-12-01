import React, { Component } from "react";
import api from "../Services/connection";
import { Redirect } from "react-router-dom";

export default class Cadastro extends Component {
  state = {
    users: {
      name: "",
      cpf: "",
      balance: "",
    },
    redirect: false
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState((prevState) => ({
      users: { ...prevState.users, [name]: value },
    }));
  };

  handleEventSubmit = (event) => {
    event.preventDefault();
    const {
      users: { name, cpf, balance },
    } = this.state;
    api.post("/user", {
        name,
        cpf,
        balance,
      })
      .then((response) => {
        if (response) {
          this.setState({ redirect: true });
        }
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <h1>Criar Conta</h1>
          <form onSubmit={this.handleEventSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu Nome"
                required
                value={this.state.users.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF</label>
              <br />
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite Seu CPF"
                required
                value={this.state.users.cpf}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="balance">Saldo da Conta</label>
              <br />
              <input
                type="number"
                id="balance"
                name="balance"
                placeholder="Digite o saldo que deseja depositar"
                required
                value={this.state.users.balance}
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <button type="submit">Criar Conta</button>
            </div>
          </form>
        </div>
      );
    }
  }
}
