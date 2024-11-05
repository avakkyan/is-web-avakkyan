(function () {
    window.addEventListener("load", function () {
        const [performanceEntry] = performance.getEntriesByType("navigation");

        const loadTime =
            performanceEntry.domContentLoadedEventEnd -
            performanceEntry.startTime;

        const footer = document.getElementById("load-stats");

        footer.innerHTML = `Страничка загрузилась: ${Math.round(loadTime)} мс`;
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    const currentPath = document.location.href;

    navLinks.forEach(link => {
        if (link.href === currentPath) {
            link.classList.add("active");
        }
    });
});