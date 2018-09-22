/* global document */

import { Router } from "@vaadin/router";
import "./routes/vs-route-home";
import "./routes/vs-route-clock";
import "./routes/vs-route-triangle";

const router = new Router(document.getElementById("app"));

router.setRoutes([
  {
    path: "/",
    component: "vs-route-home"
  },
  {
    path: "/clock",
    component: "vs-route-clock"
  },
  {
    path: "/triangle",
    component: "vs-route-triangle"
  }
]);
