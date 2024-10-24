window.addEventListener("load", function () {
    const loadTime = performance.now();
    document.getElementById("load-stats").textContent = `Страница загружена за: ${Math.round(loadTime)} мс`;
});