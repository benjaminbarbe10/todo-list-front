import React, { Component } from "react";
import { getAdvert } from "../actions/actions";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class Advert extends Component {
  componentDidMount() {
    this.props.getAdvert();
  }
  render() {
    const { advert } = this.props;
    return (
      <div>
        <Header />
        <h1>Advert</h1>
        {advert.name} {advert.surname}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  advert: state.advert
});

export default connect(mapStateToProps, { getAdvert })(Advert);
