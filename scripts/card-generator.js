/**
 * محرك توليد البطاقات التعليمية - Premium Glassmorphism Edition
 * متوافق مع تصميم الكورسات الحديث
 */

class CardGenerator {
    constructor(containerId, language) {
        this.container = document.getElementById(containerId);
        this.language = language;
    }

    render(dataList) {
        if (!this.container) return;
        this.container.innerHTML = '';

        dataList.forEach((item, index) => {
            const card = this.createCard(item, index);
            this.container.appendChild(card);
        });

        // Add copy function globally if not exists
        if (!window.copyToClipboard) {
            window.copyToClipboard = this.copyToClipboard;
        }
    }

    createCard(data, index) {
        const card = document.createElement('div');
        card.className = 'command-card';
        card.setAttribute('data-category', data.category);

        // 1. Header
        const header = document.createElement('div');
        header.className = 'command-header';

        const num = document.createElement('span');
        num.className = 'command-number';
        num.textContent = index + 1;

        const title = document.createElement('h3');
        title.className = 'command-title';
        title.innerHTML = `${data.name} <span style="font-size:0.8em; opacity:0.7; margin-right:5px; font-weight:normal;">- ${data.arabicName}</span>`;

        const badge = document.createElement('span');
        badge.className = 'category-badge';
        badge.textContent = data.category;

        // Add specific class to badge if possible (mapping needed or generic)
        // Simple hash to color mapping or just use generic style

        header.appendChild(num);
        header.appendChild(title);
        header.appendChild(badge);
        card.appendChild(header);

        // 2. Syntax Code Block
        if (data.syntax) {
            const codeBlock = document.createElement('div');
            codeBlock.className = 'command-code';

            const code = document.createElement('code');
            code.textContent = data.syntax;

            const btn = document.createElement('button');
            btn.className = 'copy-btn';
            btn.textContent = 'نسخ';
            // Store text in attribute or use closure
            btn.onclick = (e) => this.copyToClipboard(data.syntax, e.target);

            codeBlock.appendChild(code);
            codeBlock.appendChild(btn);
            card.appendChild(codeBlock);
        }

        // 3. Description
        if (data.description) {
            const desc = document.createElement('p');
            desc.className = 'command-description';
            desc.textContent = data.description;
            card.appendChild(desc);
        }

        // 4. Notes (Warning/Info)
        if (data.notes && data.notes.length > 0) {
            data.notes.forEach(noteText => {
                const note = document.createElement('div');
                note.className = 'command-note';

                // Add icons based on text content (naive check)
                const isWarning = noteText.includes('لا') || noteText.includes('احذر') || noteText.includes('⚠️');
                if (isWarning) note.classList.add('warning');

                note.innerHTML = `
                    <span class="note-icon">${isWarning ? '⚠️' : '💡'}</span>
                    <span>${noteText}</span>
                `;
                card.appendChild(note);
            });
        }

        // 5. Values (Custom addition to fit new design)
        if (data.values && data.values.length > 0) {
            const valContainer = document.createElement('div');
            valContainer.style.marginTop = '15px';
            valContainer.style.background = 'rgba(0,0,0,0.1)';
            valContainer.style.padding = '10px';
            valContainer.style.borderRadius = '8px';

            const valTitle = document.createElement('strong');
            valTitle.textContent = 'القيم (Values):';
            valTitle.style.display = 'block';
            valTitle.style.marginBottom = '5px';
            valTitle.style.color = 'var(--text-primary)';
            valContainer.appendChild(valTitle);

            data.values.forEach(val => {
                const v = document.createElement('div');
                v.style.marginBottom = '4px';
                v.style.fontSize = '0.9em';
                v.innerHTML = `<code style="background:rgba(255,255,255,0.1); padding:2px 5px; border-radius:4px; color:var(--text-primary)">${val.value}</code>: <span style="color:var(--text-secondary)">${val.description}</span>`;
                valContainer.appendChild(v);
            });
            card.appendChild(valContainer);
        }

        // 6. Examples (Custom addition)
        if (data.examples && data.examples.length > 0) {
            const examplesDiv = document.createElement('div');
            examplesDiv.style.marginTop = '15px';

            data.examples.forEach((ex, i) => {
                const exBtn = document.createElement('button');
                exBtn.className = 'category-btn'; // Reuse style
                exBtn.style.fontSize = '0.8rem';
                exBtn.style.padding = '5px 10px';
                exBtn.innerHTML = `مثال ${i + 1}: ${ex.title} <i class="fa-solid fa-eye"></i>`;
                exBtn.style.marginTop = '5px';
                exBtn.onclick = () => {
                    // Simple modal or alert for now, or toggle visibility
                    alert(`Code:\n${ex.code}\n\nExplanation:\n${ex.explanation}`);
                };
                examplesDiv.appendChild(exBtn);
            });
            card.appendChild(examplesDiv);
        }


        return card;
    }

    generateCategories(data, navId) {
        const nav = document.getElementById(navId);
        if (!nav) return;

        // Calculate counts
        const categoryCounts = data.reduce((acc, item) => {
            acc[item.category] = (acc[item.category] || 0) + 1;
            return acc;
        }, {});

        // Update 'All' button if it exists using querySelector or ID if unique
        // Since we don't have a unique ID for 'All' button easily accessible without modifying HTML, 
        // we can find it by class or text content usually.
        // Assuming the 'All' button is the first child or exists. 
        // Or we can rebuild the 'All' button here too if we clear innerHTML, but HTML has it hardcoded.
        // Let's try to find it.
        const btns = nav.getElementsByTagName('button');
        if (btns.length > 0) {
            const allBtn = btns[0]; // Assuming 'All' is first
            // Check if it already has a count to avoid duplicates if re-runs
            if (!allBtn.querySelector('.cat-count')) {
                const countSpan = document.createElement('span');
                countSpan.className = 'cat-count';
                countSpan.textContent = data.length;
                allBtn.appendChild(countSpan);
            }
        }

        const categories = Object.keys(categoryCounts);

        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';

            // Text node
            const text = document.createTextNode(cat);
            btn.appendChild(text);

            // Count badge
            const countSpan = document.createElement('span');
            countSpan.className = 'cat-count';
            countSpan.textContent = categoryCounts[cat];
            btn.appendChild(countSpan);

            btn.onclick = (e) => window.filterByCategory(cat);
            nav.appendChild(btn);
        });
    }

    copyToClipboard(text, btn) {
        navigator.clipboard.writeText(text).then(() => {
            // Show toast
            const toast = document.getElementById('toast');
            if (toast) {
                toast.classList.add('show');
                setTimeout(() => toast.classList.remove('show'), 2000);
            }

            // Button feedback
            const originalText = btn.textContent;
            btn.textContent = 'تم!';
            btn.style.background = '#2ecc71';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = ''; // Reset to CSS defined
            }, 1000);
        });
    }
}
