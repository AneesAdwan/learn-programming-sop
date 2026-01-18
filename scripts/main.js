// Main JavaScript File
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn?.querySelector('i');

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Sidebar Logic (Mobile)
    const sidebar = document.getElementById('sidebar-container');
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close when clicking overlay
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close when clicking a link in sidebar (Mobile mostly)
        sidebar.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }
    // --- Dynamic Home Page Counts ---
    function updateHomeCounts() {
        const htmlCard = document.querySelector('.card-html');
        const cssCard = document.querySelector('.card-css');
        const jsCard = document.querySelector('.card-js');

        /* Helper to add badge */
        const addBadge = (card, count) => {
            if (!card) return;
            // Check if badge already exists
            let badge = card.querySelector('.lang-count-badge');
            if (!badge) {
                badge = document.createElement('span');
                badge.className = 'lang-count-badge';
                // Insert after title usually
                const title = card.querySelector('.lang-title');
                if (title) {
                    title.appendChild(badge);
                } else {
                    card.appendChild(badge);
                }
            }
            badge.textContent = `${count} عنصر`;
        };

        // Load data if on home page (simple check: if cards exist)
        if (htmlCard || cssCard || jsCard) {
            // We need to fetch the data.js files. Since they assign to global variables,
            // we can dynamically load scripts if not present, or assume they are included.
            // Best approach for local file system without modules: load scripts dynamically.

            const loadScript = (src, globalName) => {
                return new Promise((resolve) => {
                    if (window[globalName]) {
                        resolve(window[globalName]);
                        return;
                    }
                    const script = document.createElement('script');
                    script.src = src;
                    script.onload = () => resolve(window[globalName]);
                    script.onerror = () => resolve([]); // Fail safe
                    document.body.appendChild(script);
                });
            };

            // Load HTML Data
            if (htmlCard) {
                loadScript('html-page/html-data.js', 'htmlData').then(data => {
                    if (data && data.length) addBadge(htmlCard, data.length);
                });
            }

            // Load CSS Data
            if (cssCard) {
                loadScript('css-page/css-data.js', 'cssData').then(data => {
                    if (data && data.length) addBadge(cssCard, data.length);
                });
            }

            // Load JS Data
            if (jsCard) {
                loadScript('js-page/js-data.js', 'jsData').then(data => {
                    if (data && data.length) addBadge(jsCard, data.length);
                });
            }
        }
    }

    updateHomeCounts();

});
