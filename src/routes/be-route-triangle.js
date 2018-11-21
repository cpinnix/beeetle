import { html } from "../renderers";
import { create } from "../../packages/ut-component";
import "../components/be-triangle";

create({
  name: "be-route-triangle",
  render: html(`<be-triangle></be-triangle>`)
});
