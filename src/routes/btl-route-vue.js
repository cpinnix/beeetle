import { html } from "../renderers";
import { create } from "../beeetle";
import "../components/btl-vue";

create({
  name: "btl-route-vue",
  render: html(`<btl-vue></btl-vue>`)
});
