/* global document, import */

import { Router } from "@vaadin/router";

setTimeout(() => {
  const router = new Router(document.getElementById("root"));

  router.setRoutes([
    {
      path: "/",
      onBeforeEnter: import(/* webpackChunkName: "vs-route-home" */ "./routes/vs-route-home"),
      component: "vs-route-home"
    },
    {
      path: "/clock",
      onBeforeEnter: import(/* webpackChunkName: "vs-route-clock" */ "./routes/vs-route-clock"),
      component: "vs-route-clock"
    },
    {
      path: "/triangle",
      onBeforeEnter: import(/* webpackChunkName: "vs-route-triangle" */ "./routes/vs-route-triangle"),
      component: "vs-route-triangle"
    }
  ]);
}, 1000);
