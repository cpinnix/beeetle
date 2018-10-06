import component from "./component";
import hyper from "../renderers/hyper";
import { name, render } from "../lib";
import "../components/vs-button";
import "../components/vs-vue";
import "../components/vs-lit";
import "../components/vs-text";
import "../components/vs-react";

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
      <vs-react></vs-react>
      <vs-lit></vs-lit>
    `
    )
  )
);
