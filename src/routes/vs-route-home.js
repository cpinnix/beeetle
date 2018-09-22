import component from "./component";
import { hyper } from "../hyper";
import { name, render } from "../utils";
import "../components/vs-button";
import "../components/vs-vue";
import "../components/vs-lit";
import "../components/vs-text";

component(
  name("vs-route-home"),
  render(
    hyper(
      wire => wire()`
      <div>
        <vs-text state=${state => ({
          ...state,
          props: { ...state.props, text: "Home" }
        })}
        >
        </vs-text>
      </div>
      <vs-button></vs-button>
      <vs-vue></vs-vue>
      <vs-lit></vs-lit>
    `
    )
  )
);
