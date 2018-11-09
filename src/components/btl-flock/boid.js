import box from "./box/box";
import point from "./point/point";
import add from "./point/add";
import sub from "./point/sub";
import multiplyScalar from "./point/multiply-scalar";
import magnitude from "./point/magnitude";
import unitVector from "./point/unitVector";
import queryRange from "./quad-tree/query-range";

export default class Boid {
  constructor(opts) {
    this.opts = opts;
    this.position = opts.position || point(0, 0);
    this.velocity = opts.velocity || point(0, 0);
    this.acceleration = opts.acceleration || point(0, 0);
    this.velocityLimit = opts.velocityLimit || 2.5;
    this.accelerationLimit = opts.accelerationLimit || 0.5;

    // forces
    this.cohesionAOE = this.opts.cohesionAOE || 20;
    this.separationAOE = this.opts.separationAOE || 8;
    this.alignmentAOE = this.opts.cohesionAOE || 20;

    this.cohesionStrength = opts.cohesionStrength || 1;
    this.separationStrength = opts.separationStrength || 30;
    this.alignmentStrength = opts.alignmentStrength || 15;
    this.boundaryStrength = opts.boundaryStrength || 50;

    this.nextAcceleration = point(0, 0);
  }

  update() {
    this.updatePosition();
    this.updateVelocity();
    this.updateAcceleration();
  }

  updateVelocity() {
    this.velocity = add(this.velocity, this.acceleration);
    if (magnitude(this.velocity) > this.velocityLimit) {
      this.velocity = unitVector(this.velocity, this.velocityLimit);
    }
  }

  updatePosition() {
    this.position = add(this.position, this.velocity);
  }

  updateAcceleration() {
    this.acceleration = this.nextAcceleration;
    if (magnitude(this.acceleration) > this.accelerationLimit) {
      this.acceleration = unitVector(this.acceleration, this.accelerationLimit);
    }
  }

  calculateNextAcceleration(quadtree) {
    let resultVector = point(0, 0);
    this.cohesionAOE = this.opts.cohesionAOE;
    const neighbors = this.getNeighbors(
      this.cohesionAOE,
      this.position,
      quadtree
    );

    const cohesionForce = multiplyScalar(
      this.calculateCohesionForce(neighbors),
      this.cohesionStrength
    );

    const alignmentForce = multiplyScalar(
      this.calculateAlignmentForce(neighbors),
      this.alignmentStrength
    );

    const separationForce = multiplyScalar(
      this.calculateSeparationForce(quadtree),
      this.separationStrength
    );

    const boundaryAvoidanceForce = multiplyScalar(
      this.boundaryAvoidance(),
      this.boundaryStrength
    );

    resultVector = add(resultVector, cohesionForce);
    resultVector = add(resultVector, alignmentForce);
    resultVector = add(resultVector, separationForce);
    resultVector = add(resultVector, boundaryAvoidanceForce);

    this.nextAcceleration = add(this.acceleration, resultVector);

    if (magnitude(this.nextAcceleration) > this.accelerationLimit) {
      this.nextAcceleration = unitVector(
        this.nextAcceleration,
        this.accelerationLimit
      );
    }
  }

  getNeighbors(aoe, position, quadtree) {
    const aoeRange = box(
      point(position.x - aoe, position.y - aoe),
      point(position.x + aoe, position.y + aoe)
    );
    let neighbors = queryRange(quadtree, aoeRange);

    //get all boids within AoE
    // const aoeBounds = boxPoint(position.x, position.y, aoe.width, aoe.height);
    // const neighbors = quadtree.retrieve(aoeBounds);

    neighbors = neighbors.slice(0, 100);

    return neighbors;
  }

  calculateCohesionForce(neighbors) {
    //
    // const neighbors = this.getNeighbors(this.cohesionAOE,
    //                                     this.position,
    //                                     quadtree)

    let result = point(0, 0);

    if (neighbors.length === 0) {
      return result;
    }

    for (let i = 0; i < neighbors.length; i++) {
      result = add(result, neighbors[i].value.position);
    }

    //average
    result = multiplyScalar(result, 1 / neighbors.length);

    //subtract current position from center of mass
    result = sub(result, this.position);
    return result;
  }

  calculateAlignmentForce(neighbors) {
    //
    // const neighbors = this.getNeighbors(this.alignmentAOE,
    //                                     this.position,
    //                                     quadtree)

    let result = point(0, 0);
    if (neighbors.length === 0 || neighbors === undefined) {
      return result;
    }

    for (let i = 0; i < neighbors.length; i++) {
      result = add(result, neighbors[i].value.velocity);
    }

    result = multiplyScalar(result, 1 / neighbors.length); //avg neighbor orientation

    return result;
  }

  calculateSeparationForce(quadtree) {
    this.separationAOE = this.opts.separationAOE;
    const neighbors = this.getNeighbors(
      this.separationAOE,
      this.position,
      quadtree
    );
    let result = point(0, 0);
    if (neighbors.length === 0 || neighbors === undefined) {
      return result;
    }

    //determine the repulsion vector and add to final result
    for (let i = 0; i < neighbors.length; i++) {
      result = add(result, sub(this.position, neighbors[i].value.position));
    }

    //get average
    result = multiplyScalar(result, 1 / neighbors.length);

    return result;
  }

  boundaryAvoidance() {
    const bounds = [100, 50, window.innerHeight - 130, window.innerWidth - 100];
    let result = point(0, 0);

    if (this.position.x < bounds[1]) {
      result.x = bounds[1] - this.position.x;
    } else if (this.position.x > bounds[3]) {
      result.x = bounds[3] - this.position.x;
    }

    if (this.position.y < bounds[0]) {
      result.y = bounds[0] - this.position.y;
    } else if (this.position.y > bounds[2]) {
      result.y = bounds[2] - this.position.y;
    }

    return result;
  }
}
