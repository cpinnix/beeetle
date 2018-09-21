import create from "../../create";
import { hyper, name, state } from "../../utils";
import "../vs-time";
import "../vs-text";

create(
  name("vs-clock"),
  state({
    i18n: {
      TEXT: "The current time is ",
      hello: "world"
    },
    attrs: {
      loaded: true
    }
  }),
  hyper(
    (wire, { i18n: { TEXT } }) => wire()`
      <div>
        <vs-text
          state=${state => ({
            ...state,
            props: {
              ...state.props,
              text: TEXT
            }
          })}
        >
        </vs-text>
        <vs-time></vs-time>
      </div>
    `
  )
);
