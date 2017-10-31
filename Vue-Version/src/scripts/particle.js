class Particle {

    constructor () {
        pos = createVector(random(width), random(height))
        vel = createVector(0, 0)
        acc = createVector(0, 0)
        maxSpeed = 2
        prevPos = pos.copy()
    }

    update () {
        vel.add(acc);
    }

}
