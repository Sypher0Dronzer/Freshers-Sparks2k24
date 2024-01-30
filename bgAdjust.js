const preloader = document.querySelector(".preloader");
let domain = document.querySelector("#domain");
let mask=document.querySelector('#mask')
let section1=document.querySelector('.section1')
let section2=document.querySelector('.section2')
window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");

});
// backgroundImgAdjust(domain,section1)
// backgroundImgAdjust(mask,section2)

function backgroundImgAdjust(img,section){

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
    section.height=img.height
    img.width = ratio * imgWidth;
  
    img.style.transform=`translateX(-${centerX}px)`
  }
  window.addEventListener("resize", ()=>{
      resize()
  });
}
