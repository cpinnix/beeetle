import component from "../component";
import hyper from "../../renderers/hyper";
import { name, render, actions } from "../../beeetle";
import "../vs-text";
import { router } from "../../router";

const obj = {};

component(
  name("vs-header"),
  actions({
    navigate: to => router.navigate(to)
  }),
  render(
    hyper(
      (wire, _, { navigate }) => wire(obj)`
        <ul>
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
