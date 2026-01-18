/**
 * LEARNCSS.js - The Absolute Infinite CSS Bible (Ultra Comprehensive Edition)
 * Author: Antigravity AI
 * Content: 120+ Detailed CSS Modules covering every modern, legacy, and experimental feature.
 */

const cssData = [
    // --- BASICS ---
    { id: 1, category: "basics", title: "محددات الألوان (Color)", code: "color: #6366f1;", description: "تغيير لون النص داخل العناصر.", note: "تذكر أن اللون يتم توريثه لمعظم العناصر الأبناء تلقائياً." },
    { id: 2, category: "basics", title: "الأبعاد (Width & Height)", code: "width: 100vw; max-width: 1200px;", description: "التحكم في المساحة الأفقية والرأسية للعنصر.", note: "استخدم max-width دائماً بدلاً من width الثابت لضمان تفاعل الموبايل." },
    { id: 3, category: "basics", title: "تنسيق الروابط (Text Decoration)", code: "text-decoration: none;", description: "التحكم في الخطوط تحت النصوص أو فوقها.", note: "يستخدم غالباً لإزالة الخط الافتراضي من روابط (a)." },
    { id: 4, category: "basics", title: "قوائم الـ HTML (List Style)", code: "list-style: none;", description: "التحكم في علامات النقاط أو الأرقام في القوائم.", note: "إخفاء الرموز ضروري جداً عند عمل قوائم التنقل (Navbars)." },
    { id: 5, category: "basics", title: "حجم الصور (Object Fit)", code: "object-fit: cover;", description: "التحكم في كيفية ملء الصورة للمساحة المخصصة لها دون تمطط.", note: "استخدم cover دائماً للصور الخلفية لمنع تشوه الأبعاد." },
    { id: 6, category: "basics", title: "منحنيات الألوان (Gradients)", code: "background: linear-gradient(45deg, blue, red);", description: "صنع خلفيات ملونة تندمج فيها الألوان بسلاسة.", colorPreview: "linear-gradient(45deg, blue, red)", note: "يمكنك دمج عشرات الألوان وصنع تدرجات دائرية (Radial) أيضاً." },
    { id: 7, category: "basics", title: "صورة الخلفية (Background Image)", code: "background-image: url('img.jpg'); background-size: cover;", description: "وضع صورة كخلفية للعنصر مع التحكم في حجمها.", note: "استخدم background-size: cover لجعل الصورة تغطي كامل العنصر." },

    // --- SELECTORS ---
    { id: 8, category: "selectors", title: "محددات الفئات (Classes & IDs)", code: ".card { ... } #header { ... }", description: "تعيين التنسيق لعناصر محددة بناءً على أسمائها في HTML.", note: "تجنب استخدام الـ ID في التنسيق قدر الإمكان لسهولة الصيانة." },
    { id: 9, category: "selectors", title: "المحدد الشامل (Universal Selector)", code: "* { margin: 0; padding: 0; box-sizing: border-box; }", description: "يستهدف كل عنصر موجود في الصفحة بدون استثناء.", note: "يستخدم غالباً لعمل Reset للمتصفح في بداية المشروع." },
    { id: 10, category: "selectors", title: "محددات الحالة (Pseudo-classes)", code: "a:hover { color: red; }", description: "تغيير شكل العنصر بناءً على حالة تفاعل المستخدم معه.", values: [{ name: ":hover", desc: "عند مرور الماوس." }, { name: ":focus", desc: "عند التركيز بالكيبورد." }], note: "تجعل الموقع يبدو تفاعلياً وحيوياً." },
    { id: 11, category: "selectors", title: "المحدد الذكي (:focus-within)", code: ".form-group:focus-within { background: lightyellow; }", description: "تنسيق العنصر إذا كان أي من أبنائه في حالة Focus.", note: "رائعة لتظليل نماذج الإدخال بالكامل." },
    { id: 12, category: "selectors", title: "المحدد الرافض (:not)", code: "div:not(.active) { opacity: 0.5; }", description: "استهداف كل العناصر التي 'لا' تنطبق عليها القاعدة المذكورة.", note: "مثالية لاستثناء عناصر معينة من التنسيق العام." },
    { id: 13, category: "selectors", title: "محددات الأبناء (nth-child)", code: "li:nth-child(3n) { color: blue; }", description: "استهداف العناصر بناءً على ترتيبها الرقمي أو معادلة حسابية.", note: "يمكن استخدام odd للترتيب الفردي و even للزوجي." },
    { id: 14, category: "selectors", title: "العناصر الزائفة (Pseudo-elements)", code: "p::first-line { font-weight: bold; }", description: "تنسيق أجزاء معينة داخل العنصر مثل السطر الأول.", note: "المحددات الأكثر استخداماً هي ::before و ::after لإضافة أيقونات أو خطوط جمالية." },
    { id: 15, category: "selectors", title: "محدد الروابط المفعلة (:target)", code: "section:target { animation: highlight 1s; }", description: "تنسيق القسم الذي انتقل إليه المستخدم عبر رابط داخلي (#).", note: "تستخدم لعمل تأثيرات احترافية عند التنقل داخل الصفحة الواحدة." },

    // --- BOX MODEL ---
    { id: 16, category: "boxmodel", title: "نموذج الصندوق (Box Model)", code: "box-sizing: border-box;", description: "تغيير طريقة حساب أحجام العناصر والحدود لضمان عدم خروجها عن السيطرة.", note: "نصيحة: ضعها دائماً في المحدد الشامل (*) في بداية كل مشروع." },
    { id: 17, category: "boxmodel", title: "الهوامش (Margin)", code: "margin: 20px 40px;", description: "المسافة الخارجية التي تفصل العناصر عن بعضها.", note: " margin-inline: auto; هي الطريقة الحديثة لتوسيط العناصر أفقياً." },
    { id: 18, category: "boxmodel", title: "الحواشي (Padding)", code: "padding: 5% 10%;", description: "المسافة الداخلية بين المحتوى وجدار الصندوق.", note: "لا تقبل قيم سالبة، على عكس المارجن." },
    { id: 19, category: "boxmodel", title: "الحدود (Border)", code: "border: 2px dashed #6366f1;", description: "الخط المحيط بالعنصر.", note: "يمكنك تلوين كل جهة بلون مختلف باستخدام border-color: red green blue yellow;." },
    { id: 20, category: "boxmodel", title: "الحدود الخارجية (Outline)", code: "outline: 2px solid offset 4px;", description: "خط خارجي لا يؤثر على مساحة العنصر ولا يحرك ما حوله.", note: "يستخدم غالباً لإظهار 'التركيز' للمستخدمين الذين يتصفحون بالكيبورد." },

    // --- TYPOGRAPHY ---
    { id: 21, category: "typography", title: "إدارة الخطوط (Font Family)", code: "font-family: 'Inter', sans-serif;", description: "تحديد نوع الخط ومصدره.", note: "دائماً أضف خطوطاً بديلة لضمان ظهور النص بشكل جيد في كل الأنظمة." },
    { id: 22, category: "typography", title: "الحجم المتجاوب (Fluid Typography)", code: "font-size: clamp(1rem, 4vw, 3rem);", description: "جعل النص يتمدد وينكمش تلقائياً حسب حجم الشاشة.", note: "هذا السطر يغنيك عن كتابة 4 ميديا كويري لتصغير الخط." },
    { id: 23, category: "typography", title: "تباعد الأسطر والكلمات", code: "line-height: 1.6; letter-spacing: 0.5px;", description: "تحسين تجربة القراءة من خلال ضبط المسافات الرأسية والأفقية.", note: "القيمة 1.6 للأسطر تعتبر الأفضل طبياً لعين الإنسان." },
    { id: 24, category: "typography", title: "محاذاة النص (Text Align)", code: "text-align: justify; text-justify: inter-word;", description: "توزيع النص بالتساوي على السطر مثل الجرائد والمجلات.", note: "تعطي طابعاً رسمياً ومنظماً للمقالات الطويلة." },
    { id: 25, category: "typography", title: "تحويل الحروف (Text Transform)", code: "text-transform: capitalize;", description: "جعل أول حرف من كل كلمة كبيراً تلقائياً.", note: "تستخدم بكثرة في المتاجر الإلكترونية لأسماء المنتجات." },
    { id: 26, category: "typography", title: "التحكم في المسافات (White Space)", code: "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;", description: "تحويل النص الطويل لسطر واحد ينتهي بنقاط (...) إذا تجاوز المساحة.", note: "أساسية جداً في كروت المنتجات والقوائم الجانبية." },

    // --- COLORS ---
    { id: 27, category: "colors", title: "ثيمات النظام (light-dark)", code: "color: light-dark(#111, #eee);", description: "خاصية ثورية تبدل الألوان تلقائياً بناءً على إعدادات موبايل المستخدم.", dependency: "color-scheme: light dark;", colorPreview: "light-dark(#111, #eee)", note: "مستقبل إدارة الألوان في الويب." },
    { id: 28, category: "colors", title: "نظام HSL الاحترافي", code: "color: hsl(200 80% 50% / 0.5);", description: "كتابة الألوان بصيغة عصرية تدعم الشفافية المباشرة بدون فواصل.", colorPreview: "hsl(200 80% 50% / 0.5)", note: "تسهل صنع 'درجات' مختلفة من نفس اللون يدوياً." },
    { id: 29, category: "colors", title: "خلط الألوان (color-mix)", code: "background: color-mix(in srgb, blue 30%, white);", description: "دمج لونين بنسب مئوية دقيقة لصنع لون جديد تماماً.", colorPreview: "color-mix(in srgb, blue 30%, white)", note: "تستخدم لصنع درجات الـ Hover بدون الحاجة لفتح الفوتوشوب." },
    { id: 30, category: "colors", title: "اللون الحالي (currentColor)", code: "border: 1px solid currentColor;", description: "يرث اللون من الـ color المطبق على النص تلقائياً.", note: "رائعة لجعل الأيقونات والحدود تتغير ألوانها بتغيير لون النص المرفق." },

    // --- LAYOUT ---
    { id: 31, category: "layout", title: "نظام Flexbox", code: "display: flex; gap: 1rem;", description: "ترتيب العناصر بمرونة في سطر واحد أو عمود واحد.", note: "gap هي الطريقة الحديثة والأفضل لترك مسافات بين العناصر." },
    { id: 32, category: "layout", title: "نظام Grid", code: "display: grid; grid-template-columns: repeat(12, 1fr);", description: "بناء تخطيطات ثنائية الأبعاد (صفوف وأعمدة) بمنتهى القوة.", note: "أقوى أداة في تاريخ المتصفحات لتصميم المواقع الكاملة." },
    { id: 33, category: "layout", title: "الشبكة الفرعية (Subgrid)", code: "grid-template-rows: subgrid;", description: "جعل الأبناء يلتزمون بتقسيمات الشبكة الخاصة بالأب.", note: "تحل مشكلة محاذاة العناوين والأزرار داخل صناديق مختلفة الطول." },
    { id: 34, category: "layout", title: "الأعمدة التلقائية (Multicol)", code: "column-count: 3; column-rule: 1px solid #ccc;", description: "تقسيم الفقرة الطويلة لأعمدة تلقائية مثل المجلات الورقية.", note: "توزع المحتوى تلقائياً حسب المساحة المتاحة." },

    // --- FLEXBOX ---
    { id: 35, category: "flexbox", title: "محاذاة المحور الرئيسي", code: "justify-content: space-between;", description: "توزيع المسافات أفقياً (في حال كان الاتجاه صف).", dependency: "display: flex;", values: [{ name: "flex-start", desc: "في البداية (الافتراضي)." }, { name: "center", desc: "في الوسط." }, { name: "space-between", desc: "مسافات متساوية بين العناصر فقط." }, { name: "space-around", desc: "مسافات حول العناصر." }], note: "center توسيط، space-between أطراف، space-around مسافة متساوية." },
    { id: 36, category: "flexbox", title: "محاذاة المحور الفرعي", code: "align-items: center;", description: "توسيط العناصر رأسياً داخل الحاوية.", dependency: "display: flex;", values: [{ name: "stretch", desc: "تمدد لملء الارتفاع (الافتراضي)." }, { name: "center", desc: "في الوسط عمودياً." }, { name: "flex-start", desc: "في الأعلى." }, { name: "baseline", desc: "محاذاة حسب خط النص." }], note: "السر في توسيط الأيقونات والنصوص بجانب بعضها." },
    { id: 37, category: "flexbox", title: "النمو المرن (Flex Grow)", code: "flex-grow: 1;", description: "إجبار العنصر على التمدد ليأخذ كل المساحة المتبقية في السطر.", dependency: "الأب display: flex", note: "مفيدة جداً لجعل الـ Search bar يأخذ كل مساحة الـ Navbar." },

    // --- GRID ---
    { id: 38, category: "grid", title: "الاستجابة التلقائية", code: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));", description: "عمل Grid يتغير عدد أعمدته تلقائياً حسب الشاشة بدون ميديا كويري.", dependency: "display: grid;", note: "أهم كود ستستخدمه في حياتك لبناء معرض منتجات (Gallery)." },
    { id: 39, category: "grid", title: "الفجوات (Grid Gap)", code: "gap: 24px 12px; /* Row Col */", description: "تحديد مسافة بين الصفوف والأعمدة بشكل منفصل أو مدمج.", dependency: "display: grid | flex", note: "تغنيك عن مشاكل المارجن السالب." },
    { id: 40, category: "grid", title: "التموضع بالأسماء (Area names)", code: "grid-area: header;", description: "وضع العنصر في مكان محدد تم تسميته مسبقاً في الـ Grid Layout.", dependency: "الأب grid-template-areas", note: "تجعل إدارة أماكن الموقع (Sidebars, Footers) ممتعاً جداً." },

    // --- POSITION ---
    { id: 41, category: "position", title: "التموضع اللزج (Sticky)", code: "position: sticky; top: 1rem;", description: "يتحرك العنصر مع المستخدم حتى يصل لنقطة معينة فيلتصق بها.", dependency: "يجب تحديد top أو bottom ليعمل.", note: "يستخدم للقوائم العلوية أو فلاتر البحث الجانبية." },
    { id: 42, category: "position", title: "التوسيط المطلق الحديث", code: "position: absolute; inset: 0; margin: auto;", description: "أسهل وأسرع وأحدث طريقة لتوسيط عنصر في منتصف الصفحة بالضبط!", dependency: "الأب يجب أن يكون position: relative;", note: "تغني عن استخدام calc أو transform القديم." },
    { id: 43, category: "position", title: "طبقات الظهور (Z-Index)", code: "z-index: 999; isolation: isolate;", description: "التحكم في من يظهر فوق الآخر في الاتجاه الرأسي.", note: "استخدم isolation لضمان عدم تداخل الطبقات مع أجزاء أخرى من الصفحة." },

    // --- EFFECTS ---
    { id: 44, category: "effects", title: "ظلال الصندوق (Box Shadow)", code: "box-shadow: 0 4px 6px -1px var(--color);", description: "إضافة واقعية وعمق للتصميم.", note: "سر الظلال الفخمة هو استخدام الشفافية العالية (0.1 أو 0.2)." },
    { id: 45, category: "effects", title: "تمويه الزجاج (Backdrop Blur)", code: "backdrop-filter: blur(10px); background: rgba(255,255,255,0.1);", description: "تغبيش ما خلف العنصر لصنع تأثير Glassmorphism.", note: "يجب استخدامه مع خلفية شفافة لترى التأثير." },
    { id: 46, category: "effects", title: "الفلاتر الرسومية (Filters)", code: "filter: grayscale(1) invert(1);", description: "تطبيق تأثيرات هندسية ولونية فورية على الصور.", note: "يمكن دمج عشرات الفلاتر في سطر واحد." },
    { id: 47, category: "effects", title: "قص الأشكال (Clip Path)", code: "clip-path: ellipse(50% 50% at 50% 50%);", description: "تحويل أي مربع لصورة بيضاوية أو مثلث أو أي شكل هندسي.", note: "يغني عن تعديل الصور في البرامج الخارجية." },

    // --- ANIMATION ---
    { id: 48, category: "animation", title: "الأنيميشن المرتبط بالتمرير", code: "animation-timeline: scroll();", description: "جعل التحريك يحدث بناءً على مكان المستخدم في الصفحة.", note: "أحدث ثورة في الـ Storytelling على الويب في 2024." },
    { id: 49, category: "animation", title: "الانتقالات الناعمة (View Transitions)", code: "view-transition-name: card-anim;", description: "عمل حركات سينمائية عند التنقل بين الروابط أو الصفحات.", note: "تجعل الموقع يبدو وكأنه تطبيق موبايل احترافي." },
    { id: 50, category: "animation", title: "محرك @keyframes", code: "@keyframes rotate { to { rotate: 360deg } }", description: "بناء دورات حركية لا تنتهي بدون استخدام جافاسكربت.", note: "استخدم infinite لجعل الحركة مستمرة للأبد." },

    // --- RESPONSIVE ---
    { id: 51, category: "responsive", title: "استعلامات الحاوية (Containers)", code: "@container (.card) (width > 400px) { ... }", description: "تنسيق العنصر بناءً على مساحة الأب المباشر له وليس الشاشة بالكامل.", note: "هذه الميزة غيرت طريقة تصميم المكونات (Components) للأبد." },
    { id: 52, category: "responsive", title: "وضعية الطباعة", code: "@media print { .navbar, .ad { display: none; } }", description: "تحديد ما سيظهر وما سيختفي عند محاولة طباعة الصفحة.", note: "تنسيق النسخة الورقية من موقعك دليل على احترافيتك." },
    { id: 53, category: "responsive", title: "الأجهزة الحديثة (Touch/Pointer)", code: "@media (pointer: coarse) { button { padding: 20px; } }", description: "استهداف أجهزة اللمس (الموبايل) لتكبير الأزرار لتسهيل الضغط.", note: "أدق بكثير من الاعتماد على مقاس الشاشة فقط." },

    // --- MODERN ---
    { id: 54, category: "modern", title: "المحدد الخارق (:has)", code: "li:has(> a.active) { border-bottom: 2px solid; }", description: "تنسيق العنصر بناءً على وجود عنصر فرعي محدد بداخله.", note: "كان حلماً وأصبح حقيقة؛ يغني عن مئات الأسطر في جافاسكربت." },
    { id: 55, category: "modern", title: "المتغيرات المتقدمة (@property)", code: "@property --bg-color { syntax: '<color>'; initial-value: red; }", description: "تعريف متغيرات لها نوع بيانات لتتمكن من تحريكها بسلاسة.", note: "تسمح بتحريك الألوان والتدرجات التي كان من الصعب تحريكها قديماً." },
    { id: 56, category: "modern", title: "النطاق المحمي (@scope)", code: "@scope (.widget) { :scope { border: 1px; } p { color: blue; } }", description: "عزل تنسيقات مكون معين عن بقية الموقع لمنع تداخل الأكواد.", note: "أفضل تنظيم للكود في المشاريع الكبيرة." },

    // --- FUNCTIONS ---
    { id: 57, category: "functions", title: "الحسابات (calc)", code: "width: calc(100% - 20px);", description: "جمع وطرح الوحدات المختلفة (بيكسل مع نسبة مئوية).", note: "لا تنس المسافات حول علامات + و - ." },
    { id: 58, category: "functions", title: "المدى الذكي (clamp)", code: "width: clamp(300px, 50%, 800px);", description: "تنسيق مرن للصناديق يلتزم بحد أدنى وأقصى.", note: "يحل مشاكل التنسيق على الشاشات الكبيرة جداً والصغيرة جداً." },
    { id: 59, category: "functions", title: "درجة السطوع والتباين", code: "filter: brightness(150%) contrast(1.2);", description: "التحكم في الإضاءة والتباين للعناصر برمجياً.", note: "رائعة لتحويل مظهر الأزرار عند الـ Hover." },

    // --- LOGICAL ---
    { id: 60, category: "logical", title: "التخطيط العالمي (Logical Start/End)", code: "margin-inline-start: 1rem;", description: "هامش يمين في العربي ويسار في الإنجليزي تلقائياً.", note: "أساس بناء المواقع متعددة اللغات RTL/LTR." },
    { id: 61, category: "logical", title: "الأبعاد المنطقية (Size)", code: "inline-size: 100%; block-size: 10vh;", description: "بديل ذكي لـ Width و Height يحترم اتجاه النص.", note: "تجعل الكود يعمل بشكل مثالي حتى مع اللغات الرأسية (مثل اليابانية)." },

    // --- MATH --- (NEW)
    { id: 62, category: "math", title: "الدوال المثلثية (Sin / Cos / Tan)", code: "transform: rotate(calc(sin(45deg) * 100deg));", description: "إجراء حسابات هندسية متقدمة داخل الـ CSS مباشرة.", note: "تستخدم لصنع حركات دائرية وهندسية معقدة جداً." },
    { id: 63, category: "math", title: "الجذر التربيعي والقوى (Pow / Sqrt)", code: "width: calc(sqrt(100) * 10px);", description: "حساب الجذور والقوى الرياضية.", note: "أحدث الإضافات لـ CSS في 2024 لبرمجة الأبعاد الديناميكية." },
    { id: 64, category: "math", title: "المطلق والتقريب (Abs / Round)", code: "padding: round(up, 15px, 10px);", description: "تقريب الأرقام أو الحصول على القيمة المطلقة.", note: "تستخدم لضمان أن القيم تتبع قواعد معينة (مثل التقسيم على 10)." },

    // --- SCROLLING ---
    { id: 65, category: "scrolling", title: "تثبيت التمرير (Scroll Snap)", code: "scroll-snap-type: y mandatory;", description: "إجبار الصفحة على التوقف عند صور أو فقرات معينة بدقة.", note: "تستخدم في المواقع التي تعتمد على عرض الشرائح (Slides)." },
    { id: 66, category: "scrolling", title: "هوامش السكرول", code: "scroll-margin-top: 80px;", description: "ترك مسافة عند النقل لـ ID معين لضمان عدم اختفاء العنوان خلف الـ Navbar.", note: "حل المشكلة الأزلية في الروابط الداخلية للصفحة." },
    { id: 67, category: "scrolling", title: "التمرير السلس", code: "scroll-behavior: smooth;", description: "جعل الانتقال بين أقسام الصفحة ناعماً وليس قفزة مفاجئة.", note: "توضع في عنصر الـ html." },

    // --- INTERACTIVITY ---
    { id: 68, category: "interactivity", title: "شكل المؤشر (Cursor)", code: "cursor: zoom-in; cursor: grab;", description: "تغيير شكل الماوس لتوضيح حالة العنصر للمستخدم.", note: "استخدم grab للمناطق القابلة للسحب و zoom-in للصور." },
    { id: 69, category: "interactivity", title: "منع التفاعل (Pointer Events)", code: "pointer-events: none;", description: "جعل العنصر 'شفافاً' للماوس (النقرات تمر من خلاله للي تحته).", note: "مفيدة جداً للأيقونات الموضوعة فوق الأزرار." },
    { id: 70, category: "interactivity", title: "التحكم في اللمس (Touch Action)", code: "touch-action: pan-x pinch-zoom;", description: "تحديد السلوك المسموح به للأصابع على شاشات اللمس.", note: "أساسية في الخرائط ومعارض الصور التفاعلية." },

    // --- GRAPHICS ---
    { id: 71, category: "graphics", title: "المسار الحركي (Offset Path)", code: "offset-path: path('M 10 10 C 20 20, 40 20, 50 10');", description: "جعل العنصر يتحرك على مسار منحني تم رسمه مسبقاً برمجياً.", note: "أقوى وسيلة لعمل أنيميشن غير خطي." },
    { id: 72, category: "graphics", title: "أقنعة الصور (Masking)", code: "mask-image: linear-gradient(black, transparent);", description: "إخفاء أجزاء من الصور باستخدام التدرجات أو صور أخرى.", note: "تسمح بعمل تداخلات احترافية بين النص والصورة." },
    { id: 73, category: "graphics", title: "التفاف النص حول الأشكال", code: "shape-outside: circle(50%);", description: "جعل الفقرات تلتف حول شكل دائرة وليس مربعاً.", dependency: "يجب أن يكون العنصر float: left/right;", note: "تعطي للموقع مظهراً راقياً يشبه المجلات الورقية." },

    // --- PERFORMANCE ---
    { id: 74, category: "performance", title: "الرسم الذكي (Content Visibility)", code: "content-visibility: auto;", description: "منع المتصفح من معالجة العناصر البعيدة عن نظر المستخدم لتسريع الصفحة.", note: "أقوى أداة تحسين أداء في CSS الحديثة." },
    { id: 75, category: "performance", title: "تجهيز الرسوم (Will Change)", code: "will-change: transform, opacity;", description: "إخبار المتصفح بأن هذا العنصر سيتحرك قريباً ليقوم بتجهيز الـ GPU.", note: "استخدمها فقط عند الضرورة القصوى لتجنب استهلاك الذاكرة." },
    { id: 76, category: "performance", title: "العزل الرسومي (Contain)", code: "contain: layout paint;", description: "عزل العنصر وتغييراته عن بقية الصفحة لتقليل عمليات الـ Reflow.", note: "تستخدم في المكونات المعقدة التي تتغير قيمها باستمرار." },

    // --- RECENTLY ADDED (BEYOND 100 ITEMS LISTING) ---
    { id: 77, category: "modern", title: "أولويات الكود (@layer)", code: "@layer reset, theme, components;", description: "تنظيم من له الأولوية في التنسيق بناءً على طبقات معينة.", note: "تحل مشاكل تداخل ملفات الـ CSS الكبيرة نهائياً." },
    { id: 78, category: "typography", title: "تلوين مؤشر الكتابة (Caret)", code: "caret-color: #6366f1;", description: "تغيير لون الخط الوامض عند الكتابة داخل الـ Inputs.", note: "لمسة جمالية بسيطة لكنها تعطي طابعاً احترافياً." },
    { id: 79, category: "selectors", title: "محدد الصحة (:valid)", code: "input:valid { border-color: lime; }", description: "تنسيق الحقول التي تمت كتابتها بشكل صحيح برمجياً.", note: "تعطي تغذية راجعة فورية للمستخدم." },
    { id: 80, category: "selectors", title: "محدد الفارغ (:empty)", code: "div:empty { display: none; }", description: "إخفاء أي عنصر لا يحتوي على محتوى أو نص.", note: "مفيدة لتنظيف الواجهة من العناصر التي لم تصلها بيانات بعد." },
    { id: 81, category: "boxmodel", title: "النسبة الذهبية (Aspect Ratio)", code: "aspect-ratio: 1 / 1;", description: "الحفاظ على شكل المربع أو المستطيل مهما تغير الحجم.", note: "مثالية للصور والخرائط والفيديوهات." },
    { id: 82, category: "graphics", title: "تعديل المزيج (Blend Modes)", code: "mix-blend-mode: overlay;", description: "طريقة دمج ألوان العناصر مع ما خلفها (كما في Photoshop).", note: "تخلق تأثيراً لونياً فنياً رائعاً." },
    { id: 83, category: "interactivity", title: "منع التحديد (User Select)", code: "user-select: none;", description: "منع المستخدم من نسخ أو تحديد النص (للأزرار والقوائم).", note: "تجعل الموقع يبدو أقرب لتطبيقات الموبايل." },
    { id: 84, category: "math", title: "دالة المسافة (hypot)", code: "width: calc(hypot(3, 4) * 10px);", description: "حساب الوتر في المثلث القائم (فيثاغورس) داخل CSS.", note: "تستخدم في حسابات الأبعاد القطرية المعقدة." },
    { id: 85, category: "typography", title: "الخطوط المتغيرة (Variable Fonts)", code: "font-variation-settings: 'wght' 650, 'wdth' 85;", description: "التحكم في سمك وعرض الخط بدقة متناهية (بين القيم).", note: "تحتاج لخطوط تدعم هذه التقنية (مثل الخطوط المتطورة)." },
    { id: 86, category: "scrolling", title: "سلوك السكرول الزائد", code: "overscroll-behavior: contain;", description: "منع اهتزاز الصفحة عند انتهاء التمرير في نافذة منبثقة (Popup).", note: "تحسن من احترافية القوائم الجانبية المفتوحة." },
    { id: 87, category: "graphics", title: "تغبيش الخلفية فقط", code: "backdrop-filter: blur(15px);", description: "عمل غبش على ما خلف العنصر فقط دون التأثير على محتواه.", note: "الجمالية الزجاجية الحديثة." },
    { id: 88, category: "basics", title: "ترتيب الحواشي (Outline Offset)", code: "outline-offset: 5px;", description: "ترك مسافة بين البرواز الخارجي وبين جسم العنصر.", note: "تعطي شكلاً جمالياً عند تحديد الأزرار." },
    { id: 89, category: "colors", title: "نظام OKLCH", code: "color: oklch(70% 0.1 150);", description: "أحدث وأدق نظام ألوان في تاريخ الويب يدعم ألواناً أوسع من RGB.", colorPreview: "oklch(70% 0.1 150)", note: "النظام الموصى به للمستقبل." },
    { id: 90, category: "layout", title: "الشبكة التلقائية (Masonry)", code: "grid-template-rows: masonry;", description: "تخطيط مثل موقع Pinterest (بلا فراغات بين العناصر مختلفة الطول).", note: "ميزة تجريبية قوية جداً قادمة لجميع المتصفحات." },
    { id: 91, category: "modern", title: "إعادة الضبط (Revert)", code: "color: revert;", description: "إلغاء كل التنسيقات والعودة لتصميم المتصفح الأصلي أو المستخدم.", note: "تستخدم لتنظيف عنصر معين مما أصابه من تنسيقات عامة." },
    { id: 92, category: "functions", title: "دالة التحقق (supports)", code: "@supports (display: grid) { ... }", description: "تطبيق الكود فقط إذا كان متصفح المستخدم يدعم خاصية معينة.", note: "أساس الـ Progressive Enhancement." },
    { id: 93, category: "typography", title: "كسر الكلمات الطويلة", code: "overflow-wrap: break-word;", description: "إجبار الكلمات الطويلة (مثل الروابط) على الانكسار لسطر جديد.", note: "تمنع خروج النصوص عن حدود الهاتف." },
    { id: 94, category: "boxmodel", title: "أقل وأكبر ارتفاع", code: "min-height: 100vh; max-height: 500px;", description: "وضع حدود للمساحة الرأسية للعنصر.", note: "100vh تعني ملء الشاشة بالكامل." },
    { id: 95, category: "basics", title: "تكرار الخلفية", code: "background-repeat: round;", description: "تكرار الصورة وتغيير حجمها قليلاً لملء المساحة بدون ترك زوائد.", note: "أكثر ذكاءً من repeat العادي." },
    { id: 96, category: "selectors", title: "المحدد الشقيق (:has +)", code: "h1:has(+ h2) { margin-bottom: 0; }", description: "تنسيق العنوان فقط إذا كان يتبعه مباشرة عنوان فرعي.", note: "تنسيق سياقي ذكي جداً." },
    { id: 97, category: "animation", title: "حالة ما قبل الدخول", code: "@starting-style { opacity: 0; }", description: "تحديد شكل العنصر 'قبل' أن يظهر في الصفحة لعمل أنيميشن دخول ناعم.", note: "أحدث إضافة لتنسيق العناصر التي تظهر بالفجأة." },
    { id: 98, category: "interactivity", title: "تحديد الحجم يدوياً", code: "resize: horizontal;", description: "السماح للمستخدم بتغيير عرض العنصر فقط بالماوس.", note: "تستخدم في خانات الأكواد والشروحات." },
    { id: 99, category: "responsive", title: "نسب الحاوية (cqw / cqh)", code: "width: 50cqw;", description: "وحدات قياس تعتمد على مساحة أقرب 'حاوية' تم تعريفها.", note: "تغنيك عن التفكير في مقاس الشاشة ككل." },
    { id: 100, category: "basics", title: "نمط الصندوق المطلق", code: "all: unset;", description: "تجريد العنصر تماماً من أي تنسيق (حتى تنسيق المتصفح الافتراضي).", note: "تبدأ منها إذا كنت تريد بناء مكونك الخاص من الصفر المطلق." },
    { id: 101, category: "modern", title: "تنسيق المدخلات (:placeholder-shown)", code: "input:placeholder-shown { border-style: dotted; }", description: "تنسيق الحقل فقط طالما أن المستخدم لم يكتب شيئاً بداخله.", note: "تستخدم لعمل حركات احترافية للـ Floating labels." },
    { id: 102, category: "boxmodel", title: "دمج الصناديق (box-decoration-break)", code: "box-decoration-break: clone;", description: "التحكم في كيفية ظهور الحدود والخلفية عندما ينقسم النص لسطرين.", note: "تضمن ظهور البادينج في بداية السطر الثاني أيضاً." },
    { id: 103, category: "typography", title: "تزيين الخطوط العريض", code: "text-decoration: underline wavy #ff5733;", description: "عمل خطوط مموجة وملونة تحت النص.", note: "بديل عصري للخط المستقيم الممل." },
    { id: 104, category: "colors", title: "نظام CMYK للمطابع", code: "color: device-cmyk(0 1 0 0);", description: "استخدام نظام ألوان الطباعة مباشرة في الويب.", note: "مهم جداً للمواقع التي تصمم كروت أو دعوات للطباعة." },
    { id: 105, category: "layout", title: "المحتوى الموجه (Writing Mode)", code: "writing-mode: vertical-rl;", description: "تحويل اتجاه الموقع بالكامل ليصبح رأسياً (لأعلى لأسفل).", note: "تستخدم في التصاميم الفنية المبتكرة واللغات الآسيوية." },
    { id: 106, category: "performance", title: "الاحتواء الهيكلي", code: "contain: content;", description: "إخبار المتصفح بأن محتوى هذا العنصر لن يؤثر أبداً على ما حوله.", note: "تسرع من عملية الـ Rendering بشكل ملحوظ." },
    { id: 107, category: "graphics", title: "مرشح الظل الفعلي (drop-shadow)", code: "filter: drop-shadow(5px 5px 10px red);", description: "صنع ظل يتبع شكل المحتوى بالضبط (حتى لو كانت صورة مفرغة PNG).", note: "أفضل بكثير من box-shadow للصور المفرغة والأيقونات." },
    { id: 108, category: "math", title: "القيمة المطلقة (abs)", code: "width: calc(abs(-100px));", description: "تحويل الأرقام السالبة لموجبة تلقائياً.", note: "مفيدة في الحسابات الديناميكية التي قد تنتج أرقاماً سالبة." },
    { id: 109, category: "scrolling", title: "منع السكرول الخفي", code: "overflow: clip;", description: "إخفاء الزيادات بدون السماح بأي نوع من التمرير (لا يدوي ولا برمجي).", note: "أكثر أماناً من hidden في بعض الحالات البرمجية." },
    { id: 110, category: "interactivity", title: "إدارة الهزات (scroll-behavior)", code: "scroll-behavior: auto !important;", description: "إلغاء الحركة السلسة في حالة تفعيل خيار 'تقليل الحركة' للمستخدم.", note: "احتراماً لخصوصية المستخدمين الذين يعانون من دوار الحركة." },
    // --- BATCH 2: 111-140 ---
    { id: 111, category: "tables", title: "دمج حدود الجداول (Border Collapse)", code: "border-collapse: collapse;", description: "إزالة الفراغات المزدوجة بين حدود خلايا الجدول وجعلها خطاً واحداً.", note: "الوضع الافتراضي هو separate، لكن collapse يعطي مظهراً أكثر نظافة." },
    { id: 112, category: "tables", title: "المسافة بين الخلايا (Border Spacing)", code: "border-spacing: 10px;", description: "تحديد المسافة بين خلايا الجدول عند استخدام border-collapse: separate.", note: "تعمل فقط إذا كانت الحدود غير مندمجة." },
    { id: 113, category: "tables", title: "مكان عنوان الجدول (Caption Side)", code: "caption-side: bottom;", description: "تحديد ما إذا كان وصف الجدول يظهر في الأعلى أم الأسفل.", note: "تستخدم لتنظيم البيانات المعقدة." },
    { id: 114, category: "tables", title: "تخطيط الجدول الثابت (Table Layout)", code: "table-layout: fixed;", description: "إجبار الجدول على الالتزام بعرض الأعمدة المحدد بدلاً من التوسع حسب النص.", note: "رائعة لتحسين أداء تحميل الجداول الكبيرة جداً." },
    { id: 115, category: "svg", title: "لون تعبئة الـ SVG (Fill)", code: "fill: #6366f1;", description: "تغيير لون المحتوى الداخلي لأشكال الـ SVG.", note: "بديل لـ background-color بالنسبة لرسومات الـ Vector." },
    { id: 116, category: "svg", title: "لون حدود الـ SVG (Stroke)", code: "stroke: red; stroke-width: 2px;", description: "رسم حدود حول أشكال الـ SVG.", note: "يمكن استخدام stroke-dasharray لعمل خطوط متقطعة متحركة." },
    { id: 117, category: "svg", title: "تغيير شفافية التعبئة (Fill Opacity)", code: "fill-opacity: 0.5;", description: "التحكم في شفافية لون الـ SVG الداخلي فقط دون التأثير على الحدود.", note: "توفر تحكماً دقيقاً جداً في الرسومات." },
    { id: 118, category: "svg", title: "شكل زوايا الخطوط (Stroke Linecap)", code: "stroke-linecap: round;", description: "تحديد شكل نهاية الخطوط في SVG (دائرية، مربعة، حادة).", note: "تعطي طابعاً طفولياً أو ناعماً للرسومات." },
    { id: 119, category: "svg", title: "محاذاة النص في SVG (Text Anchor)", code: "text-anchor: middle;", description: "تحديد نقطة الارتكاز للنصوص داخل رسومات الـ SVG.", note: "تشبه text-align لكنها تعمل داخل نظام إحداثيات الرسم." },
    { id: 120, category: "svg", title: "التحكم في النسبة (Preserve Aspect Ratio)", code: "preserveAspectRatio: xMidYMid meet;", description: "التحكم في كيفية ملء الـ SVG للحاوية الخاصة به عند اختلاف الأبعاد.", note: "ضرورية جداً لضمان عدم تشوه الأيقونات." },
    { id: 121, category: "selectors", title: "محدد العنصر الأول (:first-of-type)", code: "p:first-of-type { font-size: 1.5rem; }", description: "استهداف أول عنصر من نوعه داخل الأب، حتى لو سبقه عناصر من أنواع أخرى.", note: "أدق من :first-child في حالات معينة." },
    { id: 122, category: "selectors", title: "محدد العنصر الوحيد (:only-child)", code: "span:only-child { color: purple; }", description: "استهداف العنصر فقط إذا كان هو الابن الوحيد داخل أبيه.", note: "مفيدة جداً لإخفاء الفواصل (Separators) في القوائم." },
    { id: 123, category: "selectors", title: "محدد المدى (:in-range)", code: "input:in-range { background: lightgreen; }", description: "تنسيق حقول الأرقام إذا كانت الحمولة داخل الحدود المسموحة (min/max).", note: "تعزز من تجربة المستخدم في النماذج (Forms)." },
    { id: 124, category: "selectors", title: "محدد القيمة المطلوبة (:required)", code: "input:required { border-right: 5px solid red; }", description: "تمييز الحقول الإجبارية التي يجب على المستخدم ملؤها.", note: "طريقة رائعة لتوفير الوقت على المستخدم." },
    { id: 125, category: "selectors", title: "محدد القيمة الاختيارية (:optional)", code: "input:optional { opacity: 0.8; }", description: "تنسيق الحقول التي لا يشترط ملؤها.", note: "تساعد في توضيح أولوية البيانات." },
    { id: 126, category: "selectors", title: "محدد الـ Checkbox (:checked)", code: "input:checked + label { font-weight: bold; }", description: "تنسيق العناصر بناءً على حالة اختيارها.", note: "هي المحرك الرئيسي لصنع (Dark Mode Toggle) بدون جافاسكربت." },
    { id: 127, category: "selectors", title: "محدد العناصر المعطلة (:disabled)", code: "button:disabled { cursor: not-allowed; opacity: 0.5; }", description: "تغيير شكل الأزرار أو الحقول التي تم تعطيلها برمجياً.", note: "تسمم تجربة الاستخدام إذا لم تكن واضحة بصرياً." },
    { id: 128, category: "boxmodel", title: "الاحتواء الداخلي (Box Decoration Break)", code: "box-decoration-break: clone;", description: "التحكم في كيفية ظهور الحدود والخلفية عند انقسام النص لسطور متعددة.", note: "تضمن أن كل سطر يبدو وكأنه وحدة مستقلة بحدودها الخاصة." },
    { id: 129, category: "boxmodel", title: "اتجاه الظل الداخلي (Inset Shadow)", code: "box-shadow: inset 0 0 10px black;", description: "جعل الظل يظهر داخل العنصر بدلاً من خارجه.", note: "تستخدم لصنع تأثيرات الضغط (Neumorphism)." },
    { id: 130, category: "typography", title: "تسطير النصوص (Text Decoration Line)", code: "text-decoration-line: overline underline;", description: "وضع خطوط فوق وتحت النص في نفس الوقت.", note: "يمكن دمج أكثر من قيمة معاً." },
    { id: 131, category: "typography", title: "نمط الخط (Text Decoration Style)", code: "text-decoration-style: double;", description: "تغيير شكل خط التنسيق (مزدوج، مموج، منقط).", note: "تعطي طابعاً كلاسيكياً للنصوص المعنونة." },
    { id: 132, category: "typography", title: "إزاحة الخط (Text Underline Offset)", code: "text-underline-offset: 5px;", description: "تحديد المسافة بين الكلمات وبين الخط الذي تحتها.", note: "تحسن من مظهر الروابط بشكل كبير لأنها تمنع تداخل الخط مع الأحرف النازلة (مثل g و y)." },
    { id: 133, category: "typography", title: "توجيه الحروف العرضية (Text Orientation)", code: "text-orientation: upright;", description: "جعل الحروف تظهر بشكل رأسي واقف حتى لو كان الاتجاه عمودياً.", dependency: "تحتاج writing-mode: vertical-rl;", note: "تستخدم في التصاميم الفنية والبوسترات." },
    { id: 134, category: "colors", title: "سطوع الألوان (Color Interpolation)", code: "color-interpolation: linearRGB;", description: "تحديد كيفية حساب تدرجات الألوان المتوسطة.", note: "تستخدم غالباً في الـ SVG للحصول على جودة رسم أعلى." },
    { id: 135, category: "colors", title: "خلفية النص (Background Clip: Text)", code: "-webkit-background-clip: text; color: transparent;", description: "جعل خلفية العنصر تظهر 'داخل' الحروف فقط.", note: "هذا هو السر لصنع (Text Gradients) نصوص ملونة بتدرجات." },
    { id: 136, category: "layout", title: "كسر الصفحة قبل (Break Before)", code: "break-before: page;", description: "إجبار الطابعة على بدء صفحة جديدة قبل هذا العنصر.", note: "ضرورية جداً في التقارير الطويلة والكتب الإلكترونية." },
    { id: 137, category: "layout", title: "تجنب كسر الصفحة (Break Inside)", code: "break-inside: avoid;", description: "منع انقسام العنصر (مثل جدول أو صورة) بين صفحتين مطبوعتين.", note: "تضمن تماسك بياناتك عند الطباعة." },
    { id: 138, category: "flexbox", title: "ترتيب الظهور (Order)", code: "order: 5;", description: "إعادة ترتيب العناصر يدوياً بدون تغيير مكانها في كود HTML.", note: "العناصر ذات الرقم الأكبر تظهر في النهاية." },
    { id: 139, category: "grid", title: "التحجيم التلقائي (Grid Auto Columns)", code: "grid-auto-columns: min-content;", description: "تحديد عرض الأعمدة التي يتم إنشاؤها تلقائياً عند وجود محتوى زائد.", note: "تضمن عدم خروج التصميم عن السيطرة عند وصول بيانات غير متوقعة." },
    { id: 140, category: "position", title: "المسافة اللزجة (Sticky Offset)", code: "top: 20px;", description: "تحديد مكان توقف العنصر اللزج بالنسبة للحافة.", dependency: "position: sticky;", note: "يمكن استخدام قيم سالبة أحياناً لتأثيرات بصرية." },
    // --- BATCH 3: 141-180 ---
    { id: 141, category: "accessibility", title: "لون التمييز (Accent Color)", code: "accent-color: #6366f1;", description: "تغيير اللون الأساسي لعناصر التحكم الافتراضية مثل Checkboxes و Radios.", note: "أسرع طريقة لتخصيص النماذج لتناسب هوية موقعك." },
    { id: 142, category: "accessibility", title: "تعديل الألوان الإجباري", code: "forced-color-adjust: none;", description: "منع المتصفح من تغيير ألوان العنصر عند تفعيل وضع (Contrast العالي) في النظام.", note: "تستخدم بحذر لضمان وضوح الأيقونات الملونة." },
    { id: 143, category: "accessibility", title: "نظام الألوان (Color Scheme)", code: "color-scheme: light dark;", description: "إخبار المتصفح بأن الصفحة تدعم الوضعين الفاتح والمظلم لتغيير ألوان عناصر التحكم تلقائياً.", note: "تجعل شريط التمرير (Scrollbar) مظلماً تلقائياً في الوضع الليلي." },
    { id: 144, category: "accessibility", title: "تحسين الطباعة الملونة", code: "print-color-adjust: exact;", description: "إجبار الطابعة على طباعة الخلفيات والظلال كما تظهر في الشاشة بالضبط.", note: "ضرورية عند طباعة التقارير التي تحتوي على تدرجات لونية مهمة." },
    { id: 145, category: "scrolling", title: "حاشية السكرول (Scroll Padding)", code: "scroll-padding-top: 100px;", description: "تحديد مسافة أمان عند التمرير لمرسى (Anchor) معين.", note: "تمنع اختفاء محتوى القسم خلف القوائم العلوية الثابتة." },
    { id: 146, category: "scrolling", title: "عرض السكرول (Scrollbar Width)", code: "scrollbar-width: thin;", description: "تصغير حجم شريط التمرير الجانبي لمظهر أكثر عصرية.", note: "تعمل في المتصفحات الحديثة وتغنيك عن أكواد -webkit المعقدة." },
    { id: 147, category: "scrolling", title: "تلوين السكرول (Scrollbar Color)", code: "scrollbar-color: #6366f1 transparent;", description: "تغيير لون مقبض السكرول وخلفيته بساطة شديدة.", note: "ميزة انتظرها المطورون لسنوات طويلة." },
    { id: 148, category: "scrolling", title: "مجرى السكرول (Scrollbar Gutter)", code: "scrollbar-gutter: stable;", description: "حجز مساحة لشريط التمرير مسبقاً لمنع 'قفزة' المحتوى عند ظهوره أو اختفائه.", note: "تحافظ على ثبات تصميمك وتمنع الاهتزاز المزعج." },
    { id: 149, category: "modern", title: "الحرف الاستهلالي (Initial Letter)", code: "initial-letter: 3 2;", description: "جعل أول حرف في الفقرة ضخماً ويمتد لعدة أسطر (كما في الكتب التاريخية).", note: "لمسة جمالية رائعة للمقالات الأدبية." },
    { id: 150, category: "modern", title: "الحجم التلقائي للحقول", code: "field-sizing: content;", description: "جعل الـ Textarea يتوسع رأسياً تلقائياً بمجرد الكتابة فيه بدون جافاسكربت!", note: "ميزة ثورية توفر الكثير من الكود." },
    { id: 151, category: "modern", title: "التفاف النص المتقدم (Text Wrap)", code: "text-wrap: balance;", description: "توزيع الكلمات بشكل متوازن على السطور لمنع وجود كلمة واحدة وحيدة في السطر الأخير.", note: "رائعة للعناوين الكبيرة (Titles)." },
    { id: 152, category: "graphics", title: "تنعيم الصور (Image Rendering)", code: "image-rendering: pixelated;", description: "التحكم في كيفية تكبير الصور الصغيرة (جعلها ناعمة أو نحت بكسلاتها).", note: "أساسية لمواقع الـ Pixel Art أو الألعاب." },
    { id: 153, category: "graphics", title: "توجه الصورة (Image Orientation)", code: "image-orientation: from-image;", description: "احترام معلومات التدوير الموجودة داخل ملف الصورة (EXIF).", note: "تضمن ظهور صور الكاميرا بالوضع الصحيح تلقائياً." },
    { id: 154, category: "tables", title: "الخلايا الفارغة (Empty Cells)", code: "empty-cells: hide;", description: "إخفاء حدود وخلفيات خلايا الجدول التي لا تحتوي على بيانات.", note: "تنظف مظهر الجداول التي تحتوي على فراغات." },
    { id: 155, category: "svg", title: "إزاحة الخط (Stroke Dashoffset)", code: "stroke-dashoffset: 100;", description: "تحريك النقاط أو الخطوط المقطعة في الـ SVG.", note: "هي السر وراء أنيميشن (رسم الخطوط) الشهير." },
    { id: 156, category: "svg", title: "تأثير الفيكتور (Vector Effect)", code: "vector-effect: non-scaling-stroke;", description: "منع حدود الـ SVG من أن تصبح سميكة جداً عند تكبير الرسم.", note: "تحافظ على تناسق الأيقونات مهما تغير حجمها." },
    { id: 157, category: "svg", title: "فلترة الألوان (Interpolation Filters)", code: "color-interpolation-filters: sRGB;", description: "تحديد مساحة الألوان المستخدمة عند تطبيق فلاتر الـ SVG.", note: "تؤثر على دقة الظلال والتوهج في الرسومات." },
    { id: 158, category: "selectors", title: "محدد القراءة فقط (:read-only)", code: "input:read-only { background: #f0f0f0; }", description: "تنسيق الحقول التي لا يمكن للمستخدم تعديلها.", note: "تساعد في توضيح حالة الحساب للمستخدم." },
    { id: 159, category: "selectors", title: "محدد القراءة والكتابة (:read-write)", code: "input:read-write { border-color: blue; }", description: "استهداف كل العناصر القابلة للتعديل.", note: "تشمل الـ input العادي والـ contenteditable." },
    { id: 160, category: "selectors", title: "محدد النطاق الزمني (:past / :future)", code: "video:past { filter: grayscale(1); }", description: "تنسيق الكلمات أو الترجمة التي انتهت أو التي ستأتي في الفيديو.", note: "تستخدم في مشغلات الميديا المتطورة." },
    { id: 161, category: "boxmodel", title: "الحدود المنحنية المنفصلة", code: "border-top-right-radius: 50px 20px;", description: "صنع منحنيات غير منتظمة (椭圆) لكل زاوية على حدة.", note: "تسمح بصنع أشكال عضوية (Organic Shapes) فنية." },
    { id: 162, category: "boxmodel", title: "عرض الحدود المنطقي (Border Inline Width)", code: "border-inline-width: 5px;", description: "تحديد سمك الحدود الجانبية بناءً على اتجاه اللغة.", note: "تدعم الانتقال السلس بين العربي والإنجليزي." },
    { id: 163, category: "typography", title: "ضبط محاذاة الخط (Text Align Last)", code: "text-align-last: center;", description: "تحديد محاذاة السطر الأخير فقط في الفقرة المنضبطة (Justified).", note: "تعطي لمسة احترافية جداً للكتب والمجلات الرقمية." },
    { id: 164, category: "typography", title: "تسطير كتل النصوص", code: "text-decoration-skip-ink: all;", description: "منع خط التسطير من قطع الحروف النازلة (مثل p , q) لزيادة الوضوح.", note: "مفعلة تلقائياً في المتصفحات الحديثة لجماليتها." },
    { id: 165, category: "colors", title: "تدرج الألوان الدائري (Conic Gradient)", code: "background: conic-gradient(red, yellow, green);", description: "صنع تدرج لوني يدور حول نقطة مركزية (مثل رادار أو ساعة).", note: "رائعة لصنع الرسوم البيانية الدائرية (Pie Charts)." },
    { id: 166, category: "colors", title: "نظام ألوان المطورين (System Colors)", code: "color: CanvasText; background: Canvas;", description: "استخدام ألوان نظام التشغيل المباشرة لضمان اندماج مثالي مع الجهاز.", note: "تستخدم في بناء تطبيقات الويب التي تشبه تطبيقات النظام." },
    { id: 167, category: "layout", title: "ترتيب الأعمدة (Column Span)", code: "column-span: all;", description: "جعل العنوان يمتد عبر كل الأعمدة في التنسيق المتعدد.", note: "تستخدم لعمل عناوين رئيسية وسط المقالات المقسمة لأعمدة." },
    { id: 168, category: "layout", title: "تعبئة الأعمدة (Column Fill)", code: "column-fill: auto;", description: "التحكم في كيفية توزيع النص داخل الأعمدة (بالتساوي أم ملء عمود تلو الآخر).", note: "تغير تجربة التصفح الرأسي للمقالات." },
    { id: 169, category: "flexbox", title: "أساس الفليكس (Flex Basis)", code: "flex-basis: 200px;", description: "تحديد الحجم الأولي للعنصر قبل أن يبدأ بالنمو أو الانكماش.", note: "أكثر دقة من width داخل أنظمة Flex." },
    { id: 170, category: "grid", title: "النمو التلقائي (Grid Auto Flow)", code: "grid-auto-flow: dense;", description: "إجبار المتصفح على ملء الفراغات الصغيرة في الشبكة بعناصر متأخرة.", note: "تضمن عدم وجود فراغات قبيحة في معرض الصور غير المنتظم." },
    { id: 171, category: "grid", title: "محاذاة المحتوى (Place Content)", code: "place-content: center space-around;", description: "اختصار لـ align-content و justify-content في سطر واحد.", note: "أسرع كود لتوسيط شبكة Grid بالكامل داخل حاويتها." },
    { id: 172, category: "grid", title: "محاذاة العناصر (Place Items)", code: "place-items: end start;", description: "اختصار لـ align-items و justify-items في سطر واحد.", note: "رائعة لترتيب المحتوى داخل كل خلية في الشبكة بسرعة." },
    { id: 173, category: "position", title: "تثبيت الكائنات (Object Position)", code: "object-position: 50% 10%;", description: "تحريك الصورة داخل الـ Container الخاص بها عند استخدام object-fit.", note: "تضمن أن وجه الشخص يظهر دائماً حتى لو تم قص الصورة." },
    { id: 174, category: "effects", title: "تكرار الخلفية (Background Repeat: Space)", code: "background-repeat: space;", description: "تكرار الصورة وتوزيعها بحيث تلمس الأطراف مع ترك مسافات متساوية بينها.", note: "تمنع قص الصورة الأخيرة في التكرار." },
    { id: 175, category: "effects", title: "تطبيق الفلتر السحابي", code: "filter: drop-shadow(0 0 5px blue) blur(2px);", description: "دمج الظل الحقيقي مع التغبيش لعمل هالة ضوئية.", note: "تأثير (Neon) فخم جداً للعناصر النشطة." },
    { id: 176, category: "animation", title: "توقيت الخطوات (Steps)", code: "animation-timing-function: steps(5, end);", description: "جعل الحركة 'تقفز' بدلاً من الانزلاق (مثل عقرب الثواني).", note: "أساسية لعمل أنيميشن (Sprite Sheets) للألعاب." },
    { id: 177, category: "animation", title: "اتجاه الحركة (Direction)", code: "animation-direction: alternate-reverse;", description: "عكس اتجاه الحركة في كل دورة (من النهاية للبداية ثم العكس).", note: "تصنع حركات متكررة ناعمة جداً للأيقونات المتحركة." },
    { id: 178, category: "responsive", title: "تحسين التباين (Prefers Contrast)", code: "@media (prefers-contrast: more) { ... }", description: "تطبيق ألوان أكثر حدة للمستخدمين الذين يفضلون ذلك.", note: "جزء أساسي من الالتزام بمعايير الـ Accessibility العالمية." },
    { id: 179, category: "responsive", title: "نظام الألوان المفضل", code: "@media (prefers-color-scheme: dark) { ... }", description: "الاستماع لإعدادات الجهاز وتغيير الثيم تلقائياً.", note: "الأساس الذي بنيت عليه كل ثيمات المواقع الحديثة." },
    { id: 180, category: "performance", title: "تحسين النص (Text Rendering)", code: "text-rendering: optimizeLegibility;", description: "تفعيل ميزات الخطوط المتقدمة (Kerning) لجعل القراءة أكثر راحة.", note: "قد تبطئ الأداء قليلاً في الصفحات الضخمة لكنها تجمل النص." },
    // --- BATCH 4: 181-210 ---
    { id: 181, category: "accessibility", title: "تقليل الحركة (Prefers Reduced Motion)", code: "@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }", description: "إيقاف الحركات المزعجة للمستخدمين الذين يعانون من مشاكل في التوازن.", note: "معيار إنساني وأخلاقي قبل أن يكون تقنياً." },
    { id: 182, category: "accessibility", title: "تعديل البيانات (Prefers Reduced Data)", code: "@media (prefers-reduced-data: reduce) { .hero { background: none; } }", description: "توفير الباقة للمستخدم عبر تحميل عناصر أقل حجماً.", note: "تحسن من سرعة الموقع في المناطق ذات الإنترنت الضعيف." },
    { id: 183, category: "modern", title: "تموضع الارتكاز (Anchor Positioning)", code: "anchor-name: --my-anchor; position: anchor(--my-anchor bottom);", description: "ربط عنصر (مثل Popup) بعنصر آخر في الصفحة ليتحرك معه تلقائياً.", note: "أحدث ثورة في بناء الـ Tooltips والـ Menus في 2024." },
    { id: 184, category: "modern", title: "التحويلات المنفصلة (Individual Transforms)", code: "scale: 1.5; rotate: 45deg; translate: 10px 20px;", description: "استخدام التحجيم والتدوير والإزاحة كخصائص منفصلة بدلاً من دمجها في transform.", note: "تسهل عملية الأنيميشن لأنك تستطيع تحريك كل قيمة على حدة." },
    { id: 185, category: "modern", title: "العودة للطبقة (Revert Layer)", code: "color: revert-layer;", description: "إلغاء التنسيق والعودة للقيمة الموجودة في الطبقة السابقة (@layer).", note: "تستخدم بكثرة مع نظام الطبقات البرمجي الجديد." },
    { id: 186, category: "performance", title: "عزل الطلاء (Contain: Paint)", code: "contain: paint;", description: "إخبار المتصفح بأن محتوى العنصر لن يخرج أبداً عن حدوده (Clip).", note: "تسمح للمتصفح بتجاوز رسم العناصر الخارجة عن الشاشة بسرعة أكبر." },
    { id: 187, category: "performance", title: "عزل التخطيط (Contain: Layout)", code: "contain: layout;", description: "إخبار المتصفح بأن تغييرات هذا العنصر لن تغير أماكن العناصر الأخرى حوله.", note: "تمنع عملية الـ Reflow الشاملة للموقع." },
    { id: 188, category: "animation", title: "تزامن العرض (View Timeline)", code: "view-timeline-name: --subject; view-timeline-axis: block;", description: "إنشاء جدول زمني للأنيميشن يعتمد على ظهور العنصر داخل نافذة العرض.", note: "أساس تأثيرات (Reveal on scroll) الحديثة." },
    { id: 189, category: "animation", title: "نطاق الحركة (Animation Range)", code: "animation-range: entry 10% exit 90%;", description: "تحديد متى يبدأ وينتهي الأنيميشن بالضبط أثناء السكرول.", note: "توفر تحكماً سينمائياً دقيقاً في ظهور العناصر." },
    { id: 190, category: "graphics", title: "تعبئة النص بالصور", code: "-webkit-text-stroke: 1px blue; paint-order: stroke fill;", description: "رسم حدود حول الحروف مع التحكم في ترتيب الرسم.", note: "تستخدم لصنع نصوص تشبه الشعارات (Logos)." },
    { id: 191, category: "typography", title: "توزيع المسافات (Force End)", code: "text-align: justify; text-justify: distribute;", description: "توزيع المسافات بين الحروف والكلمات لملء السطر بالكامل بدقة متناهية.", note: "تعطي طابعاً فنياً للفقرات العريضة." },
    { id: 192, category: "typography", title: "التحجيم البصري (Optical Sizing)", code: "font-optical-sizing: auto;", description: "تعديل شكل الحروف تلقائياً حسب حجم الخط لزيادة وضوحها.", note: "تجعل الخطوط تبدو رائعة في الأحجام الصغيرة جداً والكبيرة جداً." },
    { id: 193, category: "colors", title: "نظام LAB العلمي", code: "color: lab(50% 40 20);", description: "تمثيل الألوان بناءً على كيفية إدراك العين البشرية لها.", note: "أدق بكثير من RGB لتصميم واجهات مريحة للعين." },
    { id: 194, category: "colors", title: "فضاء الألوان P3", code: "color: color(display-p3 1 0 0);", description: "الوصول لألوان فائقة السطوع والتشبع لا يمكن لـ RGB الوصول إليها.", note: "تظهر قوتها في شاشات الـ Mac والـ iPhones الحديثة." },
    { id: 195, category: "layout", title: "عرض المحتوى التلقائي", code: "width: min-content;", description: "جعل العنصر ينكمش ليكون بعرض أطول كلمة بداخله فقط.", note: "مفيدة جداً لصنع الـ Tooltips أو الصور ذات الوصف القصير." },
    { id: 196, category: "layout", title: "أكبر عرض ممكن", code: "width: max-content;", description: "منع النص من الانكسار لسطر جديد وإجبار العنصر على التمدد أفقياً.", note: "تستخدم في القوائم العرضية لضمان عدم تداخل الكلمات." },
    { id: 197, category: "layout", title: "العرض المتوفر (Fill Available)", code: "width: -webkit-fill-available;", description: "التمدد ليأخذ كل المساحة المتاحة في الأب (مثل block المطور).", note: "تضمن امتلاء المساحة المنطقية للعنصر." },
    { id: 198, category: "flexbox", title: "أساس الفليكس التلقائي", code: "flex: 1 1 auto;", description: "اختصار شامل للنمو والانكماش والحجم الأولي.", note: "الكود الأكثر استخداماً لجعل الأعمدة متساوية ومرنة." },
    { id: 199, category: "grid", title: "خطوط الشبكة المسماة", code: "grid-template-columns: [main-start] 1fr [main-end];", description: "تسمية خطوط الشبكة لتسهيل وضع العناصر بداخلها لاحقاً.", note: "تجعل الكود مقروءاً جداً في التخطيطات المعقدة." },
    { id: 200, category: "grid", title: "ترتيب الطبقات (Z-index Grid)", code: "z-index: 10; grid-column: 1 / -1;", description: "التحكم في تداخل العناصر داخل خلية Grid واحدة.", note: "Grid يسمح بوضع عناصر فوق بعضها بدون الحاجة لـ position: absolute." },
    { id: 201, category: "position", title: "مركز الجسم (Transform Origin)", code: "transform-origin: top left;", description: "تحديد النقطة التي يدور حولها العنصر أو يتكبر منها.", note: "تغير سلوك الأنيميشن بالكامل (مثل فتح باب أو دوران ساعة)." },
    { id: 202, category: "effects", title: "مزج الخلفيات (Background Blend)", code: "background-blend-mode: multiply, screen;", description: "دمج صورتين خلفيتين مع بعضهما البعض بتأثيرات بصرية.", note: "تغنيك عن تجهيز الصور مسبقاً في الفوتوشوب." },
    { id: 203, category: "effects", title: "فلتر العزل (Isolation)", code: "isolation: isolate;", description: "منع العنصر من التداخل مع خلفية الأب عند استخدام blend-modes.", note: "أساسية للحفاظ على تباين النصوص فوق الصور المدمجة." },
    { id: 204, category: "animation", title: "تأخير الظهور (Animation Delay)", code: "animation-delay: -2s;", description: "بدء الأنيميشن من منتصفه (القيمة السالبة تعني 'تخطى' الوقت المحدد).", note: "خدعة ذكية جداً لعمل حركات متزامنة تبدو عشوائية." },
    { id: 205, category: "animation", title: "سلوك النهاية (Fill Mode)", code: "animation-fill-mode: forwards;", description: "جعل العنصر يحتفظ بشكله الأخير بعد انتهاء الأنيميشن ولا يعود لحجمه الأصلي.", note: "أهم خيار عند بناء تأثيرات الدخول (Intro animations)." },
    { id: 206, category: "scrolling", title: "أوفر سكرول (Overscroll)", code: "overscroll-behavior-y: none;", description: "منع الصفحة من الاهتزاز أو 'الشد' عند الوصول لنهاية التمرير.", note: "تحسن تجربة الاستخدام في تطبيقات الويب." },
    { id: 207, category: "scrolling", title: "سكرول التقريب (Snap Stop)", code: "scroll-snap-stop: always;", description: "إجبار السكرول على التوقف عند كل عنصر وعدم 'تخطي' عدة عناصر عند السحب السريع.", note: "رائعة لمعارض الصور التي يجب رؤية كل صورة فيها." },
    { id: 208, category: "accessibility", title: "أولوية الألوان المتباينة", code: "color: color-contrast(white vs red, blue, green);", description: "جعل المتصفح يختار اللون الأكثر وضوحاً وتبايناً تلقائياً.", note: "ميزة مستقبلية قوية جداً لضمان سهولة القراءة لضعاف البصر." },
    { id: 209, category: "modern", title: "البرمجة الشرطية (@when / @else)", code: "@when (width > 400px) { ... } @else { ... }", description: "كتابة منطق برمجي (IF Statement) داخل CSS مباشرة.", note: "تبسط أكواد الـ Media Queries المعقدة." },
    { id: 210, category: "basics", title: "الوحدة المتناهية الصغر (dvw / dvh)", code: "height: 100dvh;", description: "وحدات قياس ذكية تتجاهل أشرطة أدوات المتصفح في الموبايل.", note: "تضمن أن المحتوى يملأ الشاشة بالضبط بدون 'قص' أو فراغات زائدة." },
    // --- BATCH 5: 211-260 (LOGICAL & SCROLL SNAP) ---
    { id: 211, category: "logical", title: "البادينج المنطقي للبداية", code: "padding-inline-start: 20px;", description: "تحديد الهامش الداخلي من وجهة نظر اتجاه اللغة (يمين في العربي، يسار في الإنجليزي).", note: "أفضل ممارسة لبناء مواقع ثنائية اللغة (i18n)." },
    { id: 212, category: "logical", title: "البادينج المنطقي للنهاية", code: "padding-inline-end: 20px;", description: "تحديد الهامش الداخلي من نهاية اتجاه السطر.", note: "تغنيك عن كتابة padding-right و padding-left بشكل منفصل." },
    { id: 213, category: "logical", title: "البادينج المنطقي العلوي", code: "padding-block-start: 15px;", description: "الهامش الداخلي من بداية كتلة النص (الأعلى غالباً).", note: "تتغير تلقائياً إذا كان اتجاه الكتابة رأسياً." },
    { id: 214, category: "logical", title: "البادينج المنطقي السفلي", code: "padding-block-end: 15px;", description: "الهامش الداخلي من نهاية كتلة النص.", note: "جزء من نظام 'Logical Properties' الحديث." },
    { id: 215, category: "logical", title: "المارجن المنطقي للبداية", code: "margin-inline-start: auto;", description: "الهامش الخارجي من بداية السطر.", note: "تستخدم لتوسيط العناصر أو دفعها حسب اتجاه اللغة." },
    { id: 216, category: "logical", title: "المارجن المنطقي للنهاية", code: "margin-inline-end: 10px;", description: "الهامش الخارجي من نهاية السطر.", note: "تضمن تناسق المسافات في المواقع المترجمة." },
    { id: 217, category: "logical", title: "المارجن المنطقي العلوي", code: "margin-block-start: 5%;", description: "الهامش الخارجي من بداية الكتلة.", note: "تحل محل margin-top بطريقة منطقية." },
    { id: 218, category: "logical", title: "المارجن المنطقي السفلي", code: "margin-block-end: 2rem;", description: "الهامش الخارجي من نهاية الكتلة.", note: "تسمح بمرونة أكبر في التصاميم الرأسية." },
    { id: 219, category: "logical", title: "عرض الحدود المنطقي للبداية", code: "border-inline-start: 5px solid blue;", description: "وضع حد (Border) في بداية السطر فقط.", note: "رائعة لصنع شريط جانبي ملون للفقرات المهمة." },
    { id: 220, category: "logical", title: "عرض الحدود المنطقي للنهاية", code: "border-inline-end: 1px dashed gray;", description: "وضع حد في نهاية السطر.", note: "تتحرك تلقائياً عند تغيير dir='rtl' إلى ltr." },
    { id: 221, category: "logical", title: "تحديد العرض المنطقي (Inline Size)", code: "inline-size: 100%;", description: "تحديد عرض العنصر بناءً على اتجاه السطر.", note: "بديل كلمة Width في النظام المنطقي." },
    { id: 222, category: "logical", title: "تحديد الارتفاع المنطقي (Block Size)", code: "block-size: 50vh;", description: "تحديد ارتفاع العنصر بناءً على اتجاه الكتلة.", note: "بديل كلمة Height في النظام المنطقي." },
    { id: 223, category: "logical", title: "أقصى عرض منطقي", code: "max-inline-size: 800px;", description: "منع العنصر من التمدد العرضي أكثر من اللازم (منطقياً).", note: "ضرورية جداً لسهولة القراءة في الشاشات العريضة." },
    { id: 224, category: "logical", title: "أقل ارتفاع منطقي", code: "min-block-size: 100px;", description: "ضمان أقل مساحة رأسية ممكنة.", note: "تحافظ على شكل الصناديق حتى لو فرغت من المحتوى." },
    { id: 225, category: "scroll-snap", title: "نوع التقريب (Snap Type)", code: "scroll-snap-type: y mandatory;", description: "إجبار المتصفح على 'لصق' الصفحة عند نقاط معينة أثناء التمرير.", note: "السر وراء صفحات الهبوط (Full Screen Sections) الرائعة." },
    { id: 226, category: "scroll-snap", title: "محاذاة التقريب (Snap Align)", code: "scroll-snap-align: center;", description: "تحديد أي جزء من العنصر يجب أن يلتصق بالنافذة (بداية، وسط، نهاية).", note: "توضع هذه الخاصية على 'الأبناء' داخل الحاوية." },
    { id: 227, category: "scroll-snap", title: "هوامش التقريب (Snap Margin)", code: "scroll-padding: 20px;", description: "ترك مسافة أمان قبل أن يلتصق العنصر بالحافة.", note: "تمنع تداخل المحتوى مع القوائم الثابتة (Fixed Headers)." },
    { id: 228, category: "scroll-snap", title: "إيقاف السكرول (Snap Stop)", code: "scroll-snap-stop: always;", description: "منع المستخدم من 'تجاوز' عدة أقسام عند السحب السريع.", note: "تجبر المستخدم على رؤية كل قسم بالترتيب." },
    { id: 229, category: "scroll-snap", title: "تمرير التقريب السلس", code: "scroll-behavior: smooth;", description: "جعل الانتقال بين الأقسام انزلاقياً بدلاً من القفز المفاجئ.", note: "تحسن تجربة المستخدم بشكل فوري." },
    { id: 230, category: "container", title: "نوع الحاوية (Container Type)", code: "container-type: size;", description: "تحويل أي عنصر إلى 'بيئة مستقلة' يمكن للأبناء التفاعل مع حجمها.", note: "هذا هو مستقبل الـ Responsive Design بدلاً من الميديا كويري." },
    { id: 231, category: "container", title: "اسم الحاوية", code: "container-name: sidebar;", description: "إعطاء اسم للحاوية لاستهدافها بدقة في الكود.", note: "تسمح بوجود عدة حاويات مختلفة في نفس الصفحة." },
    { id: 232, category: "container", title: "وحدة عرض الحاوية (cqw)", code: "font-size: 5cqw;", description: "وحدة قياس تساوي 1% من عرض الحاوية الأب (وليس الشاشة).", note: "تمنحك تحكماً خارقاً في تصميم المكونات (Components)." },
    { id: 233, category: "container", title: "وحدة ارتفاع الحاوية (cqh)", code: "height: 50cqh;", description: "تساوي 1% من ارتفاع الحاوية الأب.", note: "مثالية لتنسيق الصور داخل الصناديPar المتغيرة." },
    { id: 234, category: "container", title: "وحدة القطر الصغير (cqmin)", code: "padding: 2cqmin;", description: "تختار القيمة الأصغر بين cqw و cqh.", note: "تضمن بقاء المسافات آمنة في جميع الأوضاع." },
    { id: 235, category: "container", title: "الاستعلام عن الحاوية (@container)", code: "@container (width > 400px) { ... }", description: "تغيير التنسيق بناءً على مساحة العنصر الأب فقط.", note: "تسمح للمكون بأن يبدو رائعاً سواء وضعته في عمود ضيق أو في الوسط." },
    { id: 236, category: "masking", title: "صورة القناع (Mask Image)", code: "mask-image: url('star.svg');", description: "إخفاء أجزاء من العنصر باستخدام صورة أخرى (شفافية الصورة تحدد ما يظهر).", note: "أقوى من clip-path لأنها تدعم التدرجات والنعومة." },
    { id: 237, category: "masking", title: "وضع القناع (Mask Mode)", code: "mask-mode: alpha;", description: "تحديد هل يتم الاعتماد على الشفافية (Alpha) أم السطوع (Luminance) في القماش.", note: "تمنحك خيارات فنية متقدمة جداً." },
    { id: 238, category: "masking", title: "تكرار القناع (Mask Repeat)", code: "mask-repeat: no-repeat;", description: "التحكم في تكرار صورة القناع فوق العنصر.", note: "تعمل تماماً مثل background-repeat." },
    { id: 239, category: "masking", title: "مكان القناع (Mask Position)", code: "mask-position: center bottom;", description: "تحريك القناع لوضعه في مكان محدد.", note: "تستخدم لعمل أنيميشن 'كشاف الضوء' (Flashlight effect)." },
    { id: 240, category: "masking", title: "حجم القناع (Mask Size)", code: "mask-size: cover;", description: "تحديد حجم صورة القناع لملء العنصر بالكامل.", note: "ضرورية لضمان تغطية القناع للعنصر مهما تغير حجمه." },
    { id: 241, category: "masking", title: "نطاق القناع (Mask Clip)", code: "mask-clip: content-box;", description: "تحديد أين يجب أن ينتهي مفعول القناع (داخل الحدود أم شامل لها).", note: "تعطي دقة متناهية في التصميم الجرافيكي." },
    { id: 242, category: "masking", title: "دمج المقنع (Mask Composite)", code: "mask-composite: add, subtract;", description: "دمج أكثر من قناع فوق بعضهما (جمع، طرح، تقاطع).", note: "تسمح بصنع أشكال هندسية معقدة جداً برمجياً." },
    { id: 243, category: "interactivity", title: "شكل المؤشر المخصص", code: "cursor: url('custom.png'), auto;", description: "تغيير شكل الماوس لصورة مخصصة لموقعك.", note: "يجب دائماً وضع auto كخطة بديلة (Fallback) في حال لم تحمل الصورة." },
    { id: 244, category: "interactivity", title: "مؤشر الانتظار (Wait)", code: "cursor: wait;", description: "إظهار رمز الساعة أو الدائرة الدوارة للمستخدم عند التحميل.", note: "تواصل بصري مهم جداً لإعلام المستخدم أن المعالجة مستمرة." },
    { id: 245, category: "interactivity", title: "مؤشر عدم السماح (Forbidden)", code: "cursor: not-allowed;", description: "إظهار علامة المنع عند الوقوف فوق عنصر معطل.", note: "توضيح فوري للحالات المنطقية (Logic States)." },
    { id: 246, category: "interactivity", title: "مؤشر التكبير (Zoom In)", code: "cursor: zoom-in;", description: "إظهار عدسة مكبرة فوق الصور القابلة للتوسيع.", note: "تلميح ذكي للمستخدم بوجود تفاصيل أكثر." },
    { id: 247, category: "interactivity", title: "مؤشر السحب (Grab)", code: "cursor: grab;", description: "إظهار اليد المفتوحة التي توحي بإمكانية سحب العنصر.", note: "تستخدم في الخرائط ومعارض الصور القابلة للسحب." },
    { id: 248, category: "graphics", title: "قلب الألوان (Invert)", code: "filter: invert(100%);", description: "عكس جميع ألوان العنصر (الأسود يصبح أبيض والعكس).", note: "أسرع وسيلة لصنع 'نسخة سلبية' من الصور أو الأيقونات." },
    { id: 249, category: "graphics", title: "تغيير الصبغة (Hue Rotate)", code: "filter: hue-rotate(90deg);", description: "تدوير جميع ألوان العنصر حول دائرة الألوان.", note: "تسمح بتغيير لون أيقونة واحدة لآلاف الألوان ببرمجة بسيطة." },
    { id: 250, category: "graphics", title: "التشبع اللوني (Saturate)", code: "filter: saturate(500%);", description: "جعل الألوان فائقة السطوع والوضوح أو باهتة.", note: "تستخدم لعمل تأثيرات 'درامية' عند تمرير الماوس." },
    { id: 251, category: "graphics", title: "الضوء (Brightness)", code: "filter: brightness(0.5);", description: "تغميق أو تفتيح العنصر بالكامل.", note: "رائعة لإظهار العناوين بوضوح فوق خلفيات الصور." },
    { id: 252, category: "graphics", title: "التباين (Contrast)", code: "filter: contrast(200%);", description: "زيادة الفرق بين المناطق الغامقة والفاتحة.", note: "تحسن من وضوح العناصر البصرية الضعيفة." },
    { id: 253, category: "animation", title: "الحركة العكسية", code: "animation-direction: reverse;", description: "تشغيل الأنيميشن من النهاية إلى البداية.", note: "توفر عليك إعادة كتابة @keyframes معكوسة." },
    { id: 254, category: "animation", title: "تعليق الحركة (Play State)", code: "animation-play-state: paused;", description: "إيقاف الحركة مؤقتاً عند حدوث فعل معين (مثل Hover).", note: "تفاعل ممتع يعطي إحساساً بالتحكم للمستخدم." },
    { id: 255, category: "typography", title: "توزيع الكلمات (Word Spacing)", code: "word-spacing: 0.5rem;", description: "توسيع المسافات بين الكلمات بانتظام.", note: "تستخدم في التصاميم القائمة على النصوص الكبيرة (Typography heavy)." },
    { id: 256, category: "typography", title: "إزاحة النص (Text Indent)", code: "text-indent: 50px;", description: "إزاحة السطر الأول فقط من الفقرة للداخل.", note: "أسلوب كلاسيكي جداً متبع في طباعة الكتب والمقالات الطويلة." },
    { id: 257, category: "typography", title: "نمط الأرقام (Font Variant Numeric)", code: "font-variant-numeric: tabular-nums;", description: "جعل جميع الأرقام تأخذ نفس العرض (مثل الخط اللاتيني القديم).", note: "ضرورية جداً في الجداول المالية والساعات لتجنب اهتزاز الأرقام." },
    { id: 258, category: "typography", title: "تحويل النص (Text Transform)", code: "text-transform: capitalize;", description: "جعل أول حرف من كل كلمة كبيراً (في اللغات المتأثرة).", note: "تغنيك عن تعديل البيانات القادمة من قاعدة البيانات." },
    { id: 259, category: "typography", title: "منع كسر السطر (White Space)", code: "white-space: nowrap;", description: "إجبار النص على البقاء في سطر واحد مهما كان طويلاً.", note: "تستخدم في القوائم الأفقية وأشرطة الأخبار المتحركة." },
    { id: 260, category: "layout", title: "العزلة السياقية (Isolation)", code: "isolation: isolate;", description: "منع العناصر الداخلية من 'الامتزاج' ببيئة الأب.", note: "تمنع أخطاء z-index المعقدة وتأثيرات الـ Mix Blend Mode." },
    // --- BATCH 6: 261-310 (FORMS, PRINTING, ADVANCED BASICS) ---
    { id: 261, category: "forms", title: "تعديل حجم المستخدم (Resize)", code: "resize: both;", description: "السماح للمستخدم بتغيير حجم العنصر يدوياً بسحب الزاوية.", note: "تعمل فقط إذا كان الـ overflow غير مرئي (hidden/auto)." },
    { id: 262, category: "forms", title: "نمط حقل الكتابة (Appearance)", code: "appearance: none;", description: "إلغاء التنسيق الافتراضي للمتصفح لتصميم حقل من الصفر.", note: "أول خطوة عند بناء (Custom UI Framework)." },
    { id: 263, category: "forms", title: "لون مؤشر الكتابة (Caret Color)", code: "caret-color: red;", description: "تغيير لون الخط العمودي الوامض في حقول الإدخال.", note: "تفصيلة جمالية بسيطة لكنها تعبر عن احترافية التصميم." },
    { id: 264, category: "forms", title: "إزاحة التركيز (Outline Offset)", code: "outline-offset: 5px;", description: "ترك مسافة بين البرواز وبين العنصر عند الضغط عليه (Tab).", note: "تحسن الشكل الجمالي لمؤشرات الوصول (Accessibility)." },
    { id: 265, category: "forms", title: "محدد حقل الخطأ (:invalid)", code: "input:invalid { border-bottom: 2px solid red; }", description: "تنسيق تلقائي للحقول التي تحتوي على بيانات خاطئة (مثل بريد إلكتروني بدون @).", note: "تغذية راجعة حية ومفيدة جداً للمستخدم." },
    { id: 266, category: "forms", title: "محدد الحقل الفارغ (:placeholder-shown)", code: "input:placeholder-shown { opacity: 0.5; }", description: "استهداف العنصر فقط إذا كان النص التوضيحي ظاهراً (أي لم يكتب فيه المستخدم بعد).", note: "تستخدم لصنع تأثيرات (Floating Labels) المذهلة." },
    { id: 267, category: "forms", title: "محدد الهدف المباشر (:focus-within)", code: "form:focus-within { background: lightyellow; }", description: "تغيير شكل الأب بمجرد أن يلمس المستخدم أي عنصر داخله.", note: "رائعة لتمييز منطقة النموذج التي يتم ملؤها حالياً." },
    { id: 268, category: "printing", title: "اتجاه الورقة", code: "@page { size: landscape; }", description: "إخبار الطابعة بجعل الطباعة عرضية بدلاً من طولية.", note: "تستخدم في طباعة الشهادات والجداول العريضة جداً." },
    { id: 269, category: "printing", title: "إخفاء العناصر عند الطباعة", code: "@media print { .nav { display: none; } }", description: "إزالة القوائم والأزرار التي لا فائدة منها في الورق المطبوع.", note: "توفر حبراً وتجعل التقرير يبدو أكثر رسمية." },
    { id: 270, category: "printing", title: "نهاية الصفحة الإجبارية", code: "page-break-after: always;", description: "إجبار الطابعة على بدء ورقة جديدة مباشرة بعد هذا العنصر.", note: "مهمة جداً في التقارير التي تحتوي على فصول منفصلة." },
    { id: 271, category: "printing", title: "بداية الصفحة الإجبارية", code: "page-break-before: always;", description: "بدء ورقة جديدة قبل العنصر مباشرة.", note: "تضمن أن العناوين الرئيسية تبدأ دائماً من قمة الصفحة المطبوعة." },
    { id: 272, category: "printing", title: "اليتامى والأرامل (Orphans)", code: "orphans: 3;", description: "تحديد أقل عدد من الأسطر التي يمكن تركها في نهاية الصفحة قبل الانتقال لصفحة جديدة.", note: "تحسن من مظهر النصوص الطويلة المطبوعة وتمنع التشتت." },
    { id: 273, category: "printing", title: "الأسطر العلوية (Widows)", code: "widows: 3;", description: "أقل عدد من الأسطر التي يجب أن تبدأ بها الصفحة الجديدة من فقرة سابقة.", note: "تمنع ظهور كلمة واحدة يتيمة في قمة الصفحة الجديدة." },
    { id: 274, category: "basics", title: "القيمة الموروثة (Inherit)", code: "color: inherit;", description: "إجبار العنصر على أخذ نفس قيمة الأب بالضبط حتى لو لم يكن ذلك افتراضياً.", note: "تستخدم بكثرة مع الروابط <a> لجعل لونها مثل النص المحيط." },
    { id: 275, category: "basics", title: "القيمة الأولية (Initial)", code: "display: initial;", description: "إعادة الخاصية إلى قيمتها الأصلية في محرك المتصفح قبل تدخل أي أكواد.", note: "تستخدم لتصفير (Reset) الخصائص التي تم عبث بها في ملفات أخرى." },
    { id: 276, category: "basics", title: "إلغاء التنسيق (Unset)", code: "margin: unset;", description: "مزيج بين inherit و initial، تختار الأنسب برمجياً.", note: "أذكى طريقة لإعادة العنصر لحالته الطبيعية." },
    { id: 277, category: "basics", title: "العودة للذكاء (Revert)", code: "font-family: revert;", description: "العودة لقيمة المتصفح الافتراضية (User Agent Stylsheet) فقط.", note: "مفيدة جداً لإلغاء تأثيرات (CSS Reset) العالمية." },
    { id: 278, category: "math", title: "أصغر قيمة (min)", code: "width: min(50%, 400px);", description: "اختيار أصغر قيمة من بين عدة خيارات معطاة.", note: "بديل عبقري لـ max-width في أكواد سطر واحد." },
    { id: 279, category: "math", title: "أكبر قيمة (max)", code: "height: max(20vh, 150px);", description: "اختيار أكبر قيمة من بين الخيارات المتاحة.", note: "بديل رائع لـ min-height وتضمن عدم اختفاء المحتوى." },
    { id: 280, category: "math", title: "النطاق الآمن (clamp)", code: "font-size: clamp(1rem, 5vw, 2.5rem);", description: "تحديد قيمة دنيا وقيمة طافية وقيمة قصوى في سطر واحد.", note: "أفضل طريقة لصنع (Responsive Typography) نصوص تتجاوب مع الشاشة بذكاء." },
    { id: 281, category: "math", title: "حساب المثلثات (sin)", code: "transform: translateY(calc(100px * sin(45deg)));", description: "حساب جيب الزاوية برمجياً لصنع حركات دائرية معقدة.", note: "كانت تتطلب جافاسكربت في السابق، الآن تعمل في CSS مباشرة!" },
    { id: 282, category: "math", title: "الأس (pow)", code: "font-size: calc(1rem * pow(1.2, 2));", description: "حساب الأرقام المرفوعة لأس معين.", note: "تستخدم في بناء أنظمة (Modular Scale) لتصميم خطوط متناسقة." },
    { id: 283, category: "math", title: "الجذر التربيعي (sqrt)", code: "width: calc(sqrt(16) * 10px);", description: "حساب الجذر التربيعي للأرقام داخل calc.", note: "مفيدة في الحسابات الهندسية لشبكات الـ Grid المعقدة." },
    { id: 284, category: "math", title: "المسافة الوترية (hypot)", code: "width: calc(hypot(30px, 40px));", description: "حساب طول الوتر في المثلث قائم الزاوية.", note: "تسهل حساب المسافات المائلة في رسومات CSS." },
    { id: 285, category: "layout", title: "توزيع الأعمدة المرن", code: "column-count: 3;", description: "تقسيم النص إلى 3 أعمدة متساوية مثل الجرائد.", note: "طريقة سريعة جداً لتحسين مظهر المقالات الطويلة." },
    { id: 286, category: "layout", title: "المسافة بين الأعمدة", code: "column-gap: 2rem;", description: "تحديد الفراغ بين أعمدة النص المقسمة.", note: "تمنع تداخل الكلمات من الأعمدة المختلفة." },
    { id: 287, category: "layout", title: "فاصل الأعمدة الملون", code: "column-rule: 2px solid indigo;", description: "رسم خط فاصل (جمالياً) بين الأعمدة.", note: "تعمل تماماً مثل border ولكن مكانها بين الأعمدة." },
    { id: 288, category: "layout", title: "توازن الأسطر (Orphans/Widows)", code: "orphans: 2; widows: 2;", description: "منع بقاء أسطر وحيدة في قمة أو قاع العمود.", note: "تحسن المظهر العام للنصوص المقسمة لأعمدة." },
    { id: 289, category: "layout", title: "تجنب كسر الأعمدة", code: "break-inside: avoid-column;", description: "منع انقسام العنصر (مثل صورة أو عنوان) بين عمودين.", note: "تضمن تماسك المحتوى البصري المهم." },
    { id: 290, category: "boxmodel", title: "النسبة الثابتة (Aspect Ratio)", code: "aspect-ratio: 16 / 9;", description: "إجبار العنصر على الاحتفاظ بنسبة عرض إلى ارتفاع محددة.", note: "المعيار الذهبي لتنسيق الفيديوهات والصور في التصاميم الحديثة." },
    { id: 291, category: "boxmodel", title: "الاحتواء الخفي", code: "overflow: clip;", description: "إخفاء الزيادات مع منع التمرير البرمجي أيضاً.", note: "أكثر أماناً من hidden عند الرغبة في 'قص' العنصر نهائياً." },
    { id: 292, category: "boxmodel", title: "تلوين حواف الصندوق", code: "outline: 3px double royalblue;", description: "رسم برواز إضافي خارج الحدود الأصلية لا يأخذ مساحة في التصميم الرسمي.", note: "رائعة لعمل تأثيرات (Focus) بدون تغيير مكان العناصر المجاورة." },
    { id: 293, category: "graphics", title: "العزل البصري (Mix Blend)", code: "mix-blend-mode: screen;", description: "دمج ألوان العنصر مع ألوان العناصر التي خلفه مباشرة.", note: "السر وراء دمج النصوص مع الصور بطريقة احترافية تشبه الفوتوشوب." },
    { id: 294, category: "graphics", title: "تنعيم الحواف (Backdrop Blur)", code: "backdrop-filter: blur(8px);", description: "تغبيش ما يظهر 'خلف' العنصر وليس العنصر نفسه.", note: "الخاصية الأساسية لصنع تأثير (Glassmorphism) الزجاجي الشهير." },
    { id: 295, category: "graphics", title: "لون الكروم (Backdrop Grayscale)", code: "backdrop-filter: grayscale(1);", description: "تحويل ما خلف العنصر إلى أبيض وأسود.", note: "تستخدم بكثرة في قوائم المواقع الفخمة لإبراز المحتوى." },
    { id: 296, category: "graphics", title: "مشهد الكائن (Object Fit: Contain)", code: "object-fit: contain;", description: "إجبار الصورة على الظهور بالكامل داخل الحاوية بدون قص.", note: "تحافظ على أبعاد الصور الأصلية مهما كان حجم المربع." },
    { id: 297, category: "graphics", title: "مشهد الكائن (Object Fit: Cover)", code: "object-fit: cover;", description: "توسيع الصورة لملء الفراغ بالكامل مع قص الزوائد.", note: "رائعة لصنع صور الخلفية (Featured Images)." },
    { id: 298, category: "accessibility", title: "محاذاة النص المنطقية", code: "text-align: start;", description: "محاذاة النص لليمين في العربي ولليسار في الإنجليزي تلقائياً.", note: "أفضل من left/right للمواقع التي تدعم لغات متعددة." },
    { id: 299, category: "accessibility", title: "المحدد الخفي (:focus-visible)", code: "button:focus-visible { outline: 3px solid blue; }", description: "إظهار برواز التركيز (Outline) فقط لمستخدمي لوحة المفاتيح وليس للماوس.", note: "توازن رائع بين الجمالية وبين احتياجات ذوي الإعاقة." },
    { id: 300, category: "accessibility", title: "وضع الألوان العالية", code: "@media (forced-colors: active) { ... }", description: "تطبيق تنسيقات خاصة عند تفعيل وضع (التباين العالي) في النظام.", note: "تضمن أن موقعك مقروء للجميع تحت أي ظرف للجهاز." },
    { id: 301, category: "colors", title: "شفافية الألوان النسبية", code: "color: rgb(from blue r g b / 0.5);", description: "أخذ لون موجود وتعديل شفافية جزء منه برمجياً.", note: "تقنية حديثة جداً تجعل إدارة الثيمات (Themes) سهلة للغاية." },
    { id: 302, category: "colors", title: "دمج الألوان (color-mix)", code: "background: color-mix(in srgb, red, white 50%);", description: "خلط لونين مع بعضهما بنسب محددة داخل المتصفح مباشرة.", note: "تغنيك عن برامج التصميم عند بناء درجات لونية متناسقة." },
    { id: 303, category: "colors", title: "فضاء OKLCH الحديث", code: "color: oklch(70% 0.1 200);", description: "أفضل نظام ألوان رقمي حتى الآن، يضمن تساوي السطوع في جميع الدرجات.", note: "المعيار المستقبلي لتصميم الواجهات المريحة للعين." },
    { id: 304, category: "performance", title: "أولوية التحميل", code: "fetchpriority: high;", description: "إخبار المتصفح بأن هذا المصدر (صورة/سكريبت) مهم جداً ويجب تحميله أولاً.", note: "توضع في HTML ولكن لها انعكاسات قوية على أداء الـ CSS." },
    { id: 305, category: "performance", title: "عرض المحتوى المستقبلي", code: "content-visibility: auto;", description: "تأجيل رسم العناصر البعيدة عن الشاشة حتى يقترب المستخدم منها.", note: "أكثر خاصية تزيد من سرعة التصفح في الصفحات الطويلة جداً." },
    { id: 306, category: "interactivity", title: "سلوك السكرول الزائد", code: "overscroll-behavior: contain;", description: "منع الصفحة من 'الاهتزاز' أو تمرير الأب عند الوصول لنهاية تمرير الابن.", note: "ضرورية جداً للقوائم الجانبية (Sidebars) والـ Modals." },
    { id: 307, category: "interactivity", title: "التحكم في اللمس (Touch Action)", code: "touch-action: pan-y pinch-zoom;", description: "تحديد أي حركات ميكانيكية مسموح بها للمستخدم في شاشات اللمس.", note: "تستخدم في بناء الخرائط والألعاب لمنع تداخل حركة المتصفح." },
    { id: 308, category: "interactivity", title: "إدارة الأحداث (Pointer Events)", code: "pointer-events: none;", description: "جعل العنصر 'شفافاً' تجاه ضغطات الماوس (الضغط يمر لما خلفه).", note: "رائعة لصنع طبقات زجاجية فوق الأزرار بدون تعطيلها." },
    { id: 309, category: "responsive", title: "نسبة العرض للشاشة (Aspect Ratio MQ)", code: "@media (aspect-ratio: 1/1) { ... }", description: "تطبيق أكواد خاصة فقط إذا كانت الشاشة مربعة (مثل الساعات الذكية).", note: "تخصص التصميم للأجهزة غير التقليدية." },
    { id: 310, category: "responsive", title: "تحسين العرض المستقبلي", code: "contain-intrinsic-size: 1000px;", description: "حجز مساحة للعنصر قبل أن يتم تحميل محتواه لمنع اهتزاز الصفحة.", note: "تستخدم مع content-visibility لتحقيق أفضل استقرار بصري (LCP)." },
    // --- BATCH 7: 311-360 (TYPOGRAPHY, BORDERS, LOGICAL SHORTHANDS) ---
    { id: 311, category: "typography", title: "توزيع النص المحدث (Text Wrap: Nowrap)", code: "text-wrap: nowrap;", description: "منع النص من الانكسار لسطر جديد بشكل صريح.", note: "بديل عصري لـ white-space: nowrap." },
    { id: 312, category: "typography", title: "توازن الأسطر الذكي", code: "text-wrap: balance;", description: "توزيع الكلمات بالتساوي على السطور لمنع وجود كلمات وحيدة في النهاية.", note: "مثالية للعناوين الرئيسية (Headlines)." },
    { id: 313, category: "typography", title: "التغليف الجمالي (Pretty Wrap)", code: "text-wrap: pretty;", description: "خوارزمية سريعة تمنع وجود 'اليتامى' في نهاية الفقرات.", note: "تحسن مظهر المقالات الطويلة بشكل آلي." },
    { id: 314, category: "typography", title: "إعدادات الخط المتغيرة", code: "font-variation-settings: 'wght' 700, 'ital' 1;", description: "الوصول المباشر لمحاور الخطوط المتغيرة (Variable Fonts).", note: "تسمح بتحكم غير محدود في وزن وميل الخط." },
    { id: 315, category: "colors", title: "لوحة ألوان الخط (Font Palette)", code: "font-palette: --my-rainbow;", description: "استخدام لوحات ألوان محددة داخل خطوط الـ Color Fonts (مثل الإيموجي).", note: "تسمح بتغيير ألوان أيقونات الخطوط برمجياً." },
    { id: 316, category: "colors", title: "قاعدة الألوان (Base Palette)", code: "base-palette: 1;", description: "اختيار لوحة الألوان الافتراضية من ملف الخط.", note: "تستخدم مع @font-palette-values." },
    { id: 317, category: "colors", title: "تخطي الألوان (Override Colors)", code: "override-colors: 0 red, 1 blue;", description: "استبدال ألوان معينة داخل لوحة الخط بألوان مخصصة.", note: "تمنحك سيطرة كاملة على شكل الرموز التعبيرية." },
    { id: 318, category: "typography", title: "ميزات الخط التقنية", code: "font-feature-settings: 'smcp' on;", description: "تفعيل ميزات الـ OpenType البرمجية داخل الخط.", note: "مثل تحويل الحروف الإنجليزية الصغيرة إلى Small Caps." },
    { id: 319, category: "typography", title: "تباعد الأحرف الطبيعي", code: "letter-spacing: normal;", description: "إعادة المسافة بين الحروف لقيمتها الأصلية.", note: "تستخدم لإلغاء التباعد المفرط في بعض التصاميم." },
    { id: 320, category: "typography", title: "علامات الترقيم المعلقة", code: "hanging-punctuation: first last;", description: "جعل علامات التنصيص تظهر خارج حدود الفقرة.", note: "تعطي طابعاً احترافياً جداً لتنسيق الاقتباسات." },
    { id: 321, category: "typography", title: "لف النص القسري (Overflow Wrap)", code: "overflow-wrap: anywhere;", description: "إجبار الكلمات الطويلة جداً على الانكسار في أي نقطة لمنع خروجها عن الإطار.", note: "ضرورية جداً في التعليقات وأسماء المستخدمين الطويلة." },
    { id: 322, category: "typography", title: "كسر الكلمات (Word Break)", code: "word-break: break-all;", description: "كسر الكلمة عند الوصول لنهاية السطر مهما كان نوعها.", note: "مفيدة في العناوين التي تظهر على شاشات الموبايل الضيقة." },
    { id: 323, category: "typography", title: "قواعد كسر الأسطر", code: "line-break: strict;", description: "تحديد مدى صرامة قواعد كسر الأسطر (خاصة في اللغات الآسيوية).", note: "تضمن ظهور النص بشكل صحيح لغوياً." },
    { id: 324, category: "typography", title: "شقة الوصل (Hyphenate)", code: "hyphenate-character: '-';", description: "تحديد الشكل الذي يظهر عند انكسار كلمة في نهاية السطر.", note: "يمكن استخدام أشكال فنية أخرى بدلاً من الشرطة العادية." },
    { id: 325, category: "typography", title: "الوصل التلقائي (Hyphens)", code: "hyphens: auto;", description: "السماح للمتصفح بوضع شرطة الوصل تلقائياً عند الضرورة.", note: "تعمل بناءً على قاموس اللغة المستخدم (lang attribute)." },
    { id: 326, category: "typography", title: "مكان الياقوت (Ruby Position)", code: "ruby-position: over;", description: "تحديد مكان نصوص الشرح الصغيرة فوق الحروف.", note: "تستخدم في اللغات الشرقية والتعليمية." },
    { id: 327, category: "typography", title: "محاذاة الياقوت (Ruby Align)", code: "ruby-align: space-around;", description: "توزيع نصوص الشرح بالتساوي فوق الكلمة المشروحة.", note: "تحسن من مظهر الكتب التعليمية الإلكترونية." },
    { id: 328, category: "boxmodel", title: "نموذج الصندوق الكلاسيكي", code: "box-sizing: content-box;", description: "جعل العرض والارتفاع يشملان المحتوى فقط بدون الحواف.", note: "هو الوضع الافتراضي القديم للمتصفحات." },
    { id: 329, category: "forms", title: "نمط الإطار الخارجي (Outline Style)", code: "outline-style: dashed;", description: "تغيير شكل البرواز الخارجي (متقطع، منقط، صلب).", note: "لا يؤثر على أبعاد العنصر (Layout-safe)." },
    { id: 330, category: "forms", title: "سمك الإطار الخارجي", code: "outline-width: 5px;", description: "تحديد ثخانة البرواز الخارجي.", note: "يبرز العناصر النشطة بوضوح تام." },
    { id: 331, category: "boxmodel", title: "مصدر حدود الصورة", code: "border-image-source: url('border.png');", description: "استخدام صورة بدلاً من الألوان لرسم حدود العنصر.", note: "تفتح آفاقاً لا نهائية لتصميم براويز فنية." },
    { id: 332, category: "boxmodel", title: "تقطيع حدود الصورة", code: "border-image-slice: 30%;", description: "تحديد كيفية تقسيم صورة الحدود إلى 9 مناطق.", note: "أهم خاصية لضمان عدم تشوه صورة الإطار عند التمدد." },
    { id: 333, category: "boxmodel", title: "عرض حدود الصورة", code: "border-image-width: 10px;", description: "تحديد سمك الإطار المعتمد على الصورة.", note: "يمكن أن تختلف عن border-width الأصلية." },
    { id: 334, category: "boxmodel", title: "إزاحة حدود الصورة", code: "border-image-outset: 5px;", description: "دفع صورة الإطار بعيداً عن حدود العنصر للخارج.", note: "تجعل الإطار يبدو وكأنه يطفو حول الصندوق." },
    { id: 335, category: "boxmodel", title: "تكرار حدود الصورة", code: "border-image-repeat: round;", description: "تحديد هل يتم تكرار الصورة أم تمديدها لملء الحدود.", note: "خيار round يضمن عدم قص الصورة في الزوايا." },
    { id: 336, category: "logical", title: "لون الحدود الجانبية المنطقي", code: "border-inline-color: red blue;", description: "تلوين الحدود في بداية ونهاية السطر (منطقياً).", note: "تغنيك عن كتابة border-right-color و border-left-color." },
    { id: 337, category: "logical", title: "نمط الحدود الجانبية المنطقي", code: "border-inline-style: solid dashed;", description: "تحديد شكل الحدود الجانبية بناءً على اتجاه اللغة.", note: "تسمح بتصميمات متناظرة ذكية." },
    { id: 338, category: "logical", title: "لون الحدود الرأسية المنطقي", code: "border-block-color: green;", description: "تلوين الحدود العليا والسفلى معاً.", note: "مفيدة لتنسيق الفقرات البرمجية." },
    { id: 339, category: "logical", title: "نمط الحدود الرأسية المنطقي", code: "border-block-style: double;", description: "تحديد شكل الحدود العلوية والسفلية.", note: "تعطي أناقة فورية للجداول والتقارير." },
    { id: 340, category: "logical", title: "سمك الحدود الرأسية المنطقي", code: "border-block-width: 1rem;", description: "تحديد ثخانة الحدود العلوية والسفلية.", note: "تضمن تناسق المسافات الرأسية." },
    { id: 341, category: "boxmodel", title: "زاوية البداية العليا", code: "border-start-start-radius: 20px;", description: "تحديد انحناء الزاوية التي تبدأ منها الكتابة (أعلى يمين في العربي).", note: "تتغير تلقائياً بتغير اتجاه الصفحة." },
    { id: 342, category: "boxmodel", title: "زاوية النهاية العليا", code: "border-start-end-radius: 20px;", description: "تحديد انحناء الزاوية التي ينتهي عندها السطر الأول.", note: "تضمن انحناءً منطقياً دائماً." },
    { id: 343, category: "boxmodel", title: "زاوية البداية السفلى", code: "border-end-start-radius: 20px;", description: "انحناء الزاوية في بداية آخر سطر.", note: "جزء من نظام المنطق البصري الحديث." },
    { id: 344, category: "boxmodel", title: "زاوية النهاية السفلى", code: "border-end-end-radius: 20px;", description: "انحناء الزاوية في نهاية آخر سطر.", note: "تكمل شكل الصندوق المنحني بذكاء." },
    { id: 345, category: "logical", title: "الهامش الخارجي المنطقي (Shorthand)", code: "margin-inline: auto;", description: "تحديد الهوامش الجانبية معاً في سطر واحد.", note: "أشهر كود لتوسيط العناصر 'Block' في التصاميم الحديثة." },
    { id: 346, category: "logical", title: "الهامش الرأسي المنطقي (Shorthand)", code: "margin-block: 2rem;", description: "تحديد الهامش العلوي والسفلي معاً.", note: "تمنع تداخل الهوامش بطريقة منظمة." },
    { id: 347, category: "logical", title: "الهامش الداخلي المنطقي (Shorthand)", code: "padding-inline: 15px;", description: "تحديد البادينج الجانبي دفعة واحدة.", note: "تحافظ على تباعد النص عن الحواف في العربي والإنجليزي." },
    { id: 348, category: "logical", title: "الهامش الداخلي الرأسي (Shorthand)", code: "padding-block: 10px;", description: "تحديد البادينج العلوي والسفلي.", note: "تسهل بناء الأزرار والقوائم." },
    { id: 349, category: "logical", title: "الإزاحة المنطقية (Inset-inline)", code: "inset-inline: 0;", description: "تحديد مكاني right و left بصيغة منطقية.", note: "مفيدة جداً مع position: absolute لملء العرض بالكامل." },
    { id: 350, category: "logical", title: "الإزاحة الرأسية (Inset-block)", code: "inset-block: 10px;", description: "تحديد مكاني top و bottom.", note: "تتحكم في تموضع العنصر رأسياً بمرونة." },
    { id: 351, category: "position", title: "التثبيت اللزج (Sticky)", code: "position: sticky; top: 0;", description: "جعل العنصر يتحرك مع السكرول ثم يتوقف عند حافة معينة.", note: "أفضل وسيلة لصنع (Sticky Headers) جذابة." },
    { id: 352, category: "position", title: "إحداثيات التموضع", code: "top: 20px; left: 50%;", description: "تحديد مكان العنصر بالضبط بالنسبة لأقرب أب متموضع.", note: "تستخدم مع absolute و relative و fixed." },
    { id: 353, category: "position", title: "الترتيب التلقائي (Z-index)", code: "z-index: auto;", description: "ترك المتصفح يقرر ترتيب العناصر حسب ظهورها في الـ DOM.", note: "تستخدم لتصفير الترتيب اليدوي." },
    { id: 354, category: "layout", title: "تنظيف التعويم (Clear)", code: "clear: both;", description: "منع العناصر من الالتفاف حول العناصر المعومة (Floated elements).", note: "تستخدم لمحاذاة العناصر تحت بعضها بعد استخدام float." },
    { id: 355, category: "layout", title: "التعويم المنطقي", code: "float: inline-start;", description: "دفع العنصر للبداية (يمين في العربي) مع السماح للنص بالالتفاف حوله.", note: "بديل ذكي لـ float: right/left." },
    { id: 356, category: "layout", title: "المحاذاة الرأسية للنصوص", code: "vertical-align: middle;", description: "محاذاة العناصر الداخلية (inline) مع بعضها رأسياً.", note: "مهمة جداً لمحاذاة الأيقونات مع النصوص." },
    { id: 357, category: "graphics", title: "شفافية العنصر (Opacity)", code: "opacity: 0.5;", description: "تحديد شفافية العنصر بالكامل بما فيه من نصوص وصور.", note: "تختلف عن شفافية الألوان لأنها تؤثر على الأبناء أيضاً." },
    { id: 358, category: "layout", title: "الانهيار الهيكلي (Visibility)", code: "visibility: collapse;", description: "إخفاء صفوف الجداول مع الحفاظ على مساحتها المحجوزة.", note: "تستخدم غالياً في برمجة الجداول الديناميكية." },
    { id: 359, category: "graphics", title: "القص القديم (Clip)", code: "clip: rect(0, 50px, 50px, 0);", description: "طريقة قديمة جداً لقص العناصر (تجاوزتها clip-path).", note: "لا تعمل إلا مع العناصر المتموضعة absolute." },
    { id: 360, category: "interactivity", title: "مؤشر الهدف (Crosshair)", code: "cursor: crosshair;", description: "تغيير شكل الماوس لعلامة زائد (+).", note: "تستخدم في أدوات الرسم أو تحديد الصور أونلاين." },
    // --- BATCH 8: 361-410 (TRANSITIONS, TRANSFORMS, FLEX/GRID DEEP DIVE) ---
    { id: 361, category: "animation", title: "خاصية الانتقال (Transition Property)", code: "transition-property: transform, opacity;", description: "تحديد الخصائص التي سيتم تطبيق حركة ناعمة عليها.", note: "بدل استخدام all، حدد الخصائص بدقة لتحسين الأداء." },
    { id: 362, category: "animation", title: "مدة الانتقال", code: "transition-duration: 0.3s;", description: "تحديد الوقت الذي تستغرقه الحركة للوصول لنهايتها.", note: "الوقت المثالي لتفاعلات الويب هو بين 0.2 و 0.5 ثانية." },
    { id: 363, category: "animation", title: "منحنى التوقيت (Timing Function)", code: "transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);", description: "التحكم في سرعة الحركة في بدايتها ونهايتها.", note: "يمكنك محاكاة حركات الفيزياء الحقيقية (الارتداد) باستخدام cubic-bezier." },
    { id: 364, category: "animation", title: "تأخير الحركة (Transition Delay)", code: "transition-delay: 0.1s;", description: "انتظار وقت محدد قبل بدء الحركة.", note: "تستخدم لعمل أنيميشن متسلسل (Staggered Animation) للقوائم." },
    { id: 365, category: "animation", title: "المنظور ثلاثي الأبعاد", code: "perspective: 1000px;", description: "إعطاء عمق للعناصر الثلاثية الأبعاد.", note: "كلما صغر الرقم، زاد 'قرب' الكاميرا وزاد تأثير التشوه البصري." },
    { id: 366, category: "animation", title: "مركز المنظور", code: "perspective-origin: center top;", description: "تحديد النقطة التي ينظر منها المستخدم للعنصر 3D.", note: "تغير زاوية الرؤية للمشهد كاملاً." },
    { id: 367, category: "animation", title: "نمط التحويل (Transform Style)", code: "transform-style: preserve-3d;", description: "السماح للعناصر الأبناء بالاحتفاظ بمكانها في الفراغ الثلاثي الأبعاد.", note: "ضرورية جداً لبناء (3D Cubes) أو كائنات معقدة." },
    { id: 368, category: "animation", title: "رؤية الوجه الخلفي", code: "backface-visibility: hidden;", description: "إخفاء العنصر عندما يلتف ويصبح ظهره للمستخدم.", note: "أساسية لصنع تأثير قلب البطاقات (Card Flip)." },
    { id: 369, category: "flexbox", title: "تجميع الفليكس (Flex Flow)", code: "flex-flow: row wrap;", description: "اختصار لخصائص flex-direction و flex-wrap في سطر واحد.", note: "أسرع كود لضبط اتجاه العناصر وقابليتها للالتفاف." },
    { id: 370, category: "flexbox", title: "عامل النمو (Flex Grow)", code: "flex-grow: 2;", description: "تحديد قدرة العنصر على التمدد لملء الفراغ المتبقي.", note: "العنصر ذو الرقم الأكبر سيأخذ مساحة أكبر من جيرانه." },
    { id: 371, category: "flexbox", title: "عامل الانكماش (Flex Shrink)", code: "flex-shrink: 0;", description: "منع العنصر من الانكماش حتى لو ضاقت المساحة.", note: "رقم 0 يعني 'حافظ على حجسي المكتسب مهما حدث'." },
    { id: 372, category: "flexbox", title: "الأساس المطور (Flex Basis)", code: "flex-basis: content;", description: "تحديد حجم العنصر بناءً على المحتوى الداخلي قبل توزيع المساحات.", note: "أذكى من استخدام قيم ثابتة بالبكسل." },
    { id: 373, category: "grid", title: "تسمية مناطق الشبكة", code: "grid-template-areas: 'header header' 'sidebar main' 'footer footer';", description: "رسم خريطة بصرية لتخطيط الموقع باستخدام الأسماء.", note: "تجعل بناء Layout المواقع الضخمة سهلاً جداً ومقروءاً." },
    { id: 374, category: "grid", title: "تخصيص المنطقة (Grid Area)", code: "grid-area: header;", description: "وضع العنصر داخل منطقة مسمى مسبقاً في الشبكة.", note: "تسمح بنقل العنصر من مكان لآخر بتغيير كلمة واحدة فقط." },
    { id: 375, category: "grid", title: "بداية السطر (Grid Row Start)", code: "grid-row-start: 2;", description: "تحديد من أي خط أفقي سيبدأ العنصر.", note: "تعمل بنظام الإحداثيات الرقمية للشبكة." },
    { id: 376, category: "grid", title: "نهاية السطر (Grid Row End)", code: "grid-row-end: span 3;", description: "جعل العنصر يمتد عبر عدد معين من الصفوف.", note: "كلمة span تعني 'احتل هذه المساحة'." },
    { id: 377, category: "grid", title: "المحاذاة الذاتية (Place Self)", code: "place-self: center stretch;", description: "توسيط العنصر داخل خليته الخاصة في الشبكة.", note: "تجمع بين align-self و justify-self." },
    { id: 378, category: "grid", title: "الشبكة الضمنية (Grid Auto Rows)", code: "grid-auto-rows: 100px;", description: "تحديد ارتفاع الصفوف التي يتم إنشاؤها تلقائياً للمحتوى الزائد.", note: "تضمن تناسق الارتفاعات حتى لو لم تكن محددة مسبقاً." },
    { id: 379, category: "typography", title: "سمك خط التزيين", code: "text-decoration-thickness: 3px;", description: "تحديد ثخانة الخط الذي تحت النص.", note: "لمسة عصرية تجعل الروابط تبدو أكثر 'ثقلاً' ووضوحاً." },
    { id: 380, category: "typography", title: "مكان التسطير", code: "text-underline-position: under;", description: "إجبار الخط على الظهور تحت الأحرف النازلة (Descenders) تماماً.", note: "تحسن من جمالية النصوص العربية لأنها تمنع تقاطع الخط مع النقاط." },
    { id: 381, category: "typography", title: "تخطي الحبر (Skip Ink)", code: "text-decoration-skip-ink: auto;", description: "جعل خط التسطير يتقطع تلقائياً عند المرور فوق نقاط الحروف.", note: "معيار جمالي حديث مفعل افتراضياً في معظم المتصفحات." },
    { id: 382, category: "typography", title: "مسافة التزيين (Offset)", code: "text-underline-offset: 10px;", description: "إبعاد الخط عن الكلمة بمسافة محددة.", note: "رائعة لصنع تأثيرات Hover فنية للروابط." },
    { id: 383, category: "colors", title: "تناغم نظام الألوان", code: "color-scheme: light dark;", description: "إعلام المتصفح بأن الموقع يدعم الوضعين لتبديل ألوان النماذج (Forms) تلقائياً.", note: "تجعل خلفية الصفحة سوداء والنصوص بيضاء 'مجاناً' بمجرد كتابتها." },
    { id: 384, category: "colors", title: "تعديل ألوان الطباعة", code: "print-color-adjust: exact;", description: "إجبار الطابعة على طباعة الخلفيات الملونة والظلال بدقة.", note: "تستخدم في فواتير المواقع والتقارير المالية الرسمية." },
    { id: 385, category: "scrolling", title: "سلوك السكرول اللحظي", code: "scroll-behavior: auto;", description: "القفز للمكان المطلوب فوراً بدون حركة انزلاقية.", note: "تستخدم أحياناً لزيادة سرعة التصفح في المواقع التقنية." },
    { id: 386, category: "scrolling", title: "حافة السكرول (Scroll Margin)", code: "scroll-margin-top: 80px;", description: "ترك مسافة أمان عند الضغط على رابط داخلي (Anchor Tag).", note: "تحل مشكلة اختفاء العناوين خلف الـ (Fixed Navbar)." },
    { id: 387, category: "scrolling", title: "إيقاف السكرول (Scroll Snap Type)", code: "scroll-snap-type: both proximity;", description: "جعل الصفحة 'تحاول' الالتصاق بأقرب عنصر عند التوقف.", note: "أقل صرامة من mandatory وتوفر تجربة تمرير طبيعية." },
    { id: 388, category: "responsive", title: "تحسين جودة الأداء (Performance)", code: "will-change: transform, opacity;", description: "إخبار المتصفح بأن هذا العنصر سيتحرك قريباً ليقوم بتجهيز المعالج الرسومي (GPU).", note: "استخدمها بحكمة فقط للعناصر التي تتحرك دائماً، وإلا ستبطئ الجهاز." },
    { id: 389, category: "performance", title: "احتواء النطاق (Contain)", code: "contain: strict;", description: "عزل العنصر تماماً عن بقية الصفحة لتحسين سرعة الرسم.", note: "تخبر المتصفح: 'لا تقلق بشأن ما يحدث هنا، لن يؤثر على الخارج'." },
    { id: 390, category: "printing", title: "وجه الورقة (Break Before)", code: "break-before: recto;", description: "إجبار الفصل الجديد على البدء من صفحة يمنى (في الكتب المطبوعة).", note: "تستخدم في تنسيق ملفات PDF الفاخرة." },
    { id: 391, category: "printing", title: "توزيع الأسطر (Widows)", code: "widows: 2;", description: "أقل عدد من الأسطر التي يجب أن تظهر في بداية الصفحة التالية.", note: "تمنع ظهور كلمة واحدة يتيمة فوق الصفحة الجديدة." },
    { id: 392, category: "printing", title: "بقايا الأسطر (Orphans)", code: "orphans: 2;", description: "أقل عدد من الأسطر التي يجب تركها في نهاية الصفحة قبل الانتقال للجديدة.", note: "تحافظ على تماسك الفقرات المطبوعة بصرياً." },
    { id: 393, category: "graphics", title: "تكرار الصورة المطور", code: "background-repeat: round;", description: "تكرار الصورة وضبط حجمها لضمان عدم قص أي جزء منها في الحواف.", note: "تضمن ظهور صور الأنماط (Patterns) بشكل مثالي دائماً." },
    { id: 394, category: "graphics", title: "مزج الصور (Background Blend)", code: "background-blend-mode: luminosity;", description: "دمج صورتين فوق بعضهما بتأثيرات إضاءة متطورة.", note: "تسمح بصنع تدرجات لونية (Gradients) فوق صور حقيقية بجمالية عالية." },
    { id: 395, category: "interactivity", title: "منع الأحداث (Pointer Events)", code: "pointer-events: none;", description: "جعل العنصر غير محسوس للماوس (الضغط يمر لما تحته).", note: "مفيدة لصنع مؤثرات بصرية تطفو فوق الأزرار بدون تعطيلها." },
    { id: 396, category: "interactivity", title: "تمكين الأحداث", code: "pointer-events: all;", description: "إعادة تفعيل استجابة العنصر للماوس بعد أن تم تعطيله.", note: "تستخدم في قوائم المواقع التي تظهر وتختفي برمجياً." },
    { id: 397, category: "forms", title: "حجم الخط النسبي (Ex)", code: "font-size: 10ex;", description: "وحدة قياس تعتمد على ارتفاع حرف (x) الصغير في الخط المستخدم.", note: "تستخدم لضمان تناسق الأحجام بين النصوص المختلفة بصرياً." },
    { id: 398, category: "forms", title: "حجم الخط بالـ Ch", code: "width: 20ch;", description: "وحدة قياس تساوي عرض الرقم صفر (0) في الخط الحالي.", note: "المثالية لتحديد عرض حقول الإدخال لتسع عدداً معيناً من الأرقام." },
    { id: 399, category: "forms", title: "مؤشر الماوس المخصص", code: "cursor: url('hand.cur'), pointer;", description: "استخدام ملف أيقونة خاص ليكون شكل الماوس في موقعك.", note: "يجب دائماً ذكر 'pointer' كبديل (Fallback) للأمان." },
    { id: 400, category: "basics", title: "رقم الإصدار (Data Attribute)", code: "[data-v='2'] { opacity: 1; }", description: "استهداف العناصر بناءً على 'سمات مخصصة' (Custom Attributes).", note: "هذا هو الجسر الذي يربط بين نصوص CSS وبيانات جافاسكربت." },
    { id: 401, category: "basics", title: "الوزن النسبي (Bolder)", code: "font-weight: bolder;", description: "جعل الخط أكثر سمكاً من العنصر الأب بدرجة واحدة.", note: "تعتمد على عائلة الخط والدرجات المتوفرة فيها." },
    { id: 402, category: "basics", title: "الوزن الأخف (Lighter)", code: "font-weight: lighter;", description: "جعل الخط أنحف من العنصر الأب.", note: "تعطي طابعاً 'مودرن' ونظيفاً للعناوين الفرعية." },
    { id: 403, category: "math", title: "المسافة الكونية (calc-size)", code: "height: calc-size(auto, size + 20px);", description: "إجراء عمليات حسابية على قيم (auto) التي كانت مستحيلة سابقاً.", note: "أحدث ثورة في CSS (2024) لعمل أنيميشن للارتفاع التلقائي!" },
    { id: 404, category: "math", title: "الوحدة المتغيرة (rem)", code: "padding: 1rem;", description: "وحدة قياس تعتمد على حجم الخط الأساسي للمتصفح (غالباً 16px).", note: "المعيار العالمي للتصاميم التي تحترم إعدادات المستخدم (Accessibility)." },
    { id: 405, category: "math", title: "الوحدة المحلية (em)", code: "margin: 2em;", description: "وحدة قياس تعتمد على حجم خط العنصر نفسه.", note: "مثالية لجعل المسافات تتغير تلقائياً مع حجم أيقونة أو نص معين." },
    { id: 406, category: "layout", title: "العرض الجانبي (Side Size)", code: "min-inline-size: fit-content;", description: "جعل العنصر يأخذ عرض محتواه بالضبط بدون زيادة أو نقصان.", note: "تغنيك عن استخدام display: inline-block في كثير من الحالات." },
    { id: 407, category: "layout", title: "تجاوز التدفق (Overflow-x)", code: "overflow-x: hidden;", description: "إخفاء أي محتوى يخرج عن حدود العنصر أفقياً.", note: "تستخدم بكثرة في الموبايل لمنع الاهتزاز الجانبي للصفحة." },
    { id: 408, category: "layout", title: "التدفق الرأسي (Overflow-y)", code: "overflow-y: scroll;", description: "إظهار شريط تمرير رأسي دائماً حتى لو لم يكن المحتوى زائداً.", note: "تستخدم لمحاذاة الصفحات ومنع 'قفزة' المحتوى عند التحميل." },
    { id: 409, category: "typography", title: "ضبط محاذاة الخط (Justify)", code: "text-align: justify;", description: "توزيع الفراغات لجعل أطراف الأسطر متساوية تماماً من اليمين واليسار.", note: "تعطي مظهراً رسمياً يشبه الجرائد المطبوعة." },
    { id: 410, category: "typography", title: "إمالة الخط (Italic)", code: "font-style: italic;", description: "جعل النص مائلاً لغرض التأكيد أو الاقتباس.", note: "يجب التأكد من أن الخط المستخدم يدعم النسخة المائلة فعلياً لبقاء الجودة." },
    // --- BATCH 9: 411-460 (SHAPES, SVG, FILTERS, INTERACTIVITY) ---
    { id: 411, category: "layout", title: "النص حول الأشكال (Shapes)", code: "shape-outside: circle(50%);", description: "جعل النص يلتف حول شكل هندسي أو صورة شفافة بدلاً من المربع.", note: "تخلق تصميمات 'مجلة' (Magazine-style) مذهلة وفريدة." },
    { id: 412, category: "layout", title: "هامش الشكل (Shape Margin)", code: "shape-margin: 20px;", description: "إبعاد النص عن الشكل الهندسي بمسافة محددة.", note: "تضمن أن النص لا يلمس حواف الدائرة أو الصورة." },
    { id: 413, category: "layout", title: "عتبة صورة الشكل", code: "shape-image-threshold: 0.5;", description: "تحديد مستوى الشفافية الذي يبدأ عنده النص في الالتفاف حول الصورة.", note: "تستخدم مع الصور التي تحتوي على تدرجات شفافية (Alpha Channel)." },
    { id: 414, category: "graphics", title: "قناع التلاشي (Mask Image)", code: "mask-image: linear-gradient(black, transparent);", description: "إخفاء أجزاء من العنصر باستخدام تدرج لوني أو صورة.", note: "طريقة رائعة لعمل تلاشي (Fade) لأطراف الصور أو الفيديوهات." },
    { id: 415, category: "graphics", title: "دمج الأقنعة (Mask Composite)", code: "mask-composite: subtract;", description: "طرح شكل قناع من قناع آخر لصنع أشكال مفرغة.", note: "أقوى أداة هندسية في CSS الحديث." },
    { id: 416, category: "graphics", title: "تكرار القناع", code: "mask-repeat: round;", description: "تكرار نمط القناع لملء مساحة العنصر بدون قص.", note: "تستخدم في الخلفيات المزخرفة المعقدة." },
    { id: 417, category: "graphics", title: "حجم القناع", code: "mask-size: contain;", description: "ضبط حجم القناع ليناسب أبعاد العنصر.", note: "تحافظ على تناسق القناع عند تغيير حجم الشاشة." },
    { id: 418, category: "svg", title: "لون التعبئة (Fill)", code: "fill: royalblue;", description: "تغيير لون المحتوى الداخلي لأشكال الـ SVG.", note: "يمكن التحكم في SVG من ملف CSS الخارجي بسهولة." },
    { id: 419, category: "svg", title: "شفافية التعبئة", code: "fill-opacity: 0.5;", description: "تحديد شفافية لون التعبئة فقط دون التأثير على الحدود.", note: "تستخدم لصنع تأثيرات الطبقات المتداخلة في الأيقونات." },
    { id: 420, category: "svg", title: "قاعدة التعبئة (Fill Rule)", code: "fill-rule: evenodd;", description: "تحديد كيفية تعبئة الأشكال المتداخلة (مثل النجمة).", note: "تتحكم في المناطق التي تظل مفرغة والمناطق التي تلون." },
    { id: 421, category: "svg", title: "لون الحدود (Stroke)", code: "stroke: limegreen;", description: "تلوين الخطوط الخارجية والمسارات في SVG.", note: "تقبل الألوان، التدرجات، وحتى الأنماط الصور." },
    { id: 422, category: "svg", title: "سمك الحدود (Stroke Width)", code: "stroke-width: 4px;", description: "تحديد ثخانة الخط الخارجي للمسار.", note: "يمكن عمل 'أنيميشن' لهذا الرقم ليوحي برسم الشكل." },
    { id: 423, category: "svg", title: "نمط تقطع الحدود", code: "stroke-dasharray: 10 5;", description: "تحويل الحدود لخطوط متقطعة (رقم للطول ورقم للفراغ).", note: "السر وراء تأثير 'رسم اليد' (Drawing Animation) الشهير." },
    { id: 424, category: "svg", title: "إزاحة التقطع (Dash Offset)", code: "stroke-dashoffset: 100;", description: "تحريك النقاط المقطعة على طول المسار.", note: "تستخدم مع @keyframes لعمل أنيميشن تحميل (Loader) دائري." },
    { id: 425, category: "svg", title: "نهاية الخط (Line Cap)", code: "stroke-linecap: round;", description: "تحديد شكل نهاية الخط (دائري، حاد، مربع).", note: "النهايات الدائرية تعطي مظهراً أنيقاً وودوداً للأيقونات." },
    { id: 426, category: "svg", title: "رابط الخطوط (Line Join)", code: "stroke-linejoin: bevel;", description: "تحديد شكل الزاوية عند التقاء خطين (حاد، مسطح، منحني).", note: "تؤثر على المظهر التقني والهندسي للشكل." },
    { id: 427, category: "graphics", title: "فلتر الظل (Drop Shadow)", code: "filter: drop-shadow(2px 4px 6px black);", description: "إضافة ظل يتبع شكل العنصر بدقة (حتى لو كان SVG أو صورة شفافة).", note: "أفضل من box-shadow لأنها لا تضع ظلاً على المربع الشفاف المحيط." },
    { id: 428, category: "graphics", title: "فلتر التغبيش (Blur)", code: "filter: blur(5px);", description: "جعل العنصر يبدو ضبابياً وغير واضح.", note: "تستخدم لعمل خلفيات 'خارج التركيز' لإبراز المحتوى الأمامي." },
    { id: 429, category: "graphics", title: "فلتر السطوع (Brightness)", code: "filter: brightness(1.5);", description: "زيادة إضاءة العنصر أو تقليلها.", note: "رائعة لصنع تأثير Hover 'يضيء' عند لمس الصورة." },
    { id: 430, category: "graphics", title: "فلتر التباين (Contrast)", code: "filter: contrast(200%);", description: "زيادة الفرق بين المناطق الفاتحة والغامقة.", note: "تعيد الحيوية للصور الباهتة وتجعلها أكثر جاذبية." },
    { id: 431, category: "graphics", title: "فلتر اللون البني (Sepia)", code: "filter: sepia(100%);", description: "تحويل ألوان العنصر لدرجات البني القديم (الصور التاريخية).", note: "تعطي طابعاً كلاسيكياً فورياً لأي صورة." },
    { id: 432, category: "interactivity", title: "منع اختيار النص", code: "user-select: none;", description: "منع المستخدم من تظليل أو نسخ النص داخل العنصر.", note: "تستخدم في الأزرار وواجهات التطبيقات لمنع التظليل الخاطئ عند الضغط." },
    { id: 433, category: "interactivity", title: "تغيير الحجم اليدوي", code: "resize: horizontal;", description: "السماح للمستخدم بتغيير عرض العنصر فقط بسحب زاوية معينة.", note: "تستخدم غالياً في حقول النصوص (Textarea) والقوائم الجانبية." },
    { id: 434, category: "interactivity", title: "سلوك التمرير (Scroll Behavior)", code: "scroll-behavior: smooth;", description: "جعل التمرير داخل الصفحة انزلاقياً ناعماً بدلاً من القفز.", note: "تحسن تجربة المستخدم بشكل كبير جداً في صفحات الهبوط." },
    { id: 435, category: "interactivity", title: "التحكم في تكبير الصور", code: "image-rendering: pixelated;", description: "منع المتصفح من تنعيم الصور الصغيرة عند تكبيرها (مناسب للـ Pixel Art).", note: "تحافظ على حدة المربعات في الرسومات الكلاسيكية." },
    { id: 436, category: "interactivity", title: "تمكين أحداث SVG", code: "pointer-events: visiblePainted;", description: "جعل العنصر يستجيب فقط للأجزاء الملونة فعلياً منه.", note: "تسمح بدقة متناهية في لمس الأشكال المعقدة." },
    { id: 437, category: "performance", title: "عزل المحتوى (Content Visibility)", code: "content-visibility: hidden;", description: "منع المتصفح من رسم العنصر تماماً حتى يتم طلبه (أقوى من display: none).", note: "تستخدم في الأنظمة المعقدة لزيادة سرعة التحميل الأولية." },
    { id: 438, category: "performance", title: "تحسين النص (Optimize Legibility)", code: "text-rendering: optimizeLegibility;", description: "إجبار المتصفح على استخدام أفضل خوارزميات رسم الأحرف والوصلات.", note: "تجعل النصوص الطويلة أكثر راحة للعين (خاصة في اللغات اللاتينية)." },
    { id: 439, category: "performance", title: "أولوية الصورة (Fetch Priority)", code: "fetchpriority: low;", description: "إخبار المتصفح بأن هذه الصورة غير مهمة ويمكن تأخير تحميلها.", note: "تستخدم لصور الخلفية البعيدة لتحرير سرعة الإنترنت للصور المهمة." },
    { id: 440, category: "typography", title: "أحرف الاستهلال (Initial Letter)", code: "initial-letter: 3 2;", description: "تكبير أول حرف من الفقرة وجعله يمتد عبر عدة أسطر (نظام المجلات).", note: "الرقم الأول لعدد الأسطر، والثاني لمدى غمره في النص." },
    { id: 441, category: "typography", title: "اتجاه الحروف (Glyph Orientation)", code: "glyph-orientation-vertical: 0deg;", description: "التحكم في زاوية دوران الحروف عند الكتابة الرأسية.", note: "مهمة جداً للمصممين الذين يبنون واجهات بلغات آسيوية." },
    { id: 442, category: "typography", title: "فراغ النص المطور", code: "white-space: pre-wrap;", description: "الحفاظ على المسافات وكسر الأسطر اليدوي مع الالتفاف التلقائي.", note: "الحل الأمثل لعرض تعليقات المستخدمين أو الأكواد البرمجية." },
    { id: 443, category: "typography", title: "تقليص الكلمات (Tab Size)", code: "tab-size: 4;", description: "تحديد حجم المسافة التي يتركها زر (Tab) داخل النصوص.", note: "تستخدم في محركات الأكواد ومحررات النصوص أونلاين." },
    { id: 444, category: "typography", title: "تنسيق الاقتباسات", code: "quotes: '«' '»' '“' '”';", description: "تحديد شكل علامات التنصيص التي تظهر عند استخدام وسم <q>.", note: "تسمح بتخصيص علامات الترقيم لكل لغة (مثل العربية)." },
    { id: 445, category: "boxmodel", title: "العلو الصافي (Top Offset)", code: "top: calc(100% - 50px);", description: "حساب مكان العنصر بدقة رياضية بالنسبة للأب.", note: "تجمع بين قوة الرياضيات ومرونة التموضع." },
    { id: 446, category: "boxmodel", title: "الحجم الأدنى (Min Size)", code: "min-width: min-content;", description: "جعل العنصر لا يقل حجمه عن أصغر كلمة موجودة بداخله.", note: "تمنع تداخل النصوص والكلمات القوية." },
    { id: 447, category: "boxmodel", title: "الحجم الأقصى (Max Size)", code: "max-height: 50vh;", description: "منع العنصر من التمدد الرأسي ليغطي أكثر من نصف الشاشة.", note: "تستخدم لصنع صناديق التنبيه (Modals) المتجاوبة." },
    { id: 448, category: "boxmodel", title: "القص الدائري", code: "border-radius: 50%; width: 100px; height: 100px;", description: "تحويل أي مربع إلى دائرة كاملة.", note: "يجب أن يكون العرض والارتفاع متساويين للحصول على دائرة مثالية." },
    { id: 449, category: "boxmodel", title: "ظل الحدود الداخلي", code: "box-shadow: inset 0 0 10px black;", description: "إضافة ظل يظهر داخل العنصر بدلاً من خارجه.", note: "تعطي إحساساً بأن العنصر محفور للداخل (Pressed effect)." },
    { id: 450, category: "colors", title: "شفافية نظام التشغيل", code: "background: light-dark(#fff, #000);", description: "اختيار لون تلقائي بناءً على تفضيلات المستخدم (ثيم فاتح أو غامق).", note: "أذكى دالة للتعامل مع الوضع الليلي بدون ميديا كويري." },
    { id: 451, category: "colors", title: "متغيرات CSS الوراثية", code: "--main-color: blue; color: var(--main-color);", description: "تعريف متغيرات يمكن إعادة استخدامها في كل ملف التنسيق.", note: "تسهل عملية تغيير 'هوية الموقع البصرية' من مكان واحد وبسرعة." },
    { id: 452, category: "colors", title: "تحويل الألوان (Inherit)", code: "border-color: currentColor;", description: "جعل لون الحدود يتبع دائماً لون النص الحالي للعنصر.", note: "تحافظ على التناسق اللوني عند تغيير لون الخط في حالات الـ Hover." },
    { id: 453, category: "math", title: "التقريب الرياضي (Round)", code: "width: round(up, 105px, 10px);", description: "تقريب الأرقام لأقرب وحدة محددة (أعلى، أسفل، أو الأقرب).", note: "تستخدم في الحسابات الهندسية لضمان عدم وجود أنصاف بكسلات." },
    { id: 454, category: "math", title: "المعادلات الشرطية (Mod)", code: "z-index: mod(23, 10);", description: "الحصول على باقي القسمة لاستخدامه في حسابات الترتيب.", note: "تفتح باباً للبرمجة الحسابية المتقدمة داخل CSS." },
    { id: 455, category: "math", title: "الأرقام العشوائية (Random)", code: "opacity: random(0, 1);", description: "توليد قيمة عشوائية (ميزة تجريبية حديثة جداً).", note: "تستخدم لعمل تأثيرات بصرية غير متكررة مثل النجوم المتساقطة." },
    { id: 456, category: "layout", title: "المركز المطلق", code: "inset: 0; margin: auto;", description: "توسيط عنصر متموضع (absolute) في منتصف الأب تماماً.", note: "أشهر خدعة في عالم الـ CSS للتوسيط الكامل أفقياً ورأسياً." },
    { id: 457, category: "layout", title: "الاحتواء البصري (Object View Box)", code: "object-view-box: inset(10% 20% 10% 20%);", description: "عمل 'زوم' وقص لصورة أو فيديو من داخل المتصفح بدون تعديل الملف الأصلي.", note: "أقوى ميزة (2023) للتحكم في عرض الوسائط." },
    { id: 458, category: "layout", title: "توزيع الأعمدة (Columns)", code: "columns: 200px 3;", description: "تقسيم النص لعدد أعمدة معين مع تحديد أقل عرض مسموح لكل عمود.", note: "تجمع بين المرونة والعدد الثابت في كود واحد." },
    { id: 459, category: "typography", title: "التباعد بين الأسطر (Line Height)", code: "line-height: 1.6;", description: "تحديد المسافة الرأسية بين أسطر الفقرة الواحدة.", note: "القيمة 1.6 هي المعيار الذهبي لراحة العين أثناء القراءة الطويلة." },
    { id: 460, category: "typography", title: "تسطير النص (Underline)", code: "text-decoration: underline wavy red;", description: "وضع خط متموج ملون تحت النص.", note: "تستخدم لتمييز الروابط أو جذب الانتباه لأخطاء معينة." },
    // --- BATCH 10: 461-510 (LISTS, TABLES, WRITING MODES, DISPLAY) ---
    { id: 461, category: "basics", title: "نمط القائمة الكلاسيكي", code: "list-style-type: square;", description: "تغيير شكل النقطة في القوائم غير المرتبة (مربع، دائرة، إلخ).", note: "يمكن استخدام 'none' لإخفاء النقطة تماماً عند بناء القوائم المخصصة." },
    { id: 462, category: "basics", title: "صورة القائمة", code: "list-style-image: url('bullet.png');", description: "استخدام صورة مخصصة بدلاً من النقطة التقليدية.", note: "تمنح القوائم طابعاً بصرياً فريداً يتماشى مع هوية الموقع." },
    { id: 463, category: "basics", title: "مكان النقطة (Position)", code: "list-style-position: inside;", description: "تحديد هل تكون النقطة داخل إطار النص أم خارجه.", note: "خيار 'inside' يجعل النص يلتف تحت النقطة مباشرة." },
    { id: 464, category: "basics", title: "تجميع خصائص القائمة", code: "list-style: georgian inside url('star.png');", description: "اختصار لجميع خصائص القائمة في سطر واحد.", note: "الطريقة الأكثر احترافية ونظافة لكتابة الكود." },
    { id: 465, category: "layout", title: "دمج حدود الجدول", code: "border-collapse: collapse;", description: "دمج حدود الخلايا المتجاورة في الجدول لتصبح خطاً واحداً.", note: "أساسية جداً لجعل جداول البيانات تبدو أنيقة ومنظمة." },
    { id: 466, category: "layout", title: "المسافة بين الخلايا", code: "border-spacing: 10px 20px;", description: "تحديد الفراغ بين حدود الخلايا (أفقياً ورأسياً) عند عدم دمجها.", note: "تستخدم لصنع جداول ذات طابع فني متباعد." },
    { id: 467, category: "layout", title: "تخطيط الجدول الثابت", code: "table-layout: fixed;", description: "إجبار المتصفح على تقسيم الأعمدة بالتساوي بناءً على أول سطر.", note: "تحسن أداء عرض الجداول الضخمة وتمنع اهتزازها عند التحميل." },
    { id: 468, category: "layout", title: "الخلايا الفارغة", code: "empty-cells: hide;", description: "إخفاء الحدود والخلفية للخلايا التي لا تحتوي على بيانات.", note: "تجعل الجداول تبدو أنظف خاصة عند وجود بيانات مفقودة." },
    { id: 469, category: "typography", title: "كابشن الجدول", code: "caption-side: bottom;", description: "تحديد مكان عنوان الجدول (أعلى أو أسفل).", note: "تساعد في تحسين إمكانية الوصول وفهم محتوى الجدول." },
    { id: 470, category: "layout", title: "عرض المحتوى (Contents)", code: "display: contents;", description: "إلغاء وجود الصندوق الخاص بالعنصر مع بقاء الأبناء فعالين.", note: "مفيدة جداً في Flex و Grid لتخطي مستوى من مستويات الـ HTML." },
    { id: 471, category: "layout", title: "جذر التدفق (Flow Root)", code: "display: flow-root;", description: "إنشاء سياق تنسيق جديد يمنع خروج العناصر المعومة (Floats).", note: "الطريقة الحديثة والبديلة عن 'clearfix' القديمة." },
    { id: 472, category: "typography", title: "اتجاه الكتابة الرأسي", code: "writing-mode: vertical-rl;", description: "تحويل النص ليكتب من الأعلى للأسفل ومن اليمين لليسار.", note: "تستخدم في التصميمات الفنية واللغات الشرقية بدقة." },
    { id: 473, category: "typography", title: "توجيه النص (Orientation)", code: "text-orientation: upright;", description: "جعل الحروف تقف بشكل رأسي حتى في أنماط الكتابة الرأسية.", note: "تمنع ميل الحروف اللاتينية عند عرضها رأسياً." },
    { id: 474, category: "typography", title: "كسر الكلمات العربية", code: "text-justify: inter-word;", description: "توزيع الفراغات بين الكلمات فقط عند المحاذاة الكاملة (Justify).", note: "تعطي أفضل نتيجة للنصوص العربية الطويلة." },
    { id: 475, category: "typography", title: "محاذاة النص الأخيرة", code: "text-align-last: center;", description: "تحديد محاذاة آخر سطر في الفقرة (أو السطر الوحيد قبل الكسر).", note: "تستخدم لجمالية الفقرات التي تنتهي بكلمات قليلة." },
    { id: 476, category: "graphics", title: "دمج طبقات الخلفية", code: "mix-blend-mode: overlay;", description: "دمج ألوان العنصر مع ما خلفه بطريقة تزيد من حيوية الألوان.", note: "تستخدم في التصميمات السينمائية والمواقع الفخمة." },
    { id: 477, category: "graphics", title: "عزل دمج الطبقات", code: "isolation: isolate;", description: "منع العنصر من الاندماج مع ما تحت خلفية الأب.", note: "أساسية للحفاظ على تباين النص فوق طبقات مدمجة معقدة." },
    { id: 478, category: "logical", title: "أقصى طول منطقي", code: "max-block-size: 300px;", description: "تحديد أقصى ارتفاع مسموح به حسب اتجاه كتلة النص.", note: "تحافظ على شكل الصفحة عند زيادة المحتوى بشكل غير متوقع." },
    { id: 479, category: "logical", title: "أقل عرض منطقي", code: "min-inline-size: 150px;", description: "ضمان أقل مساحة عرضية ممكنة بناءً على اتجاه السطر.", note: "تمنع اختفاء العناصر الصغيرة في الشاشات الضعيفة." },
    { id: 480, category: "logical", title: "إزاحة البداية الرأسية", code: "inset-block-start: 0;", description: "بديل منطقي لـ top (تتغير حسب اتجاه الكتابة).", note: "المبدأ الأساسي في المواقع العالمية (i18n)." },
    { id: 481, category: "logical", title: "إزاحة النهاية الرأسية", code: "inset-block-end: 1rem;", description: "بديل منطقي لـ bottom.", note: "تضمن تناسق المسافات تحت العناصر دائماً." },
    { id: 482, category: "scrolling", title: "تقريب السحب الأفقي", code: "scroll-snap-align: start end;", description: "تحديد نقطة الالتصاق في البداية والنهاية.", note: "رائعة لمعارض المنتجات (Carousels) التي تتحرك أفقياً." },
    { id: 483, category: "scrolling", title: "هوامش السحب الداخلية", code: "scroll-padding-inline: 50px;", description: "ترك مسافة جانبية قبل التصاق العنصر عند التمرير الأفقي.", note: "تمنع التصاق المحتوى بحافة الشاشة مباشرة." },
    { id: 484, category: "scrolling", title: "هوامش السحب الرأسية", code: "scroll-padding-block: 20px;", description: "ترك مسافة رأسية آمنة عند التمرير.", note: "تحسن من وضوح العناصر المثبتة (Snap items)." },
    { id: 485, category: "interactive", title: "مؤشر السحب (Dragging)", code: "cursor: grabbing;", description: "إظهار اليد المغلقة التي توحي بأن العنصر يتم سحبه الآن.", note: "تواصل بصري مهم لتجربة المستخدم أثناء اللمس أو السحب." },
    { id: 486, category: "interactive", title: "مؤشر التوسيع (Col-resize)", code: "cursor: col-resize;", description: "إظهار الخط المزدوج الذي يوحي بإمكانية تغيير عرض العمود.", note: "تستخدم في الجداول الديناميكية والبرمجية." },
    { id: 487, category: "interactive", title: "تغيير مؤشر الماوس للنص", code: "cursor: text;", description: "إظهار رمز الكتابة (|) فوق العناصر القابلة للكتابة أو الاختيار.", note: "المتصفح يضعها تلقائياً، ولكن يمكنك تخصيصها للعناصر البرمجية." },
    { id: 488, category: "basics", title: "الموضع النسبي (Relative)", code: "position: relative; z-index: 10;", description: "تحريك العنصر بالنسبة لمكانه الأصلي مع إمكانية استخدام z-index.", note: "هذا هو النوع الوحيد الذي لا يخرج العنصر من مسار الصفحة (Document Flow)." },
    { id: 489, category: "basics", title: "الموضع الثابت (Fixed)", code: "position: fixed; top: 0; width: 100%;", description: "تثبيت العنصر في الشاشة بحيث لا يتحرك مع السكرول.", note: "تستخدم لصنع القوائم العلوية الدائمة (Sticky Navigation)." },
    { id: 490, category: "typography", title: "تحويل الحروف (Lowercase)", code: "text-transform: lowercase;", description: "تحويل جميع الحروف الإنجليزية لحروف صغيرة.", note: "تستخدم في تصميمات البريد الإلكتروني وأسماء المستخدمين." },
    { id: 491, category: "typography", title: "تحويل الحروف (Uppercase)", code: "text-transform: uppercase;", description: "تحويل جميع الحروف الإنجليزية لحروف كبيرة.", note: "تعطي طابعاً قوياً وبارزاً للعناوين القصيرة." },
    { id: 492, category: "typography", title: "تباعد الكلمات المخصص", code: "word-spacing: 10px;", description: "توسيع أو تضييق المسافة بين كل كلمة وأخرى.", note: "تستخدم أحياناً في تصميمات الشعارات النصية." },
    { id: 493, category: "typography", title: "إزاحة السطر الأول", code: "text-indent: 2rem;", description: "دفع أول سطر في الفقرة للداخل بمسافة معينة.", note: "أسلوب كلاسيكي جداً في المقالات والكتب المطبوعة." },
    { id: 494, category: "graphics", title: "رسم شكل مخصص (Clip Path)", code: "clip-path: polygon(50% 0%, 0% 100%, 100% 100%);", description: "قص العنصر على شكل مثلث أو أي شكل هندسي معقد.", note: "تسمح بصنع أشكال (Cutting-edge) بدون استخدام صور خارجية." },
    { id: 495, category: "graphics", title: "ظل النص المتعدد", code: "text-shadow: 2px 2px red, 4px 4px blue;", description: "إضافة أكثر من ظل للنص الواحد بألوان وأبعاد مختلفة.", note: "تستخدم لصنع تأثيرات (3D Text) و (Retro Styles)." },
    { id: 496, category: "graphics", title: "التباين الخلفي المستمر", code: "backdrop-filter: contrast(0.5);", description: "زيادة تباين العناصر التي تظهر خلف العنصر الشفاف.", note: "تحرك المشهد البصري خلف القوائم الشفافة بجمالية عالية." },
    { id: 497, category: "animation", title: "اتجاه الأنيميشن البديل", code: "animation-direction: alternate;", description: "جعل الحركة تذهب وتعود بدلاً من البدء من الصفر دائماً.", note: "السر وراء حركات 'النبض' (Pulse) والاهتزاز الناعم." },
    { id: 498, category: "animation", title: "تكرار لا نهائي", code: "animation-iteration-count: infinite;", description: "جعل الحركة تستمر للأبد بدون توقف.", note: "تستخدم في خلفيات المواقع المتحركة وأدوات التحميل." },
    { id: 499, category: "animation", title: "بداية متأخرة (Seconds)", code: "animation-delay: 2s;", description: "تأجيل بدء الحركة لعدد معين من الثواني.", note: "مهمة جداً لعمل تسلسل في الحركات (First this, then that)." },
    { id: 500, category: "performance", title: "تخصيص العرض (Size)", code: "contain: layout paint;", description: "عزل عملية الرسم والتخطيط لتحسين الأداء بشكل جذري.", note: "تخبر المتصفح أن هذا الصندوق مستقل تماماً، مما يسرع الموقع فوراً." },
    { id: 501, category: "math", title: "قوة التحمل (Clamp Size)", code: "width: clamp(200px, 50%, 800px);", description: "تحديد حجم مرن لا يقل عن قيمة ولا يزيد عن قيمة أخرى.", note: "تغنيك عن كتابة 3 أسطر من ميديا كويري لضبط العرض." },
    { id: 502, category: "math", title: "تدرج الحجم الرياضي", code: "font-size: calc(1rem + 2vw);", description: "جعل النص يكبر ببطء مع كبر حجم الشاشة بشكل خطي.", note: "أفضل طريقة لبناء نصوص مرنة (Fluid Typography) بدون تعقيد." },
    { id: 503, category: "colors", title: "الشفافية المطلقة", code: "background: transparent;", description: "جعل خلفية العنصر شفافة بالكامل بحيث يظهر ما خلفه.", note: "تستخدم لتصفير الألوان الافتراضية للمتصفح في الأزرار والمدخلات." },
    { id: 504, category: "colors", title: "الألوان الطبيعية (Named)", code: "color: rebeccapurple;", description: "استخدام أسماء الألوان المعيارية المعترف بها عالمياً.", note: "هذا اللون مسمى تخليداً لذكرى ابنة أحد رواد الويب (Eric Meyer)." },
    { id: 505, category: "layout", title: "مركز فليكس (Place Content)", code: "place-content: center;", description: "توسيط جميع العناصر الأبناء أفقياً ورأسياً في سطر واحد.", note: "اختصار ذكي لـ justify-content و align-content." },
    { id: 506, category: "layout", title: "المسافة الجانبية (Gap)", code: "column-gap: 30px;", description: "تحديد الفراغ بين الأعمدة فقط في Flex أو Grid.", note: "تحافظ على التنسيق العرضي بدقة متناهية." },
    { id: 507, category: "typography", title: "نمط الخط العريض", code: "font-weight: 900;", description: "استخدام أقصى سمك متوفر للخط.", note: "الحجم 900 يسمى Black أو Heavy ويستخدم للعناوين الجذابة (Bold Design)." },
    { id: 508, category: "typography", title: "عائلة الخط (Font Family)", code: "font-family: 'Segoe UI', Tahoma, sans-serif;", description: "تحديد قائمة الخطوط المفضلة والبديلة (Fallbacks) للمتصفح.", note: "دائماً ضع sans-serif في النهاية لضمان عمل الخط حتى لو فشل التحميل." },
    { id: 509, category: "basics", title: "ارتفاع العنصر (Height)", code: "height: auto;", description: "ترك المتصفح يحدد ارتفاع العنصر بناءً على محتواه.", note: "الوضع الافتراضي والأكثر أماناً لتجنب قص المحتوى (Content Clipping)." },
    { id: 510, category: "basics", title: "العرض الأقصى (Max Width)", code: "max-width: 100%;", description: "منع العنصر من الخروج عن حدود الأب (خاصة الصور).", note: "هذا هو السطر الأول والأهم في بناء أي تصميم متجاوب (Responsive)." },
    // --- BATCH 11: 511-560 (SCROLLBARS, VIEW TRANSITIONS, ADVANCED TYPE) ---
    { id: 511, category: "scrolling", title: "سمك شريط التمرير", code: "scrollbar-width: thin;", description: "التحكم في عرض شريط التمرير (تلقائي، نحيف، أو مخفي).", note: "تسمح بتحسين مظهر القوائم الجانبية بدون تعقيدات الأكواد القديمة." },
    { id: 512, category: "scrolling", title: "ألوان شريط التمرير", code: "scrollbar-color: #ff0000 #000000;", description: "تحديد لون مقبض التمرير ولون المسار في سطر واحد.", note: "تعمل في المتصفحات الحديثة (Firefox, Chrome 121+) وتغنيك عن البادئة -webkit-." },
    { id: 513, category: "animation", title: "اسم انتقال العرض", code: "view-transition-name: main-image;", description: "ربط عنصرين في صفحتين مختلفتين لعمل أنيميشن سلس عند الانتقال.", note: "أحدث ثورة في تجربة مستخدم تطبيقات الويب (SPAs)." },
    { id: 514, category: "typography", title: "تأكيد النص (Emphasis)", code: "text-emphasis: circle red;", description: "إضافة علامات صغيرة فوق الحروف (دائرة، نقطة، إلخ) للفت الانتباه.", note: "تستخدم بكثرة في اللغات الشرقية وفي التصاميم الفنية للعناوين." },
    { id: 515, category: "typography", title: "مكان علامات التأكيد", code: "text-emphasis-position: over right;", description: "تحديد مكان ظهور العلامات بالنسبة للحرف.", note: "تتغير تلقائياً عند تغيير اتجاه الكتابة لرأسي." },
    { id: 516, category: "typography", title: "تعديل حجم الخط (Adjust)", code: "font-size-adjust: 0.5;", description: "الحفاظ على وضوح النص عند استخدام خطوط بديلة (Fallbacks).", note: "تضمن أن الخط البديل يبدو بنفس الحجم البصري للخط الأصلي." },
    { id: 517, category: "typography", title: "توليفة الخط (Synthesis)", code: "font-synthesis: none;", description: "منع المتصفح من صنع نسخ (Bold) أو (Italic) وهمية للخط.", note: "تضمن الحفاظ على دقة التصميم ومنع تشوه الخطوط." },
    { id: 518, category: "typography", title: "تنعيم الأحرف (Kerning)", code: "font-kerning: normal;", description: "التحكم في المسافات البينية الدقيقة بين أزواج الأحرف.", note: "مهمة جداً في خطوط العناوين الكبيرة لضمان تناسق المسافات." },
    { id: 519, category: "interactivity", title: "لون التمييز (Accent)", code: "accent-color: #6366f1;", description: "تغيير اللون الأساسي للعناصر التفاعلية مثل (Checkbox, Radio).", note: "أسهل طريقة لتخصيص ألوان عناصر المتصفح دون إعادة برمجتها." },
    { id: 520, category: "interactivity", title: "شكل مؤشر الكتابة (Caret)", code: "caret-shape: block;", description: "تغيير شكل مؤشر الكتابة الوامض (خط، مربع، أو تحت الحرف).", note: "ميزة جمالية لمحاكاة المحررات البرمجية القديمة (Terminals)." },
    { id: 521, category: "graphics", title: "ارتباط الخلفية (Attachment)", code: "background-attachment: fixed;", description: "جعل خلفية العنصر ثابتة بينما يتحرك المحتوى فوقها.", note: "تأثير (Parallax) الشهير الذي يعطي عمقاً للصفحة." },
    { id: 522, category: "graphics", title: "بداية رسم الخلفية (Origin)", code: "background-origin: content-box;", description: "تحديد من أين يبدأ رسم الصورة (داخل الهامش أم من الحافة).", note: "تؤثر على كيفية ظهور الأنماط (Patterns) حول الحدود." },
    { id: 523, category: "graphics", title: "نطاق قص الخلفية (Clip)", code: "background-clip: text;", description: "قص الخلفية لتظهر فقط داخل حروف النص.", note: "السر وراء صنع نصوص ملونة بصور وتدرجات احترافية." },
    { id: 524, category: "graphics", title: "تدرج لوني دائري", code: "background: radial-gradient(circle, red, blue);", description: "إنشاء تلوين ينطلق من المركز للخارج بشكل دائري.", note: "رائعة لصنع تأثيرات الضوء والتوهج المركزي." },
    { id: 525, category: "graphics", title: "تدرج لوني مخروطي", code: "background: conic-gradient(from 45deg, red, yellow, red);", description: "تدرج لوني يدور حول نقطة مركزية (مثل رادارات الطائرات).", note: "تستخدم لصنع الرسوم البيانية الدائرية (Pie Charts) بـ CSS فقط." },
    { id: 526, category: "graphics", title: "فلتر العزل اللوني (Hue)", code: "filter: hue-rotate(180deg);", description: "تغيير جميع ألوان العنصر بناءً على موقعه في دائرة الألوان.", note: "تسمح بتغيير لون أيقونة واحدة لآلاف الدرجات بدون صور جديدة." },
    { id: 527, category: "graphics", title: "فلتر التغميق (Invert)", code: "filter: invert(1);", description: "عكس جميع الألوان (الأبيض يصبح أسود والعكس).", note: "أسرع حل لتحويل الأيقونات السوداء لبيضاء في الوضع الليلي." },
    { id: 528, category: "logical", title: "عرض الحدود الجانبية", code: "border-inline-width: 2px 10px;", description: "تحديد سمك حدود البداية والنهاية منطقياً.", note: "تسمح بعمل برواز سميك من جهة واحدة تتغير حسب اللغة." },
    { id: 529, category: "logical", title: "عرض الحدود الرأسية", code: "border-block-width: 5px;", description: "تحديد سمك الحدود العليا والسفلى معاً.", note: "توحد مظهر الفقرات والقوائم." },
    { id: 530, category: "logical", title: "زاوية البداية (Start Start)", code: "border-start-start-radius: 50%;", description: "انحناء الزاوية العليا التي تبدأ منها الكتابة.", note: "تتغير بتغير dir='rtl' لليمن و ltr لليسار." },
    { id: 531, category: "logical", title: "زاوية النهاية (End End)", code: "border-end-end-radius: 50%;", description: "انحناء الزاوية السفلى في نهاية السطر الأخير.", note: "تكمل شكل الأشكال الهندسية الذكية." },
    { id: 532, category: "scrolling", title: "محاذاة التوقف (Snap Stop)", code: "scroll-snap-stop: always;", description: "إجبار السكرول على التوقف عند كل عنصر وعدم تخطي العناصر.", note: "تضمن أن يشاهد المستخدم كل صورة في معرض الصور بالترتيب." },
    { id: 533, category: "scrolling", title: "إيقاف السكرول المتعدد", code: "overscroll-behavior: contain;", description: "منع تمرير الصفحة الأب عند الوصول لنهاية تمرير العنصر الابن.", note: "ضرورية جداً للقوائم الجانبية (Custom Sidebars)." },
    { id: 534, category: "layout", title: "عمود الشبكة التلقائي", code: "grid-auto-columns: minmax(100px, auto);", description: "تحديد عرض الأعمدة التي يتم إنشاؤها تلقائياً للمحتوى الزائد.", note: "تضمن بقاء الشبكة منظمة مهما زاد عدد العناصر." },
    { id: 535, category: "layout", title: "ترتيب كروي للمربعات", code: "grid-auto-flow: dense;", description: "محاولة ملء الفراغات الناتجة عن اختلاف أحجام العناصر تلقائياً.", note: "تجعل معرض الصور (Masonry Layout) يبدو منسجماً وبدون فراغات." },
    { id: 536, category: "flexbox", title: "محاذاة المحتوى بالكامل", code: "align-content: space-around;", description: "توزيع الأسطر المتعددة داخل حاوية فليكس.", note: "لا تعمل إلا إذا كان هناك التفاف (flex-wrap: wrap)." },
    { id: 537, category: "flexbox", title: "ترتيب العناصر اليدوي", code: "order: 5;", description: "تغيير مكان ظهور العنصر بصرياً دون تغيير مكانه في الكود.", note: "مفيدة لنقل الـ Sidebar فوق المحتوى في شاشات الموبايل." },
    { id: 538, category: "animation", title: "تأجيل البداية", code: "animation-delay: -1s;", description: "بدء الحركة من منتصفها (الوقت السالب يعني 'تخطى' هذا الوقت).", note: "خدعة ذكية لجعل عدة عناصر تتحرك بتناغم مختلف فور التحميل." },
    { id: 539, category: "animation", title: "سلوك النهاية (Fill Mode)", code: "animation-fill-mode: both;", description: "تطبيق التنسيقات قبل بدء الحركة وبعد انتهائها.", note: "تمنع القفزة المفاجئة للعنصر لحالته الأصلية بعد انتهاء الحركة." },
    { id: 540, category: "graphics", title: "تنعيم حواف القناع", code: "mask-clip: border-box;", description: "تحديد المدى الذي يغطي فيه القناع العنصر.", note: "تعمل تماماً مثل background-clip ولكن للأقنعة." },
    { id: 541, category: "graphics", title: "وضع القناع (Luminance)", code: "mask-mode: alpha;", description: "تحديد هل يعتمد القناع على الشفافية أم على إضاءة الألوان.", note: "تستخدم لصنع تأثيرات إضاءة متطورة فوق الصور." },
    { id: 542, category: "svg", title: "ترامي المسارات (Stroke Miter)", code: "stroke-miterlimit: 4;", description: "تحديد متى يتم تحويل الزوايا الحادة لزوايا مقطوعة.", note: "تمنع ظهور نتوءات غريبة في الزوايا الحادة جداً." },
    { id: 543, category: "svg", title: "ترتيب الرسم (Paint Order)", code: "paint-order: markers stroke fill;", description: "تحديد من يرسم أولاً (الألوان أم الحدود).", note: "تستخدم في النصوص العريضة لجعل الحدود لا تغطي جزءاً من النص." },
    { id: 544, category: "svg", title: "محاذاة المسار (Shape Rendering)", code: "shape-rendering: optimizeSpeed;", description: "إخبار المتصفح بإعطاء الأولوية للسرعة عند رسم الرسومات المعقدة.", note: "تستخدم في الرسوم البيانية الحية لضمان عدم بطء الموقع." },
    { id: 545, category: "interactivity", title: "إدارة التركيز المرئي", code: "outline-offset: 5px;", description: "ترك مسافة بين البرواز والعنصر عند التركيز (Tab).", note: "تحسن الشكل الجمالي لمؤشرات الوصول (Accessibility)." },
    { id: 546, category: "interactivity", title: "توجيه اللمس المنطقي", code: "touch-action: manipulation;", description: "تعطيل حركات معينة مثل التكبير بالنقر المزدوج لزيادة سرعة التفاعل.", note: "ضرورية للألعاب التي تعمل داخل المتصفح على الموبايل." },
    { id: 547, category: "column", title: "فاصل الأعمدة (Rule)", code: "column-rule: 2px solid gray;", description: "رسم خط فاصل بين أعمدة النص المقسمة.", note: "تساعد القارئ على التمييز بين الأعمدة في المقالات الطويلة." },
    { id: 548, category: "column", title: "قفز الأعمدة (Span)", code: "column-span: all;", description: "جعل العنصر (مثل عنوان) يمتد عبر جميع الأعمدة.", note: "تستخدم في تخطيط المجلات لكسر رتابة الأعمدة بعنوان عريض." },
    { id: 549, category: "column", title: "توازن الأعمدة (Fill)", code: "column-fill: balance;", description: "محاولة جعل جميع الأعمدة بنفس الطول تقريباً.", note: "تمنع وجود عمود طويل جداً وعمود قصير جداً في النهاية." },
    { id: 550, category: "font", title: "تمدد الخط (Stretch)", code: "font-stretch: expanded;", description: "اختيار نسخة عريضة أو نحيفة من الخط إذا كانت متوفرة.", note: "تستخدم في العناوين لملء العرض المتاح بشكل فني." },
    { id: 551, category: "font", title: "نمط الخط الرقمي", code: "font-variant-numeric: tabular-nums;", description: "جعل جميع الأرقام تأخذ نفس العرض (مثل الخط اللاتيني القديم).", note: "ضرورية جداً في الجداول المالية والساعات لتجنب اهتزاز الأرقام." },
    { id: 552, category: "font", title: "نمط الكبسولات (Caps)", code: "font-variant-caps: small-caps;", description: "تحويل الحروف الصغيرة لحروف كبيرة ولكن بحجم صغير.", note: "تعطي طابعاً رسمياً وتاريخياً للتصميم." },
    { id: 553, category: "font", title: "تحسين التباعد (Ligatures)", code: "font-variant-ligatures: common-ligatures;", description: "دمج أحرف معينة مع بعضها (مثل fi) لتحسين المظهر الجمالي.", note: "دليل على اهتمام المصمم بأدق تفاصيل التيبوغرافي." },
    { id: 554, category: "font", title: "التحكم في الخط (Display)", code: "font-display: swap;", description: "تحديد كيفية ظهور النص أثناء تحميل ملف الخط.", note: "خيار swap يضمن ظهور النص بخط بديل فوراً حتى يحمل الخط الأصلي لسرعة الأداء (LCP)." },
    { id: 555, category: "basics", title: "سلوك الكائنات (Object Fit)", code: "object-fit: scale-down;", description: "اختيار أصغر حجم متاح للصورة بحيث لا تتعدى حدودها الأصلية.", note: "مفيدة لعرض الصور الصغيرة في مربعات كبيرة بدون تشويه." },
    { id: 556, category: "basics", title: "محاذاة الكائنات (Object Position)", code: "object-position: center bottom;", description: "تحديد أي جزء من الصورة يظهر في المنتصف عند استخدام cover.", note: "تستخدم لمنع قص وجوه الأشخاص في صور الخلفية." },
    { id: 557, category: "layout", title: "الاحتواء الهيكلي (Containment)", code: "contain-intrinsic-width: 500px;", description: "حجز مساحة كافية للعنصر قبل تحميله لمنع اهتزاز الصفحة.", note: "جزء من تقنيات تحسين سرعة الموقع المتقدمة." },
    { id: 558, category: "layout", title: "ترتيب الطبقات (Z-Index)", code: "z-index: 9999;", description: "جعل العنصر يظهر فوق العناصر الأخرى.", note: "أعلى قيمة ممكنة تضمن بقاء نوافذ التنبيه (Modals) في المقدمة." },
    { id: 559, category: "layout", title: "عزلة السياق (Isolation)", code: "isolation: isolate;", description: "إنشاء مجموعة طبقات (Z-Stack) جديدة لعزل العناصر الداخلية.", note: "تمنع تداخل الـ z-index مع بقية أجزاء الموقع." },
    { id: 560, category: "basics", title: "القيم الموروثة (Inherit)", code: "all: inherit;", description: "جعل العنصر يأخذ جميع خصائص الأب دفعة واحدة.", note: "أسرع وسيلة لإعادة ضبط (Reset) العناصر لتبدو كجزء طبيعي من بيئتها." },
    // --- BATCH 12: 561-610 (SUBGRID, MEDIA QUERIES, MATH ADV) ---
    { id: 561, category: "grid", title: "الشبكة الفرعية (Subgrid)", code: "grid-template-columns: subgrid;", description: "جعل الأبناء يستخدمون نفس خطوط الشبكة الخاصة بالأب.", note: "أقوى ميزة لتنسيق العناصر المتداخلة (Nested grids) بشكل متناسق تماماً." },
    { id: 562, category: "grid", title: "تكرار تلقائي (Auto-fit)", code: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));", description: "جعل الشبكة تتمدد لملء الفراغ المتاح مع الحفاظ على أقل عرض.", note: "تخلق شبكة متجاوبة (Responsive) بدون أي ميديا كويري." },
    { id: 563, category: "grid", title: "تكرار ممتلئ (Auto-fill)", code: "grid-template-columns: repeat(auto-fill, 100px);", description: "جعل الشبكة تملأ الصف بأكبر عدد ممكن من الأعمدة حتى لو كانت فارغة.", note: "مفيدة لصنع لوحات تحكم (Dashboards) ذات حجم ثابت للعناصر." },
    { id: 564, category: "responsive", title: "تفضيل الحركة (Motion)", code: "@media (prefers-reduced-motion: reduce) { ... }", description: "تعطيل الأنيميشن للمستخدمين الذين يعانون من دوار الحركة.", note: "جزء أساسي من إمكانية الوصول (Accessibility) والمواقع الاحترافية." },
    { id: 565, category: "responsive", title: "تفضيل التباين (Contrast)", code: "@media (prefers-contrast: more) { ... }", description: "زيادة وضوح الألوان للمستخدمين ذوي الرؤية الضعيفة الحساسين للتباين.", note: "تضمن أن موقعك مريح للاستخدام للجميع." },
    { id: 566, category: "responsive", title: "تفضيل الثيم (Dark/Light)", code: "@media (prefers-color-scheme: dark) { ... }", description: "تطبيق أكواد خاصة بناءً على وضع الجهاز (ليلي أو نهاري).", note: "تسمح بتغيير ألوان الموقع بالكامل تلقائياً لتناسب راحة عين المستخدم." },
    { id: 567, category: "responsive", title: "تفضيل الشفافية (Transparency)", code: "@media (prefers-reduced-transparency: reduce) { ... }", description: "تقليل استخدام تأثيرات (Glassmorphism) بناءً على رغبة المستخدم.", note: "تحسن وضوح القراءة للذين يجدون صعوبة في تمييز النصوص فوق الخلفيات الشفافة." },
    { id: 568, category: "math", title: "الظل الرياضي (Tan)", code: "transform: skewX(calc(atan(0.5)));", description: "استخدام الدوال المثلثية لحساب زوايا الميل بدقة هندسية.", note: "تستخدم في بناء رسومات معقدة (3D Models) داخل المتصفح." },
    { id: 569, category: "math", title: "الزاوية القطبية (Atan2)", code: "transform: rotate(calc(atan2(1, 1)));", description: "حساب الزاوية بين مركز العنصر ونقطة معينة.", note: "تستخدم في الألعاب لصنع اتجاهات حركة ذكية تتبع مؤشر الماوس." },
    { id: 570, category: "colors", title: "نظام الألوان LCH", code: "color: lch(50% 100 200);", description: "نظام ألوان يعتمد على الإدراك البشري للسطوع والتشبع.", note: "يوفر ألواناً أكثر حيوية وصدقاً مما يمكن لـ RGB إنتاجه." },
    { id: 571, category: "colors", title: "نظام الألوان LAB", code: "color: lab(50% 20 -40);", description: "أدق نظام لوني علمي يستخدم لمقارنة الألوان بين المطبوع والشاشة.", note: "يضمن عدم وجود 'ألوان مستحيلة' خارج نطاق رؤية العين." },
    { id: 572, category: "colors", title: "دالة اللون المفتوحة (Color)", code: "color: color(display-p3 1 0.5 0);", description: "الوصول للفضاءات اللونية الحديثة (Wide Gamut) المتوفرة في الشاشات الجديدة.", note: "تسمح برؤية ألوان فائقة السطوع لا تظهر في الأنظمة القديمة." },
    { id: 573, category: "scrolling", title: "توقف السكرول الجانبي", code: "scroll-snap-type: x mandatory;", description: "إجبار معرض الصور العرضي على التوقف عند كل صورة بالضبط.", note: "تضمن أن الصورة تكون دائماً في منتصف الشاشة عند التوقف." },
    { id: 574, category: "scrolling", title: "هوامش التوقف (Shorthand)", code: "scroll-padding: 20px 0 100px;", description: "تحديد مسافة الأمان لجميع الجهات عند الالتصاق بالسكرول.", note: "تجمع الهوامش الأربعة في سطر واحد لسهولة الإدارة." },
    { id: 575, category: "scrolling", title: "إزاحة التوقف (Scroll Margin)", code: "scroll-margin: 50px;", description: "تحديد المسافة الخارجية للعنصر التي تبتعد عن حافة الشاشة عند السكرول.", note: "تمنع العنصر من الالتصاق التام بحافة الصفحة." },
    { id: 576, category: "layout", title: "احتواء الأبعاد (Contain: Size)", code: "contain: size;", description: "إخبار المتصفح بأن حجم العنصر لا يتأثر بمحتواه الداخلي.", note: "تزيد من سرعة عرض الصفحة لأن المتصفح لن يضطر لحساب الحجم في كل مرة." },
    { id: 577, category: "layout", title: "احتواء الرسم (Contain: Paint)", code: "contain: paint;", description: "منع رسم أي محتوى يخرج عن حدود العنصر نهائياً.", note: "أقوى من overflow: hidden لأنها تعزل طبقة الرسم تماماً." },
    { id: 578, category: "layout", title: "الاحتواء الكامل (Strict)", code: "contain: strict;", description: "تطبيق جميع أنواع الاحتواء (Size, Layout, Paint) معاً.", note: "هذا هو 'الوضع الآمن' الأقصى لتحسين أداء الأنظمة الضخمة." },
    { id: 579, category: "layout", title: "النسبة البصرية (Aspect-ratio MQ)", code: "@media (aspect-ratio < 1/1) { ... }", description: "تطبيق أكواد فقط للشاشات الطويلة (مثل وضع الموبايل الرأسي).", note: "أكثر دقة من الاعتماد على العرض فقط (Width)." },
    { id: 580, category: "layout", title: "محاذاة العناصر (Items)", code: "align-items: baseline;", description: "محاذاة النصوص داخل العناصر بناءً على خط الكتابة الأصلي.", note: "تضمن أن النصوص ذات الأحجام المختلفة تبدو على خط أفقي واحد." },
    { id: 581, category: "layout", title: "المحاذاة الذاتية (Align Self)", code: "align-self: flex-end;", description: "تغيير محاذاة عنصر واحد فقط داخل حاوية فليكس.", note: "تسمح بكسر قاعدة التوازي لعمل تصميمات غير تقليدية." },
    { id: 582, category: "flexbox", title: "اتجاه الفليكس المعكوس", code: "flex-direction: row-reverse;", description: "قلب ترتيب العناصر أفقياً ليصبح الأول أخيراً.", note: "تستخدم أحياناً لعكس اتجاه الصور والنصوص في وضع الموبايل." },
    { id: 583, category: "flexbox", title: "توزيع المحتوى (Justify)", code: "justify-content: space-evenly;", description: "توزيع الفراغات بالتساوي تماماً بين وحول العناصر.", note: "تعطي تناسقاً أفضل من space-between في بعض القوائم." },
    { id: 584, category: "graphics", title: "تغميق الصورة (Darken)", code: "background-blend-mode: darken;", description: "دمج الصورتين بحيث تظهر المناطق الأغمق فقط من كل منهما.", note: "تأثير فني رائع لدمج الرسومات مع بعضها." },
    { id: 585, category: "graphics", title: "تفتيح الصورة (Lighten)", code: "background-blend-mode: lighten;", description: "دمج الصورتين بحيث تظهر المناطق الأفتح فقط.", note: "تستخدم لعمل تألق (Glow) بصري فوق الصور." },
    { id: 586, category: "graphics", title: "تأثير الشاشة (Screen)", code: "background-blend-mode: screen;", description: "عكس الألوان وضربها ثم عكسها مرة أخرى (للإضاءة).", note: "تستخدم لإزالة الخلفيات السوداء من الصور وجعلها شفافة." },
    { id: 587, category: "graphics", title: "فلتر البعد الثالث (Drop Shadow)", code: "filter: drop-shadow(0 0 10px gold);", description: "صنع هالة مضيئة (Glow) حول العنصر بالكامل.", note: "السر وراء تأثيرات الأسلحة والقدرات السحرية في ألعاب الويب." },
    { id: 588, category: "graphics", title: "فلتر التشبع الفائق", code: "filter: saturate(10);", description: "جعل الألوان حية جداً وبشكل مبالغ فيه.", note: "تستخدم في لحظات الأنيميشن الدرامية أو عند ضغط المستخدم على زر." },
    { id: 589, category: "interactivity", title: "تفاعل الماوس المنطقي", code: "pointer-events: bounding-box;", description: "جعل التفاعل مقتصراً على المساحة الإجمالية للعنصر.", note: "تستخدم بكثرة مع SVG لضمان الضغط على الشكل كاملاً." },
    { id: 590, category: "interactivity", title: "سرعة كتابة الكود (Input)", code: "input:read-only { background: #eee; }", description: "تنسيق الحقول التي لا يمكن للمستخدم الكتابة فيها.", note: "تواصل بصري مهم لمنع المستخدم من محاولة تعديل بيانات ثابتة." },
    { id: 591, category: "interactivity", title: "تنبيه الحقل المطلوب", code: "input:required { border-right: 5px solid red; }", description: "تمييز الحقول الإجبارية في النموذج لضمان ملئها.", note: "تغنيك عن كتابة رسائل خطأ طويلة." },
    { id: 592, category: "interactivity", title: "دقة الاختيار (Checked State)", code: "input:checked + label { font-weight: bold; }", description: "تغيير شكل العناصر المجاورة عند اختيار زر خيار معين.", note: "الأساس الذي تبنى عليه (Custom Checkboxes) والتبويبات." },
    { id: 593, category: "basics", title: "القص المطور (Mask Clip)", code: "mask-clip: content-box;", description: "تحديد أين يتوقف مفعول القناع داخل العنصر.", note: "تعطيك دقة متناهية في تصميم الأيقونات المفرغة." },
    { id: 594, category: "basics", title: "وضعية القناع (Mask Position)", code: "mask-position: bottom center;", description: "تحريك القناع ووضعه في مكان محدد.", note: "تستخدم لعمل تأثيرات 'كشاف الضوء' المتحرك." },
    { id: 595, category: "typography", title: "حجم الخط الجذري (Rem)", code: "font-size: 1.25rem;", description: "حجم الخط بناءً على حجم الخط الأساسي للموقع.", note: "تضمن تناسق الخطوط في كل أجزاء الموقع مهما كانت درجة تداخل العناصر." },
    { id: 596, category: "typography", title: "حجم الخط الفرعي (Em)", code: "font-size: 0.8em;", description: "حجم الخط بالنسبة لحجم خط العنصر الأب المباشر.", note: "تستخدم لصنع نصوص صغيرة تابعة (Subtitles) داخل مكونات معينة." },
    { id: 597, category: "boxmodel", title: "عرض المحتوى المناسب", code: "width: fit-content;", description: "جعل العنصر يكبر حسب محتواه حتى يصل للحد الأقصى.", note: "أذكى وسيلة لصنع (Centered Navigation) تتمدد بذكاء." },
    { id: 598, category: "boxmodel", title: "عرض المحتوى الأقصى", code: "width: max-content;", description: "جعل العنصر لا ينكسر أبداً ويأخذ عرضه كاملاً في سطر واحد.", note: "تستخدم في الجداول وأشرطة الأخبار المتحركة." },
    { id: 599, category: "boxmodel", title: "العرض المشروط (Intrinsic)", code: "width: min-content;", description: "جعل العنصر يتقلص لأصغر مساحة ممكنة (أطول كلمة فيه).", note: "تستخدم في تصميمات الـ Sidebar المعقدة." },
    { id: 600, category: "performance", title: "تأجيل الرسم (Paint Delay)", code: "contain: content;", description: "عزل محتوى العنصر تماماً وحجزه عن بقية الصفحة.", note: "تعتبر 'أسرع' خيار لتحسين أداء السحب والإفلات (Drag & Drop)." },
    { id: 601, category: "math", title: "القيمة المطلقة (Abs)", code: "margin: calc(abs(-10px));", description: "تحويل الأرقام التالفة (السالبة) لأرقام موجبة دائماً.", note: "تحل مشاكل حسابية معقدة في التصميمات التي تعتمد على متغيرات متغيرة." },
    { id: 602, category: "math", title: "الحد الأدنى للجذر", code: "width: calc(sqrt(25) * 1px);", description: "استخدام الجذور التربيعية في الحسابات الهندسية.", note: "مفيدة جداً عند بناء شبكات (Grid) تعتمد على النسبة الذهبية." },
    { id: 603, category: "responsive", title: "عامل تكبير الخط", code: "text-size-adjust: none;", description: "منع المتصفح من تكبير الخط تلقائياً عند تدوير الموبايل.", note: "تحافظ على دقة التصميم في الأجهزة المحمولة." },
    { id: 604, category: "typography", title: "تحسين التباعد (Optimize Speed)", code: "text-rendering: optimizeSpeed;", description: "رسم النص بأسرع وسيلة ممكنة للمتصفح.", note: "تستخدم في النسخ المحمولة جداً لضمان سلاسة التمرير." },
    { id: 605, category: "graphics", title: "انتقال لون الخلفية", code: "transition: background-color 0.5s ease-in-out;", description: "تغيير لون الخلفية بنعومة عند حدوث حدث معين.", note: "تعطي إحساساً بالفخامة عند تبديل الثيمات أو لمس الأزرار." },
    { id: 606, category: "graphics", title: "درجة ميل التدرج", code: "background: linear-gradient(135deg, red, blue);", description: "تحديد زاوية ميل الألوان بالضبط بالدرجات.", note: "الزاوية 135 تسمى 'الزاوية الماسية' وتعطي تدرجاً قطرياً جميلاً." },
    { id: 607, category: "graphics", title: "تكرار التدرج اللوني", code: "background: repeating-linear-gradient(yellow, yellow 10px, red 10px, red 20px);", description: "صنع أنماط متكررة (مثل الخطوط أو الجدران) بـ CSS فقط.", note: "توفر حمولة الصور وتحافظ على دقة ووضوح الأنماط عند التكبير." },
    { id: 608, category: "graphics", title: "شفافية الحدود", code: "border-color: rgba(255, 255, 255, 0.1);", description: "جعل حواف العنصر شبه مخفية لتسمح برؤية ما خلفها.", note: "جزء أساسي من فلسفة تصميم (Glassmorphism)." },
    { id: 609, category: "interactivity", title: "منع اللمس المطول", code: "-webkit-touch-callout: none;", description: "منع ظهور قائمة المتصفح (حفظ الصورة) عند الضغط المطول في الموبايل.", note: "تستخدم في تطبيقات الويب لجعلها تشبه التطبيقات الأصلية." },
    { id: 610, category: "basics", title: "تجاهل التوريث (Initial)", code: "all: initial;", description: "تصفير جميع خصائص العنصر لتعود لحالتها الأصلية كما خلقها المتصفح أول مرة.", note: "أقوى وسيلة لمحاربة التأثيرات الجانبية للأكواد القديمة (Legacy CSS)." },
    // --- BATCH 13: 611-660 (MIX BLEND MODES, PERFORMANCE, PRINT DEEP DIVE) ---
    { id: 611, category: "graphics", title: "دمج الفروقات (Difference)", code: "mix-blend-mode: difference;", description: "طرح لون العنصر من لون الخلفية، مما يخلق ألواناً معكوسة.", note: "تستخدم لصنع نصوص يتغير لونها تلقائياً حسب لون الخلفية التي تمر فوقها." },
    { id: 612, category: "graphics", title: "دمج الاستبعاد (Exclusion)", code: "mix-blend-mode: exclusion;", description: "مشابه للفرق ولكنه ينتج تبايناً أقل ونعومة أكثر في الألوان.", note: "تأثير فني فخم يستخدم في المواقع الإبداعية والبورفوليو." },
    { id: 613, category: "graphics", title: "صبغة اللون (Hue Blend)", code: "mix-blend-mode: hue;", description: "تغيير لون الخلفية بنفس درجة لون العنصر مع الحفاظ على إضاءتها.", note: "تسمح بتلوين الصور الرمادية بلمسة واحدة." },
    { id: 614, category: "graphics", title: "دمج التشبع (Saturation)", code: "mix-blend-mode: saturation;", description: "دمج مستوى تشبع العنصر مع ألوان الخلفية.", note: "تستخدم لجعل مناطق معينة من الصورة أكثر حيوية بـ CSS فقط." },
    { id: 615, category: "graphics", title: "دمج الألوان (Color Blend)", code: "mix-blend-mode: color;", description: "دمج لون وتشبع العنصر مع إضاءة الخلفية.", note: "أفضل وسيلة لتلوين الصور القديمة أو تغيير لون الملابس في الصور." },
    { id: 616, category: "graphics", title: "دمج الإضاءة (Luminosity)", code: "mix-blend-mode: luminosity;", description: "استخدام إضاءة العنصر مع لون وتشبع الخلفية.", note: "تخلق تأثيراً معاكساً تماماً لـ Color Blend." },
    { id: 617, category: "performance", title: "تغيير المحتوى القادم", code: "will-change: contents;", description: "تجهيز المتصفح لتغييرات جذرية في شكل المحتوى الداخلي.", note: "تستخدم في العناصر التي يتم تحديث بياناتها باستمرار عبر JS." },
    { id: 618, category: "performance", title: "تغيير مكان السكرول", code: "will-change: scroll-position;", description: "تحسين أداء التمرير في العناصر التي تحتوي على آلاف الأسطر.", note: "تمنع تقطع الصورة (Stutter) أثناء التمرير السريع." },
    { id: 619, category: "scrolling", title: "مسافة السكرول العليا", code: "scroll-padding-top: 100px;", description: "ترك مسافة في الأعلى عند الانتقال لرابط داخلي.", note: "الحل النهائي لمشكلة العناوين التي تختفي تحت الـ Fixed Header." },
    { id: 620, category: "scrolling", title: "مسافة السكرول السفلى", code: "scroll-padding-bottom: 50px;", description: "ترك مسافة في الأسفل تمنع التصاق العنصر بحافة الشاشة السفلية.", note: "تحسن تجربة القراءة في الصفحات الطويلة." },
    { id: 621, category: "scrolling", title: "مسافة السكرول اليمنى", code: "scroll-padding-right: 20px;", description: "هوامش داخلية للتمرير العرضي من الجانب الأيمن.", note: "مهمة جداً في المواقع العربية (RTL)." },
    { id: 622, category: "scrolling", title: "مسافة السكرول اليسرى", code: "scroll-padding-left: 20px;", description: "هوامش داخلية للتمرير العرضي من الجانب الأيسر.", note: "تضمن عدم قص أطراف الكروت في السلايدر الجانبي." },
    { id: 623, category: "printing", title: "قطع الصفحة قبل (Page Break)", code: "page-break-before: always;", description: "إجبار الطابعة على بدء صفحة جديدة قبل هذا العنصر.", note: "تستخدم لبدء الفصول الجديدة في التقارير المطبوعة." },
    { id: 624, category: "printing", title: "قطع الصفحة بعد", code: "page-break-after: avoid;", description: "محاولة منع الطابعة من ترك هذا العنصر وحيداً في نهاية الصفحة.", note: "تحافظ على تماسك العناوين مع الفقرات التابعة لها." },
    { id: 625, category: "printing", title: "منع القطع الداخلي", code: "page-break-inside: avoid;", description: "منع تقسيم العنصر (مثل صورة أو جدول) عبر صفحتين.", note: "تضمن احترافية مظهر الملفات عند تحويلها لـ PDF." },
    { id: 626, category: "typography", title: "تخطي زخرفة النص", code: "text-decoration-skip: spaces;", description: "جعل خط التسطير يتوقف عند الفراغات بين الكلمات.", note: "تعطي مظهراً أنيقاً يشبه الكتابة اليدوية الفاخرة." },
    { id: 627, category: "typography", title: "مكان الخط (Shorthand)", code: "text-decoration: underline double #333 3px;", description: "دمج جميع خصائص التسطير في سطر واحد (نوع، شكل، لون، سمك).", note: "الطريقة الأسرع في CSS 3 لإدارة روابط الموقع." },
    { id: 628, category: "boxmodel", title: "تقسيم صورة الحدود (Slice)", code: "border-image-slice: 30% fill;", description: "تحديد كيفية تقسيم الصورة المستخدمة كبرواز مع الحفاظ على الوسط.", note: "كلمة fill تجعل صورة البرواز تظهر كخلفية أيضاً للعنصر." },
    { id: 629, category: "boxmodel", title: "تمدد صورة الحدود (Outset)", code: "border-image-outset: 10px;", description: "دفع صورة البرواز للخارج بعيداً عن حدود العنصر الأصلية.", note: "تسمح بعمل براويز تطفو حول العناصر بجمالية عالية." },
    { id: 630, category: "boxmodel", title: "تكرار صورة البرواز", code: "border-image-repeat: space;", description: "تكرار صورة البرواز مع ترك مسافات متساوية لضمان عدم قص الصورة.", note: "تضمن ظهور النمط (Pattern) بشكل كامل في كل مرة." },
    { id: 631, category: "interactive", title: "تفاعلية القناع (Mask Type)", code: "mask-type: luminance;", description: "تحديد ما إذا كان القناع يعتمد على ألوان الإضاءة (الأبيض يظهر والأسود يخفي).", note: "تستخدم لتحويل الصور العادية لأقنعة ذكية." },
    { id: 632, category: "interactive", title: "إدارة تمرير اللمس", code: "touch-action: pan-x pan-y;", description: "تحديد الحركات المسموح بها للمستخدم عند لمس الشاشة.", note: "تستخدم في الخرائط ومعارض الصور لمنع اهتزاز الصفحة عند السحب." },
    { id: 633, category: "animation", title: "خوارزمية الحساب (Steps)", code: "animation-timing-function: steps(5, end);", description: "جعل الحركة تبدو كمراحل متقطعة بدلاً من الانزلاق (مثل عقرب الثواني).", note: "السر وراء صنع الشخصيات المتحركة (Sprite Sheet Animation)." },
    { id: 634, category: "animation", title: "حالة الأنيميشن الساكنة", code: "animation-play-state: paused;", description: "إيقاف الحركة مؤقتاً في مكانها الحالي.", note: "تستخدم برمجياً لإيقاف حركة العناصر عند خروجها من الشاشة لتوفير الطاقة." },
    { id: 635, category: "animation", title: "حالة الأنيميشن النشطة", code: "animation-play-state: running;", description: "إعادة تشغيل الحركة التي تم إيقافها.", note: "تستخدم لربط الحركة بمرور الماوس أو النقر." },
    { id: 636, category: "basics", title: "تجاوز التدفق الذكي", code: "overflow: clip;", description: "منع التمرير تماماً وإخفاء المحتوى الزائد بدون إمكانية الوصول إليه برمجياً.", note: "أسرع أداءً من hidden وتستخدم في العناصر الرسومية الثابتة." },
    { id: 637, category: "basics", title: "التدفق المرئي (Visible)", code: "overflow: visible;", description: "السماح للمحتوى بالخروج من العنصر وعدم قصه.", note: "الوضع الافتراضي، مفيد للعناصر التي تحتوي على ظلال أو قوائم منبثقة." },
    { id: 638, category: "typography", title: "تباعد الأحرف المطور", code: "letter-spacing: -1px;", description: "تقليل المسافة بين الحروف لجعل النص يبدو أكثر كثافة وقوة.", note: "تستخدم في العناوين الضخمة لمنع 'تفكك' الكلمات بصرياً." },
    { id: 639, category: "typography", title: "وحدات بصرية (Ex)", code: "margin-top: 5ex;", description: "وحدة قياس تعتمد على ارتفاع الحرف الصغير في الخط الحالي.", note: "أفضل وحدة لضمان تناسق الهوامش مع طول الأسطر." },
    { id: 640, category: "typography", title: "وحدات عرض (Ch)", code: "font-size: 2ch;", description: "جعل حجم الخط مساوياً لعرض الرقم صفر في الخط المستخدم.", note: "مفيدة جداً في التصميمات التي تعتمد على مربعات النص البرمجية." },
    { id: 641, category: "layout", title: "محاذاة الكائنات (Shorthand)", code: "place-items: center start;", description: "اختصار لـ align-items و justify-items في سطر واحد.", note: "أسرع كود لضبط جميع أبناء الشبكة (Grid) دفعة واحدة." },
    { id: 642, category: "layout", title: "محاذاة الحاوية (Shorthand)", code: "place-content: space-between center;", description: "اختصار لـ align-content و justify-content.", note: "تستخدم لتوزيع مجموعات العناصر داخل المساحات الواسعة." },
    { id: 643, category: "math", title: "مساحة مرنة (Min)", code: "width: min(100%, 1200px);", description: "اختيار القيمة الأصغر بين قيمتين.", note: "أفضل طريقة لضمان أن الموقع لا يتعدى عرضاً معيناً مع بقائه متجاوباً في الشاشات الصغيرة." },
    { id: 644, category: "math", title: "مساحة مرنة (Max)", code: "padding: max(20px, 5vw);", description: "ضمان أقل رقم ممكن مع السماح بالزيادة في الشاشات الكبيرة.", note: "تستخدم لتوسيع الهوامش في الشاشات العملاقة تلقائياً." },
    { id: 645, category: "math", title: "أطراف مرنة (Clamp)", code: "font-size: clamp(1rem, 2.5vw, 2rem);", description: "تحديد حد أدنى ومعدل زيادة وحد أقصى في سطر سحري واحد.", note: "أذكى دالة في تاريخ CSS لإدارة أحجام النصوص (Fluid Typography)." },
    { id: 646, category: "responsive", title: "توجيه الصفحة (Orientation)", code: "@media (orientation: landscape) { ... }", description: "تنسيق خاص عند تدوير الجهاز للوضع العرضي.", note: "تستخدم لتغيير تخطيط المواقع ليناسب المساحة العريضة في التابلت والموبايل." },
    { id: 647, category: "responsive", title: "دقة الشاشة (Resolution)", code: "@media (min-resolution: 300dpi) { ... }", description: "توفير صور عالية الدقة (Retina Images) للأجهزة ذات الشاشات القوية.", note: "تضمن بقاء موقعك حاداً وواضحاً في أجهزة آيفون والماك الحديثة." },
    { id: 648, category: "responsive", title: "دعم ملامح المتصفح", code: "@supports (display: grid) { ... }", description: "شرط برمجي يسأل المتصفح: 'هل تدعم هذه الخاصية؟' قبل تطبيقها.", note: "تسمح باستخدام أحدث تقنيات الويب مع توفير بدائل (Fallbacks) للمتصفحات القديمة." },
    { id: 649, category: "colors", title: "تفتيح اللون (Lightness)", code: "color: hsl(200, 50%, 90%);", description: "التحكم في درجة بياض اللون.", note: "تعديل بسيط في الرقم الثالث يغير جو التصميم من كئيب إلى مشرق." },
    { id: 650, category: "colors", title: "درجة التشبع (Saturation)", code: "color: hsl(200, 100%, 50%);", description: "جعل اللون فاقعاً أو رمادياً باهتاً.", note: "تستخدم لتمييز العناصر المهمة عن العناصر الثانوية." },
    { id: 651, category: "graphics", title: "تكرار القناع (Space)", code: "mask-repeat: space;", description: "تكرار القناع مع موازنة المسافات لضمان عدم وجود أنصاف صور.", note: "تعطي حوافاً مثالية للأشكال المزخرفة." },
    { id: 652, category: "graphics", title: "عتبة صورة القناع", code: "mask-image: radial-gradient(circle, black 50%, transparent 50%);", description: "استخدام تدرج لصنع قناع دائري حاد الحواف.", note: "أسهل وسيلة لصنع فتحة رؤية (Spotlight effect) داخل الموقع." },
    { id: 653, category: "layout", title: "إيقاف السكرول العرضي", code: "overflow-x: hidden;", description: "منع ظهور شريط التمرير الأفقي مهما خرجت العناصر.", note: "تستخدم لإصلاح أخطاء التصميم التي تسبب 'اهتزاز' الصفحة يميناً ويساراً في الموبايل." },
    { id: 654, category: "layout", title: "إجبار السكرول الرأسي", code: "overflow-y: scroll;", description: "إظهار مسار السكرول الرأسي دائماً حتى لو كانت الصفحة قصيرة.", note: "تمنع اهتزاز الموقع عند الانتقال لصفحات طويلة (Layout Shift)." },
    { id: 655, category: "typography", title: "تحسس الكلمات (Break All)", code: "word-break: break-all;", description: "كسر الكلمات الطويلة جداً (مثل الروابط) عند أي حرف لتناسب العرض.", note: "تمنع تشوه التصميم عند وجود نصوص يدخلها المستخدمون ولا يمكن التنبؤ بطولها." },
    { id: 656, category: "typography", title: "روبي ستايل (Ruby)", code: "ruby-position: over;", description: "تحديد مكان النصوص التوضيحية الصغيرة فوق الحروف (تستخدم في اللغات الآسيوية).", note: "مستوى متقدم من تنسيق النصوص العالمية." },
    { id: 657, category: "basics", title: "مؤشر الانتظار (Wait)", code: "cursor: wait;", description: "تغيير الماوس لشكل الساعة الرملية أو الدائرة التي تدور.", note: "تنبيه بصري ضروري عند معالجة بيانات ضخمة في الخلفية." },
    { id: 658, category: "basics", title: "مؤشر المنع (Not-allowed)", code: "cursor: not-allowed;", description: "إظهار علامة المنع الحمراء فوق العناصر المعطلة.", note: "تمنع المستخدم من محاولة الضغط على أزرار غير مفعلة حالياً." },
    { id: 659, category: "basics", title: "مؤشر المساعدة (Help)", code: "cursor: help;", description: "إضافة علامة استفهام بجانب مؤشر الماوس.", note: "ممتازة للاستخدام فوق العناوين التي تحتوي على شرح إضافي (Tooltips)." },
    { id: 660, category: "basics", title: "تعديل الموضع (Offset)", code: "offset-path: path('M 10 80 Q 52 10 95 80 T 180 80');", description: "جعل العنصر يتحرك على مسار منحني مرسوم مسبقاً (SVG Path).", note: "أرقى أنواع الحركة في CSS لتغيير مسار العناصر بشكل فني." },
    // --- BATCH 14: 661-710 (ANCHOR POSITION, DYNAMIC VIEWPORT, FINAL TECHNICAL) ---
    { id: 661, category: "position", title: "تثبيت المرساة (Anchor)", code: "position-anchor: --my-anchor;", description: "ربط عنصر بعنصر آخر تماماً مثل المراسي لتسهيل التموضع النسبي.", note: "أحدث ثورة في (Popovers) و (Tooltips) لعام 2024." },
    { id: 662, category: "position", title: "مكان المرساة (Anchor Area)", code: "anchor-name: --my-anchor; top: anchor(bottom);", description: "تحديد اسم للمرساة واستخدام مكانها لتحديد إحداثيات عنصر آخر.", note: "تغنيك عن استخدام جافاسكربت لحساب أماكن القوائم المنبثقة." },
    { id: 663, category: "boxmodel", title: "تشذيب الهوامش (Margin Trim)", code: "margin-trim: block;", description: "حذف الهوامش الزائدة تلقائياً في بداية ونهاية الحاوية.", note: "تحل مشكلة الفراغات البشعة في نهاية القوائم والصناديق." },
    { id: 664, category: "math", title: "الوحدة المتغيرة (Dvh)", code: "height: 100dvh;", description: "وحدة ارتفاع الشاشة الديناميكية التي تتأثر بظهور واختفاء أشرطة المتصفح.", note: "الحل النهائي لمشاكل الارتفاع في متصفحات الموبايل (Safari/Chrome)." },
    { id: 665, category: "math", title: "وحدة الشاشة الصغيرة (Svh)", code: "height: 100svh;", description: "ارتفاع الشاشة عند ظهور جميع أشرطة المتصفح (الحجم الأصغر).", note: "تضمن أن المحتوى لا يختفي تحت أزرار المتصفح." },
    { id: 666, category: "math", title: "وحدة الشاشة الكبيرة (Lvh)", code: "height: 100lvh;", description: "ارتفاع الشاشة عند اختفاء جميع أشرطة المتصفح (الحجم الأكبر).", note: "تستخدم في الخلفيات والـ Full-screen Hero Sections." },
    { id: 667, category: "math", title: "القوة الرياضية (Pow)", code: "font-size: calc(pow(1.2, 5) * 1rem);", description: "استخدام الأس في الحسابات لتوليد تدرج أحجام خطوط منطقي.", note: "تستخدم لبناء Scales تيبوغرافية احترافية وسهلة التعديل." },
    { id: 668, category: "math", title: "اللوغاريتم (Log)", code: "opacity: calc(log(var(--value)) / 2);", description: "استخدام اللوغاريتمات لتنعيم التدرجات والشفافية بشكل علمي.", note: "مستوى متقدم من الرياضيات للمصممين التقنيين." },
    { id: 669, category: "math", title: "الثابت الرياضي (Exp)", code: "z-index: calc(exp(2));", description: "استخدام الثوابت الرياضية (E) في الحسابات المعقدة.", note: "تستخدم في المحاكاة والتحريك الفيزيائي." },
    { id: 670, category: "typography", title: "حدود الوصلات (Hyphens)", code: "hyphenate-limit-chars: 5 2 3;", description: "تحديد متى وكيف يتم كسر الكلمة بالشرطة (Hyphenation).", note: "تمنع كسر الكلمات القصيرة جداً لمظهر أكثر احترافية." },
    { id: 671, category: "typography", title: "تعديل لون الخط التلقائي", code: "forced-color-adjust: none;", description: "منع نظام التشغيل من تغيير ألوان الموقع عند تفعيل وضع (High Contrast).", note: "تستخدم بحذر للحفاظ على هوية البراند البصرية مع احترام إمكانية الوصول." },
    { id: 672, category: "graphics", title: "تنعيم حواف القناع (Mask)", code: "mask-border-mode: luminance;", description: "تحديد كيفية تعامل المتصفح مع إضاءة صورة القناع المحيطة.", note: "تستخدم في صنع براويز صور مفرغة ومعقدة." },
    { id: 673, category: "graphics", title: "مزج الصور المطور", code: "background-blend-mode: soft-light;", description: "دمج الصورتين بطريقة لطيفة تزيد من عمق الألوان بدون حرقها.", note: "تأثير فني يشبه الفلاتر الفوتوغرافية." },
    { id: 674, category: "graphics", title: "دمج الإضاءة القوية", code: "background-blend-mode: hard-light;", description: "تأثير دمج قوي يشبه وضع كشاف إضاءة خلف الصورة.", note: "تستخدم للبوسترات الرقمية ذات الطابع القوي." },
    { id: 675, category: "graphics", title: "تكرار القناع الدائري", code: "mask-image: repeating-radial-gradient(black, black 5px, transparent 5px, transparent 10px);", description: "صنع نمط دوائر مفرغة متكرر بـ CSS فقط.", note: "رائعة لصنع خلفيات تقنية (Cyberpunk style)." },
    { id: 676, category: "responsive", title: "شرائح الشاشة المطوية", code: "@media (viewport-segment-width: 1);", description: "تنسيق خاص للأجهزة القابلة للطي (Foldable devices).", note: "المستقبل في عالم تصميم الموبايل والتابلت المتداخل." },
    { id: 677, category: "responsive", title: "تكبير الشاشة (Zoom)", code: "@media (min-zoom: 200%) { ... }", description: "تفاعل الموقع مع قيام المستخدم بتكبير الصفحة يدوياً.", note: "تساعد في إعادة ترتيب العناصر لخدمة المستخدمين الذين يحتاجون تكبيراً عالياً." },
    { id: 678, category: "basics", title: "تحويل الحالة (Case)", code: "font-variant: ruby;", description: "تطبيق قواعد التنسيق الخاصة بنصوص الروبي الآسيوية.", note: "إضافة متخصصة جداً لدعم اللغات العالمية." },
    { id: 679, category: "basics", title: "إدارة الذاكرة (Visibility)", code: "content-visibility: auto;", description: "تأجيل معالجة العناصر البعيدة عن الشاشة لتسريع الموقع فوراً.", note: "أهم نصيحة تقنية عام 2024 لزيادة سرعة المواقع الضخمة." },
    { id: 680, category: "layout", title: "تحسين التخطيط (Contain)", code: "contain-intrinsic-size: auto 500px;", description: "تحديد حجم تقديري للعنصر لتجنب قفز الصفحة (CLS) عند تحميل المحتوى.", note: "تحسن تجربة المستخدم وتقارير (Core Web Vitals)." },
    { id: 681, category: "layout", title: "الشبكة السطرية (Flat)", code: "display: inline-grid;", description: "جعل حاوية الشبكة تظهر في نفس السطر مع النص.", note: "تستخدم لصنع أيقونات معقدة أو أدوات صغيرة داخل المقال." },
    { id: 682, category: "flexbox", title: "حاوية الفليكس السطرية", code: "display: inline-flex;", description: "جعل حاوية فليكس behave مثل عنصر inline.", note: "مثالية لصنع أشرطة أدوات (Toolbars) داخل النصوص." },
    { id: 683, category: "basics", title: "اختصار الفليكس (Flex)", code: "flex: 1 0 auto;", description: "دمج Grow و Shrink و Basis في كلمة واحدة.", note: "الطريقة المعيارية الموصى بها لإدارة أحجام عناصر الفليكس." },
    { id: 684, category: "basics", title: "اختشار الفونت (Font)", code: "font: italic bold 16px/1.5 Arial, sans-serif;", description: "أضخم اختصار في CSS يجمع 6 خصائص للخطوط في سطر واحد.", note: "تتطلب دقة شديدة في ترتيب الكلمات لتعمل بشكل صحيح." },
    { id: 685, category: "basics", title: "اختصار البرواز (Border)", code: "border: 1px solid black;", description: "دمج السماكة والنوع واللون للبرواز.", note: "السطر الأكثر استخداماً في تاريخ الـ CSS." },
    { id: 686, category: "basics", title: "اختصار الظل (Box Shadow)", code: "box-shadow: 0 4px 8px rgba(0,0,0,0.2);", description: "ضبط الإزاحة والتغبيش والانتشار واللون للظل.", note: "تعطي عمقاً للعناصر وتجعلها تبدو وكأنها تطفو فوق الصفحة." },
    { id: 687, category: "basics", title: "شفافية النظام (Opacity)", code: "opacity: 0;", description: "إخفاء العنصر بالكامل مع بقاء مساحته محجوزة وإمكانية التفاعل معه.", note: "تستخدم في الخدع البرمجية لرفع الملفات والأنيميشن المخفي." },
    { id: 688, category: "basics", title: "ترتيب الطبقات التلقائي", code: "z-index: auto;", description: "ترك المتصفح يقرر الترتيب بناءً على مكان العنصر في الكود.", note: "خيار آمن يمنع تعقيد طبقات الموقع بدون داعي." },
    { id: 689, category: "graphics", title: "قص الحواف الثنائي", code: "border-radius: 10px 50px;", description: "تحديد نصف قطر مختلف للزوايا المتقابلة.", note: "تستخدم لصنع أشكال أوراق الشجر أو العيون بـ CSS." },
    { id: 690, category: "graphics", title: "حجم الصورة المطور", code: "background-size: 50% auto;", description: "تغيير عرض صورة الخلفية مع الحفاظ على التناسب التلقائي للارتفاع.", note: "تضمن عدم تشوه الصور عند تغيير عرض الحاوية." },
    { id: 691, category: "colors", title: "الخلط اللوني (Color Mix)", code: "color: color-mix(in srgb, red, blue);", description: "دمج لونين بنسب محددة لإنتاج لون جديد دون الحاجة لمتغيرات خارجية.", note: "أحدث وسيلة (2023) لتوليد تدرجات ألوان برمجية في CSS." },
    { id: 692, category: "colors", title: "الشفافية النسبية", code: "color: rgb(from var(--main) r g b / 0.5);", description: "أخذ لون من متغير وإضافة شفافية عليه فقط.", note: "ميزة قوية جداً تجعلك تدير ألوانك من مصدر واحد (Single Source of Truth)." },
    { id: 693, category: "math", title: "الحساب بالقيمة المطلقة", code: "width: calc(100% - abs(20px));", description: "إجراء عمليات طرح من قيم موجبة ثابتة لضمان النتائج.", note: "تحمي الموقع من الأخطاء الحسابية في التصميمات المعقدة." },
    { id: 694, category: "scrolling", title: "تنبيه نهاية السكرول", code: "overscroll-behavior-y: none;", description: "إيقاف سحب الصفحة لتحديثها (Pull-to-refresh) في المتصفحات.", note: "ضرورية عند برمجة واجهات داخلية لمنع خروج المستخدم من التطبيق بالخطأ." },
    { id: 695, category: "interactivity", title: "تفاعل الماوس الشفاف", code: "pointer-events: none;", description: "جعل العنصر غير محسوس تماماً وكأنه غير موجود للماوس.", note: "تسمح بالضغط على الأزرار الموجودة خلف الصور والرسومات." },
    { id: 696, category: "interactivity", title: "لون الكاريت المخصص", code: "caret-color: red;", description: "تغيير لون مؤشر الكتابة الوامض.", note: "لمسة جمالية بسيطة ولكنها تظهر مدى احترافية واجهة الإدخال." },
    { id: 697, category: "typography", title: "نمط كسر الأسطر", code: "line-break: strict;", description: "تطبيق قواعد صارمة جداً لكسر الأسطر تمنع البدء بعلامات ترقيم معينة.", note: "مهمة جداً للنصوص الأدبية والمقالات الرسمية." },
    { id: 698, category: "typography", title: "تموضع الروبي (Align)", code: "ruby-align: space-around;", description: "توزيع النص التوضيحي الآسيوي فوق الكلمة بالتساوي.", note: "أعلى مستوى من دعم اللغات العالمية في الويب." },
    { id: 699, category: "graphics", title: "تلوين القناع (Mask Color)", code: "mask-border-source: url('border.png');", description: "استخدام صورة لبروز القناع بالكامل.", note: "تسمح بصنع إطارات صور فنية ومزخرفة بملف واحد." },
    { id: 700, category: "performance", title: "تلميح الذاكرة العشوائية", code: "will-change: auto;", description: "ترك المتصفح يقرر متى يفرغ الذاكرة ومتى يحجزها.", note: "الوضع الافتراضي والأكثر استقراراً للأجهزة الضعيفة." },
    { id: 701, category: "layout", title: "تجميع الشبكة (Shorthand)", code: "grid-template: 'h h' 50px 'm s' 1fr / 1fr 200px;", description: "أضخم اختصار يدمج المناطق والصفوف والأعمدة في سطر واحد.", note: "يتطلب احترافية عالية لقراءته وفهمه ولكنه يقلل الكود بشكل مذهل." },
    { id: 702, category: "boxmodel", title: "السمك المنطقي (Block)", code: "border-block-width: thin;", description: "استخدام كلمات وصفية لسمك الحدود العليا والسفلى.", note: "تعطي سمكاً متوافقاً مع معايير المتصفح للوضوح." },
    { id: 703, category: "boxmodel", title: "السمك المنطقي (Inline)", code: "border-inline-width: thick;", description: "استخدام كلمات وصفية لسمك الحدود الجانبية.", note: "تجعل الحدود الجانبية تبرز بشكل واضح للبيانات المهمة." },
    { id: 704, category: "graphics", title: "انحناء الزاوية المائلة", code: "border-top-left-radius: 100px 50px;", description: "صنع انحناء 'بيضاوي' بدلاً من الدائري.", note: "تستخدم لصنع أشكال هندسية غير متماثلة تضفي حيوية للتصميم." },
    { id: 705, category: "basics", title: "اتجاه كائنات الصفحة", code: "direction: rtl;", description: "تحويل تخطيط الموقع بالكامل ليدعم اللغة العربية (اليمين لليسار).", note: "هذا هو الأساس الذي بني عليه موقعنا المتجاوب هذا." },
    { id: 706, category: "basics", title: "محاذاة عمودية أساسية", code: "vertical-align: sub;", description: "جعل النص يظهر كـ (Subscript) أي في أسفل السطر.", note: "تستخدم في المعادلات الكيميائية والرياضية." },
    { id: 707, category: "basics", title: "محاذاة علوية (Super)", code: "vertical-align: super;", description: "جعل النص يظهر في أعلى السطر.", note: "تستخدم في التهميش (Footnotes) والعلامات التجارية." },
    { id: 708, category: "interactivity", title: "مؤشر الزوم (In)", code: "cursor: zoom-in;", description: "إظهار علامة المكبر (+) لتوحي بإمكانية تكبير الصورة.", note: "تواصل بصري مهم لمعارض الصور الاحترافية." },
    { id: 709, category: "interactivity", title: "مؤشر الزوم (Out)", code: "cursor: zoom-out;", description: "إظهار علامة المكبر (-) لتوحي بإمكانية تصغير الصورة.", note: "تستخدم لإغلاق معاينة الصورة الكاملة." },
    { id: 710, category: "basics", title: "الشفافية الكاملة (Initial)", code: "opacity: initial;", description: "إعادة شفافية العنصر لحالتها الافتراضية (1).", note: "تستخدم لتعطيل تأثيرات الاختفاء السابقة." },
    // --- BATCH 15: 711-760 (THE CURSOR COLLECTION) ---
    { id: 711, category: "cursor", title: "مؤشر الاسم المستعار", code: "cursor: alias;", description: "سهم مع سهم صغير منحني، يدل على إنشاء اختصار.", note: "تستخدم في مديري الملفات." },
    { id: 712, category: "cursor", title: "مؤشر التمرير الشامل", code: "cursor: all-scroll;", description: "سهم رباعي الاتجاهات مع نقطة في المنتصف.", note: "يدل على إمكانية تحريك الصفحة في أي اتجاه." },
    { id: 713, category: "cursor", title: "مؤشر الخلية", code: "cursor: cell;", description: "علامة زائد سميكة بيضاء.", note: "تستخدم في تطبيقات الجداول مثل Excel." },
    { id: 714, category: "cursor", title: "مؤشر القائمة", code: "cursor: context-menu;", description: "سهم مع قائمة صغيرة بجانبه.", note: "يدل على وجود قائمة عند الضغط بالزر الأيمن." },
    { id: 715, category: "cursor", title: "مؤشر النسخ", code: "cursor: copy;", description: "سهم مع علامة زائد صغيرة.", note: "يدل على أن السحب سيؤدي لنسخ العنصر." },
    { id: 716, category: "cursor", title: "مؤشر التوسيع الشرقي", code: "cursor: e-resize;", description: "سهم يشير لليمين.", note: "لتوسيع النوافذ من الجهة اليمنى." },
    { id: 717, category: "cursor", title: "مؤشر التوسيع الشمالي", code: "cursor: n-resize;", description: "سهم يشير للأعلى.", note: "لتوسيع النوافذ من الأعلى." },
    { id: 718, category: "cursor", title: "مؤشر التوسيع الشمالي الشرقي", code: "cursor: ne-resize;", description: "سهم قطري للأعلى واليمين.", note: "لتوسيع الزوايا." },
    { id: 719, category: "cursor", title: "مؤشر التوسيع الشمالي الغربي", code: "cursor: nw-resize;", description: "سهم قطري للأعلى واليسار.", note: "لتوسيع الزوايا." },
    { id: 720, category: "cursor", title: "مؤشر التوسيع الجنوبي", code: "cursor: s-resize;", description: "سهم يشير للأسفل.", note: "لتوسيع النوافذ من الأسفل." },
    { id: 721, category: "cursor", title: "مؤشر التوسيع الجنوبي الشرقي", code: "cursor: se-resize;", description: "سهم قطري للأسفل واليمين.", note: "لتوسيع الزوايا." },
    { id: 722, category: "cursor", title: "مؤشر التوسيع الجنوبي الغربي", code: "cursor: sw-resize;", description: "سهم قطري للأسفل واليسار.", note: "لتوسيع الزوايا." },
    { id: 723, category: "cursor", title: "مؤشر التوسيع الغربي", code: "cursor: w-resize;", description: "سهم يشير لليسار.", note: "لتوسيع النوافذ من اليسار." },
    { id: 724, category: "cursor", title: "مؤشر التوسيع الرأسي", code: "cursor: ew-resize;", description: "سهم مزدوج أفقي.", note: "يدل على إمكانية التوسيع يميناً ويساراً." },
    { id: 725, category: "cursor", title: "مؤشر التوسيع العمودي", code: "cursor: ns-resize;", description: "سهم مزدوج رأسي.", note: "يدل على إمكانية التوسيع صعوداً ونزولاً." },
    { id: 726, category: "cursor", title: "مؤشر القطر الأول", code: "cursor: nesw-resize;", description: "سهم مزدوج قطري (يمين-أعلى / يسار-أسفل).", note: "للتحكم في الزوايا." },
    { id: 727, category: "cursor", title: "مؤشر القطر الثاني", code: "cursor: nwse-resize;", description: "سهم مزدوج قطري (يسار-أعلى / يمين-أسفل).", note: "للتحكم في الزوايا." },
    { id: 728, category: "cursor", title: "مؤشر تغيير العمود", code: "cursor: col-resize;", description: "سهمين مع خط عمودي فاصل.", note: "تستخدم لتغيير عرض الأعمدة في الجداول." },
    { id: 729, category: "cursor", title: "مؤشر تغيير الصف", code: "cursor: row-resize;", description: "سهمين مع خط أفقي فاصل.", note: "تستخدم لتغيير ارتفاع الصفوف في الجداول." },
    { id: 730, category: "cursor", title: "مؤشر الإمساك", code: "cursor: grab;", description: "يد مفتوحة.", note: "تدل على عنصر قابل للسحب." },
    { id: 731, category: "cursor", title: "مؤشر السحب", code: "cursor: grabbing;", description: "يد مغلقة.", note: "تظهر أثناء عملية السحب الفعلي." },
    { id: 732, category: "cursor", title: "مؤشر الممنوع", code: "cursor: no-drop;", description: "يد مع علامة منع.", note: "تظهر عند محاولة إفلات عنصر في مكان غير مسموح." },
    { id: 733, category: "cursor", title: "مؤشر التقدم", code: "cursor: progress;", description: "سهم مع ساعة رملية صغيرة.", note: "يدل على أن البرنامج يعمل ولكن يمكن استخدامه." },
    { id: 734, category: "cursor", title: "مؤشر النص العمودي", code: "cursor: vertical-text;", description: "شكل حرف I نائم.", note: "تستخدم للنصوص المكتوبة رأسياً (آسيوي)." },
    { id: 735, category: "cursor", title: "مؤشر لا شيء", code: "cursor: none;", description: "إخفاء الماوس تماماً.", note: "تستخدم في مشاهدة الفيديو ملء الشاشة أو أكشاك الخدمة الذاتية." },
    // --- GAP FILLER 1: 736-760 (COUNTERS & CONTENT) ---
    { id: 736, category: "lists", title: "تهيئة العداد", code: "counter-reset: my-counter 0;", description: "إنشاء عداد رقمي جديد أو تصفيره.", note: "الخطوة الأولى لعمل ترقيم تلقائي مخصص." },
    { id: 737, category: "lists", title: "زيادة العداد", code: "counter-increment: my-counter 1;", description: "زيادة قيمة العداد برقم محدد.", note: "توضع عادة في عنصر before للعناصر المراد عدها." },
    { id: 738, category: "lists", title: "عرض العداد", code: "content: counter(my-counter);", description: "طباعة الرقم الحالي للعداد داخل الصفحة.", note: "تستخدم مع pseudo-elements فقط." },
    { id: 739, category: "lists", title: "العدادات المتداخلة", code: "content: counters(my-counter, '.');", description: "عرض الترقيم التسلسلي (مثل 1.1, 1.2).", note: "مثالية للفهارس والكتب الإلكترونية." },
    { id: 740, category: "lists", title: "صورة القائمة", code: "list-style-image: url('bullet.png');", description: "استخدام صورة مخصصة بدلاً من النقاط السوداء.", note: "يفضل استخدام background-image للتحكم الأفضل في الموقع." },
    { id: 741, category: "lists", title: "موقع النقطة (Inside)", code: "list-style-position: inside;", description: "جعل النقطة جزءاً من النص (تتحرك مع النص).", note: "مهمة عند وجود حدود أو خلفية لعنصر القائمة." },
    { id: 742, category: "lists", title: "موقع النقطة (Outside)", code: "list-style-position: outside;", description: "جعل النقطة في الهامش الخارجي (الافتراضي).", note: "تحافظ على محاذاة النص بشكل عمودي نظيف." },
    { id: 743, category: "typography", title: "تحديد الاقتباسات", code: "quotes: '«' '»';", description: "تحديد شكل علامات التنصيص المستخدمة في الموقع.", note: "تتغير تلقائياً حسب لغة الصفحة (lang attribute)." },
    { id: 744, category: "typography", title: "فتح الاقتباس", code: "content: open-quote;", description: "إدراج علامة فتح الاقتباس المحددة مسبقاً.", note: "تستخدم قبل عنصر blockquote." },
    { id: 745, category: "typography", title: "إغلاق الاقتباس", code: "content: close-quote;", description: "إدراج علامة إغلاق الاقتباس.", note: "تستخدم بعد عنصر quote." },
    { id: 746, category: "typography", title: "محتوى الرابط (Attr)", code: "content: attr(href);", description: "استخراج قيمة خاصية HTML وعرضها كنص.", note: "مفيدة جداً في طباعة الصفحات لإظهار الروابط المخفية." },
    { id: 747, category: "typography", title: "محتوى نصي", code: "content: 'نص ثابت';", description: "إضافة نص غير موجود في HTML عبر الـ CSS.", note: "احذر: هذا النص لا تقرؤه محركات البحث أحياناً." },
    { id: 748, category: "interactivity", title: "تغيير الحجم (Both)", code: "resize: both;", description: "السماح للمستخدم بتغيير عرض وارتفاع العنصر.", note: "يجب أن تكون overflow لا تساوي visible لتعمل." },
    { id: 749, category: "interactivity", title: "تغيير الحجم الأفقي", code: "resize: horizontal;", description: "السماح بتغيير العرض فقط.", note: "تستخدم في القوائم الجانبية القابلة للتوسيع." },
    { id: 750, category: "interactivity", title: "تغيير الحجم العمودي", code: "resize: vertical;", description: "السماح بتغيير الارتفاع فقط.", note: "الوضع الافتراضي لمربعات النص textarea." },
    { id: 751, category: "interactivity", title: "منع تغيير الحجم", code: "resize: none;", description: "منع المستخدم من تغيير حجم العنصر.", note: "تستخدم لتثبيت شكل textarea في النماذج." },
    { id: 752, category: "graphics", title: "محتوى الصورة", code: "content: url('icon.png');", description: "استبدال محتوى العنصر بصورة.", note: "طريقة سريعة لإضافة أيقونات بدون تغيير الـ HTML." },
    { id: 753, category: "graphics", title: "محتوى التدرج", code: "content: linear-gradient(red, blue);", description: "إنشاء صورة تدرج لوني كـ محتوى.", note: "تستخدم لعمل فواصل ملونة." },
    { id: 754, category: "boxmodel", title: "الهامش العكسي السالب", code: "margin-top: -20px;", description: "سحب العنصر للأعلى ليتداخل مع ما قبله.", note: "تستخدم لكسر جمود الشبكة (Grid Breaking Layouts)." },
    { id: 755, category: "boxmodel", title: "الهامش التلقائي (Auto)", code: "margin: 0 auto;", description: "توسيط العنصر أفقياً داخل أبيه.", note: "يجب تحديد عرض للعنصر لتعمل." },
    { id: 756, category: "boxmodel", title: "حشوة النسبة المئوية", code: "padding-bottom: 56.25%;", description: "حيلة مشهورة للحفاظ على نسبة العرض للارتفاع (Aspect Ratio) في الفيديو.", note: "النسبة 16:9 تعادل 56.25%." },
    { id: 757, category: "layout", title: "تعويم اليسار", code: "float: left;", description: "دفع العنصر لأقصى اليسار.", note: "كلاسيكيات الـ CSS قبل الفليكس." },
    { id: 758, category: "layout", title: "تعويم اليمين", code: "float: right;", description: "دفع العنصر لأقصى اليمين.", note: "تستخدم للصور داخل المقالات." },
    { id: 759, category: "layout", title: "إلغاء التعويم اليساري", code: "clear: left;", description: "منع العنصر من الصعود بجانب عنصر معوم يساراً.", note: "تضمن بدء سطر جديد نظيف." },
    { id: 760, category: "layout", title: "إلغاء التعويم اليميني", code: "clear: right;", description: "منع العنصر من الصعود بجانب عنصر معوم يميناً.", note: "تحافظ على ترتيب العناوين." },
    { id: 761, category: "display", title: "العرض الكتلي (Block)", code: "display: block;", description: "العنصر يأخذ سطر كامل ويبدأ من سطر جديد.", note: "الوضع الافتراضي للـ div و p و h1." },
    { id: 762, category: "display", title: "العرض السطري (Inline)", code: "display: inline;", description: "العنصر يظهر في نفس السطر ولا يقبل العرض والارتفاع.", note: "الوضع الافتراضي للـ span و a." },
    { id: 763, category: "display", title: "الكتلة السطرية (Inline-Block)", code: "display: inline-block;", description: "في نفس السطر ولكن يقبل العرض والارتفاع.", note: "أفضل خيار للأزرار والقوائم الأفقية القديمة." },
    { id: 764, category: "display", title: "عنصر القائمة (List-Item)", code: "display: list-item;", description: "يتصرف مثل li ويقبل النقاط (bullets).", note: "تستخدم لتحويل أي عنصر لقائمة ذات تعداد نقطي." },
    { id: 765, category: "display", title: "الجداول (Table)", code: "display: table;", description: "جعل العنصر يتصرف مثل وسم table.", note: "مفيدة لعمل تخطيطات معقدة بدون جداول حقيقية." },
    { id: 766, category: "display", title: "صف الجدول (Table Row)", code: "display: table-row;", description: "جعل العنصر يتصرف مثل tr.", note: "جزء من نظام جداول CSS." },
    { id: 767, category: "display", title: "خلية الجدول (Table Cell)", code: "display: table-cell;", description: "جعل العنصر يتصرف مثل td.", note: "تسمح باستخدام vertical-align: middle بسهولة." },
    { id: 768, category: "display", title: "مجموعة أعمدة (Col Group)", code: "display: table-column-group;", description: "جعل العنصر يتصرف مثل colgroup.", note: "للتحكم في تنسيق أعمدة كاملة." },
    { id: 769, category: "display", title: "رأس الجدول (Header Group)", code: "display: table-header-group;", description: "جعل العنصر يتصرف مثل thead.", note: "يضمن تكرار الرأس عند الطباعة في صفحات متعددة." },
    { id: 770, category: "display", title: "ذيل الجدول (Footer Group)", code: "display: table-footer-group;", description: "جعل العنصر يتصرف مثل tfoot.", note: "يظهر دائماً في أسفل الجدول." },
    { id: 771, category: "display", title: "الدفق الجذري (Flow-Root)", code: "display: flow-root;", description: "إنشاء سياق تنسيق كتلي جديد (BFC).", note: "الحل الحديث لمشكلة الـ Clearfix واحتواء الـ Float." },
    { id: 772, category: "display", title: "روبي (Ruby)", code: "display: ruby;", description: "حاوية للنصوص التوضيحية (مثل الترجمة فوق الكلمات).", note: "أساسي للغات شرق آسيا." },
    { id: 773, category: "display", title: "نص روبي (Ruby Text)", code: "display: ruby-text;", description: "النص التوضيحي الصغير فوق النص الأصلي.", note: "يعادل وسم rt." },
    { id: 774, category: "display", title: "محتويات فقط (Contents)", code: "display: contents;", description: "إلغاء صندوق العنصر نفسه وجعل أبنائه مباشرين لآبائه.", note: "ممتازة لتسطيح شجرة DOM داخل Grid أو Flex." },
    { id: 775, category: "display", title: "الإخفاء التام (None)", code: "display: none;", description: "إزالة العنصر تماماً من الصفحة وكأنه لم يكن.", note: "يختلف عن visibility: hidden بأنه لا يحجز مساحة." },
    // --- GAP FILLER 2: 776-800 (TEXT DECORATION & EMPHASIS) ---
    { id: 776, category: "typography", title: "تسطير صلب", code: "text-decoration-style: solid;", description: "خط تسطير عادي متصل.", note: "النمط الافتراضي." },
    { id: 777, category: "typography", title: "تسطير مزدوج", code: "text-decoration-style: double;", description: "خطين متوازيين تحت النص.", note: "يعطي لمسة كلاسيكية للعناوين." },
    { id: 778, category: "typography", title: "تسطير منقط", code: "text-decoration-style: dotted;", description: "سلسلة من النقاط تحت النص.", note: "يستخدم غالباً للإشارة إلى مصطلحات قابلة للشرح." },
    { id: 779, category: "typography", title: "تسطير متقطع", code: "text-decoration-style: dashed;", description: "سلسلة من الخطوط القصيرة.", note: "تستخدم للدلالة على محتوى مؤقت أو قابل للتعديل." },
    { id: 780, category: "typography", title: "تسطير متموج", code: "text-decoration-style: wavy;", description: "خط متعرج كالموجة.", note: "يدل عادة على خطأ إملائي أو تحذير." },
    { id: 781, category: "typography", title: "خط سفلي (Underline)", code: "text-decoration-line: underline;", description: "وضع الخط أسفل الكلام.", note: "المعيار العالمي للروابط." },
    { id: 782, category: "typography", title: "خط علوي (Overline)", code: "text-decoration-line: overline;", description: "وضع الخط فوق الكلام.", note: "يستخدم في المعادلات الرياضية." },
    { id: 783, category: "typography", title: "خط يتوسط (Line-through)", code: "text-decoration-line: line-through;", description: "خط يشطب الكلام.", note: "يدل على الحذف أو انتهاء المهمة." },
    { id: 784, category: "typography", title: "لا خطوط", code: "text-decoration-line: none;", description: "إزالة جميع الخطوط.", note: "تستخدم لإلغاء تسطير الروابط." },
    { id: 785, category: "typography", title: "تأكيد ممتلئ", code: "text-emphasis-style: filled;", description: "وضع علامات سوداء فوق الحروف للتشديد.", note: "أسلوب توكيد آسيوي." },
    { id: 786, category: "typography", title: "تأكيد مفرغ", code: "text-emphasis-style: open;", description: "وضع علامات فارغة فوق الحروف.", note: "للتوكيد الخفيف." },
    { id: 787, category: "typography", title: "تأكيد بالنقطة", code: "text-emphasis-style: dot;", description: "وضع نقطة صغيرة فوق كل حرف.", note: "تشبه التشكيل." },
    { id: 788, category: "typography", title: "تأكيد بالدائرة", code: "text-emphasis-style: circle;", description: "وضع دائرة فوق كل حرف.", note: "تستخدم للعناوين." },
    { id: 789, category: "typography", title: "تأكيد بالدائرة المزدوجة", code: "text-emphasis-style: double-circle;", description: "دائرة داخل دائرة.", note: "نادرة جداً." },
    { id: 790, category: "typography", title: "تأكيد بالمثلث", code: "text-emphasis-style: triangle;", description: "وضع مثلث صغير.", note: "تعطي شكلاً هندسياً للنص." },
    { id: 791, category: "typography", title: "تأكيد بالسمسمة", code: "text-emphasis-style: sesame;", description: "شكل يشبه حبة السمسم.", note: "شائعة في الكتب الصينية." },
    { id: 792, category: "typography", title: "لون التوكيد", code: "text-emphasis-color: red;", description: "تغيير لون علامات التوكيد فقط.", note: "يمكن أن يختلف عن لون النص نفسه." },
    { id: 793, category: "typography", title: "مكان التوكيد", code: "text-emphasis-position: under right;", description: "تحديد مكان ظهور العلامات (تحت/فوق - يمين/يسار).", note: "للتحكم الدقيق في التخطيط." },
    { id: 794, category: "basics", title: "إلغاء التحديد", code: "user-select: none;", description: "منع المستخدم من تحديد أو نسخ النص.", note: "تستخدم في عناصر الواجهة كالأزرار لمنع التظليل الأزرق المزعج." },
    { id: 795, category: "basics", title: "تحديد الكل", code: "user-select: all;", description: "تحديد النص بالكامل بمجرد ضغطة واحدة.", note: "مفيدة جداً لأكواد النسخ (Code Snippets)." },
    { id: 796, category: "basics", title: "تحديد تلقائي", code: "user-select: auto;", description: "السلوك الطبيعي للمتصفح.", note: "لإعادة تفعيل التحديد بعد إلغائه." },
    { id: 797, category: "graphics", title: "جودة الصورة (Pixelated)", code: "image-rendering: pixelated;", description: "إظهار البكسلات بوضوح عند تكبير الصورة.", note: "أساسية لألعاب البكسل آرت (Pixel Art)." },
    { id: 798, category: "graphics", title: "جودة الصورة (Crisp)", code: "image-rendering: crisp-edges;", description: "الحفاظ على حواف حادة ومنع التغبيش.", note: "تستخدم للرسومات الهندسية والـ QR Codes." },
    { id: 799, category: "graphics", title: "نمط المزج (Normal)", code: "mix-blend-mode: normal;", description: "إلغاء أي تأثير مزج سابق.", note: "العودة للوضع الطبيعي." },
    { id: 800, category: "graphics", title: "نمط المزج (Multiply)", code: "mix-blend-mode: multiply;", description: "ضرب ألوان العنصر في الخلفية (تغميق).", note: "تشبه وضع شريحتين شفافتين فوق بعض." },
    // --- BATCH 17: 801-860 (LISTS & UNITS) ---
    { id: 801, category: "lists", title: "نقاط دائرية (Disc)", code: "list-style-type: disc;", description: "دائرة ممتلئة (الافتراضي).", note: "الشكل القياسي للقوائم غير المرتبة." },
    { id: 802, category: "lists", title: "دائرة مفرغة (Circle)", code: "list-style-type: circle;", description: "دائرة فارغة من الوسط.", note: "تعطي انطباعاً أخف من الـ disc." },
    { id: 803, category: "lists", title: "مربع (Square)", code: "list-style-type: square;", description: "مربع ممتلئ.", note: "تصميم كلاسيكي للتعداد." },
    { id: 804, category: "lists", title: "أرقام عشرية (Decimal)", code: "list-style-type: decimal;", description: "أرقام عادية (1, 2, 3).", note: "الافتراضي للقوائم المرتبة ol." },
    { id: 805, category: "lists", title: "أرقام صفرية (Decimal-Zero)", code: "list-style-type: decimal-leading-zero;", description: "أرقام مع صفر في البداية (01, 02, 03).", note: "مظهر تقني جميل للقوائم القصيرة." },
    { id: 806, category: "lists", title: "روماني صغير (Lower Roman)", code: "list-style-type: lower-roman;", description: "أرقام رومانية صغيرة (i, ii, iii).", note: "للفصول الفرعية في المستندات." },
    { id: 807, category: "lists", title: "روماني كبير (Upper Roman)", code: "list-style-type: upper-roman;", description: "أرقام رومانية كبيرة (I, II, III).", note: "للعناوين الرئيسية." },
    { id: 808, category: "lists", title: "لاتيني صغير (Lower Alpha)", code: "list-style-type: lower-alpha;", description: "حروف إنجليزية صغيرة (a, b, c).", note: "لأسئلة الاختيار من متعدد." },
    { id: 809, category: "lists", title: "لاتيني كبير (Upper Alpha)", code: "list-style-type: upper-alpha;", description: "حروف إنجليزية كبيرة (A, B, C).", note: "للتصنيفات الرئيسية." },
    { id: 810, category: "lists", title: "يوناني (Lower Greek)", code: "list-style-type: lower-greek;", description: "حروف يونانية (alpha, beta, gamma).", note: "للمعادلات العلمية والرياضية." },
    { id: 811, category: "units", title: "البيكسل (Px)", code: "width: 100px;", description: "وحدة ثابتة تعادل نقطة واحدة على الشاشة.", note: "الوحدة الأكثر دقة واستقراراً." },
    { id: 812, category: "units", title: "السنتيمتر (cm)", code: "width: 10cm;", description: "وحدة فيزيائية للطباعة.", note: "لا ينصح بها للشاشات." },
    { id: 813, category: "units", title: "الميليمتر (mm)", code: "width: 50mm;", description: "وحدة فيزيائية دقيقة.", note: "لضبط مقاسات الورق." },
    { id: 814, category: "units", title: "البوصة (in)", code: "width: 1in;", description: "96 بيكسل.", note: "وحدة قياس أمريكية." },
    { id: 815, category: "units", title: "النقاط (pt)", code: "font-size: 12pt;", description: "وحدة طباعة قياسية (1/72 من البوصة).", note: "المعيار في برامج مثل Word." },
    { id: 816, category: "units", title: "البيكا (pc)", code: "font-size: 1pc;", description: "12 نقطة.", note: "وحدة طباعة قديمة." },
    { id: 817, category: "units", title: "نسبة العرض (vw)", code: "width: 50vw;", description: "نسبة مئوية من عرض نافذة المتصفح.", note: "لتصميمات تملأ نصف الشاشة دائماً." },
    { id: 818, category: "units", title: "نسبة الارتفاع (vh)", code: "height: 50vh;", description: "نسبة مئوية من ارتفاع نافذة المتصفح.", note: "لعمل أقسام تملأ الشاشة." },
    { id: 819, category: "units", title: "الأصغر (vmin)", code: "width: 10vmin;", description: "النسبة المئوية من البعد الأصغر (عرض أو ارتفاع).", note: "تضمن ظهور العنصر كاملاً في الموبايل." },
    { id: 820, category: "units", title: "الأكبر (vmax)", code: "width: 10vmax;", description: "النسبة المئوية من البعد الأكبر.", note: "للنصوص الضخمة." },
    { id: 821, category: "units", title: "حجم الصفر (Ch)", code: "width: 20ch;", description: "عرض الرقم 0 في الخط الحالي.", note: "مثالية لتحديد عرض فقرات القراءة (60ch)." },
    { id: 822, category: "units", title: "ارتفاع x (Ex)", code: "height: 5ex;", description: "ارتفاع الحرف x الصغير.", note: "نادرة الاستخدام." },
    { id: 823, category: "units", title: "الدرجة (deg)", code: "rotate: 90deg;", description: "درجات الدائرة (360).", note: "للتدوير." },
    { id: 824, category: "units", title: "الراديان (rad)", code: "rotate: 3.14rad;", description: "وحدة رياضية للزوايا.", note: "للحسابات الهندسية." },
    { id: 825, category: "units", title: "الغراد (grad)", code: "rotate: 100grad;", description: "نظام يقسم الدائرة لـ 400 وحدة.", note: "نادر جداً." },
    { id: 826, category: "units", title: "الدورة (turn)", code: "rotate: 0.5turn;", description: "دورة كاملة.", note: "أسهل للفهم من 180deg." },
    { id: 827, category: "units", title: "الثانية (s)", code: "transition: 0.5s;", description: "وحدة الوقت.", note: "للأنيميشن." },
    { id: 828, category: "units", title: "الميلي ثانية (ms)", code: "transition: 500ms;", description: "جزء من الألف من الثانية.", note: "للدقة العالية." },
    { id: 829, category: "units", title: "الهرتز (Hz)", code: "speak: 200Hz;", description: "تردد الصوت (لقارئات الشاشة).", note: "CSS للهواتف." },
    { id: 830, category: "units", title: "النقاط لكل بوصة (dpi)", code: "@media (min-resolution: 300dpi)", description: "دقة الشاشة للنقطة.", note: "للصور عالية الجودة." },
    // --- GAP FILLER 3: 831-860 (BORDER STYLES & SYSTEM COLORS) ---
    { id: 831, category: "boxmodel", title: "حدود منقطة", code: "border-style: dotted;", description: "سلسلة من النقاط الدائرية.", note: "يختلف شكلها حسب المتصفح." },
    { id: 832, category: "boxmodel", title: "حدود متقطعة", code: "border-style: dashed;", description: "سلسلة من الخطوط القصيرة.", note: "أكثر استخداماً من المنقط." },
    { id: 833, category: "boxmodel", title: "حدود صلبة", code: "border-style: solid;", description: "خط متصل واحد.", note: "الأكثر شيوعاً واستخداماً." },
    { id: 834, category: "boxmodel", title: "حدود مزدوجة", code: "border-style: double;", description: "خطين متوازيين.", note: "يتطلب سمك لا يقل عن 3px ليظهر." },
    { id: 835, category: "boxmodel", title: "حدود محفورة (Groove)", code: "border-style: groove;", description: "يبدو وكأنه منحوت داخل الصفحة.", note: "تأثير ثلاثي الأبعاد قديم." },
    { id: 836, category: "boxmodel", title: "حدود بارزة (Ridge)", code: "border-style: ridge;", description: "يبدو وكأنه بارز خارج الصفحة.", note: "عكس الـ groove." },
    { id: 837, category: "boxmodel", title: "حدود داخلية (Inset)", code: "border-style: inset;", description: "يجعل العنصر كله يبدو غائراً.", note: "كان يستخدم للأزرار المضغوطة." },
    { id: 838, category: "boxmodel", title: "حدود خارجية (Outset)", code: "border-style: outset;", description: "يجعل العنصر يبدو بارزاً.", note: "النمط الافتراضي للأزرار القديمة." },
    { id: 839, category: "boxmodel", title: "حدود مخفية", code: "border-style: hidden;", description: "نفس none ولكن يحل مشاكل تداخل الجداول.", note: "للاستخدام المتقدم مع table-collapse." },
    { id: 840, category: "boxmodel", title: "لا حدود", code: "border-style: none;", description: "إزالة الحدود تماماً.", note: "يستخدم لإلغاء حدود الصور أو الأزرار الافتراضية." },
    { id: 841, category: "colors", title: "لون النظام (Canvas)", code: "color: Canvas;", description: "لون خلفية التطبيق أو المستند.", note: "كان يسمى Window سابقاً." },
    { id: 842, category: "colors", title: "لون نص النظام (CanvasText)", code: "color: CanvasText;", description: "لون النص المخصص للقراءة فوق الخلفية.", note: "يضمن التباين الصحيح دائماً." },
    { id: 843, category: "colors", title: "لون الرابط (LinkText)", code: "color: LinkText;", description: "اللون الافتراضي للروابط غير المزارة.", note: "عادة ما يكون أزرق." },
    { id: 844, category: "colors", title: "لون الرابط المزار (VisitedText)", code: "color: VisitedText;", description: "اللون الافتراضي للروابط التي تم زيارتها.", note: "عادة بنفسجي." },
    { id: 845, category: "colors", title: "لون النص المحدد (HighlightText)", code: "color: HighlightText;", description: "لون النص عند تظليله بالماوس.", note: "يكون أبيض عادة." },
    { id: 846, category: "colors", title: "خلفية النص المحدد", code: "background-color: Highlight;", description: "لون خلفية التظليل.", note: "أزرق في ويندوز." },
    { id: 847, category: "colors", title: "وجه الزر (ButtonFace)", code: "background-color: ButtonFace;", description: "اللون الرمادي الافتراضي للأزرار.", note: "لجعل العناصر تشبه أزرار النظام." },
    { id: 848, category: "colors", title: "نص الزر (ButtonText)", code: "color: ButtonText;", description: "لون النص داخل الأزرار.", note: "أسود عادة." },
    { id: 849, category: "colors", title: "حدود الزر (ButtonBorder)", code: "border-color: ButtonBorder;", description: "لون حدود الأزرار الافتراضي.", note: "يتغير حسب الثيم." },
    { id: 850, category: "colors", title: "لون الحقل (Field)", code: "background-color: Field;", description: "لون خلفية حقول الإدخال.", note: "أبيض عادة." },
    { id: 851, category: "colors", title: "نص الحقل (FieldText)", code: "color: FieldText;", description: "لون النص داخل الحقول.", note: "أسود." },
    { id: 852, category: "colors", title: "نص رمادي (GrayText)", code: "color: GrayText;", description: "لون العناصر المعطلة Disabled.", note: "للدلالة على عدم التفاعل." },
    { id: 853, category: "colors", title: "لون التمرير (Scrollbar)", code: "color: Scrollbar;", description: "لون شريط التمرير (غير مدعوم في كل مكان).", note: "نادرة الاستخدام الآن." },
    { id: 854, category: "interaction", title: "وضع الكتابة الرأسي", code: "writing-mode: vertical-rl;", description: "جعل النص يكتب من الأعلى للأسفل (مثل الصيني).", note: "تستخدم لعمل تأثيرات فنية جانبية للعناوين." },
    { id: 855, category: "interaction", title: "اتجاه النص", code: "direction: ltr;", description: "إجبار النص على الاتجاه من اليسار لليمين.", note: "مهمة عند كتابة أكواد إنجليزية داخل موقع عربي." },
    { id: 856, category: "interaction", title: "اتجاه النص التلقائي", code: "unicode-bidi: isolate;", description: "عزل اتجاه النص عن المحيط.", note: "تمنع تخريب تخطيط الصفحة عند دمج لغات مختلفة." },
    { id: 857, category: "interaction", title: "توجيه الأعمدة", code: "flex-direction: column-reverse;", description: "ترتيب العناصر عمودياً من الأسفل للأعلى.", note: "تستخدم في تطبيقات الشات (أحدث رسالة في الأسفل)." },
    { id: 858, category: "interaction", title: "توجيه الصفوف", code: "flex-direction: row;", description: "ترتيب العناصر أفقياً (الوضع الطبيعي).", note: "الأساس في Flexbox." },
    { id: 859, category: "interaction", title: "التفاف العناصر", code: "flex-wrap: nowrap;", description: "منع العناصر من النزول لسطر جديد.", note: "قد يسبب خروج المحتوى عن الشاشة." },
    { id: 860, category: "interaction", title: "عكس الالتفاف", code: "flex-wrap: wrap-reverse;", description: "التفاف العناصر لسطر جديد ولكن للأعلى بدلاً من الأسفل.", note: "نادرة جداً ولكنها موجودة." },

    // --- BATCH 18: 861-910 (PSEUDO-CLASSES & ADVANCED SVG) ---
    { id: 861, category: "selectors", title: "التركيز المرئي (:focus-visible)", code: "button:focus-visible { outline: 2px solid blue; }", description: "تظهر فقط عند استخدام الكيبورد للتنقل، وتختفي عند استخدام الماوس.", note: "المعيار الذهبي الجديد لتجربة المستخدم (UX)." },
    { id: 862, category: "selectors", title: "الرابط النشط (:active)", code: "a:active { transform: scale(0.95); }", description: "تنسيق العنصر في لحظة الضغط عليه بالماوس.", note: "تعطي شعور الاستجابة (Tactile click)." },
    { id: 863, category: "selectors", title: "الرابط المزار (:visited)", code: "a:visited { color: purple; }", description: "تنسيق الروابط التي قام المستخدم بزيارتها سابقاً.", dependency: "أمنياً: تقبل فقط تغيير الألوان.", note: "تساعد المستخدم في معرفة ما قرأه مسبقاً." },
    { id: 864, category: "selectors", title: "الهدف الحالي (:target-within)", code: "div:target-within { border: 2px solid red; }", description: "تنسيق الأب إذا كان أحد أبنائه هو هدف الهاش (#) في العنوان.", note: "نسخة مطورة من :target." },
    { id: 865, category: "selectors", title: "الشاشة الكاملة (:fullscreen)", code: ":fullscreen { background: black; }", description: "تنسيق العنصر عندما يكون في وضع ملء الشاشة.", note: "تستخدم مع الفيديوهات والعروض التقديمية." },
    { id: 866, category: "selectors", title: "الصورة المعطلة (:broken)", code: "img:broken { content: 'Image Failed'; }", description: "استهداف الصور التي فشل تحميلها (ميزة مستقبلية).", note: "غير مدعومة حالياً بشكل واسع." },
    { id: 867, category: "selectors", title: "الزر الافتراضي (:default)", code: "button:default { box-shadow: 0 0 5px blue; }", description: "زر الإرسال الافتراضي في النموذج (الذي يعمل بضغط Enter).", note: "توضيح بصري مفيد." },
    { id: 868, category: "selectors", title: "النطاق المحدد (:defined)", code: ":not(:defined) { display: none; }", description: "استهداف العناصر المخصصة (Web Components) التي تم تحميل كودها.", note: "لمنع ظهور العناصر قبل تجهيزها." },
    { id: 869, category: "selectors", title: "اتجاه النص (:dir)", code: "p:dir(rtl) { font-family: 'Cairo'; }", description: "تنسيق بناءً على اتجاه النص الفعلي وليس سمة dir فقط.", note: "ذكية جداً مع المحتوى الديناميكي." },
    { id: 870, category: "selectors", title: "اللغة (:lang)", code: "p:lang(fr) { quotes: '« ' ' »'; }", description: "تنسيق بناءً على لغة العنصر المحددة.", note: "أساسية في المواقع متعددة اللغات." },
    { id: 871, category: "selectors", title: "التحميل المؤجل (:lazy)", code: "img:lazy { opacity: 0; }", description: "استهداف الصور التي تنتظر التحميل (مفهوم نظري).", note: "تستخدم مع مكتبات الـ Lazy Loading." },
    { id: 872, category: "svg", title: "قاعدة الملء (Fill Rule)", code: "fill-rule: evenodd;", description: "تحديد كيفية ملء المناطق المتقاطعة في الرسومات المعقدة.", values: [{ name: "nonzero", desc: "القيمة الافتراضية." }, { name: "evenodd", desc: "تفريغ التقاطعات." }], note: "حيوية لرسومات الأيقونات المفرغة." },
    { id: 873, category: "svg", title: "لون الإضاءة (Lighting Color)", code: "lighting-color: yellow;", description: "لون مصدر الضوء في فلاتر الإضاءة ثلاثية الأبعاد.", dependency: "تستخدم مع فلاتر feDiffuseLighting.", note: "تضيف واقعية للرسومات." },
    { id: 874, category: "svg", title: "لون الفيضان (Flood Color)", code: "flood-color: #ff0000;", description: "لون التعبئة الأولية للفلتر.", dependency: "تستخدم مع feFlood.", note: "الأساس الذي تبنى عليه الفلاتر اللونية." },
    { id: 875, category: "svg", title: "شفافية الفيضان (Flood Opacity)", code: "flood-opacity: 0.5;", description: "شفافية لون الفيضان.", note: "للتحكم في كثافة اللون." },
    { id: 876, category: "svg", title: "توقف اللون (Stop Color)", code: "stop-color: blue;", description: "تحديد لون عند نقطة توقف في التدرج اللوني (Gradient).", note: "داخل عناصر <stop>." },
    { id: 877, category: "svg", title: "شفافية التوقف (Stop Opacity)", code: "stop-opacity: 0.8;", description: "شفافية اللون عند نقطة التوقف.", note: "لعمل تدرجات تتلاشى للشفافية." },
    { id: 878, category: "svg", title: "حدود الرسم (Stroke Dashed)", code: "stroke-dasharray: 10 5;", description: "تحويل الخط المتصل لخط متقطع (شرطة، فراغ).", note: "يمكن وضع سلسلة أرقام لنمط معقد." },
    { id: 879, category: "svg", title: "تنعيم الشكل (Shape Rendering)", code: "shape-rendering: geometricPrecision;", description: "إعطاء الأولوية لدقة الأشكال الهندسية على السرعة.", note: "للحصول على خطوط في غاية النعومة." },
    { id: 880, category: "svg", title: "تنعيم النص في SVG", code: "text-rendering: geometricPrecision;", description: "تحسين مظهر النصوص داخل ملفات SVG.", note: "تمنع تشوه الحروف عند التكبير." },
    { id: 881, category: "lists", title: "صورة القائمة (List Image)", code: "list-style-image: url('bullet.png');", description: "استخدام صورة بدلاً من النقاط السوداء.", note: "قد تكون صعبة الضبط، يفضل استخدام ::before." },
    { id: 882, category: "lists", title: "مكان القائمة (List Position)", code: "list-style-position: inside;", description: "جعل النقاط جزءاً من النص (Inside) أو خارجه (Outside).", note: "Inside تجعل النص يلتف تحت النقطة." },
    { id: 883, category: "lists", title: "أرمني (Armenian)", code: "list-style-type: armenian;", description: "ترقيم بالحروف الأرمنية.", note: "للمحتوى المخصص." },
    { id: 884, category: "lists", title: "جورجي (Georgian)", code: "list-style-type: georgian;", description: "ترقيم جورجي تقليدي.", note: "نادرة." },
    { id: 885, category: "lists", title: "عبري (Hebrew)", code: "list-style-type: hebrew;", description: "ترقيم عبري.", note: "للمواقع العبرية." },
    { id: 886, category: "lists", title: "هيراغانا (Hiragana)", code: "list-style-type: hiragana;", description: "ترقيم ياباني (هيراغانا).", note: "أساسية للمواقع اليابانية." },
    { id: 887, category: "lists", title: "كاتاكانا (Katakana)", code: "list-style-type: katakana;", description: "ترقيم ياباني (كاتاكانا).", note: "نوع آخر من الأبجدية اليابانية." },
    { id: 888, category: "typography", title: "حجم الخط النسبي (Larger)", code: "font-size: larger;", description: "خط أكبر قليلاً من خط العنصر الأب.", note: "للتدريج النسبي." },
    { id: 889, category: "typography", title: "حجم الخط النسبي (Smaller)", code: "font-size: smaller;", description: "خط أصغر قليلاً من خط العنصر الأب.", note: "للملاحظات الجانبية." },
    { id: 890, category: "typography", title: "تمديد الخط (Font Stretch)", code: "font-stretch: ultra-expanded;", description: "تمطيط أو ضغط شكل الحروف (يتطلب خطاً يدعم ذلك).", note: "تأثير بصري قوي للعناوين." },
    { id: 891, category: "typography", title: "توليف الخط (Font Synthesis)", code: "font-synthesis: none;", description: "منع المتصفح من تزييف الخط العريض أو المائل إذا لم يكن الملف موجوداً.", note: "للحفاظ على جودة التصميم الأصلي." },
    { id: 892, category: "typography", title: "بدائل الأرقام (Variant Numeric)", code: "font-variant-numeric: tabular-nums;", description: "جعل الأرقام بعرض ثابت لتسهيل قراءتها في الجداول.", note: "تمنع اهتزاز الأرقام في العدادات." },
    { id: 893, category: "typography", title: "الأحرف الاستهلالية (Variant Caps)", code: "font-variant-caps: small-caps;", description: "تحويل الحروف الصغيرة لأحرف كبيرة ولكن بحجم صغير.", note: "نمط طباعي كلاسيكي." },
    { id: 894, category: "typography", title: "إزاحة النص الرأسي", code: "vertical-align: super;", description: "رفع النص للأعلى (مثل الأسس الرياضية - Superscript).", note: "تستخدم أيضاً مع الأيقونات بجانب النص." },
    { id: 895, category: "typography", title: "إزاحة النص السفلي", code: "vertical-align: sub;", description: "خفض النص للأسفل (مثل الرموز الكيميائية - Subscript).", note: "H2O مثال شهير." },
    { id: 896, category: "typography", title: "تباعد الكلمات", code: "word-spacing: 10px;", description: "زيادة المسافة بين الكلمات وبعضها.", note: "تختلف عن letter-spacing." },
    { id: 897, category: "typography", title: "تجاوز الحدود (Overflow Wrap)", code: "overflow-wrap: anywhere;", description: "السماح بكسر الكلمة في أي مكان لمنع الـ Overflow.", note: "الحل النهائي لمشاكل السكرول الأفقي." },
    { id: 898, category: "typography", title: "يتيم السطور (Orphans)", code: "orphans: 3;", description: "أقل عدد من الأسطر يسمح بظهوره وحيداً في أسفل الصفحة المطبوعة.", note: "للطباعة الاحترافية." },
    { id: 899, category: "typography", title: "أرمل السطور (Widows)", code: "widows: 3;", description: "أقل عدد من الأسطر يسمح بظهوره وحيداً في أعلى الصفحة المطبوعة.", note: "مصطلحات طباعية عريقة." },
    { id: 900, category: "effects", title: "شفافية الصورة", code: "opacity: 0.5;", description: "جعل العنصر بالكامل شفافاً.", note: "تؤثر على العنصر وكل أبنائه." },
    { id: 901, category: "effects", title: "ظل النص (Text Shadow)", code: "text-shadow: 2px 2px 4px black;", description: "رسم ظل خلف الحروف.", note: "يمكن صنع تأثير النيون أو الحفر بواسطته." },
    { id: 902, category: "effects", title: "دمج الخلفيات", code: "background-blend-mode: luminosity;", description: "دمج الألوان بناءً على إضاءتها.", note: "للحصول على صور بالأبيض والأسود ملونة بالخلفية." },
    { id: 903, category: "effects", title: "قناع التدرج", code: "mask-image: radial-gradient(black, transparent);", description: "إخفاء جوانب العنصر بشكل ناعم دائري.", note: "تأثير الـ Vignette." },
    { id: 904, category: "effects", title: "التدوير ثلاثي الأبعاد", code: "transform: rotate3d(1, 1, 1, 45deg);", description: "تدوير العنصر في الفضاء الثلاثي الأبعاد.", note: "يتطلب وجود perspective على الأب." },
    { id: 905, category: "effects", title: "المنظور (Perspective)", code: "perspective: 1000px;", description: "تحديد عمق 'الكاميرا' للعناصر ثلاثية الأبعاد.", note: "كلما صغر الرقم زاد العمق والتشوه." },
    { id: 906, category: "effects", title: "أصل المنظور (Perspective Origin)", code: "perspective-origin: center top;", description: "تغيير زاوية النظر للكاميرا.", note: "للنظر من الأعلى أو الجانب." },
    { id: 907, category: "effects", title: "الجانب الخلفي (Backface Visibility)", code: "backface-visibility: hidden;", description: "إخفاء ظهر العنصر عند دورانه 180 درجة.", note: "أساسية لعمل بطاقات تقلب (Flip Cards)." },
    { id: 908, category: "modern", title: "طبقات التتالي (@layer)", code: "@layer framework { .card { color: red; } }", description: "تغليف مجموعة تنسيقات في طبقة واحدة للتحكم في أولويتها.", note: "نهاية عصر الـ !important." },
    { id: 909, category: "modern", title: "استيراد الطبقات", code: "@import url('theme.css') layer(theme);", description: "استيراد ملف خارجي وضعه مباشرة في طبقة محددة.", note: "أعلى درجات التنظيم." },
    { id: 910, category: "modern", title: "الخاصية المتوارثة", code: "all: inherit;", description: "جعل العنصر يرث كل خصائصه من أبيه.", note: "لإعادة ضبط عنصر متمرد." }
];

