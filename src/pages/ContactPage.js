import React, { Component } from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // nie wysylaj na kliku
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form>
          <h4>Napisz do nas.</h4>
          <textarea
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>

          <button onClick={this.handleSubmit}>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value !== ""}
          message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę ?"
        />

        <div className="staticContact">
          <p>Sklep Wielobranżowy Tybuszewscy</p>
          <p>Jastrzębska 12</p>
          <p>87-600 Lipno</p>
          <p>+48 287-21-51</p>
          <p>sklep@tybuszewscy.pl</p>
        </div>
      </div>
    );
  }
}

export default ContactPage;
