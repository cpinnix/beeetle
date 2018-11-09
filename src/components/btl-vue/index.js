import vue from "../../renderers/vue";
import { create } from "../../beeetle";
import "../btl-text";

create({
  name: "btl-vue",
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
          h("btl-text", {
            domProps: {
              text: "Vue Button"
            }
          })
        ]
      )
    ])
  )
});
