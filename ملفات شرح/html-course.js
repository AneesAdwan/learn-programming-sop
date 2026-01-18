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
        button.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';

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
        // Orange/Red particles for HTML
        particle.style.background = `rgba(${255}, ${Math.random() * 100 + 50}, 0, 0.3)`;
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
    subtitle.textContent = `${totalCommands} عنصر وكود مرتب من الصفر إلى الاحتراف`;
}

// Call on page load
updateCommandCount();

// Print Statistics to Console
console.log('%c🚀 دليل تعلم HTML الشامل', 'color: #e34f26; font-size: 24px; font-weight: bold;');
console.log(`إجمالي العناصر: ${commandCards.length}`);
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
    const stats = {};
    // Dynamic Stats Calculation
    categoryButtons.forEach(btn => {
        const cat = btn.dataset.category;
        if (cat !== 'all') stats[cat] = 0;
    });

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
        // Strip previous counts if they exist (just in case function is called multiple times)
        const baseText = currentText.split(' (')[0];

        if (category === 'all') {
            btn.textContent = `${baseText} (${total})`;
        } else if (stats[category] !== undefined) {
            btn.textContent = `${baseText} (${stats[category]})`;
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
    localStorage.setItem('lastHtmlCategory', category);
}

function loadLastCategory() {
    const lastCategory = localStorage.getItem('lastHtmlCategory');
    if (lastCategory && lastCategory !== 'all') {
        const targetButton = document.querySelector(`[data-category="${lastCategory}"]`);
        if (targetButton) {
            targetButton.click();
        }
    }
}

// Update category click handlers to save preference
// Section Switching Logic
const roadmapSection = document.getElementById('roadmapSection');
const playgroundSection = document.getElementById('playgroundSection');
const projectsSection = document.getElementById('projectsSection');
const quizSection = document.getElementById('quizSection');
const megaSections = [roadmapSection, playgroundSection, projectsSection, quizSection];

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const cat = btn.dataset.category;

        // Hide all mega sections first
        megaSections.forEach(sec => sec.classList.add('hidden'));
        commandsGrid.classList.remove('hidden');
        noResults.classList.add('hidden');

        if (cat === 'roadmap') {
            roadmapSection.classList.remove('hidden');
            commandsGrid.classList.add('hidden');
        } else if (cat === 'playground') {
            playgroundSection.classList.remove('hidden');
            commandsGrid.classList.add('hidden');
        } else if (cat === 'projects') {
            projectsSection.classList.remove('hidden');
            commandsGrid.classList.add('hidden');
        } else if (cat === 'quiz') {
            quizSection.classList.remove('hidden');
            commandsGrid.classList.add('hidden');
            startQuiz();
        } else {
            // Standard category filtering
            filterCommands(searchInput.value.toLowerCase(), cat);
        }

        saveLastCategory(cat);
    });
});

// Live Playground Logic
const htmlEditor = document.getElementById('htmlEditor');
const htmlPreview = document.getElementById('htmlPreview');

function updatePreview() {
    const code = htmlEditor.value;
    const previewDoc = htmlPreview.contentDocument || htmlPreview.contentWindow.document;
    previewDoc.open();
    previewDoc.write(code);
    previewDoc.close();
}

htmlEditor.addEventListener('input', updatePreview);

// Support Tab key in textarea
htmlEditor.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = this.value.substring(0, start) + "    " + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 4;
        updatePreview();
    }
});

function resetEditor() {
    htmlEditor.value = '';
    updatePreview();
}

