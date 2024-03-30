// Horatious Harris
const box = document.getElementById('box');
const box2 = document.getElementById('box1');

let isDragging = false;
let isDragging2 = false;
let currX, currY;
let currX2, currY2;

box.addEventListener('mousedown', (e) => {
  isDragging = true;
  currX = e.clientX - box.offsetLeft;
  currY = e.clientY - box.offsetTop;
});

box2.addEventListener('mousedown', (e) => {
  isDragging2 = true;
  currX2 = e.clientX - box2.offsetLeft;
  currY2 = e.clientY - box2.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  e.preventDefault();

  if (isDragging) {
    const x = e.clientX - currX;
    const y = e.clientY - currY;
    const container = document.getElementById('container');

    const maxX = container.offsetWidth - box.offsetWidth;
    const maxY = container.offsetHeight - box.offsetHeight;

    box.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
    box.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
  }

  if (isDragging2) {
    const x2 = e.clientX - currX2;
    const y2 = e.clientY - currY2;
    const container = document.getElementById('container');

    const maxX2 = container.offsetWidth - box2.offsetWidth;
    const maxY2 = container.offsetHeight - box2.offsetHeight;

    box2.style.left = `${Math.min(Math.max(x2, 0), maxX2)}px`;
    box2.style.top = `${Math.min(Math.max(y2, 0), maxY2)}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  isDragging2 = false;
});
