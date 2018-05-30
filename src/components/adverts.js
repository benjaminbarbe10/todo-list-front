import React, { Component } from "react";
export default class Adverts extends Component {
  state = { adverts: [] };

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
  }
}
