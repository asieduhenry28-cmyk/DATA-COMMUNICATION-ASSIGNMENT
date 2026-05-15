const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

function setNavOpen(isOpen) {
    navbar.classList.toggle("nav-open", isOpen);
    menuBtn?.setAttribute("aria-expanded", String(isOpen));

    const labelIcon = menuBtn?.querySelector("i");
    if (labelIcon) {
        labelIcon.classList.toggle("fa-bars", !isOpen);
        labelIcon.classList.toggle("fa-xmark", isOpen);
    }
} 


window.addEventListener("scroll", () => {
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = "#02101f";
    } else {
        navbar.style.background = "#0b1f3a";
    }
});

if (menuBtn && navLinks) {
    // initialize icon state
    menuBtn.querySelector("i")?.classList.add("fa-bars");

    menuBtn.addEventListener("click", () => {
        const isOpen = navbar.classList.contains("nav-open");
        setNavOpen(!isOpen);
    });

    // close menu on link click (mobile UX)
    navLinks.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if (!target) return;
        setNavOpen(false);
    });
}

