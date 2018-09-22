import component from "../component";
import { raw, name, state } from "../../utils";

component(
  name("vs-layout"),
  state({
    props: {
      left: null,
      right: null
    }
  }),
  raw((element, { props: { left, right } }) => {
    element.innerHTML = `
      <div>
        <div class="left"></div>
        <div class="right"></div>
      </div>
    `;

    if (left) {
      left({ element: element.querySelector(".left") });
    }
    if (right) {
      right({ element: element.querySelector(".right") });
    }
  })
);
