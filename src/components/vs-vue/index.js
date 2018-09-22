import component from "../component";
import { vue } from "../../vue";
import { render, name, state } from "../../utils";
import "../vs-text";

component(
  name("vs-vue"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  render(
    vue(({ actions: { click } }) => h => {
      return h("div", [
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
      ]);
    })
  )
);
