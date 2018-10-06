import React from "react";
import ReactDOM from "react-dom";

const react = fn => (element, state) =>
  ReactDOM.render(fn(state)(React.createElement), element);

export default react;
