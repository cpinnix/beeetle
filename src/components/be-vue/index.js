import vue from "../../renderers/vue";
import { create } from "../../../packages/ut-component";
import "../be-text";

create({
  name: "be-vue",
  props: {
    click: () => console.log("hello")
  },
  render: vue((h, { click }) =>
    h("div", [
      h(
        "button",
        {
          on: {
            click
          }
        },
        [
          h("be-text", {
            domProps: {
              text: "Vue Button"
            }
          })
        ]
      )
    ])
  )
});
