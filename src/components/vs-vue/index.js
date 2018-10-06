import component from "../component";
import vue from "../../renderers/vue";
import { render, name, state } from "../../lib";
import "../vs-text";

component(
  name("vs-vue"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(
    vue(({ actions: { click } }) => h =>
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
                state: state => "Hello"
              }
            })
          ]
        )
      ])
    )
  )
);
