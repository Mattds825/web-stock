const section = document.querySelector(".polaroid-showcase");
const polaroid = document.querySelector(".polaroid");
const body = document.querySelector("body");

// pervious rotation value
let prev = 0;

// calculation (stores calculation formula for tracking the mouse and polaroid rotation)
let calc = 0;

// drag sensitivity (the higher the number the less sensitive the drag)
const sensitivity = 2;

// Get the x position of the mouse when the mouse is clicked down
section.addEventListener("mousedown", (e) => {
  const x = e.clientX;

  // rotate the polaroid on mousemove
  section.addEventListener("mousemove", rotate);

  function rotate(e) {
    calc = (e.clientX - x) / sensitivity;

    // rotate the polaroid from the previous rotation value
    polaroid.style.transform = `rotateY(${prev + calc}deg)`;

    // change the cursor to grabbing
    body.style.cursor = "grabbing";
  }
  // save rotation for the next click
  prev += calc;

  // remove the mousemove event listener when the mouse is released
  window.addEventListener("mouseup", () => {
    section.removeEventListener("mousemove", rotate);
    body.style.cursor = "default";
  });
});
