/* global document */

import { Router } from "@vaadin/router";
import "./routes/ui-route-home";
import "./routes/ui-route-clock";
import "./routes/ui-route-triangle";
// import './components/layout';
// import './components/provider';

const router = new Router(document.getElementById("app"));

router.setRoutes([
  {
    path: "/",
    component: "ui-route-home"
  },
  {
    path: "/clock",
    component: "ui-route-clock"
  },
  {
    path: "/triangle",
    component: "ui-route-triangle"
  }
]);

// document.getElementById('app').innerHTML = `
//   <ui-provider></ui-provider>
//   <ui-layout></ui-layout>
// `;

// const provider = document.querySelector('ui-provider');
// provider.props = props => ({
//   ...props,
//   children: ({ props }) => {
//     console.log(props);
//   },
// });
//
// const layout = document.querySelector('ui-layout');
// layout.props = props => ({
//   ...props,
//   left: ({ element }) => (element.innerHTML = `<ui-clock></ui-clock>`),
// });
