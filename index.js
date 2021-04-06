const hamburgerIcon = document.querySelector(".hamburger-icon");
let isOpen = false;

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
    controlFrontLayer("33vh");
    return;
  }
  hamburgTopLine.style.transform = `rotate(0deg)`;
  hamburgMidLine.style.display = "block";
  hamburgBottLine.style.transform = `rotate(0deg)`;
  isOpen = false;
  controlFrontLayer("65px");
}
function controlFrontLayer(distanceFromTop) {
  const frontLayer = document.getElementById("front-layer");
  frontLayer.style.top = `${distanceFromTop}`;
}
