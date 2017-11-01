let canvas, width, height, fps
let cols, rows, scl = 10

let off = {
    x: 0,
    y: 0,
    z: 0
}
let inc = {
    x: 0.1,
    y: 0.1,
    z: 0.0004
}

let particles, flowfield


function setup () {
    width = window.innerWidth  // document.documentElement.clientWidth
    height = window.innerHeight
    fps = 30;

    canvas = createCanvas(width, height)
    canvas.parent('background')

    scl = 10
    cols = floor(width / scl)
    rows = floor(height / scl)

    flowfield = new Array(cols * rows)
    for (let i = 0; i < 10000; i++)
        particles[i] = new Particle()

    background(255)
}

function draw () {
    frameRate(fps)
    noiseDetail(8)

    off.y = 0

    for (let y = 0; y < rows; y++) {
        off.x = 0
        for (let x = 0; x < cols; x++) {
            let ind = x + y * cols
            let angle = noise(off.x, off.y, off.z) * TWO_PI * 4
            let v = p5.Vector.fromAngle(angle)
            v.setMag(2.5)
            flowfield[ind] = v
            off.x += inc.x
        }
        off.y += inc.y
        off.z += inc.z
    }

    for (let particle of particles) {
        particle.follow(flowfield)
        particle.update()
        particle.edges()
        particle.show()
    }

}
