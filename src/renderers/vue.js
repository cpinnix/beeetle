import Vue from "vue";

const vue = fn => (element, state) => {
  new Vue({
    el: element,
    data: state,
    render: fn(state)
  });
};

export default vue;
