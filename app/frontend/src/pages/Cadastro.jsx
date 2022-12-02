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
    redirect: false,
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
    api
      .post("/user", {
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
          <form className="form-login" onSubmit={this.handleEventSubmit}>
            <h2>Criar Conta</h2>
            <div>
              <label htmlFor="name">Nome</label>
              <br />
              <input
                className="inputs-cadastro"
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
                value={this.state.users.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF</label>
              <br />
              <input
                className="inputs-cadastro"
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Digite seu CPF"
                required
                value={this.state.users.cpf}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="balance">Saldo em Conta</label>
              <br />
              <input
                className="inputs-cadastro"
                type="number"
                id="balance"
                name="balance"
                placeholder="Digite o saldo que deseja"
                required
                value={this.state.users.balance}
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <button className="btn-criacao" type="submit">
                Criar Conta
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}
