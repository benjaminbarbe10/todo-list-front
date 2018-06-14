import React from "react";
import { Field, reduxForm } from "redux-form";

let AdvertForm = props => {
  const { handleSubmit } = props;
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
};

AdvertForm = reduxForm({
  form: "advert"
})(AdvertForm);

export default AdvertForm;
