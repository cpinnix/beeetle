import Vue from "vue";

const vue = fn => (element, state, actions) => {
  new Vue({
    el: element,
    data: state,
    render: fn(state, actions)
  });
};

export default vue;
