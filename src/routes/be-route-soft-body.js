import { create } from "../../packages/ut-component";
import { html } from "../renderers/html";
import "../components/be-soft-body";

create({
  name: "be-route-soft-body",
  render: html("<be-soft-body></be-soft-body>")
});
