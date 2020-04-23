import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../styles/AdminPage.css";
import promoJSON from "../data/promo.json";

let index = 5;

class AdminPage extends Component {
  state = {
    permission: true,
    promo: promoJSON,
    addPromo: {
      id: "",
      name: "",
      price: "",
      unit: "m²",
      amount: "",
      pic: "",
    },
  };

  handleLogout = () => {
    this.setState({
      permission: false,
    });
  };

  handleNameOnChange = (e) => {
    let addPromo = { ...this.state.addPromo };
    addPromo.name = e.target.value;
    this.setState({ addPromo });
  };
  handlePriceOnChange = (e) => {
    let addPromo = { ...this.state.addPromo };
    addPromo.price = e.target.value;
    this.setState({ addPromo });
  };
  handleUnitOnChange = (e) => {
    let addPromo = { ...this.state.addPromo };
    addPromo.unit = e.target.value;
    this.setState({ addPromo });
  };
  handleAmountOnChange = (e) => {
    let addPromo = { ...this.state.addPromo };
    addPromo.amount = e.target.value;
    this.setState({ addPromo });
  };
  handlePicOnChange = (e) => {
    let addPromo = { ...this.state.addPromo };
    addPromo.pic = e.target.value;
    this.setState({ addPromo });
  };

  handleSubmitPromo = () => {
    let promo = this.state.promo;
    let addPromo = this.state.addPromo;
    promo = [...promo, addPromo];
    addPromo.id = index;
    index++;

    this.setState({
      promo,
    });

    promoJSON.push(this.state.addPromo);
  };

  render() {
    if (this.state.permission) {
      return (
        <div className="adminWrapper">
          <p>Panel admina</p>
          <button className="logout" onClick={this.handleLogout}>
            Wyloguj
          </button>
          <form className="promoAdd">
            <label className="promolabel">
              <p>DODAJ PROMOCJĘ</p>
              Podaj nazwę produktu{" "}
              <input
                key="name"
                value={this.state.addPromo.name}
                onChange={this.handleNameOnChange}
                type="text"
              />
              Podaj cenę produktu{" "}
              <input
                key="price"
                value={this.state.addPromo.price}
                onChange={this.handlePriceOnChange}
                type="text"
              />
              Wybierz jednostki
              <select
                key="unit"
                value={this.state.addPromo.unit}
                onChange={this.handleUnitOnChange}
                name="jednostki"
              >
                <option value="m²">m²</option>
                <option value="szt">szt</option>
                <option value="mb">mb</option>
                <option value="kg">kg</option>
              </select>
              Podaj stan magazynowy{" "}
              <input
                key="amount"
                value={this.state.addPromo.amount}
                onChange={this.handleAmountOnChange}
                type="text"
              />
              Dodaj zdjęcie produktu{" "}
              <input
                key="pic"
                value={this.state.addPromo.pic}
                onChange={this.handlePicOnChange}
                type="text"
              />
            </label>
          </form>
          <button onClick={this.handleSubmitPromo}>DODAJ</button>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AdminPage;
