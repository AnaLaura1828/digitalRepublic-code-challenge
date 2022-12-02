import React, { Component } from "react";
import api from "../Services/connection";

class Profile extends Component {
  state = {
    user: {
      id: 0,
      name: "",
      cpf: "",
      balance: 0,
    },
    transfer: 0,
    destinyCPF: "",
    accounts: [],
    transactions: [],
  };
  async componentDidMount() {
    this.allTransactions();
    this.allUser();

    const { id } = this.props.match.params;
    const response = await api.get(`/user/${id}`);
    this.setState({ user: response.data });
  }

  allTransactions = async () => {
    const response = await api.get("/transaction");
    const transaction = response.data;
    this.setState({ transactions: transaction });
  };

  allUser = async () => {
    const response = await api.get(`/user`);
    const allAccounts = response.data;
    this.setState({ accounts: allAccounts });
  };

  handleInput = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    const { name } = target;

    this.setState({ [name]: value });
  };

  handleAccountDeposity = async (event) => {
    event.preventDefault();

    const {
      user: { balance },
      transfer,
      accounts,
      destinyCPF,
    } = this.state;
    const { id } = this.props.match.params;

    const userAccount = accounts.find((elem) => elem.cpf === destinyCPF);
    const idUserAccount = userAccount.id;
    const maxValueTranfer = 2000;

    if (transfer < maxValueTranfer) {
      const soma = balance + transfer;
      const menos = balance - transfer;

      await api.put(`/user/${idUserAccount}`, { balance: soma });
      await api.put(`/user/${id}`, { balance: menos });

      await api.post(`/transaction`, {
        send: id,
        destiny: idUserAccount,
        value: transfer,
      });
      window.location.reload();
    } else {
      global.alert("A transferencia minima é de R$2.000,00");
    }
  };

  render() {
    const { user, transactions, transfer, destinyCPF } = this.state;
    const findById = transactions.filter(
      (elem) => elem.send === user.id || elem.destiny === user.id
    );
    return (
      <div>
        <div className="info-user">
        <p>{user.name}</p>
        <p>{user.balance}</p>
        </div>
        <form className="form-profile">
          <div>
            <label htmlFor="destinyCPF">CPF do destinatário</label>
            <input
            className="inputs-profile"
              type="text"
              id="destinyCPF"
              name="destinyCPF"
              placeholder="Digite o CPF do destinatário"
              onChange={this.handleInput}
              value={destinyCPF}
            />
          </div>
          <div>
            <label htmlFor="transfer">Digite o valor</label>
            <input
            className="inputs-profile"
              id="transfer"
              name="transfer"
              type="number"
              placeholder="Digite o Valor"
              onChange={this.handleInput}
              value={transfer}
            />
            <button className="btn-transferir" type="button" onClick={this.handleAccountDeposity}>
              Transferir
            </button>
          </div>
        {findById.map((elem) => (
          <article key={elem.id}>
            <p>{elem.send}</p>
            <p>{elem.destiny}</p>
            <p>{elem.value}</p>
            <p>{elem.createdAt}</p>
          </article>
        ))}
        </form>
      </div>
    );
  }
}
export default Profile;
