const hamburgTopLine = document.querySelector(".top-line");
const hamburgMidLine = document.querySelector(".mid-line");
const hamburgBottLine = document.querySelector(".bott-line");
const hamburgerIcon = document.querySelector(".hamburger-icon");
let isOpen = false;
const openMenu = () => {
  if (!isOpen) {
    hamburgTopLine.style.transform = `rotate(330deg)`;
    hamburgBottLine.style.transform = `rotate(330deg)`;
    hamburgMidLine.style.display = "none";
    isOpen = true;
    return;
  }
  hamburgTopLine.style.transform = `rotate(0deg)`;
  hamburgMidLine.style.display = "block";
  hamburgBottLine.style.transform = `rotate(0deg)`;
  isOpen = false;
};
hamburgerIcon.addEventListener("click", openMenu);
