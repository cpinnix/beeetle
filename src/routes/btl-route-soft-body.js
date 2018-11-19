import { create } from "../beeetle";
import { html } from "../renderers/html";
import "../components/btl-soft-body";

create({
  name: "btl-route-soft-body",
  render: html("<btl-soft-body></btl-soft-body>")
});
