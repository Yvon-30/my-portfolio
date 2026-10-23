// Theme toggle. The initial theme is set by the inline script in <head>
// (saved choice, else prefers-color-scheme, else dark) to avoid a flash.
(function () {
    var root = document.documentElement;
    var button = document.getElementById('theme-toggle');
    var themeColor = document.querySelector('meta[name="theme-color"]');
    var colors = { dark: '#0E1014', light: '#F7F3EC' };

    function apply(theme) {
        root.setAttribute('data-theme', theme);
        if (themeColor) themeColor.setAttribute('content', colors[theme]);
        if (button) {
            button.setAttribute('aria-label', theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre');
        }
    }

    apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

    if (!button) return;

    button.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        apply(next);
        try {
            localStorage.setItem('theme', next);
        } catch (e) {
            // Storage unavailable (private mode, blocked): the choice lasts for this page only.
        }
    });
})();
