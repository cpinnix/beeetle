import Vue from "vue";

const vue = fn => (element, ...rest) => {
  new Vue({
    el: element,
    render: h => fn(h, ...rest)
  });
};

export default vue;
