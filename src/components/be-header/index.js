import hyper from "../../renderers/hyper";
import { create, printWarning } from "../../../packages/ut-component";
import "../be-text";

const obj = {};

create({
  name: "be-header",
  props: {
    navigate: () => printWarning("be-header", "navigate function is unset"),
  },
  render: hyper(
    (wire, { navigate }) => wire(obj)`
        <ul>
          <li>
            <a onclick=${() => navigate("/")}><be-text text=${"Home"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/todo")}><be-text text=${"Todo"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/triangle")}><be-text text=${"Triangle"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/flock")}><be-text text=${"Flock"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/softbody")}><be-text text=${"Soft Body"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/clock")}><be-text text=${"Clock"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/vue")}><be-text text=${"Vue"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/lit")}><be-text text=${"Lit"} /></a>
          </li>
        </ul>
      `
  ),
});
