import { create } from "../../packages/ut-component";
import hyper from "../renderers/hyper";
import "../components/be-clock";

create({
  name: "be-route-clock",
  render: hyper(
    wire => wire()`
      <be-clock></be-clock>
    `
  )
});
