/**@type {HTMLCanvasElement} */
let imagelimit = 12;
let initialindex = 5;
let k = 1;
let frame = 0;
let stagger = 15;
let framerate = 1;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let image = new Image();
image.src = `domain/scene00012.png`;

const imgHeight = image.height;
const imgWidth = image.width;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let hratio = canvas.height / imgHeight;
let wratio = canvas.width / imgWidth;
let ratio = Math.max(hratio, wratio);
let centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
let centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;

const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  ctx.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    centerX,
    centerY,
    image.width * ratio,
    image.height * ratio
  );

});

function animate() {   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      image,
      0,
      0,
      image.width,
      image.height,
      centerX,
      centerY,
      image.width * ratio,
      image.height * ratio
    );
  
}
window.addEventListener("resize", () => {
  scaleImage();
});
function scaleImage() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  hratio = canvas.height / imgHeight;
  wratio = canvas.width / imgWidth;
  ratio = Math.max(hratio, wratio);
  centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
  centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;
  animate();
}
