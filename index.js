class HamburgerIcon {
  constructor() {
    this.icon = document.querySelector(".hamburger-icon");
    this.mobileContactButton = document.getElementById("contact-button");
    this.icon.addEventListener("click", this.openMenu);
    this.mobileContactButton.addEventListener("click", this.showMobileContact);
    this.topLine = document.querySelector(".top-line");
    this.midLine = document.querySelector(".mid-line");
    this.bottLine = document.querySelector(".bott-line");
    this.isMenuOpen = false;
    this.isContactOpen = false;
  }
  openMenu = () => {
    if (!this.isMenuOpen) {
      this.topLine.style.transform = `rotate(-45deg)`;
      this.bottLine.style.transform = `rotate(-45deg)`;
      this.midLine.style.transform = "rotate(-45deg)";
      this.isMenuOpen = true;
      this.controlFrontLayer("18vh");
      return;
    }
    this.topLine.style.transform = `rotate(0deg)`;
    this.midLine.style.transform = "rotate(0deg)";
    this.bottLine.style.transform = `rotate(0deg)`;
    this.isMenuOpen = false;
    //Set default dropdown position
    this.controlFrontLayer("9vh");
  };
  showMobileContact = () => {
    if (!this.isContactOpen) {
      this.controlFrontLayer("70vh");
      this.isContactOpen = true;
      return;
    }
    this.controlFrontLayer("18vh");
    this.isContactOpen = false;
  };
  controlFrontLayer(distanceFromTop) {
    const frontLayer = document.getElementById("front-layer");
    frontLayer.style.top = `${distanceFromTop}`;
  }
}
let initHamburgIcon = new HamburgerIcon();

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
