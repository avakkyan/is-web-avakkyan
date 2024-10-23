(function () {
    // Event listener for page load
    window.addEventListener('load', function () {
        // Calculate and display page load time
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const footer = document.querySelector('footer');
        if (footer) {
            const loadInfo = document.createElement('p');
            loadInfo.textContent = `Page load time: ${loadTime} ms`;
            footer.appendChild(loadInfo);
        }
    });
})();