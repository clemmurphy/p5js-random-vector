let maxRadius
const steps = 200
let currentSteps = 0

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  background(51)
  maxRadius = windowWidth / 3
  console.log(maxRadius)
}

function draw() {
  if (currentSteps < steps) {
    translate(windowWidth / 2, windowHeight / 2)
    const oldv = createVector(
      random(-maxRadius, maxRadius),
      random(-maxRadius, maxRadius)
    )
    const v = p5.Vector.random2D()
    v.mult(random(50, maxRadius))
    strokeWeight(4)
    stroke(255, 50)
    line(0, 0, v.x, v.y)
  }
  currentSteps++
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  maxRadius = windowWidth / 3
  console.log(maxRadius)
  background(51)
}
