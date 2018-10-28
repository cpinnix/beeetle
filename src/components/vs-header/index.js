import component from "../component";
import hyper from "../../renderers/hyper";
import { name, render, actions } from "../../beeetle";
import "../vs-text";
import { printWarning } from "../../print-warning";

const obj = {};

component(
  name("vs-header"),
  actions({
    navigate: () => printWarning("vs-header", "navigate function is unset")
  }),
  render(
    hyper(
      (wire, _, { navigate }) => wire(obj)`
        <ul>
          <li>
            <a onclick=${() => navigate("/")}><vs-text state=${"Home"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/triangle")}><vs-text state=${"Triangle"} /></a>
          </li>
          <li>
            <a onclick=${() =>
              navigate("/clock")}><vs-text state=${"Clock"} /></a>
          </li>
          <li>
            <a onclick=${() => navigate("/vue")}><vs-text state=${"Vue"} /></a>
          </li>
          <li>
            <a href="/report" target="_blank"><vs-text state=${"Report"} /></a>
          </li>
        </ul>
      `
    )
  )
);
