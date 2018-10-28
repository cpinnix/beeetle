import component from "./component";
import hyper from "../renderers/hyper";
import { name, render } from "../beeetle";
import "../components/vs-button";
import "../components/vs-text";

component(
  name("vs-route-home"),
  render(
    hyper(
      wire => wire()`
        <div>
          <vs-text state=${"Home"} />
        </div>
        <vs-button />
      `
    )
  )
);