// --- CORE LOGIC ---

let currentCategory = 'all';
let currentTheme = localStorage.getItem('css_infinite_v5_theme') || 'dark';

// DOM Elements
const commandsGrid = document.getElementById('commandsGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');
const categoryButtons = document.querySelectorAll('.category-btn');
const toast = document.getElementById('toast');
const subtitle = document.querySelector('.subtitle');

// Initialize
function init() {
    applyTheme();
    renderCards();
    updateStats();
    createParticles();
    bindEvents();
}

/**
 * Renders the lesson cards based on search and category filters.
 * Optimized with requestAnimationFrame for fluid performance.
 */
function renderCards(searchTerm = '') {
    commandsGrid.innerHTML = '';
    let visibleCount = 0;
    const lowerSearch = searchTerm.toLowerCase();

    cssData.forEach(item => {
        const matchesSearch = searchTerm === '' ||
            item.title.toLowerCase().includes(lowerSearch) ||
            item.description.includes(searchTerm) ||
            item.code.toLowerCase().includes(lowerSearch);

        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;

        if (matchesSearch && matchesCategory) {
            visibleCount++;

            // Generate Values Section if available
            let valuesHtml = '';
            if (item.values && item.values.length > 0) {
                valuesHtml = `
                    <span class="values-section-title">أهم القيم المتاحة:</span>
                    <div class="values-grid">
                        ${item.values.map(v => `
                            <div class="value-item">
                                <span class="value-name">${v.name}</span>
                                <span class="value-desc">${v.desc}</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            // Generate Dependency Segment
            let depHtml = '';
            if (item.dependency) {
                depHtml = `
                    <div class="dependency-info">
                        <span class="dep-badge">⚠️ ترابط تقني</span>
                        <span class="dep-text">${item.dependency}</span>
                    </div>
                `;
            }

            // Visual Color Preview
            let colorPreviewHtml = '';
            if (item.colorPreview) {
                colorPreviewHtml = `<span class="color-marker" style="background: ${item.colorPreview}"></span>`;
            }

            const card = document.createElement('div');
            card.className = 'command-card';
            card.setAttribute('data-category', item.category);
            card.innerHTML = `
                <div class="command-header">
                    <span class="command-number">#${item.id}</span>
                    <h3 class="command-title" style="display:flex; align-items:center; gap:10px;">
                        ${colorPreviewHtml}
                        <span>${item.title}</span>
                    </h3>
                    <span class="category-badge">${item.category}</span>
                </div>
                <div class="command-code">
                    <code>${escapeHtml(item.code)}</code>
                    <button class="copy-btn" onclick="copyCode(this)">نسخ الكود</button>
                </div>
                ${depHtml}
                <p class="command-description">${item.description}</p>
                ${valuesHtml}
                <div class="command-note">
                    <span class="note-icon">💡</span>
                    <span>${item.note}</span>
                </div>
            `;
            commandsGrid.appendChild(card);

            // Progressive Animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            requestAnimationFrame(() => {
                setTimeout(() => {
                    card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, (visibleCount % 30) * 20);
            });
        }
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

function bindEvents() {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            renderCards(e.target.value.trim());
        }, 100);
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderCards(searchInput.value.trim());
        });
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme();
    localStorage.setItem('css_infinite_v5_theme', currentTheme);
}

