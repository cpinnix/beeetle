import Vue from "vue";

export const vue = fn => _ => ({
  ..._,
  render: base => state => {
    new Vue({
      el: state.element,
      data: state,
      methods: state.actions,
      render: fn(state)
    });
  }
});
