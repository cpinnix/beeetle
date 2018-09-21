import create from "../create";
import hyper from "../hyper";
import { name } from "../utils";
import "../components/vs-clock";

create(name("vs-route-clock"), hyper(wire => wire()`<vs-clock></vs-clock>`));