function applyTheme() {
    document.body.setAttribute('data-theme', currentTheme);
}

function updateStats() {
    const total = cssData.length;
    subtitle.innerHTML = `الموسوعة الكونية الشاملة لـ CSS تحتوي حالياً على <strong>${total}</strong> وحدة تعليمية ومعيار تقني.`;

    categoryButtons.forEach(btn => {
        const cat = btn.dataset.category;
        const count = cat === 'all' ? total : cssData.filter(i => i.category === cat).length;
        let countSpan = btn.querySelector('.btn-count');
        if (!countSpan) {
            countSpan = document.createElement('span');
            countSpan.className = 'btn-count';
            btn.appendChild(countSpan);
        }
        countSpan.innerText = count;
    });
}

window.copyCode = (btn) => {
    const code = btn.previousElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'تم النسخ!';
        btn.style.background = 'var(--success-gradient)';
        toast.classList.add('show');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = '';
            toast.classList.remove('show');
        }, 2000);
    });
};

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function createParticles() {
    const container = document.createElement('div');
    container.id = 'particle-container';
    container.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:0; overflow:hidden;';
    document.body.appendChild(container);

    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px; height: ${Math.random() * 4 + 1}px;
            background: rgba(99, 102, 241, 0.15);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 15 + 10}s linear infinite;
        `;
        container.appendChild(p);
    }
}

init();
