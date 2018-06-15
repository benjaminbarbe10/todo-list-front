import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";

class AdvertForm extends Component {
  submit() {
    //this
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="surname">SurName</label>
          <Field name="surname" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AdvertForm = reduxForm({
  form: "advert"
})(AdvertForm);

export default AdvertForm;
