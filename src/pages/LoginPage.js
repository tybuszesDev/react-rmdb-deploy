import React, { Component } from "react";
import "../styles/LoginPage.css";
import { Route, Redirect } from "react-router-dom";

let admins = require("../data/admins.json");

class LoginPage extends Component {
  state = {
    login: "",
    password: "",
    permission: false,
  };

  handleLoginChange = (e) => {
    this.setState({
      login: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = () => {
    if (
      this.state.login === admins[0].userName &&
      this.state.password === admins[0].passSalted
    ) {
      return this.setState({
        permission: true,
      });
    } else if (this.state.login === "" || this.state.password === "") {
      return alert("Uzupełnij pole login oraz hasło");
    } else {
      return alert("Nieprawidłowy login lub hasło");
    }
  };

  render() {
    return (
      <Route
        render={() =>
          this.state.permission ? (
            <Redirect to="/admin" />
          ) : (
            <form className="loginform" onSubmit={this.handleSubmit}>
              <label htmlFor="">
                Podaj Login{" "}
                <input
                  onChange={this.handleLoginChange}
                  value={this.state.login}
                  type="text"
                />
              </label>
              <label htmlFor="">
                Podaj Hasło{" "}
                <input
                  onChange={this.handlePasswordChange}
                  value={this.state.password}
                  type="password"
                />
              </label>
              <button type="submit">Zaloguj</button>
            </form>
          )
        }
      />
    );
  }
}

export default LoginPage;
