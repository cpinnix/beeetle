import lit from "../../renderers/lit";
import { create } from "../../../packages/ut-component";
import "../be-text";

create({
  name: "be-lit",
  props: {
    message: "Lit Element"
  },
  render: lit((html, { message }) => html`<be-text .text=${message}></be-text>`)
});
