import Vue from "vue";

export const vue = fn => _ => ({
  ..._,
  renderer: component => {
    new Vue({
      el: component.element,
      data: component,
      render: fn(component)
    });
  }
});
