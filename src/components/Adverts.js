import React, { Component } from "react";
import { getAdverts } from "../actions/actions";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import AddAdvertForm from "./AddAdvertForm";

class Adverts extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }
  submit = values => {
    console.log(values);
  };
  onClick(e) {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  }

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
        <div className="add-advert-btn">
          <Button
            variant="fab"
            onClick={this.onClick.bind(this)}
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Button>
        </div>
        {this.state.showForm && <AddAdvertForm onSubmit={this.submit} />}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adverts: state.todos.adverts
});

export default connect(
  mapStateToProps,
  { getAdverts }
)(Adverts);
/*
- PROMESSE JAVASCRIPT
- destructuring 
-Create a form with redux( many inputs )
*/
