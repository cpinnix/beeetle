/* global document, import */

import "./components/vs-header";
import { router, mount } from "./router";

document.querySelector("vs-header").actions = {
  navigate: to => router.navigate(to)
};

router
  .on("/", mount("vs-route-home"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-home" */ "./routes/vs-route-home").then(
        () => done()
      )
  })
  .on("/clock", mount("vs-route-clock"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-clock" */ "./routes/vs-route-clock").then(
        () => done()
      )
  })
  .on("/triangle", mount("vs-route-triangle"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-triangle" */ "./routes/vs-route-triangle").then(
        () => done()
      )
  })
  .on("/flock", mount("vs-route-flock"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-flock" */ "./routes/vs-route-flock").then(
        () => done()
      )
  })
  .on("/vue", mount("vs-route-vue"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-vue" */ "./routes/vs-route-vue").then(
        () => done()
      )
  })
  .on("/lit", mount("vs-route-lit"), {
    before: done =>
      import(/* webpackChunkName: "vs-route-lit" */ "./routes/vs-route-lit").then(
        () => done()
      )
  })
  .resolve();
