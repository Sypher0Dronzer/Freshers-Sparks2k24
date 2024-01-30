const vMenu = document.querySelector(".vertical");
let hMenu = document.querySelector(".horizontal");
let menuIcon = document.querySelector(".menu");
console.log(vMenu.style.display);
vMenu.style.display='none'
menuIcon.addEventListener("click", () => {
  if (vMenu.style.display == 'none') {
    vMenu.style.display='flex';
    vMenu.style.height='188px'
  }
  else{
    vMenu.style.display = 'none'
    vMenu.style.height='0'


  }
});
