class Particle {

    constructor () {
        this.pos = createVector(random(width), random(height))
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.maxSpeed = 2
        this.prevPos = pos.copy()
    }

    update () {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    follow () {
        let ind = (floor(this.pos.x / scl) + floor(this.pos.y / scl)) * cols
        this.applyForce(vectors[ind])
    }

    applyForce (force) {
        this.acc.add(force)
    }

    show () {
        push()
        stroke(0, 5)
        strokeWeight(1)
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
        pop()
        this.updatePrev()
    }

    updatePrev () {
        this.prevPos.x = this.pos.x
        this.prevPos.y = this.pos.y
    }

    edges () {
        if (this.pos.x > width) { this.pos.x = 0; this.updatePrev() }
        if (this.pos.x < 0) { this.pos.x = width; this.updatePrev() }
        if (this.pos.x > height) { this.pos.y = 0; this.updatePrev() }
        if (this.pos.x < 0) { this.pos.y = height; this.updatePrev() }
    }

}
