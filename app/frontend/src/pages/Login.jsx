import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    user: {
      name: "",
      cpf: "",
    },
    redirect: false,
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="name">Nome</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu Nome"
              required
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <br />
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="Digite seu CPF"
              required
            />
          </div>
          <br/>
          <div>
            <Link to="/profile">
            <button type="submit">Entrar</button>
            </Link>
            </div>
            <div>
            <Link
            to={`/cadastro`}>
              <button>Cadastre-se aqui</button>
              </Link>
          </div>
        </form>
      </div>
    );
  }
}
// criar funcao de soma pegando o id q vo envia c oq to mandando e uma de sub .. armazenar na coluna de transacao oq tamono put, altera-la tambem