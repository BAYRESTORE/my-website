const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];
for (let i = 0; i < 150; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 2
  });
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x, d.y + d.length);
  }
  ctx.stroke();
  moveRain();
}

function moveRain() {
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    d.y += d.speed;
    if (d.y > canvas.height) {
      d.y = -20;
      d.x = Math.random() * canvas.width;
    }
  }
}

function animateRain() {
  drawRain();
  requestAnimationFrame(animateRain);
}

animateRain();
