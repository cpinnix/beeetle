import Vue from "vue";

export const vue = fn => _ => ({
  ..._,
  renderer: base => state => {
    new Vue({
      el: state.element,
      data: state,
      render: fn(state)
    });
  }
});
