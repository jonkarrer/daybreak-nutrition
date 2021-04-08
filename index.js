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
    this.controlFrontLayer("55px");
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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
