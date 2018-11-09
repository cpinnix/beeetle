/* global document, requestAnimationFrame, cancelAnimationFrame */

import { create, useState, useEffect } from "../../beeetle";
import point from "./point/point";
import Boid from "./boid";
import Flock from "./flock";

create({
  name: "btl-flock",
  render: element => {
    // Initiation

    const opts = {
      position: point(300, 300), //default position
      velocity: point(1, 1), //default starting velocity
      cohesionAOE: 25,
      separationAOE: 8
    };

    const population = [];
    let size = 800;
    while (size--) {
      opts.position = point(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      );
      opts.velocity = point(
        (Math.random() - 0.5) * 1,
        (Math.random() - 0.5) * 1
      );
      population.push(new Boid(opts));
    }

    // State

    const [state, setState] = useState({
      flock: new Flock(population, 0, 0, window.innerWidth, window.innerHeight)
    });

    useEffect(() => {
      const id = requestAnimationFrame(() => {
        state.flock.tick();
        setState({ flock: state.flock });
      });

      return () => cancelAnimationFrame(id);
    });

    // Render

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
    state.flock.forEach(boid => {
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
  }
});
