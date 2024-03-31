// // Horatious Harris
// Define an array to hold box elements
const boxes = document.querySelectorAll(".box");

// Define an object to hold dragging state and position information for each box
const boxState = {};

// Add event listeners for mousedown on each box
boxes.forEach((box, index) => {
  box.addEventListener("mousedown", (e) => {
    boxState[index] = {
      isDragging: true,
      offsetX: e.clientX - box.offsetLeft,
      offsetY: e.clientY - box.offsetTop,
    };
  });
});

// Add event listener for mousemove on the document
document.addEventListener("mousemove", (e) => {
  e.preventDefault();

  // Iterate over boxState object and update positions if dragging
  Object.keys(boxState).forEach((key) => {
    const state = boxState[key];
    if (state.isDragging) {
      const box = boxes[key];
      const x = e.clientX - state.offsetX;
      const y = e.clientY - state.offsetY;
      const container = document.getElementById("container");

      const maxX = container.offsetWidth - box.offsetWidth;
      const maxY = container.offsetHeight - box.offsetHeight;

      box.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
      box.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
    }
  });
});

// Add event listener for mouseup on the document
document.addEventListener("mouseup", () => {
  // Reset dragging state for all boxes
  Object.keys(boxState).forEach((key) => {
    boxState[key].isDragging = false;
  });
});
