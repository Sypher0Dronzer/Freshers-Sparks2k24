/**@type {HTMLCanvasElement} */
let imagelimit=12;
let initialindex=5
let k=1;
let frame = 0;
let stagger=15;
let framerate=1
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let images = [];
for (let i = initialindex; i <= imagelimit; i++) {
    let image = new Image();
    image.src = `BatchCompress.com/scene${i.toString().padStart(5, "0")}.jpg`;
    images.push(image);
}

const imgHeight = images[0].height;
const imgWidth = images[0].width;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let hratio = canvas.height / imgHeight;
let wratio = canvas.width / imgWidth;
let ratio = Math.max(hratio, wratio);
let centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
let centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;

const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  ctx.drawImage(
    images[frame],
    0,
    0,
    images[frame].width,
    images[frame].height,
    centerX,
    centerY,
    images[frame].width * ratio,
    images[frame].height * ratio
  );
  // preloader.classList.add("hide-preloader");

      animate();
});

function animate() {
    framerate++;
    if(framerate % stagger==0){
        frame+=k;
        if(frame== imagelimit-1- initialindex || frame==0){
            k *= -1
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          images[frame],
          0,
          0,
          images[frame].width,
          images[frame].height,
          centerX,
          centerY,
          images[frame].width * ratio,
          images[frame].height * ratio
        );
    }
    requestAnimationFrame(animate)
}
window.addEventListener('resize',()=>{
    scaleImage()
  })
  function scaleImage(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    hratio = canvas.height / imgHeight;
    wratio = canvas.width / imgWidth;
    ratio = Math.max(hratio, wratio);
    centerY = Math.floor(canvas.height - imgHeight * ratio) / 2;
    centerX = Math.floor(canvas.width - imgWidth * ratio) / 2;
    animate()  
  }