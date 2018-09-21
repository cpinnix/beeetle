import Vue from "vue";

export const vue = fn => _ => ({
  ..._,
  renderer: (element, state) => {
    new Vue({
      el: element,
      data: state,
      render: fn(state)
    });
  }
});
