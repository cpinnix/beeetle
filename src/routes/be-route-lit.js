import { html } from "../renderers";
import { create } from "../../packages/ut-component";
import "../components/be-lit";

create({
  name: "be-route-lit",
  render: html(`<be-lit></be-lit>`)
});
