import { when, T, always } from "ramda";
import component from "../component";
import { render, name, state } from "../../lib";

component(
  name("vs-layout"),
  state({
    props: {
      left: null,
      right: null
    }
  }),
  render((element, { props: { left, right } }) => {
    element.innerHTML = `
      <div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    `;

    when(T, always(left({ element: element.querySelector(".left") })))(left);
    when(T, always(right({ element: element.querySelector(".right") })))(right);
  })
);
