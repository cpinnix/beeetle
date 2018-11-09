import { create } from "../beeetle";
import hyper from "../renderers/hyper";
import "../components/btl-todo";

create({
  name: "btl-route-todo",
  render: hyper(
    wire => wire()`
      <btl-todo></btl-todo>
    `
  )
});
