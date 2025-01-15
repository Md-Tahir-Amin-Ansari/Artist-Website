AOS.init();

document.querySelectorAll(".menuItem").forEach(item => {
    item.addEventListener('click', closeMenu);
});

function closeMenu(){
    const menu = document.getElementById('menu');
    const navbarToggle = document.getElementById('navbarToggle');
    navbarToggle.classList.add("collapsed");
    menu.classList.remove("show");
}