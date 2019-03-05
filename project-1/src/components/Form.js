import React from "react";

const Form = props => (
  <form onSubmit={props.getBeer}>
    <input type="text" name="beerName" />
    <button>Search</button>
  </form>
);

export default Form;
