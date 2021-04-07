class HamburgerIcon {
  constructor() {
    this.icon = document.querySelector(".hamburger-icon");
    this.topLine = document.querySelector(".top-line");
    this.midLine = document.querySelector(".mid-line");
    this.bottLine = document.querySelector(".bott-line");
    this.icon.addEventListener("click", this.openMenu);
    this.open = false;
  }
  openMenu = () => {
    if (!this.open) {
      this.topLine.style.transform = `rotate(330deg)`;
      this.bottLine.style.transform = `rotate(330deg)`;
      this.midLine.style.display = "none";
      this.open = true;
      this.controlFrontLayer("18vh");
      return;
    }
    this.topLine.style.transform = `rotate(0deg)`;
    this.midLine.style.display = "block";
    this.bottLine.style.transform = `rotate(0deg)`;
    this.open = false;
    //Set default dropdown position
    this.controlFrontLayer("60px");
  };
  controlFrontLayer(distanceFromTop) {
    const frontLayer = document.getElementById("front-layer");
    frontLayer.style.top = `${distanceFromTop}`;
  }
}
let initHamburgIcon = new HamburgerIcon();

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
