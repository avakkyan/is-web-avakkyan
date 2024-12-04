document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    const currentPath = document.location.href;

    navLinks.forEach(link => {
        if (link.href === currentPath) {
            link.classList.add("active");
        }
    });
});