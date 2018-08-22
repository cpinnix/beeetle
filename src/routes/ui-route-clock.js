import create from "../components/create";
import { name, hyper } from "../utils";
import "../components/ui-clock";

create(name("ui-route-clock"), hyper(wire => wire()`<ui-clock></ui-clock>`));
