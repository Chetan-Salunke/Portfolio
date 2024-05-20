function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

  // arrow button
  function scrollLeft() {
    document.querySelector('.main1').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.main1').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}