class Robot {
  constructor(ctx, img, width, height) {
    this.ctx = ctx;
    this.Images = img;
    this.width = 409;
    this.height = 522;
    this.delay = 8;
    this.frames = 16;
    this.counter = 0;
    this.idx = 0;
    this.lastTime = Date.now();
    this.xPosition = Math.random() * 80 + 10;
    this.yPosition = Math.random() * 100 + 10;
    this.xSpeed = (Math.random() - 0.5) * 2;
    this.ySpeed = (Math.random() - 0.5) * 2;
    this.xBoundary = width;
    this.yBoundary = height - 200;

    this.slowdownFactor = 0.98; 
  }

  update() {
    let curr = Date.now();
    const deltaTime = curr - this.lastTime;

    if (deltaTime > 10) {
      if (this.counter % this.delay === 0) {
        this.idx = (this.idx + 1) % this.frames;
      }
      this.counter++;
      this.lastTime = curr;

      if (this.xPosition > this.xBoundary || this.xPosition < 0) {
        this.xSpeed *= -this.slowdownFactor; // Reverse & slow down
      }
      if (this.yPosition > this.yBoundary || this.yPosition < 0) {
        this.ySpeed *= -this.slowdownFactor;
      }

      if (Math.random() < 0.01) {
        this.xSpeed += (Math.random() - 0.5) * 0.5;
        this.ySpeed += (Math.random() - 0.5) * 0.5;
      }

      this.xPosition += this.xSpeed;
      this.yPosition += this.ySpeed;
    }
  }

  draw() {

    this.ctx.clearRect(0, 0, this.xBoundary, this.yBoundary + 200);
    this.ctx.drawImage(
      this.Images[this.idx],
      0,
      0,
      this.width,
      this.height,
      this.xPosition,
      this.yPosition,
      this.width / 4,
      this.height / 4
    );
  }
}

export default Robot;
