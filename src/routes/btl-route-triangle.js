import { html } from "../renderers";
import { create } from "../beeetle";
import "../components/btl-triangle";

create({
  name: "btl-route-triangle",
  render: html(`<btl-triangle></btl-triangle>`)
});
