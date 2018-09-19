import create from "../../create";
import { vue, name, actions } from "../../utils";
import "../vs-text";

create(
  name("vs-vue"),
  actions({
    click: () => console.log("hello")
  }),
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
              props: props => ({ ...props, text: "Hello" })
            }
          })
        ]
      )
    ]);
  })
);
