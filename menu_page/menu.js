class HamburgerIcon {
  constructor() {
    this.icon = document.querySelector(".hamburger-icon");
    this.mobileContactButton = document.getElementById("contact-button");
    this.desktopContactButton = document.getElementById(
      "contact-button-desktop"
    );
    this.icon.addEventListener("click", this.openMenu);
    this.mobileContactButton.addEventListener("click", this.showMobileContact);
    this.desktopContactButton.addEventListener(
      "click",
      this.showDesktopContact
    );
    this.contactInfo = document.querySelector(".back-layer");
    this.topLine = document.querySelector(".top-line");
    this.midLine = document.querySelector(".mid-line");
    this.bottLine = document.querySelector(".bott-line");
    this.isMenuOpen = false;
    this.isContactOpen = false;
    this.isContactDesktopOpen = false;
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
  showDesktopContact = () => {
    if (!this.isContactDesktopOpen) {
      this.contactInfo.style.height = "350px";
      this.isContactDesktopOpen = true;
      return;
    }
    this.contactInfo.style.height = "0";
    this.isContactDesktopOpen = false;
  };
  controlFrontLayer(distanceFromTop) {
    const frontLayer = document.getElementById("front-layer");
    frontLayer.style.top = `${distanceFromTop}`;
  }
}
let initHamburgIcon = new HamburgerIcon();
