function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (menu && icon) {
      menu.classList.toggle("open");
      icon.classList.toggle("open");
    } else {
      console.error("Menu or icon not found");
    }
  }
  