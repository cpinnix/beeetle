import hyper from "../renderers/hyper";
import { create } from "../beeetle";
import "../components/btl-button";
import "../components/btl-text";

create({
  name: "btl-route-home",
  render: hyper(
    wire => wire()`
        <div>
          <btl-text text=${"Home"} />
        </div>
        <btl-button />
      `
  )
});
