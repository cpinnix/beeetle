import { create } from "../../packages/ut-component";
import hyper from "../renderers/hyper";
import "../components/be-todo";

create({
  name: "be-route-todo",
  render: hyper(
    wire => wire()`
      <be-todo></be-todo>
    `
  )
});
