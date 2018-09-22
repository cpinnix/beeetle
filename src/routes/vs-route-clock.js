import component from "./component";
import { html } from "../renderers";
import { name, render } from "../lib";
import "../components/vs-clock";

component(name("vs-route-clock"), render(html(`<vs-clock></vs-clock>`)));
