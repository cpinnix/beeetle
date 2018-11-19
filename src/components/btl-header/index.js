import hyper from "../../renderers/hyper";
import { create, printWarning } from "../../beeetle";
import "../btl-text";

const obj = {};

create({
  name: "btl-header",
  props: {
    navigate: () => printWarning("btl-header", "navigate function is unset")
  },
  render: hyper(
    (wire, { navigate }) => wire(obj)`
        <ul>
          <li>
            <a onclick=${() => navigate("/")}><btl-text text=${"Home"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/todo")}><btl-text text=${"Todo"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/triangle")}><btl-text text=${"Triangle"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/flock")}><btl-text text=${"Flock"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/softbody")}><btl-text text=${"Soft Body"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/clock")}><btl-text text=${"Clock"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/vue")}><btl-text text=${"Vue"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/lit")}><btl-text text=${"Lit"} /></a>
          </li>
          <li>
            <a href="/report" target="_blank"><btl-text text=${"Report"} /></a>
          </li>
        </ul>
      `
  )
});
