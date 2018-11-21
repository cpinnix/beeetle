import hyper from "../renderers/hyper";
import { create } from "../../packages/ut-component";
import "../components/be-button";
import "../components/be-text";

create({
  name: "be-route-home",
  render: hyper(
    wire => wire()`
        <div>
          <be-text text=${"Home"} />
        </div>
        <be-button />
      `
  )
});
