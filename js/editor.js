const canvas = document.getElementById('editorCanvas');
const ctx = canvas.getContext('2d');

let img = new Image();
img.src = 'assets/contoh.jpg';

let scale = 1;
let history = [];

img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

function zoomIn() {
  scale += 0.1;
  redraw();
}

function zoomOut() {
  scale = Math.max(0.5, scale - 0.1);
  redraw();
}

function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width * scale, canvas.height * scale);
}

function undo() {
  if (history.length > 0) {
    ctx.putImageData(history.pop(), 0, 0);
  }
}

function clearCanvas() {
  history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function addText() {
  let text = prompt("Masukkan teks:");
  if (text) {
    history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 50, 50);
  }
}
