import component from "./component";
import hyper from "../renderers/hyper";
import { name, render } from "../lib";
import "../components/vs-button";
import "../components/vs-lit";
import "../components/vs-text";

component(
  name("vs-route-home"),
  render(
    hyper(
      wire => wire()`
        <div>
          <vs-text state=${"Home"} />
        </div>
        <div>
          <vs-lit />
        </div>
        <vs-button />
        <ul>
          <li>
            <a href="/triangle">Triangle</a>
          </li>
          <li>
            <a href="/clock">Clock</a>
          </li>
          <li>
            <a href="/vue">Vue</a>
          </li>
          <li>
            <a href="/report">Report</a>
          </li>
        </ul>
      `
    )
  )
);
