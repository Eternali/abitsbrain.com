let width, height
let cols, rows, fr, scl = 10

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
    width = document.documentElement.clientWidth
    height = 100
    createCanvas(width, height)

    scl = 10
    cols = floor(width / scl)
    rows = floor(height / scl)
    fr = createP('')

    flowfield = new Array(cols * rows)
    for (let i = 0; i < 10000; i++)
        particles[i] = new Particle()

    background(255)
}

function draw () {
    noiseDetail(8)

    off.y = 0


}
