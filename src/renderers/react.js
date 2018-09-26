import React from "react";
import ReactDOM from "react-dom";

export const react = fn => (element, state) =>
  ReactDOM.render(fn(state)(React.createElement), element);
