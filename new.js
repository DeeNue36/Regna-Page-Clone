//navbar
function toggleNav() {
    var navList = document.getElementById("nav-list");
    if (navList.style.display !== 'flex') {
        navList.style.display = 'flex'
    } else {
        navList.style.display = ''
    }
}

//smooth scrolling
const links = document.querySelectorAll(".first a");

for (const link of links) {
    link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
    console.log('scroll')
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}