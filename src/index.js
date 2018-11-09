/* global document, import */

import "./components/btl-header";
import { router, mount } from "./router";

document.querySelector("btl-header").navigate = to => router.navigate(to);

router
  .on("/", mount("btl-route-home"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-home" */ "./routes/btl-route-home").then(
        () => done()
      )
  })
  .on("/todo", mount("btl-route-todo"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-todo" */ "./routes/btl-route-todo").then(
        () => done()
      )
  })
  .on("/clock", mount("btl-route-clock"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-clock" */ "./routes/btl-route-clock").then(
        () => done()
      )
  })
  .on("/triangle", mount("btl-route-triangle"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-triangle" */ "./routes/btl-route-triangle").then(
        () => done()
      )
  })
  .on("/flock", mount("btl-route-flock"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-flock" */ "./routes/btl-route-flock").then(
        () => done()
      )
  })
  .on("/softbody", mount("btl-route-soft-body"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-soft-body" */ "./routes/btl-route-soft-body").then(
        () => done()
      )
  })
  .on("/vue", mount("btl-route-vue"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-vue" */ "./routes/btl-route-vue").then(
        () => done()
      )
  })
  .on("/lit", mount("btl-route-lit"), {
    before: done =>
      import(/* webpackChunkName: "btl-route-lit" */ "./routes/btl-route-lit").then(
        () => done()
      )
  })
  .resolve();
