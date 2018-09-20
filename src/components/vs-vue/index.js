import create from "../../create";
import { vue, name, state } from "../../utils";
import "../vs-text";

create(
  name("vs-vue"),
  state({
    actions: {
      click: () => console.log("hello")
    }
  }),
  vue(({ state: { actions: { click } } }) => h => {
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
);
