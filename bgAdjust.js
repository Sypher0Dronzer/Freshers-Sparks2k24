const preloader = document.querySelector(".preloader");
let img = document.querySelector("#domain");
let imgHeight = img.height;
let imgWidth = img.width;
let hratio = window.innerHeight / imgHeight;
let wratio = window.innerWidth / imgWidth;
let ratio = Math.max(hratio, wratio);
let centerY = Math.floor(window.innerHeight - imgHeight * ratio) / 2;
let centerX = Math.floor(window.innerWidth - imgWidth * ratio) / 2;


window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader");

    resize();
});
function resize() {
  hratio = window.innerHeight / imgHeight;
  wratio = window.innerWidth / imgWidth;
  ratio = Math.max(hratio, wratio);
  centerY = Math.floor(window.innerHeight - imgHeight * ratio) / 2;
  centerX = Math.floor(window.innerWidth - imgWidth * ratio) / 2;
  img.height = ratio * imgHeight;
  img.width = ratio * imgWidth;

  img.style.transform=`translateX(-${centerX}px)`
}
window.addEventListener("resize", ()=>{
    resize()
});
