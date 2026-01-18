/**
 * وظيفة نسخ الكود - Copy Code Utility
 * يقوم بنسخ النص إلى الحافظة وإظهار رسالة تأكيد
 */

async function copyToClipboard(text, buttonElement) {
    try {
        await navigator.clipboard.writeText(text);

        // Visual Feedback
        const originalIcon = buttonElement.innerHTML;
        buttonElement.classList.add('copied');
        buttonElement.innerHTML = '<i class="fa-solid fa-check"></i> تم النسخ';

        // Reset after 2 seconds
        setTimeout(() => {
            buttonElement.classList.remove('copied');
            buttonElement.innerHTML = originalIcon;
        }, 2000);

    } catch (err) {
        console.error('فشل النسخ:', err);
        buttonElement.innerHTML = '<i class="fa-solid fa-xmark"></i> خطأ';
        setTimeout(() => {
            buttonElement.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 2000);
    }
}

// Make it globally available
window.copyToClipboard = copyToClipboard;
