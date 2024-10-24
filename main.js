window.addEventListener("load", function () {
    const loadTime = performance.now();
    document.getElementById("load-stats").textContent = `Старница загружена за: ${Math.round(loadTime)} мс`;
});