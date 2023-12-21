// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Load cloud image
let cloudImg = document.getElementById("cloth-cloud.png");

// Animation variables
let sunRadius = 20;
let cloudX1 = 130;
let cloudX2 = 200;
let sunY = 300;
let hue = 0; // Starting hue for the sun color

function draw() {
  // Clear canvas
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // BLUE BACKGROUND
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // GREEN GROUND
  ctx.fillStyle = "green";
  ctx.fillRect(0, cnv.height - 100, cnv.width, 100);

  // Move clouds
  cloudX1 -= 2; // Move left
  cloudX2 += 2; // Move right

  // Draw clouds
  ctx.drawImage(cloudImg, cloudX1, 120);
  ctx.drawImage(cloudImg, cloudX2, 100);

  // Draw sun
  ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.arc(200, sunY, sunRadius, 0, 2 * Math.PI);
  ctx.fill();

  // Update sun position and size
  sunY -= 1; // Move up
  sunRadius += 0.1; // Increase size

  // Update hue for sun color (changes from red to yellow)
  if (hue < 60) {
    hue += 0.5;
  }

  // Request next animation frame
  requestAnimationFrame(draw);
}

// Start the animation
draw();