// Helper to download code as .html file
function downloadCode() {
    const code = htmlEditor.value;
    if (!code) return alert('برجاء كتابة كود أولاً!');

    const blob = new Blob([code], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
    showToast(); // Visual feedback
}

// Update insertTemplate to include better initial code
function insertTemplate() {
    const template = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>مشروعي الأول</title>
    <style>
        body { font-family: sans-serif; text-align: center; background: #f4f4f4; }
        .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); display: inline-block; margin-top: 50px; }
    </style>
</head>
<body>
    <div class="card">
        <h1 style="color: #e34f26;">مرحباً بك في عالم البرمجة! 🚀</h1>
        <p>جرب تعديل هذا الكود فوراً ورؤية النتيجة.</p>
        <button onclick="alert('أنت مبرمج مبدع!')">اضغط للمفاجأة</button>
    </div>
</body>
</html>`;
    htmlEditor.value = template;
    htmlPreview.innerHTML = template;
}

// Projects Data
const projects = {
    1: {
        title: "السيرة الذاتية (CV)",
        code: `<h1>سيرتي الذاتية</h1>\n<img src="https://via.placeholder.com/150" alt="صورة">\n<h2>المعلومات الشخصية</h2>\n<ul>\n  <li>الاسم: مبرمج طموح</li>\n  <li>المهنة: مطور واجهات</li>\n</ul>\n<h2>المهارات</h2>\n<ul>\n  <li>HTML5 & CSS3</li>\n  <li>JavaScript</li>\n</ul>`
    },
    2: {
        title: "نموذج استبيان",
        code: `<h2>رأيك يهمنا</h2>\n<form>\n  <label>الاسم:</label><br>\n  <input type="text"><br><br>\n  <label>مدى رضاك:</label>\n  <input type="range"><br><br>\n  <button type="submit">إرسال</button>\n</form>`
    },
    3: {
        title: "صفحة هبوط",
        code: `<header>\n  <nav>الرئيسية | عنا | اتصل بنا</nav>\n</header>\n<main>\n  <section>\n    <h1>مرحباً بكم في موقعنا</h1>\n    <p>هذه صفحة تجريبية لتعلم العناصر الدلالية.</p>\n  </section>\n</main>\n<footer>&copy; 2024 جميع الحقوق محفوظة</footer>`
    }
};

function loadProjectCode(id) {
    const project = projects[id];
    htmlEditor.value = project.code;
    htmlPreview.innerHTML = project.code;
    const playgroundBtn = document.querySelector('[data-category="playground"]');
    playgroundBtn.click();
    window.scrollTo({ top: playgroundSection.offsetTop - 100, behavior: 'smooth' });
}

// Quiz System Logic
const quizQuestions = [
    { q: "ما هو الاختصار الصحيح لـ HTML؟", a: ["HyperText Markup Language", "HighText Machine Language", "Home Tool Markup Language"], correct: 0 },
    { q: "ما هو الوسم الصحيح لأكبر عنوان؟", a: ["<h6>", "<head>", "<h1>"], correct: 2 },
    { q: "أي وسم يستخدم لكسر السطر؟", a: ["<br>", "<lb>", "<break>"], correct: 0 },
    { q: "أي خاصية تستخدم لإضافة رابط خلفية؟", a: ["href", "src", "target"], correct: 0 },
    { q: "ما هو الوسم الصحيح لعمل قائمة نقطية؟", a: ["<ol>", "<ul>", "<li>"], correct: 1 },
    { q: "كيف تفتح الرابط في نافذة جديدة؟", a: ["target='_blank'", "target='new'", "window='blank'"], correct: 0 },
    { q: "ما هو الوسم الصحيح لإضافة صورة؟", a: ["<image>", "<img>", "<picture>"], correct: 1 },
    { q: "أي عنصر دلالي يعبر عن تذييل الصفحة؟", a: ["<bottom>", "<footer>", "<end>"], correct: 1 }
];

let currentQuestionIndex = 0;
let userScore = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    userScore = 0;
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('questionText').textContent = q.q;
    const grid = document.getElementById('optionsGrid');
    grid.innerHTML = '';

    q.a.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        grid.appendChild(btn);
    });

    document.getElementById('quizProgress').textContent = `سؤال ${currentQuestionIndex + 1} من ${quizQuestions.length}`;
}

function checkAnswer(index) {
    const q = quizQuestions[currentQuestionIndex];
    if (index === q.correct) {
        userScore++;
        showToast(); // Visual feedback
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quizContainer').classList.add('hidden');
    const result = document.getElementById('quizResult');
    result.classList.remove('hidden');
    document.getElementById('scoreText').textContent = `درجتك هي: ${userScore} من ${quizQuestions.length}`;
}

function restartQuiz() {
    startQuiz();
}

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
            border: 1px solid #ccc;
            margin-bottom: 20px;
        }
        code {
            color: black !important;
            border: 1px solid #eee;
        }
    }
`;
document.head.appendChild(printStyles);

console.log('✅ جميع الوظائف جاهزة!');
