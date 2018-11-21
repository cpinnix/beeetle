/* global requestAnimationFrame, cancelAnimationFrame */

import {
  Engine,
  Render,
  Runner,
  Composite,
  Composites,
  World,
  Bodies,
  Mouse,
  MouseConstraint
} from "matter-js";
import { create, useEffect } from "../../../packages/ut-component";

const edges = (width, height) => {
  const edgeWidth = 48;

  return [
    Bodies.rectangle(width / 2, -edgeWidth / 2, width, edgeWidth, {
      isStatic: true
    }),
    Bodies.rectangle(width / 2, height + edgeWidth / 2, width, edgeWidth, {
      isStatic: true
    }),
    Bodies.rectangle(width + edgeWidth / 2, height / 2, edgeWidth, height, {
      isStatic: true
    }),
    Bodies.rectangle(0 - edgeWidth / 2, height / 2, edgeWidth, height, {
      isStatic: true
    })
  ];
};

create({
  name: "be-soft-body",
  render: element => {
    useEffect(() => {
      const engine = Engine.create();
      const { world } = engine;

      const runner = Runner.create();
      Runner.run(runner, engine);

      const particleOptions = {
        friction: 0.05,
        frictionStatic: 0.1,
        render: { visible: true }
      };

      const width = 800;
      const height = 600;

      World.add(world, [
        Composites.softBody(250, 400, 4, 4, 16, 16, true, 4, particleOptions),
        ...edges(width, height)
      ]);

      // Rendering

      const debug = true;
      let canvas;
      let frameId;
      let render;
      let stop;

      if (!debug) {
        canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = 800;
        canvas.height = 600;

        element.innerHTML = "";
        element.appendChild(canvas);
        render = () => {
          const bodies = Composite.allBodies(world).filter(
            ({ label }) => label === "Circle Body"
          );

          context.fillStyle = "#fff";
          context.strokeStyle = "#000";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.strokeRect(0, 0, canvas.width, canvas.height);

          context.beginPath();

          bodies.forEach(({ vertices }) => {
            context.moveTo(vertices[0].x, vertices[0].y);

            vertices.forEach(({ x, y }) => context.lineTo(x, y));

            context.lineTo(vertices[0].x, vertices[0].y);
          });

          context.lineWidth = 1;
          context.strokeStyle = "#000";
          context.stroke();

          frameId = requestAnimationFrame(render);
        };

        render();

        stop = () => cancelAnimationFrame(frameId);
      } else {
        // Debug Rendering
        render = Render.create({
          element,
          engine,
          options: {
            width: 800,
            height: 600,
            showAngleIndicator: false
          }
        });

        Render.run(render);

        canvas = render.canvas;

        stop = () => Render.stop(render);
      }

      // Interaction

      const mouse = Mouse.create(canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.9,
          render: {
            visible: false
          }
        }
      });

      World.add(world, mouseConstraint);

      return () => {
        stop();
        Runner.stop(runner);
      };
    });
  }
});
