const vMenu = document.querySelector(".vertical");
let hMenu = document.querySelector(".horizontal");
let menuIcon = document.querySelector(".menu");
console.log(vMenu.style.display);
menuIcon.addEventListener("click", () => {
  if (vMenu.style.display == 'none') {
    vMenu.style.display='flex';
    vMenu.style.height='188px'
  }
  else{
    vMenu.style.display = 'none'

  }
});
