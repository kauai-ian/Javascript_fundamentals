/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 *
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;
  // Edit between these lines
  // =================================
  result = "a" + "b";

  // =================================

  return result;
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Do not change this
module.exports = troubleshooting;
