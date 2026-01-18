var cssData = [
    {
        id: "css-display",
        name: "display",
        arabicName: "طريقة العرض",
        category: "خصائص التخطيط (Layout)",
        description: "الخاصية الأهم في CSS لتحديد كيفية عرض العنصر وسلوك الصندوق (Box) الخاص به في الصفحة.",
        syntax: 'display: block | inline | flex | grid | none ...;',
        usage: "تستخدم لتغيير طريقة تدفق العناصر، إنشاء تخطيطات مرنة (Flexbox)، شبكات (Grid)، أو إخفاء العناصر.",
        values: [
            {
                value: "block",
                description: "يجعل العنصر يمتد لكامل العرض المتاح ويبدأ في سطر جديد.",
                example: 'display: block;'
            },
            {
                value: "inline",
                description: "يجعل العنصر يأخذ عرض محتواه فقط ولا يبدأ في سطر جديد.",
                example: 'display: inline;'
            },
            {
                value: "flex",
                description: "يحول العنصر إلى حاوية مرنة (Flex container) للتحكم في توقيع العناصر داخله ببعد واحد.",
                example: 'display: flex;'
            },
            {
                value: "grid",
                description: "يحول العنصر إلى حاوية شبكية (Grid container) للتحكم في العناصر ببعدين (أعمدة وصفوف).",
                example: 'display: grid;'
            },
            {
                value: "none",
                description: "يخفي العنصر تماماً ويزيله من هيكل الصفحة (Document Flow).",
                example: 'display: none;'
            }
        ],
        examples: [
            {
                title: "توسيط عنصر باستخدام Flexbox",
                code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}',
                explanation: "هذا هو النمط الأشهر لتوسيط أي عنصر أفقياً وعمودياً في وسط الصفحة."
            },
            {
                title: "إنشاء شبكة بسيطة باستخدام Grid",
                code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}',
                explanation: "يقسم الحاوية إلى 3 أعمدة متساوية العرض مع مسافة 20 بكسل بينها."
            }
        ],
        notes: [
            "خاصية display: none تختلف عن visibility: hidden بأن الأولى تزيل العنصر تماماً وكأنه غير موجود، بينما الثانية تخفيه لكن تحافظ على مساحته.",
            "التخطيط الحديث يعتمد بشكل كلي على flex و grid."
        ],
        relatedElements: [
            { element: "visibility", relationship: "طريقة أخرى لإخفاء العناصر", linkTo: "#" },
            { element: "flex-direction", relationship: "تحدد اتجاه العناصر داخل حاوية Flex", linkTo: "#" }
        ]
    },
    {
        id: "css-color",
        name: "color",
        arabicName: "لون النص",
        category: "خصائص الألوان والخلفيات",
        description: "تحدد لون النص الأمامي (Foreground Color) للعنصر.",
        syntax: 'color: red | #ff0000 | rgb(255, 0, 0) | hsl(0, 100%, 50%);',
        usage: "تلوين النصوص، العناوين، والروابط.",
        values: [
            {
                value: "keyword",
                description: "أسماء الألوان المحجوزة مثل: red, blue, transparent.",
                example: 'color: crimson;'
            },
            {
                value: "HEX",
                description: "نظام الست عشري (#RRGGBB).",
                example: 'color: #333333;'
            },
            {
                value: "RGB / RGBA",
                description: "نظام (أحمر، أخضر، أزرق) وقناة الشفافية Alpha.",
                example: 'color: rgba(0, 0, 0, 0.5);'
            },
            {
                value: "HSL / HSLA",
                description: "نظام (الصبغة، التشبع، الإضاءة). أسهل للتعديلات اللونية.",
                example: 'color: hsl(200, 50%, 50%);'
            }
        ],
        examples: [
            {
                title: "استخدام الشفافية في النص",
                code: 'h1 {\n  color: rgba(255, 0, 0, 0.5);\n}',
                explanation: "يجعل النص أحمر اللون ولكن نصف شفاف."
            }
        ],
        notes: [
            "خاصية color تورث (Inherited) من الأب، أي أنك لو حددتها للـ body ستطبق على كل النصوص بداخله ما لم يتم تغييرها."
        ],
        relatedElements: [
            { element: "background-color", relationship: "لتحديد لون الخلفية", linkTo: "#" },
            { element: "opacity", relationship: "لجعل العنصر بالكامل شفافاً", linkTo: "#" }
        ]
    },
    {
        id: "css-position",
        name: "position",
        arabicName: "التموضع",
        category: "خصائص التخطيط (Layout)",
        description: "تحدد كيفية وضع العنصر في المستند (عادي، نسبي، مطلق، ثابت).",
        syntax: 'position: static | relative | absolute | fixed | sticky;',
        usage: "يستخدم لتثبيت القوائم، إنشاء طبقات (Layers)، أو تحريك العناصر بدقة.",
        values: [
            {
                value: "static",
                description: "الوضع الافتراضي. العنصر يتبع التدفق الطبيعي للصفحة.",
                example: 'position: static;'
            },
            {
                value: "relative",
                description: "يتبع التدفق الطبيعي، لكن يمكن تحريكه باستخدام top, right, bottom, left بالنسبة لمكانه الأصلي.",
                example: 'position: relative; top: 10px;'
            },
            {
                value: "absolute",
                description: "يخرج العنصر من التدفق الطبيعي ويتموضع بالنسبة لأقرب أب له position غير static.",
                example: 'position: absolute; top: 0; right: 0;'
            },
            {
                value: "fixed",
                description: "يتموضع بالنسبة لنافذة المتصفح (Viewport) ولا يتحرك عند التمرير.",
                example: 'position: fixed; bottom: 20px; right: 20px;'
            },
            {
                value: "sticky",
                description: "مزيج بين relative و fixed. يتصرف كـ relative حتى يصل لنقطة تمرير معينة ثم يصبح fixed.",
                example: 'position: sticky; top: 0;'
            }
        ],
        examples: [
            {
                title: "تثبيت Navbar في الأعلى",
                code: '.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n}',
                explanation: "يجعل شريط التنقل ملتصقاً بأعلى الشاشة دائماً حتى عند النزول للأسفل."
            }
        ],
        notes: [
            "عند استخدام absolute، تأكد أن العنصر الأب لديه position: relative وإلا سيتموضع العنصر بالنسبة للصفحة كاملة.",
            "استخدم z-index للتحكم في ترتيب الطبقات (أيها يظهر فوق الآخر)."
        ],
        relatedElements: [
            { element: "z-index", relationship: "للتحكم في الترتيب الرأسي للعناصر المتموضعة", linkTo: "#" },
            { element: "top / left", relationship: "إحداثيات التحريك", linkTo: "#" }
        ]
    },
    // --- Box Model Properties ---
    {
        id: "css-margin",
        name: "margin",
        arabicName: "الهامش الخارجي",
        category: "خصائص الصناديق (Box Model)",
        description: "يحدد المسافة الفارغة خارج حدود العنصر. يستخدم لإبعاد العناصر عن بعضها البعض.",
        syntax: 'margin: 10px; | margin: 10px 20px; | margin-top: 5px;',
        usage: "خلق مسافات بين العناصر المتجاورة.",
        values: [
            {
                value: "length",
                description: "قيمة بالبكسل، rem, em, %.",
                example: 'margin: 20px;'
            },
            {
                value: "auto",
                description: "يترك للمتصفح حساب الهامش، يستخدم غالباً لتوسيط العناصر أفقياً (margin: 0 auto).",
                example: 'margin: 0 auto;'
            }
        ],
        examples: [
            {
                title: "توسيط حاوية",
                code: '.container {\n  width: 80%;\n  margin: 0 auto;\n}',
                explanation: "هذا يجعل الحاوية في منتصف الصفحة أفقياً."
            }
        ],
        notes: [
            "يمكن تحديد الهوامش لكل جهة على حدة: margin-top, margin-right...",
            "الهوامش الرأسية (Vertical Margins) قد يحدث لها تداخل (Collapse)."
        ],
        relatedElements: [
            { element: "padding", relationship: "المسافة الداخلية (عكس الهامش)", linkTo: "#css-padding" }
        ]
    },
    {
        id: "css-padding",
        name: "padding",
        arabicName: "الهامش الداخلي",
        category: "خصائص الصناديق (Box Model)",
        description: "يحدد المسافة بين حدود العنصر وبين محتواه الداخلي.",
        syntax: 'padding: 10px; | padding: 10px 20px;',
        usage: "زيادة مساحة العنصر من الداخل، إبعاد النص عن الحواف.",
        values: [
            {
                value: "length",
                description: "قيمة موجبة فقط (px, rem, %).",
                example: 'padding: 1rem;'
            }
        ],
        examples: [
            {
                title: "زر مريح للنقر",
                code: 'button {\n  padding: 10px 20px;\n}',
                explanation: "يضيف مساحة داخلية للزر لجعله أكبر وأسهل للنقر دون تكبير النص."
            }
        ],
        notes: [
            "الـ padding يحسب ضمن العرض الإجمالي للعنصر إلا إذا استخدمت box-sizing: border-box."
        ],
        relatedElements: [
            { element: "margin", relationship: "للمسافات الخارجية", linkTo: "#css-margin" }
        ]
    },
    {
        id: "css-border",
        name: "border",
        arabicName: "الحدود",
        category: "خصائص الصناديق (Box Model)",
        description: "خاصية مختصرة لتحديد سمك، نمط، ولون حدود العنصر.",
        syntax: 'border: width style color;',
        usage: "رسم إطارات حول الصور، الأزرار، أو الأقسام.",
        values: [
            {
                value: "width",
                description: "سمك الإطار (px, thick, thin).",
                example: '2px'
            },
            {
                value: "style",
                description: "شكل الخط.",
                example: 'solid (متصل) | dashed (متقطع) | dotted (منقط)'
            },
            {
                value: "color",
                description: "لون الإطار.",
                example: 'red | #000'
            }
        ],
        examples: [
            {
                title: "إطار كلاسيكي",
                code: '.box {\n  border: 1px solid #ccc;\n}',
                explanation: "يضيف إطاراً رمادياً رفيعاً حول العنصر."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "border-radius", relationship: "لجعل الحواف دائرية", linkTo: "#" }
        ]
    },
    // --- Typography Properties ---
    {
        id: "css-font-family",
        name: "font-family",
        arabicName: "نوع الخط",
        category: "خصائص النصوص (Typography)",
        description: "تحدد نوع الخط المستخدم للنص. يمكن تحديد عدة خطوط كبدائل.",
        syntax: 'font-family: "Family Name", generic-family;',
        usage: "تغيير شكل الحروف لتناسب التصميم.",
        values: [],
        examples: [
            {
                title: "استخدام خطوط النظام",
                code: 'body {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;\n}',
                explanation: "هذه المصفوفة تضمن أفضل خط متاح على جهاز المستخدم."
            }
        ],
        notes: [
            "دائماً ضع خطاً عاماً (generic-family) مثل sans-serif في النهاية كخيار أمان."
        ],
        relatedElements: []
    },
    {
        id: "css-font-size",
        name: "font-size",
        arabicName: "حجم الخط",
        category: "خصائص النصوص (Typography)",
        description: "تحدد حجم النص.",
        syntax: 'font-size: 16px | 1.5rem | 120%;',
        usage: "التحكم في مقروءية النصوص والعناوين.",
        values: [
            {
                value: "px",
                description: "وحدة ثابتة (غير مستحبة للنصوص الرئيسية للوصولية).",
                example: '16px'
            },
            {
                value: "rem",
                description: "نسبة لحجم خط الجذر (root)، وهي الأفضل للتصميم المتجاوب.",
                example: '1rem'
            }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Background Properties ---
    {
        id: "css-background",
        name: "background",
        arabicName: "الخلفية",
        category: "خصائص الألوان والخلفيات",
        description: "خاصية مختصرة لتعيين كل خصائص الخلفية (لون، صورة، تكرار، مكان) في سطر واحد.",
        syntax: 'background: color image repeat attachment position;',
        usage: "تعيين خلفيات ملونة أو صور للأقسام.",
        values: [],
        examples: [
            {
                title: "خلفية متدرجة",
                code: '.hero {\n  background: linear-gradient(to right, #ff0000, #0000ff);\n}',
                explanation: "ينشئ تدرجاً لونياً من الأحمر للأزرق."
            }
        ],
        notes: [],
        relatedElements: []
    },
    // --- Layout: Flexbox ---
    {
        id: "css-flex-direction",
        name: "flex-direction",
        arabicName: "اتجاه المرونة",
        category: "تخطيط Flexbox",
        description: "تحدد الاتجاه الذي ستتموضع فيه العناصر داخل حاوية Flex.",
        syntax: 'flex-direction: row | row-reverse | column | column-reverse;',
        usage: "تحويل التخطيط من أفقي لعمودي والعكس.",
        values: [
            { value: "row", description: "الافتراضي. من اليمين لليسار (في العربية).", example: "flex-direction: row;" },
            { value: "column", description: "ترتيب العناصر عمودياً (فوق بعض).", example: "flex-direction: column;" }
        ],
        examples: [
            {
                title: "قائمة عمودية",
                code: '.menu {\n  display: flex;\n  flex-direction: column;\n}',
                explanation: "ستظهر عناصر القائمة تحت بعضها البعض بدلاً من جانب بعض."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "display: flex", relationship: "يجب تفعيله أولاً", linkTo: "#css-display" }
        ]
    },
    {
        id: "css-justify-content",
        name: "justify-content",
        arabicName: "محاذاة المحتوى (الرئيسي)",
        category: "تخطيط Flexbox",
        description: "تحدد كيفية توزيع المساحة الفارغة بين العناصر على المحور الرئيسي (Main Axis).",
        syntax: 'justify-content: flex-start | flex-end | center | space-between | space-around;',
        usage: "توسيط العناصر، توزيع الأزرار بالتساوي.",
        values: [
            { value: "center", description: "تجميع العناصر في الوسط.", example: "justify-content: center;" },
            { value: "space-between", description: "أول عنصر في البداية، وآخر عنصر في النهاية، والمسافة موزعة بينهم.", example: "justify-content: space-between;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-align-items",
        name: "align-items",
        arabicName: "محاذاة العناصر (العرضي)",
        category: "تخطيط Flexbox",
        description: "تحدد كيفية محاذاة العناصر على المحور العرضي (Cross Axis).",
        syntax: 'align-items: stretch | flex-start | flex-end | center;',
        usage: "توسيط العناصر عمودياً داخل شريط.",
        values: [
            { value: "center", description: "توسيط العناصر في منتصف الحاوية (عمودياً إذا كان الاتجاه row).", example: "align-items: center;" },
            { value: "stretch", description: "تمديد العناصر لتملأ ارتفاع الحاوية.", example: "align-items: stretch;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Layout: Grid ---
    {
        id: "css-grid-template-columns",
        name: "grid-template-columns",
        arabicName: "أعمدة الشبكة",
        category: "تخطيط Grid",
        description: "تحدد عدد وعرض الأعمدة في الشبكة.",
        syntax: 'grid-template-columns: 1fr 1fr 1fr | 100px auto | repeat(3, 1fr);',
        usage: "بناء هيكل الصفحة المتجاوب.",
        values: [
            { value: "fr", description: "وحدة الكسر (Fraction) من المساحة المتاحة.", example: "1fr" },
            { value: "repeat()", description: "دالة لتكرار القيم.", example: "repeat(4, 1fr)" }
        ],
        examples: [
            {
                title: "شبكة ثلاثية",
                code: '.gallery {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}',
                explanation: "ينشئ 3 أعمدة متساوية العرض تماماً."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "gap", relationship: "المسافة بين الخلايا", linkTo: "#css-gap" }
        ]
    },
    {
        id: "css-gap",
        name: "gap",
        arabicName: "الفجوة",
        category: "تخطيط Grid/Flexbox",
        description: "تحدد المسافة بين الصفوف والأعمدة.",
        syntax: 'gap: 20px | gap: 10px 20px;',
        usage: "أفضل بديل للـ margin عند استخدام flex أو grid.",
        values: [],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Responsive Design ---
    {
        id: "css-media",
        name: "@media",
        arabicName: "استعلامات الوسائط",
        category: "الاستجابة (Responsive)",
        description: "تسمح بتطبيق تنسيقات CSS مختلفة بناءً على خصائص الجهاز (مثل عرض الشاشة).",
        syntax: '@media (max-width: 768px) {\n  /* CSS rules */\n}',
        usage: "جعل الموقع متجاوباً للموبايل والتابلت.",
        values: [
            { value: "max-width", description: "يطبق القواعد إذا كان عرض الشاشة أقل من أو يساوي القيمة.", example: "(max-width: 600px)" },
            { value: "min-width", description: "يطبق القواعد إذا كان العرض أكبر من القيمة.", example: "(min-width: 1024px)" }
        ],
        examples: [
            {
                title: "تحويل الأعمدة لصف واحد في الموبايل",
                code: '.container {\n  flex-direction: row;\n}\n\n@media (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}',
                explanation: "في الشاشات الصغيرة، ستترتب العناصر تحت بعضها."
            }
        ],
        notes: [
            "يفضل دائماً البدء بالتصميم للموبايل (Mobile First) باستخدام min-width."
        ],
        relatedElements: []
    },
    // --- Effects & Animation ---
    {
        id: "css-transition",
        name: "transition",
        arabicName: "الانتقال الحركي",
        category: "الحركة والمؤثرات",
        description: "يسمح بتغيير قيم الخصائص بسلاسة (بدلاً من التغير الفوري) عند حدوث تغير مثل Hover.",
        syntax: 'transition: property duration timing-function delay;',
        usage: "جعل الأزرار تتغير ألوانها بنعومة، تحريك القوائم.",
        values: [
            { value: "all", description: "تطبيق الانتقال على كل الخصائص القابلة للتحريك.", example: "transition: all 0.3s;" },
            { value: "duration", description: "مدة الحركة (ثوان أو مللي ثانية).", example: "0.5s" }
        ],
        examples: [
            {
                title: "زر يتغير لونه بنعومة",
                code: 'button {\n  background: blue;\n  transition: background 0.3s ease;\n}\n\nbutton:hover {\n  background: darkblue;\n}',
                explanation: "عند مرور الماوس، سيتغير اللون تدريجياً خلال 0.3 ثانية."
            }
        ],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-transform",
        name: "transform",
        arabicName: "التحويل",
        category: "الحركة والمؤثرات",
        description: "يسمح بتدوير، تكبير، إمالة، أو تحريك العناصر في الفضاء ثنائي أو ثلاثي الأبعاد.",
        syntax: 'transform: rotate(45deg) scale(1.5) ...;',
        usage: "تدوير الأيقونات، تكبير الصور عند التحويم.",
        values: [
            { value: "rotate()", description: "التدوير بزاوية معينة.", example: "rotate(90deg)" },
            { value: "scale()", description: "التكبير أو التصغير.", example: "scale(1.1) (تكبير 10%)" },
            { value: "translate()", description: "التحريك من المكان الأصلي (X, Y).", example: "translate(10px, 20px)" }
        ],
        examples: [],
        notes: [
            "transform لا يؤثر على تخطيط العناصر المجاورة (يحدث في طبقة منفصلة)، مما يجعله ممتازاً للأداء."
        ],
        relatedElements: []
    },
    {
        id: "css-box-shadow",
        name: "box-shadow",
        arabicName: "ظل الصندوق",
        category: "الحركة والمؤثرات",
        description: "يضيف ظلالاً للعنصر. يمكن إضافة أكثر من ظل.",
        syntax: 'box-shadow: h-offset v-offset blur spread color;',
        usage: "إضافة عمق (Depth) للبطاقات والأزرار (Material Design).",
        values: [],
        examples: [
            {
                title: "ظل ناعم",
                code: '.card {\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}',
                explanation: "ظل خفيف يعطي إيحاء بأن العنصر مرتفع قليلاً عن الصفحة."
            }
        ],
        notes: [],
        relatedElements: []
    },
    // --- Pseudo-classes & Elements ---
    {
        id: "css-hover",
        name: ":hover",
        arabicName: "عند التحويم",
        category: "المحددات الزائفة (Pseudo-classes)",
        description: "يطبق التنسيقات عندما يمرر المستخدم المؤشر فوق العنصر.",
        syntax: 'element:hover { ... }',
        usage: "تفاعل الروابط والأزرار.",
        values: [],
        examples: [],
        notes: ["في الهواتف التي تعمل باللمس، hover لا يعمل بنفس الطريقة وقد يسبب مشاكل (Sticky Hover)."],
        relatedElements: []
    },
    {
        id: "css-before-after",
        name: "::before / ::after",
        arabicName: "العناصر الزائفة",
        category: "العناصر الزائفة (Pseudo-elements)",
        description: "تسمح بإدراج محتوى زائف قبل أو بعد محتوى العنصر الأصلي.",
        syntax: 'element::before {\n  content: "";\n  ...\n}',
        usage: "إضافة أيقونات، زخارف، أو عناصر تجميلية دون تعديل HTML.",
        values: [
            { value: "content", description: "إلزامي. يحدد المحتوى (يمكن أن يكون فارغاً).", example: 'content: "★";' }
        ],
        examples: [
            {
                title: "إضافة علامة نجمة للعناصر المطلوبة",
                code: '.required::after {\n  content: "*";\n  color: red;\n}',
                explanation: "أي عنصر يحمل كلاس required ستظهر نجمة حمراء بجانبه."
            }
        ],
        notes: [],
        relatedElements: []
    },
    // --- Visual Formatting ---
    {
        id: "css-overflow",
        name: "overflow",
        arabicName: "تجاوز المحتوى",
        category: "خصائص الصناديق (Box Model)",
        description: "يحدد ما يحدث عندما يكون المحتوى أكبر من مساحة العنصر.",
        syntax: 'overflow: visible | hidden | scroll | auto;',
        usage: "إخفاء الزوائد، إنشاء مناطق قابلة للتمرير.",
        values: [
            { value: "hidden", description: "قص المحتوى الزائد وإخفاؤه.", example: "overflow: hidden;" },
            { value: "auto", description: "إظهار شريط تمرير فقط إذا لزم الأمر.", example: "overflow: auto;" },
            { value: "scroll", description: "إظهار شريط تمرير دائماً.", example: "overflow: scroll;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-cursor",
        name: "cursor",
        arabicName: "شكل المؤشر",
        category: "الحركة والمؤثرات",
        description: "يحدد شكل مؤشر الماوس عند مروره فوق العنصر.",
        syntax: 'cursor: pointer | not-allowed | text | ...;',
        usage: "تحسين تجربة المستخدم للإشارة لقابلية النقر.",
        values: [
            { value: "pointer", description: "يد (للأزرار والروابط).", example: "cursor: pointer;" },
            { value: "not-allowed", description: "دائرة المنع (للعناصر المعطلة).", example: "cursor: not-allowed;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Filters & Graphics ---
    {
        id: "css-filter",
        name: "filter",
        arabicName: "الفلاتر البصرية",
        category: "الجرافيك والفلاتر (Graphics)",
        description: "تطبق تأثيرات رسومية (مثل التغبيش أو تغيير الألوان) على العنصر.",
        syntax: 'filter: blur(5px) | grayscale(100%) | brightness(1.2);',
        usage: "تحسين الصور، جعل الخلفية ضبابية.",
        values: [
            { value: "blur()", description: "تغبيش الصورة.", example: "blur(5px)" },
            { value: "grayscale()", description: "تحويل للأسود والأبيض.", example: "grayscale(100%)" },
            { value: "drop-shadow()", description: "ظل يتبع شكل العنصر (للصور الشفافة PNG) وليس الصندوق.", example: "drop-shadow(0 0 5px red)" }
        ],
        examples: [
            {
                title: "تحويل صورة للرمادي",
                code: 'img {\n  filter: grayscale(100%);\n}\nimg:hover {\n  filter: grayscale(0%);\n}',
                explanation: "جعل الصورة ملونة فقط عند تمرير الماوس."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "backdrop-filter", relationship: "تطبيق الفلتر على ما خلف العنصر (الزجاج)", linkTo: "#css-backdrop-filter" }
        ]
    },
    {
        id: "css-backdrop-filter",
        name: "backdrop-filter",
        arabicName: "فلتر الخلفية",
        category: "الجرافيك والفلاتر (Graphics)",
        description: "يطبق التأثيرات على المنطقة خلف العنصر، مما يسمح بإنشاء تأثير الزجاج المصنفر (Frosted Glass).",
        syntax: 'backdrop-filter: blur(10px);',
        usage: "Glassmorphism UI.",
        values: [],
        examples: [
            {
                title: "تأثير الزجاج",
                code: '.glass {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n}',
                explanation: "يجعل الخلفية شبه شفافة وضبابية."
            }
        ],
        notes: ["يتطلب خلفية شبه شفافة (rgba) ليعمل."],
        relatedElements: []
    },
    {
        id: "css-clip-path",
        name: "clip-path",
        arabicName: "مسار القص",
        category: "الجرافيك والفلاتر (Graphics)",
        description: "يحدد منطقة مرئية محددة من العنصر ويخفي الباقي، مما يسمح بعمل أشكال غير مستطيلة.",
        syntax: 'clip-path: circle(50%) | polygon(50% 0%, 0% 100%, 100% 100%);',
        usage: "صور دائرية، أشكال مثلثات، تصاميم إبداعية.",
        values: [
            { value: "circle()", description: "قص دائري.", example: "circle(50% at center)" },
            { value: "polygon()", description: "قص مضلع (تحديد إحداثيات النقاط).", example: "polygon(...)" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Image Control ---
    {
        id: "css-object-fit",
        name: "object-fit",
        arabicName: "احتواء المحتوى",
        category: "الوسائط (Media)",
        description: "يحدد كيفية احتواء محتوى عنصر (مثل img أو video) داخل حاويته.",
        syntax: 'object-fit: cover | contain | fill;',
        usage: "منع تمطط الصور عند تغيير أبعادها.",
        values: [
            { value: "cover", description: "يغطي كامل المساحة مع الحفاظ على النسبة (يقص الزوائد). الـ Best Practice للصور.", example: "object-fit: cover;" },
            { value: "contain", description: "يظهر الصورة كاملة داخل الحدود مع الحفاظ على النسبة (قد يترك فراغات).", example: "object-fit: contain;" }
        ],
        examples: [],
        notes: [],
        relatedElements: [
            { element: "object-position", relationship: "لتحديد مركز القص", linkTo: "#" }
        ]
    },
    // --- User Interface & Interaction ---
    {
        id: "css-user-select",
        name: "user-select",
        arabicName: "تحديد النص",
        category: "واجهة المستخدم (UI)",
        description: "يتحكم في إمكانية تحديد المستخدم للنص.",
        syntax: 'user-select: none | auto | all;',
        usage: "منع تحديد النصوص في الأزرار أو العناصر التفاعلية لعدم تشويه المنظر.",
        values: [
            { value: "none", description: "يمنع تحديد النص.", example: "user-select: none;" },
            { value: "all", description: "يحدد النص كله بنقرة واحدة.", example: "user-select: all;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-pointer-events",
        name: "pointer-events",
        arabicName: "أحداث المؤشر",
        category: "واجهة المستخدم (UI)",
        description: "يتحكم في استجابة العنصر لأحداث الماوس.",
        syntax: 'pointer-events: none | auto;',
        usage: "تعطيل النقر على رابط، أو جعل النقر يمر عبر طبقة شفافة لما تحتها.",
        values: [
            { value: "none", description: "العنصر لا يستجيب للماوس (ويمرر النقرات لما تحته).", example: "pointer-events: none;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-caret-color",
        name: "caret-color",
        arabicName: "لون مؤشر الكتابة",
        category: "واجهة المستخدم (UI)",
        description: "يغير لون مؤشر الكتابة الوامض (Cursor) في حقول الإدخال.",
        syntax: 'caret-color: red;',
        usage: "تخصيص الثيم بالكامل.",
        values: [],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "css-resize",
        name: "resize",
        arabicName: "تغيير الحجم",
        category: "واجهة المستخدم (UI)",
        description: "يحدد ما إذا كان يمكن للمستخدم تغيير حجم العنصر (مثل textarea).",
        syntax: 'resize: none | both | horizontal | vertical;',
        usage: "منع تغيير حجم مربع النص.",
        values: [
            { value: "none", description: "يمنع تغيير الحجم.", example: "resize: none;" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Multi-column Layout ---
    {
        id: "css-columns",
        name: "columns",
        arabicName: "الأعمدة النصية",
        category: "تخطيط الأعمدة (Columns)",
        description: "خاصية مختصرة لتقسيم النص إلى أعمدة (مثل الصحف).",
        syntax: 'columns: column-count column-width;',
        usage: "تخطيط الجرائد والمجلات.",
        values: [
            { value: "column-count", description: "عدد الأعمدة.", example: "3" },
            { value: "column-gap", description: "المسافة بين الأعمدة.", example: "20px" },
            { value: "column-rule", description: "خط فاصل بين الأعمدة.", example: "1px solid black" }
        ],
        examples: [
            {
                title: "نص بنظام الأعمدة",
                code: '.text {\n  columns: 2 200px;\n  column-gap: 2rem;\n}',
                explanation: "يقسم النص لعمودين بمسافة 2rem بينهما."
            }
        ],
        notes: [],
        relatedElements: []
    }
];
