import component from "../component";
import vue from "../../renderers/vue";
import { render, name, actions } from "../../beeetle";
import "../vs-text";

component(
  name("vs-vue"),
  actions({
    click: () => console.log("hello")
  }),
  render(
    vue((_, { click }) => h =>
      h("div", [
        h(
          "button",
          {
            on: {
              click
            }
          },
          [
            h("vs-text", {
              domProps: {
                state: "Vue Button"
              }
            })
          ]
        )
      ])
    )
  )
);
