let particles = [];
const num = 1500;
const noiseScale = 0.01;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

function draw() {
  background(0, 59, 105, 10);
  for(let i = 0; i< num; i++){
    let p = particles[i];
    point(p.x, p.y);
    
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    
    let r = map(particles[i].x, 0, width, 50, 255)
    let g = map(particles[i].y, 0, height, 50, 255)
    let b = map(particles[i].x, 0, width, 255, 50)
    stroke(r,g,b)
    
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}
