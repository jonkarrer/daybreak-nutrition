const hamburgerIcon = document.querySelector(".hamburger-icon");
let isOpen = false;
//Hamburgur icon animation
hamburgerIcon.addEventListener("click", openMenu);
function openMenu() {
  const hamburgTopLine = document.querySelector(".top-line");
  const hamburgMidLine = document.querySelector(".mid-line");
  const hamburgBottLine = document.querySelector(".bott-line");
  if (!isOpen) {
    hamburgTopLine.style.transform = `rotate(330deg)`;
    hamburgBottLine.style.transform = `rotate(330deg)`;
    hamburgMidLine.style.display = "none";
    isOpen = true;
    //Drop front layer for basic menu
    controlFrontLayer("18vh");
    return;
  }
  hamburgTopLine.style.transform = `rotate(0deg)`;
  hamburgMidLine.style.display = "block";
  hamburgBottLine.style.transform = `rotate(0deg)`;
  isOpen = false;
  //Set default dropdown position
  controlFrontLayer("60px");
}
function controlFrontLayer(distanceFromTop) {
  const frontLayer = document.getElementById("front-layer");
  frontLayer.style.top = `${distanceFromTop}`;
}
//Navigation buttons
let nav = document.getElementById("nav-links");
let allLinks = nav.children;
const changeBackColor = (evt) => {
  for (link of allLinks) {
    link.style.color = "black";
    link.style.background = "rgba(0, 0, 0, 0.06)";
  }
  evt.target.style.background = "black";
  evt.target.style.color = "white";
};
for (link of allLinks) {
  link.addEventListener("click", changeBackColor, false);
}
