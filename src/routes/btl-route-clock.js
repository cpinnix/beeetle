import { create } from "../beeetle";
import hyper from "../renderers/hyper";
import "../components/btl-clock";

create({
  name: "btl-route-clock",
  render: hyper(
    wire => wire()`
      <btl-clock></btl-clock>
    `
  )
});
