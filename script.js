function toggleMenu() {
    const icon = document.querySelector(".hamburger-icon")
    const menu = document.querySelector(".menu-links")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
    console.log("*****", menu.open)
}