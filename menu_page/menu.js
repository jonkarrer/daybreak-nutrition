class HamburgerIcon {
  constructor() {
    this.icon = document.querySelector(".hamburger-icon");
    this.icon.addEventListener("click", this.openMenu);
    this.topLine = document.querySelector(".top-line");
    this.midLine = document.querySelector(".mid-line");
    this.bottLine = document.querySelector(".bott-line");
    this.open = false;
  }
  openMenu = () => {
    if (!this.open) {
      this.topLine.style.transform = `rotate(-45deg)`;
      this.bottLine.style.transform = `rotate(-45deg)`;
      this.midLine.style.transform = "rotate(-45deg)";
      this.open = true;
      this.controlFrontLayer("18vh");
      return;
    }
    this.topLine.style.transform = `rotate(0deg)`;
    this.midLine.style.transform = "rotate(0deg)";
    this.bottLine.style.transform = `rotate(0deg)`;
    this.open = false;
    //Set default dropdown position
    this.controlFrontLayer("9vh");
  };
  controlFrontLayer(distanceFromTop) {
    const frontLayer = document.getElementById("front-layer");
    frontLayer.style.top = `${distanceFromTop}`;
  }
}
let initHamburgIcon = new HamburgerIcon();
