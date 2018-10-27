import React from "react";
import ReactDOM from "react-dom";

const react = fn => (element, ...rest) =>
  ReactDOM.render(fn(...rest)(React.createElement), element);

export default react;
