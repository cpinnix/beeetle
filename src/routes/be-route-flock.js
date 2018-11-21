import { html } from "../renderers";
import { create } from "../../packages/ut-component";
import "../components/be-flock";

create({
  name: "be-route-flock",
  render: html(`<be-flock></be-flock>`)
});
