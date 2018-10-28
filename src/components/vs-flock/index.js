/* global document */

import component from "../component";
import { render, name, state, componentDidMount } from "../../beeetle";
import Vector from "./vector";
import Boid from "./boid";
import Flock from "./flock";

component(
  name("vs-flock"),
  state({}),
  render((element, { flock }) => {
    let canvas = element.querySelector("canvas");

    if (!canvas) {
      canvas = document.createElement("canvas");
      element.appendChild(canvas);
    }

    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 120;
    const context = canvas.getContext("2d");
    context.fillStyle = "rgba(255,255,255,1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "rgba(255,255,255,0.15)";
    context.fillRect(0, 0, canvas.width, canvas.height);
    flock.forEach(boid => {
      const centerX = boid.position.x;
      const centerY = boid.position.y;
      const colorMap = [
        "#2196F3",
        "#1E88E5",
        "#1976D2",
        "#1565C0",
        "#0D47A1",

        "#D81B60",
        "#C2185B",
        "#AD1457",
        "#880E4F"
      ];

      const colorId = ~~((boid.velocity.x + boid.velocity.y) / 2 * (9 / 2));
      context.beginPath();

      context.fillStyle = colorMap[colorId];
      context.fillRect(centerX, centerY, 3, 3);
    });
  }),
  componentDidMount(({ getState, setState }) => {
    const opts = {
      position: new Vector(300, 300), //default position
      velocity: new Vector(1, 1), //default starting velocity
      cohesionAOE: 25,
      separationAOE: 8
    };

    const population = [];
    let size = 800;
    while (size--) {
      opts.position = new Vector(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
      opts.velocity = new Vector(
        (Math.random() - 0.5) * 1,
        (Math.random() - 0.5) * 1
      );
      population.push(new Boid(opts));
    }

    const flock = new Flock(
      population,
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );

    setState({ flock });

    const tick = () => {
      const flock = getState().flock;
      flock.tick();
      setState({ flock });
      requestAnimationFrame(tick);
    };

    tick();
  })
);
