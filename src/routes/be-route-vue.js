import { html } from "../renderers";
import { create } from "../../packages/ut-component";
import "../components/be-vue";

create({
  name: "be-route-vue",
  render: html(`<be-vue></be-vue>`)
});
