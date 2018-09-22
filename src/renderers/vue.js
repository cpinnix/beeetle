import Vue from "vue";

export const vue = fn => (element, state) => {
  new Vue({
    el: element,
    data: state,
    render: fn(state)
  });
};
