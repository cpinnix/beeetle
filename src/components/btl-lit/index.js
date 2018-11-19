import lit from "../../renderers/lit";
import { create } from "../../beeetle";
import "../btl-text";

create({
  name: "btl-lit",
  props: {
    message: "Lit Element"
  },
  render: lit(
    (html, { message }) => html`<btl-text .text=${message}></btl-text>`
  )
});
