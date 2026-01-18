// Theme Management
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);

// Toggle Theme Function
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);

    // Add transition animation
    document.body.style.transition = 'background-color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Search Functionality
const searchInput = document.getElementById('searchInput');
const commandsGrid = document.getElementById('commandsGrid');
const commandCards = document.querySelectorAll('.command-card');
const noResults = document.getElementById('noResults');
const categoryButtons = document.querySelectorAll('.category-btn');
const toast = document.getElementById('toast');

let currentCategory = 'all';

// Search Event Listener
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    filterCommands(searchTerm, currentCategory);
});

// Category Filter
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(b => b.classList.remove('active'));

        // Add active class to clicked button
        btn.classList.add('active');

        // Get category
        currentCategory = btn.dataset.category;

        // Filter commands
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterCommands(searchTerm, currentCategory);
    });
});

// Filter Commands Function
function filterCommands(searchTerm, category) {
    let visibleCount = 0;

    commandCards.forEach(card => {
        const title = card.querySelector('.command-title').textContent.toLowerCase();
        const description = card.querySelector('.command-description').textContent.toLowerCase();
        const code = card.querySelector('code').textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        // Check if matches search
        const matchesSearch = searchTerm === '' ||
            title.includes(searchTerm) ||
            description.includes(searchTerm) ||
            code.includes(searchTerm);

        // Check if matches category
        const matchesCategory = category === 'all' || cardCategory === category;

        // Show or hide card
        if (matchesSearch && matchesCategory) {
            card.classList.remove('hidden');
            visibleCount++;
        } else {
            card.classList.add('hidden');
        }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.style.display = 'block';
        commandsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        commandsGrid.style.display = 'grid';
    }
}

// Copy Command Function
function copyCommand(button) {
    const codeElement = button.previousElementSibling;
    const command = codeElement.textContent;

    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = command;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        showToast();

        // Visual feedback on button
        const originalText = button.textContent;
        button.textContent = 'تم النسخ ✓';
        button.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);

    } catch (err) {
        console.error('فشل النسخ:', err);
    }

    // Remove temporary textarea
    document.body.removeChild(textarea);
}

// Show Toast Notification
function showToast() {
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Escape to clear search
    if (e.key === 'Escape') {
        searchInput.value = '';
        filterCommands('', currentCategory);
        searchInput.blur();
    }
});

// Smooth Scroll for Internal Links (if any added in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all command cards
commandCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// Dynamic Background Animation
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '0';
    particlesContainer.style.overflow = 'hidden';

    document.body.appendChild(particlesContainer);

    // Create particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.3)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }

    // Add keyframes for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translate(${Math.random() * 200 - 100}px, -100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize particles
createFloatingParticles();

// Add command count to header
function updateCommandCount() {
    const totalCommands = commandCards.length;
    const subtitle = document.querySelector('.subtitle');
    subtitle.textContent = `${totalCommands} أمر مرتب من الصفر إلى الاحتراف`;
}

// Call on page load
updateCommandCount();

// Print Statistics to Console
console.log('%c🚀 دليل أوامر Git و GitHub', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log(`إجمالي الأوامر: ${commandCards.length}`);
console.log('تم التطوير بـ ❤️ للمطورين العرب');

// Performance Optimization: Debounce Search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce((searchTerm) => {
    filterCommands(searchTerm, currentCategory);
}, 300);

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    debouncedSearch(searchTerm);
});

// Add category statistics
function getCategoryStats() {
    const stats = {
        setup: 0,
        basic: 0,
        branch: 0,
        remote: 0,
        advanced: 0,
        ssh: 0,
        scenarios: 0,
        troubleshoot: 0,
        tips: 0,
        "gh-cli": 0,
        internals: 0,
        lfs: 0,
        workflow: 0
    };

    commandCards.forEach(card => {
        const category = card.dataset.category;
        if (stats.hasOwnProperty(category)) {
            stats[category]++;
        }
    });

    return stats;
}

// Update category buttons with counts
function updateCategoryButtons() {
    const stats = getCategoryStats();
    const total = commandCards.length;

    categoryButtons.forEach(btn => {
        const category = btn.dataset.category;
        const currentText = btn.textContent;

        if (category === 'all') {
            btn.textContent = `${currentText} (${total})`;
        } else if (stats[category]) {
            btn.textContent = `${currentText} (${stats[category]})`;
        }
    });
}

// Store original button texts
const originalButtonTexts = {};
categoryButtons.forEach(btn => {
    originalButtonTexts[btn.dataset.category] = btn.textContent;
});

// Call on page load
updateCategoryButtons();

// Add tooltip effect for long commands
commandCards.forEach(card => {
    const codeElement = card.querySelector('code');
    if (codeElement.scrollWidth > codeElement.clientWidth) {
        codeElement.title = codeElement.textContent;
    }
});

// Local Storage for last viewed category
function saveLastCategory(category) {
    localStorage.setItem('lastGitCategory', category);
}

function loadLastCategory() {
    const lastCategory = localStorage.getItem('lastGitCategory');
    if (lastCategory && lastCategory !== 'all') {
        const targetButton = document.querySelector(`[data-category="${lastCategory}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }
}

// Update category click handlers to save preference
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        saveLastCategory(btn.dataset.category);
    });
});

// Load last category on page load
// Commented out by default - uncomment if you want this feature
// window.addEventListener('load', loadLastCategory);

// Add print styles dynamically
const printStyles = document.createElement('style');
printStyles.textContent = `
    @media print {
        body {
            background: white;
            color: black;
        }
        .search-container,
        .categories-nav,
        .copy-btn,
        .toast {
            display: none !important;
        }
        .command-card {
            break-inside: avoid;
            page-break-inside: avoid;
        }
    }
`;
document.head.appendChild(printStyles);

console.log('✅ جميع الوظائف جاهزة!');
console.log('💡 اختصارات لوحة المفاتيح:');
console.log('   • Ctrl/Cmd + K: التركيز على البحث');
console.log('   • Escape: مسح البحث');
