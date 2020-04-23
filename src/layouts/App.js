import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Footer from "./Footer";
import Navigation from "./Navigation";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <header>{<Header />}</header>
          <aside>{<Navigation />}</aside>
          <main>
            <section className="page">{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
