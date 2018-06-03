import React, { Component } from "react";
import { getAdverts } from "../actions/actions";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class Adverts extends Component {
  componentDidMount() {
    this.props.getAdverts();
  }

  render() {
    const { adverts = [] } = this.props;

    return (
      <div>
        <Header />
        <h1>Adverts</h1>
        {adverts.map(advert => (
          <li key={advert._id}>
            <a href={"adverts/" + advert._id}>
              {advert.name} {advert.surname}
            </a>
          </li>
        ))}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adverts: state.adverts
});

export default connect(mapStateToProps, { getAdverts })(Adverts);

/*
- PROMESSE JAVASCRIPT
- destructuring 
-Create a form with redux( many inputs )
*/
