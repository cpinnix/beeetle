import create from "../create";
import { name, hyper } from "../utils";
import "../components/vs-clock";

create(name("vs-route-clock"), hyper(wire => wire()`<vs-clock></vs-clock>`));
