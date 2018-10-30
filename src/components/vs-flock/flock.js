// import BoxPoint from "./boxPoint";
import quadTree from "./quad-tree/quad-tree";
import box from "./box/box";
import point from "./point/point";
import insert from "./quad-tree/insert";
import clear from "./quad-tree/clear";

export default class Flock {
  constructor(population, originX, originY, width, height) {
    // this.i = 0
    this.population = population || [];
    this.quadtree = quadTree(
      box(point(originX, originY), point(originX + width, originY + height))
    );
  }

  tick() {
    //insert boids into quadtree
    let i, pt, boid;
    for (i = 0; i < this.population.length; i++) {
      boid = this.population[i];
      pt = point(boid.position.x, boid.position.y);
      insert(this.quadtree, pt, boid);
    }

    //calculate the forces on and resulting acceleration of each boid
    for (i = 0; i < this.population.length; i++) {
      //the callback function here returns the set of boids that will cause an effect
      //it is abstracted as a callback so we're not hardwired into using a quadtree
      //for neighbor range lookup
      if (window.changed) {
        debugger;
      }
      this.population[i].calculateNextAcceleration(this.quadtree);
    }
    //update acceleration velocity and position for each boid
    //after we've calculated what the current forces being applied
    //to the boid are
    for (i = 0; i < this.population.length; i++) {
      this.population[i].update();
    }
    //reset our quadtree
    clear(this.quadtree);
  }

  forEach(callback) {
    for (let i = 0; i < this.population.length; i++) {
      callback(this.population[i]);
    }
  }
}
