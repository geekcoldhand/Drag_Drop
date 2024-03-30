//Horatious Harris
//GWACH
const box = document.getElementById('box');
const box1 = document.getElementById('box1');

let isDragging = false;
let is1Dragging = false;
let currX, currY;
let lastX, lastY;

box.addEventListener('mousedown', (e) => {
  isDragging = true;
  currX = e.x - box.offsetLeft;
  currY = e.y - box.offsetTop;
});

// box1.addEventListener('mousedown', (e) => {
//     is1Dragging = true;
//     currX = e.x - box.offsetLeft;
//     currY = e.y - box.offsetTop;
//   });


document.addEventListener('mousemove', (e) => {
    e.preventDefault();

  if (isDragging ) {
    const x = e.clientX - currX;
    const y = e.clientY - currY;
    const container = document.getElementById('container');

    const maxX = container.offsetWidth - box.offsetWidth;
    const maxY = container.offsetHeight - box.offsetHeight;

    box.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
    box.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
  }

//   if (is1Dragging ) {
//     const x = e.clientX - currX;
//     const y = e.clientY - currY;
//     const container = document.getElementById('container');

//     const maxX = container.offsetWidth - box1.offsetWidth;
//     const maxY = container.offsetHeight - box1.offsetHeight;

//     box1.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
//     box1.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
//   }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  is2Dragging = false;
});
