import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Adverts extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

/*  state = { adverts: [] };

  componentDidMount() {   
    fetch("/adverts")
      .then(res => res.json())
      .then(adverts => this.setState({ adverts }));
  }

  render() {
    return (
      <div className="App">
        <h1>Adverts</h1>
        {this.state.adverts.map(advert => (
          <div key={advert.id}>{advert.name}</div>
        ))}
      </div>
    );
  }*/
