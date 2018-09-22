import component from "./component";
import { html } from "../html";
import { name, render } from "../utils";
import "../components/vs-clock";

component(name("vs-route-clock"), render(html(`<vs-clock></vs-clock>`)));
