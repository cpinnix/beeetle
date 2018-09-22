import create from "../../create";
import { vue } from "../../vue";
import { render, name, state } from "../../utils";
import "../vs-text";

create(
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
                state: state => ({
                  ...state,
                  props: { ...state.props, text: "Hello" }
                })
              }
            })
          ]
        )
      ]);
    })
  )
);
