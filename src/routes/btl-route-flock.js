import { html } from "../renderers";
import { create } from "../beeetle";
import "../components/btl-flock";

create({
  name: "btl-route-flock",
  render: html(`<btl-flock></btl-flock>`)
});
