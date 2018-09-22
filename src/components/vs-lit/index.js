import create from "../../create";
import { lit } from "../../lit";
import { render, name, state } from "../../utils";
import "../vs-text";

create(
  name("vs-lit"),
  state({
    props: {
      message: "Hello World"
    }
  }),
  render(
    lit(
      (html, { props: { message } }) =>
        html`<vs-text
          .state=${state => ({
            ...state,
            props: { ...state.props, text: message }
          })}>
        ></vs-text>`
    )
  )
);
