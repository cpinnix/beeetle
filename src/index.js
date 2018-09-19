/* global document */

import { Router } from "@vaadin/router";
import "./routes/vs-route-home";
import "./routes/vs-route-clock";
import "./routes/vs-route-triangle";
// import './components/layout';
// import './components/provider';

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

// document.getElementById('app').innerHTML = `
//   <vs-provider></vs-provider>
//   <vs-layout></vs-layout>
// `;

// const provider = document.querySelector('vs-provider');
// provider.props = props => ({
//   ...props,
//   children: ({ props }) => {
//     console.log(props);
//   },
// });
//
// const layout = document.querySelector('vs-layout');
// layout.props = props => ({
//   ...props,
//   left: ({ element }) => (element.innerHTML = `<vs-clock></vs-clock>`),
// });
