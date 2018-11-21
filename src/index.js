/* global document, import */

import "./components/be-header";
import Navigo from "navigo";

const router = new Navigo();

const mount = tag => () => {
  document.getElementById("root").innerHTML = `<${tag}></${tag}>`;
};

document.querySelector("be-header").navigate = to => router.navigate(to);

router
  .on("/", mount("be-route-home"), {
    before: done =>
      import(/* webpackChunkName: "be-route-home" */ "./routes/be-route-home").then(
        () => done()
      )
  })
  .on("/todo", mount("be-route-todo"), {
    before: done =>
      import(/* webpackChunkName: "be-route-todo" */ "./routes/be-route-todo").then(
        () => done()
      )
  })
  .on("/clock", mount("be-route-clock"), {
    before: done =>
      import(/* webpackChunkName: "be-route-clock" */ "./routes/be-route-clock").then(
        () => done()
      )
  })
  .on("/triangle", mount("be-route-triangle"), {
    before: done =>
      import(/* webpackChunkName: "be-route-triangle" */ "./routes/be-route-triangle").then(
        () => done()
      )
  })
  .on("/flock", mount("be-route-flock"), {
    before: done =>
      import(/* webpackChunkName: "be-route-flock" */ "./routes/be-route-flock").then(
        () => done()
      )
  })
  .on("/softbody", mount("be-route-soft-body"), {
    before: done =>
      import(/* webpackChunkName: "be-route-soft-body" */ "./routes/be-route-soft-body").then(
        () => done()
      )
  })
  .on("/vue", mount("be-route-vue"), {
    before: done =>
      import(/* webpackChunkName: "be-route-vue" */ "./routes/be-route-vue").then(
        () => done()
      )
  })
  .on("/lit", mount("be-route-lit"), {
    before: done =>
      import(/* webpackChunkName: "be-route-lit" */ "./routes/be-route-lit").then(
        () => done()
      )
  })
  .resolve();
