import component from "./component";
import { html } from "../renderers";
import { name, render } from "../lib";
import "../components/vs-vue";

component(name("vs-route-vue"), render(html(`<vs-vue></vs-vue>`)));
