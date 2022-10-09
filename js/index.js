/*=============================================
Setup
=============================================*/


let c = document.querySelector('canvas'),
ctx = c.getContext('2d'),
unit = 32,
cols = 12,
rows = 12,
w = unit * cols,
h = unit * rows,
particles = [],
particleCount = 200,
offInc = 0.04,
tickMult = 0.003,
tick = 0,
simplex = new SimplexNoise();

/*=============================================
Utility
=============================================*/

function hsla(h, s, l, a) {
  return 'hsla( ' + h + ', ' + s + '%, ' + l + '%, ' + a + ')';
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

/*=============================================
Particle
=============================================*/

class Particle {

  constructor() {
    this.path = [];
    this.noiseDirection = 0;
    this.noiseMagnitude = 0;
    this.pathLength = 6;
    this.speed = 10;
    this.reset();
  }

  reset() {
    this.path.length = 0;
    this.x = rand(0, w);
    this.y = rand(0, h);
    this.cx = 0;
    this.cy = 0;
    this.vx = 0;
    this.vy = 0;
    this.alpha = 0;
  }

  step() {
    if (this.alpha < 1) {
      this.alpha += 0.025;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.cx = Math.max(0, Math.min(cols - 1, Math.floor(this.x / unit)));
    this.cy = Math.max(0, Math.min(rows - 1, Math.floor(this.y / unit)));

    this.path.unshift(this.x, this.y);
    if (this.path.length > this.pathLength * 2) {
      this.path.pop();
      this.path.pop();
    }

    let _len = this.path.length;
    if (_len > 0) {
      let _lastPointX = this.path[_len - 2];
      let _lastPointY = this.path[_len - 1];
      if (_lastPointX > w || _lastPointX < 0 || _lastPointY > h || _lastPointY < 0) {
        this.reset();
      }
    }

    let _noise1 = simplex.noise3D(offInc * this.cx, offInc * this.cy, tick * tickMult);
    _noise1 = Math.min(1, _noise1);
    _noise1 = Math.max(-1, _noise1);
    this.noiseDirection = (_noise1 + 1) * Math.PI;

    let _noise2 = simplex.noise3D(offInc * this.cx, offInc * this.cy, tick * tickMult + 100);
    _noise2 = Math.min(1, _noise2);
    _noise2 = Math.max(-1, _noise2);
    this.noiseMagnitude = (_noise2 + 1) / 2;

    this.vxTarget = Math.cos(this.noiseDirection) * this.noiseMagnitude * this.speed;
    this.vyTarget = Math.sin(this.noiseDirection) * this.noiseMagnitude * this.speed;

    this.vx += (this.vxTarget - this.vx) * 0.1;
    this.vy += (this.vyTarget - this.vy) * 0.1;
  }

  draw() {
    let _len = this.path.length;
    if (_len > 0) {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.path[_len - 2], this.path[_len - 1]);
      ctx.strokeStyle = hsla(tick + (this.x + this.y) / (w + h) * 180, 80, 50, this.alpha);
      ctx.stroke();
    }
  }}




/*=============================================
Init
=============================================*/

function init() {
  c.width = w;
  c.height = h;
  ctx.globalCompositeOperation = 'lighter';
  ctx.lineWidth = 2;
  loop();
}

/*=============================================
Step
=============================================*/

function step() {
  if (particles.length < particleCount) {
    particles.push(new Particle());
  }

  let i = particles.length;
  while (i--) {
    particles[i].step();
  }

  tick++;
}

/*=============================================
Draw
=============================================*/

function draw() {
  ctx.clearRect(0, 0, w, h);

  let i = particles.length;
  while (i--) {
    particles[i].draw();
  }
}

/*=============================================
Loop
=============================================*/

function loop() {
  requestAnimationFrame(loop);
  step();
  draw();
}

/*=============================================
Kick Off
=============================================*/

init();