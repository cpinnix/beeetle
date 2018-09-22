import component from "./component";
import { hyper } from "../renderers";
import { name, render } from "../lib";
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
        <vs-text state=${state => "Home"}>
        </vs-text>
      </div>
      <vs-button></vs-button>
      <vs-vue></vs-vue>
      <vs-lit></vs-lit>
    `
    )
  )
);
