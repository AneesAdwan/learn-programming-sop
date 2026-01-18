var jsData = [
    {
        id: "js-var-let-const",
        name: "var vs let vs const",
        arabicName: "تعريف المتغيرات",
        category: "المتغيرات (Variables)",
        description: "الطرق الثلاث لتعريف المتغيرات في JavaScript والفرق الجوهري بينهم في النطاق (Scope) وإمكانية إعادة التعيين.",
        syntax: 'var x = 1;\nlet y = 2;\nconst z = 3;',
        usage: "تخزين البيانات لاستخدامها لاحقاً في البرنامج.",
        values: [
            {
                value: "var",
                description: "الطريقة القديمة (ES5). نطاقها وظيفي (Function Scope) ويمكن إعادة تعريفها.",
                example: 'var name = "Ali";'
            },
            {
                value: "let",
                description: "الطريقة الحديثة (ES6). نطاقها كتلي ({Block Scope}) ويمكن تحديث قيمتها.",
                example: 'let count = 10;'
            },
            {
                value: "const",
                description: "للثوابت (ES6). نطاقها كتلي ({Block Scope}) ولا يمكن تغيير قيمتها بعد التعريف.",
                example: 'const PI = 3.14;'
            }
        ],
        examples: [
            {
                title: "الفرق في النطاق (Scope)",
                code: 'if (true) {\n  var a = "exist everywhere";\n  let b = "exist only in if block";\n}\n\nconsole.log(a); // "exist everywhere"\nconsole.log(b); // Error: b is not defined',
                explanation: "يظهر هنا أن var تسربت خارج الـ if بينما let بقيت محصورة داخلها، وهذا هو السلوك الآمن."
            }
        ],
        notes: [
            "يفضل دائماً استخدام const كخيار افتراضي.",
            "استخدم let فقط إذا كنت تعلم أن قيمة المتغير ستتغير (مثل العدادات في الحلقات).",
            "تجنب استخدام var تماماً في المشاريع الحديثة."
        ],
        relatedElements: [
            { element: "Data Types", relationship: "أنواع البيانات التي يمكن تخزينها في المتغيرات", linkTo: "#" }
        ]
    },
    {
        id: "js-map",
        name: "Array.map()",
        arabicName: "دالة التحويل (ماب)",
        category: "المصفوفات (Arrays)",
        description: "دالة مدمجة تقوم بإنشاء مصفوفة 'جديدة' عن طريق تنفيذ وظيفة معينة على كل عنصر في المصفوفة الأصلية.",
        syntax: 'const newArray = array.map((element, index) => { ... });',
        usage: "تحويل بيانات مصفوفة، مثلاً استخراج الأسماء فقط من مصفوفة مستخدمين.",
        values: [
            {
                value: "callback",
                description: "الدالة التي ستنفذ على كل عنصر. تستقبل (element, index, array).",
                example: '(x) => x * 2'
            },
            {
                value: "Return Value",
                description: "مصفوفة جديدة بنفس طوال الأصلية ولكن بالقيم المعدلة.",
                example: '[2, 4, 6] من أصل [1, 2, 3]'
            }
        ],
        examples: [
            {
                title: "مضاعفة الأرقام",
                code: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(num => num * 2);\n\nconsole.log(doubled); // [2, 4, 6, 8]',
                explanation: "قامت map بالمرور على كل رقم وضربته في 2 ثم خزنت النتيجة في المصفوفة الجديدة."
            },
            {
                title: "تنسيق بيانات كائنات (Objects)",
                code: 'const users = [\n  { name: "Ahmed", age: 25 },\n  { name: "Sara", age: 30 }\n];\n\nconst names = users.map(user => user.name);\nconsole.log(names); // ["Ahmed", "Sara"]',
                explanation: "استخدام شائع جداً في React لاستخراج بيانات محددة لعرضها."
            }
        ],
        notes: [
            "دالة map لا تعدل المصفوفة الأصلية (Immutability).",
            "إذا كنت لا تحتاج لمصفوفة جديدة وتريد فقط التكرار، استخدم forEach بدلاً منها."
        ],
        relatedElements: [
            { element: "filter()", relationship: "لإنشاء مصفوفة جديدة بشرط معين", linkTo: "#" },
            { element: "reduce()", relationship: "لتحويل المصفوفة لقيمة واحدة", linkTo: "#" }
        ]
    },
    {
        id: "js-document-queryselector",
        name: "document.querySelector()",
        arabicName: "تحديد عنصر (DOM)",
        category: "DOM Manipulation",
        description: "تقوم بإرجاع أول عنصر في المستند يطابق المحدد (Selector) المطلوب.",
        syntax: 'const element = document.querySelector(selectors);',
        usage: "للوصول لعناصر HTML وتعديلها أو إضافة أحداث لها.",
        values: [
            {
                value: "selectors",
                description: "سلسلة نصية تحتوي على محدد CSS (CSS Selector) صالح.",
                example: '".my-class" | "#my-id" | "div > p"'
            }
        ],
        examples: [
            {
                title: "تغيير نص عنصر",
                code: 'const title = document.querySelector("h1");\ntitle.textContent = "مرحباً بجافاسكربت!";\ntitle.style.color = "blue";',
                explanation: "حددنا أول عنوان h1 في الصفحة وقمنا بتغيير نصه ولونه."
            }
        ],
        notes: [
            "إذا لم يتم العثور على أي عنصر، تعيد null.",
            "إذا أردت تحديد كل العناصر المطابقة (وليس الأول فقط)، استخدم querySelectorAll()."
        ],
        relatedElements: [
            { element: "getElementById()", relationship: "أسرع لكن يعمل فقط مع المعرفات ID", linkTo: "#" },
            { element: "addEventListener()", relationship: "لإضافة تفاعل للعنصر المحدد", linkTo: "#" }
        ]
    },
    // --- Functions ---
    {
        id: "js-function",
        name: "function",
        arabicName: "الدالة",
        category: "الدوال (Functions)",
        description: "كتلة من الكود مصممة لتنفيذ مهمة معينة، يتم تنفيذها عند استدعائها.",
        syntax: 'function name(parameter1, parameter2) {\n  // Code to be executed\n}',
        usage: "تغليف المنطق (Logic) لإعادة استخدامه، تنظيم الكود.",
        values: [],
        examples: [
            {
                title: "دالة جمع بسيطة",
                code: 'function add(a, b) {\n  return a + b;\n}\n\nlet result = add(5, 3); // 8',
                explanation: "تستقبل الدالة معاملين وترجع حاصل جمعهما."
            }
        ],
        notes: [
            "يمكن تعيين قيمة افتراضية للمعاملات: function(a = 1) { ... }"
        ],
        relatedElements: [
            { element: "Arrow Function", relationship: "صيغة أحدث وأقصر لكتابة الدوال", linkTo: "#js-arrow-function" },
            { element: "return", relationship: "لإرجاع قيمة من الدالة وإيقاف تنفيذها", linkTo: "#" }
        ]
    },
    {
        id: "js-arrow-function",
        name: "Arrow Function",
        arabicName: "الداالة السهمية",
        category: "الدوال (Functions)",
        description: "طريقة مختصرة لكتابة الدوال في ES6.",
        syntax: 'const name = (param1, param2) => { ... };',
        usage: "تستخدم بكثرة في Callbacks و Functional Programming.",
        values: [],
        examples: [
            {
                title: "دالة سهمية من سطر واحد",
                code: 'const multiply = (x, y) => x * y;\n\nconsole.log(multiply(2, 3)); // 6',
                explanation: "إذا كان جسم الدالة تعبيراً واحداً، يمكن حذف الأقواس المعقوفة { } وكلمة return."
            }
        ],
        notes: [
            "الدوال السهمية لا تمتلك this خاص بها، بل تأخذه من النطاق المحيط (Lexical Scope)."
        ],
        relatedElements: []
    },
    // --- Conditionals ---
    {
        id: "js-if-else",
        name: "if...else",
        arabicName: "الجملة الشرطية",
        category: "الجمل الشرطية (Conditionals)",
        description: "تسمح بتنفيذ كود معين فقط إذا تحقق شرط محدد.",
        syntax: 'if (condition) {\n  // block of code to be executed if the condition is true\n} else {\n  // block of code to be executed if the condition is false\n}',
        usage: "اتخاذ القرارات في البرنامج (مثل: إذا كان المستخدم مسجل دخول، اعرض الصفحة).",
        values: [],
        examples: [
            {
                title: "فحص العمر",
                code: 'let age = 18;\n\nif (age >= 18) {\n  console.log("بالغ");\n} else {\n  console.log("قاصر");\n}',
                explanation: ""
            }
        ],
        notes: [],
        relatedElements: [
            { element: "switch", relationship: "بديل جيد عند وجود احتمالات كثيرة لنفس المتغير", linkTo: "#" },
            { element: "Ternary Operator", relationship: "طريقة مختصرة لكتابة if-else في سطر واحد", linkTo: "#" }
        ]
    },
    // --- Loops ---
    {
        id: "js-for-loop",
        name: "for loop",
        arabicName: "حلقة التكرار for",
        category: "الحلقات (Loops)",
        description: "تستخدم لتكرار كتلة من الكود عدد معروف من المرات.",
        syntax: 'for (initialization; condition; increment) {\n  // Code\n}',
        usage: "المرور على عناصر مصفوفة، تكرار عملية حسابية.",
        values: [],
        examples: [
            {
                title: "طباعة الأرقام من 0 إلى 4",
                code: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}',
                explanation: "يبدأ i بصفر، ويستمر طالما i أصغر من 5، ويزيد i بواحد في كل دورة."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "while", relationship: "تكرار طالما الشرط صحيح (عدد المرات غير معروف مسبقاً)", linkTo: "#" },
            { element: "for...of", relationship: "طريقة أحدث للمرور على المصفوفات", linkTo: "#" }
        ]
    },
    // --- Events ---
    {
        id: "js-add-event-listener",
        name: "addEventListener",
        arabicName: "مراقب الأحداث",
        category: "الأحداث (Events)",
        description: "يربط دالة بحدث معين (مثل النقر) على عنصر HTML.",
        syntax: 'element.addEventListener("click", function);',
        usage: "جعل الأزرار تعمل، الاستجابة للكتابة، حركة الماوس.",
        values: [
            { value: "event", description: "اسم الحدث (بدون on).", example: '"click", "submit", "keydown"' },
            { value: "function", description: "الدالة التي ستنفذ عند وقوع الحدث.", example: "() => alert('Hello')" }
        ],
        examples: [
            {
                title: "زر يعرض رسالة",
                code: 'const btn = document.querySelector("button");\nbtn.addEventListener("click", () => {\n  console.log("تم النقر!");\n});',
                explanation: "عندما ينقر المستخدم على الزر، ستظهر الرسالة في الكونسول."
            }
        ],
        notes: [
            "يمكن إضافة أكثر من مستمع لنفس الحدث على نفس العنصر."
        ],
        relatedElements: [
            { element: "removeEventListener", relationship: "لإزالة الحدث", linkTo: "#" }
        ]
    },
    // --- Objects ---
    {
        id: "js-object",
        name: "Object",
        arabicName: "الكائن",
        category: "الكائنات (Objects)",
        description: "هيكل بيانات يخزن البيانات كأزواج (مفتاح: قيمة).",
        syntax: 'const person = {\n  key: value,\n  method() { ... }\n};',
        usage: "تمثيل كيانات حقيقية (مستخدم، منتج، سيارة).",
        values: [],
        examples: [
            {
                title: "كائن مستخدم",
                code: 'const user = {\n  name: "Ali",\n  age: 25,\n  sayHello() {\n    return "مرحباً " + this.name;\n  }\n};\n\nconsole.log(user.name); // Ali\nconsole.log(user.sayHello()); // مرحباً Ali',
                explanation: "يحتوي الكائن على خصائص (name, age) ودالة (sayHello)."
            }
        ],
        notes: [
            "كلمة this تشير إلى الكائن نفسه عند استخدامها داخله."
        ],
        relatedElements: []
    },
    // --- Strings ---
    {
        id: "js-string-methods",
        name: "String Methods",
        arabicName: "دوال النصوص",
        category: "التعامل مع النصوص (Strings)",
        description: "مجموعة دوال مدمجة لمعالجة السلاسل النصية.",
        syntax: 'string.toUpperCase() | string.includes() ...',
        usage: "البحث في النصوص، التحويل، التقطيع.",
        values: [
            { value: "toUpperCase()", description: "تحويل لحروف كبيرة.", example: '"Hi".toUpperCase() // "HI"' },
            { value: "includes()", description: "فحص ما إذا كان النص يحتوي كلمة معينة.", example: '"Hello".includes("e") // true' },
            { value: "split()", description: "تقسيم النص لمصفوفة.", example: '"a-b-c".split("-") // ["a","b","c"]' }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Async Programming ---
    {
        id: "js-promise",
        name: "Promise",
        arabicName: "الوعد",
        category: "غير متزامن (Async)",
        description: "كائن يمثل احتمالية نجاح أو فشل عملية غير متزامنة في المستقبل.",
        syntax: 'new Promise((resolve, reject) => { ... })',
        usage: "جلب البيانات من الخادم، العمليات التي تستغرق وقتاً طويلاً.",
        values: [],
        examples: [
            {
                title: "محاكاة جلب بيانات",
                code: 'const fetchData = new Promise((resolve) => {\n  setTimeout(() => resolve("بيانات!"), 2000);\n});\n\nfetchData.then(data => console.log(data));',
                explanation: "الرسالة ستظهر بعد ثانيتين."
            }
        ],
        notes: [],
        relatedElements: [
            { element: "async/await", relationship: "طريقة أسهل للتعامل مع الوعود", linkTo: "#js-async-await" }
        ]
    },
    {
        id: "js-async-await",
        name: "async / await",
        arabicName: "المزامنة والانتظار",
        category: "غير متزامن (Async)",
        description: "سكر نحوي (Syntactic Sugar) فوق الـ Promises لجعل الكود غير المتزامن يبدو كالمتزامن.",
        syntax: 'async function getData() {\n  const res = await fetch(url);\n}',
        usage: "أفضل طريقة حالياً للتعامل مع العمليات غير المتزامنة.",
        values: [],
        examples: [
            {
                title: "جلب بيانات API",
                code: 'async function getUser() {\n  try {\n    const response = await fetch("https://api.com/user");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("فشل");\n  }\n}',
                explanation: "كلمة await توقف تنفيذ الدالة مؤقتاً حتى يكتمل الطلب."
            }
        ],
        notes: [
            "لا يمكن استخدام await إلا داخل دالة معرفة بـ async."
        ],
        relatedElements: []
    },
    {
        id: "js-fetch",
        name: "fetch",
        arabicName: "جلب البيانات",
        category: "غير متزامن (Async)",
        description: "واجهة حديثة لإجراء طلبات HTTP (مثل الحصول على بيانات JSON من خادم).",
        syntax: 'fetch(url, options)',
        usage: "التواصل مع الـ Backend APIs.",
        values: [
            { value: "method", description: "GET, POST, PUT, DELETE", example: 'method: "POST"' },
            { value: "body", description: "البيانات المرسلة.", example: 'body: JSON.stringify(data)' }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Array Methods ---
    {
        id: "js-filter",
        name: "filter()",
        arabicName: "تصفية المصفوفة",
        category: "المصفوفات (Arrays)",
        description: "تنشئ مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرطاً معيناً.",
        syntax: 'const newArr = array.filter(item => item > 10);',
        usage: "تصفية المنتجات حسب السعر، البحث عن مستخدم.",
        values: [],
        examples: [
            {
                title: "استخراج الأرقام الزوجية",
                code: 'const nums = [1, 2, 3, 4, 5];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]',
                explanation: ""
            }
        ],
        notes: ["لا تعدل المصفوفة الأصلية."],
        relatedElements: []
    },
    {
        id: "js-reduce",
        name: "reduce()",
        arabicName: "تقليص المصفوفة",
        category: "المصفوفات (Arrays)",
        description: "تقوم بتنفيذ دالة على كل عنصر لتجميعها في قيمة واحدة نهائية (رقم، كائن، مصفوفة).",
        syntax: 'array.reduce((acc, curr) => acc + curr, initialValue);',
        usage: "جمع الأرقام، تجميع البيانات.",
        values: [
            { value: "accumulator", description: "المتغير الذي يجمع النتيجة.", example: "acc" },
            { value: "current", description: "العنصر الحالي.", example: "curr" }
        ],
        examples: [
            {
                title: "جمع عناصر المصفوفة",
                code: 'const nums = [10, 20, 30];\nconst sum = nums.reduce((acc, curr) => acc + curr, 0);\nconsole.log(sum); // 60',
                explanation: "بدأ التجميع من 0، ثم أضاف 10، ثم 20، ثم 30."
            }
        ],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-find",
        name: "find()",
        arabicName: "إيجاد عنصر",
        category: "المصفوفات (Arrays)",
        description: "ترجع قيمة 'أول' عنصر يحقق الشرط، وإلا ترجع undefined.",
        syntax: 'const item = array.find(x => x.id === 1);',
        usage: "البحث عن عنصر محدد في قائمة بيانات.",
        values: [],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Storage ---
    {
        id: "js-localstorage",
        name: "localStorage",
        arabicName: "التخزين المحلي",
        category: "التخزين (Storage)",
        description: "يسمح بتخزين بيانات في متصفح المستخدم بدون تاريخ انتهاء صلاحية (تبقى حتى بعد إغلاق المتصفح).",
        syntax: 'localStorage.setItem("key", "value");',
        usage: "حفظ الوضع المظلم، حفظ عربة التسوق.",
        values: [
            { value: "setItem()", description: "حفظ قيمة.", example: 'setItem("name", "Ali")' },
            { value: "getItem()", description: "جلب قيمة.", example: 'getItem("name")' },
            { value: "removeItem()", description: "حذف قيمة.", example: 'removeItem("name")' }
        ],
        examples: [
            {
                title: "حفظ واسترجاع اسم",
                code: 'localStorage.setItem("username", "Guest");\nconsole.log(localStorage.getItem("username")); // Guest',
                explanation: ""
            }
        ],
        notes: ["يخزن النصوص (Strings) فقط. لتخزين كائنات، استخدم JSON.stringify()."],
        relatedElements: [
            { element: "sessionStorage", relationship: "نفس الوظيفة لكن تمسح البيانات عند إغلاق التبويب", linkTo: "#" }
        ]
    },
    // --- Built-in Objects ---
    {
        id: "js-math",
        name: "Math",
        arabicName: "الرياضيات",
        category: "الكائنات المدمجة",
        description: "كائن يحتوي على خصائص ودوال لإجراء العمليات الرياضية.",
        syntax: 'Math.round(4.7); // 5',
        usage: "توليد أرقام عشوائية، التقريب، الجذور.",
        values: [
            { value: "random()", description: "رقم عشوائي بين 0 و 1.", example: "Math.random()" },
            { value: "floor()", description: "تقريب للأسفل.", example: "Math.floor(4.9) // 4" },
            { value: "max()", description: "أكبر قيمة.", example: "Math.max(1, 5, 2) // 5" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-date",
        name: "Date",
        arabicName: "التاريخ والوقت",
        category: "الكائنات المدمجة",
        description: "للتعامل مع التواريخ والأوقات.",
        syntax: 'const now = new Date();',
        usage: "عرض الوقت الحالي، حساب الفرق بين تاريخين.",
        values: [],
        examples: [
            {
                title: "السنة الحالية",
                code: 'const d = new Date();\nconsole.log(d.getFullYear()); // 202X',
                explanation: ""
            }
        ],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-json",
        name: "JSON",
        arabicName: "JSON",
        category: "تنسيق البيانات",
        description: "كائن للتعامل مع تنسيق JSON (JavaScript Object Notation).",
        syntax: 'JSON.parse() | JSON.stringify()',
        usage: "إرسال واستقبال البيانات من الخادم.",
        values: [
            { value: "parse()", description: "تحويل نص JSON إلى كائن JS.", example: 'JSON.parse(str)' },
            { value: "stringify()", description: "تحويل كائن JS إلى نص JSON.", example: 'JSON.stringify(obj)' }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Modern Features (ES6+) ---
    {
        id: "js-class",
        name: "Class",
        arabicName: "الفئات",
        category: "الكائنات (Objects)",
        description: "قالب لإنشاء الكائنات (Object Constructor) بطريقة أبسط وأكثر تنظيماً.",
        syntax: 'class User {\n  constructor(name) { ... }\n}',
        usage: "البرمجة كائنية التوجه (OOP).",
        values: [],
        examples: [
            {
                title: "تعريف كلاس",
                code: 'class Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n}\nconst myCar = new Car("Ford");',
                explanation: ""
            }
        ],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-try-catch",
        name: "try...catch",
        arabicName: "معالجة الأخطاء",
        category: "التحكم في التدفق",
        description: "تسمح بتجربة كود (try) والتعامل مع الخطأ إن وجد (catch) دون إيقاف البرنامج.",
        syntax: 'try {\n  // code\n} catch (err) {\n  // handle error\n}',
        usage: "منع انهيار التطبيق عند حدوث أخطاء غير متوقعة.",
        values: [],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Data Structures ---
    {
        id: "js-set",
        name: "Set",
        arabicName: "المجموعة الفريدة",
        category: "هياكل البيانات (Data Structures)",
        description: "مجموعة من القيم الفريدة (لا يمكن تكرار القيمة فيها).",
        syntax: 'const mySet = new Set([1, 2, 2, 3]); // {1, 2, 3}',
        usage: "إزالة التكرار من المصفوفات.",
        values: [
            { value: "add()", description: "إضافة عنصر.", example: "set.add(5)" },
            { value: "has()", description: "التحقق من وجود عنصر.", example: "set.has(5)" },
            { value: "size", description: "عدد العناصر.", example: "set.size" }
        ],
        examples: [
            {
                title: "إزالة التكرار",
                code: 'const nums = [1, 2, 2, 3, 3];\nconst unique = [...new Set(nums)];\nconsole.log(unique); // [1, 2, 3]',
                explanation: ""
            }
        ],
        notes: [],
        relatedElements: [
            { element: "Map", relationship: "نسخة مطورة من الكائنات (تسمح بأي نوع كمفتاح)", linkTo: "#js-map-structure" }
        ]
    },
    {
        id: "js-map-structure",
        name: "Map (Structure)",
        arabicName: "الخريطة",
        category: "هياكل البيانات (Data Structures)",
        description: "هيكل بيانات يخزن أزواج (مفتاح-قيمة) ويحفظ ترتيب الإدخال.",
        syntax: 'const map = new Map();',
        usage: "عند الحاجة لمفاتيح ليست نصوصاً (كائنات مثلاً) أو أداء أفضل في الإضافة والحذف.",
        values: [
            { value: "set()", description: "تعيين قيمة.", example: 'map.set("key", "val")' },
            { value: "get()", description: "جلب قيمة.", example: 'map.get("key")' }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    // --- Browser Object Model (BOM) ---
    {
        id: "js-window-location",
        name: "window.location",
        arabicName: "عنوان الصفحة",
        category: "BOM (المتصفح)",
        description: "يحتوي على معلومات حول عنوان URL الحالي ويسمح بتغييره.",
        syntax: 'window.location.href',
        usage: "إعادة التوجيه لصفحة أخرى، الحصول على المعاملات (query params).",
        values: [
            { value: "href", description: "الرابط الكامل.", example: "location.href = 'https://google.com'" },
            { value: "reload()", description: "إعادة تحميل الصفحة.", example: "location.reload()" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-window-history",
        name: "window.history",
        arabicName: "سجل التصفح",
        category: "BOM (المتصفح)",
        description: "يسمح بالتحكم في سجل تصفح المتصفح (الرجوع للخلف والتقدم للأمام).",
        syntax: 'history.back()',
        usage: "زر الرجوع في التطبيقات ذات الصفحة الواحدة (SPA).",
        values: [
            { value: "back()", description: "الرجوع للصفحة السابقة.", example: "history.back()" },
            { value: "pushState()", description: "تغيير الرابط دون إعادة التحميل.", example: "history.pushState(...)" }
        ],
        examples: [],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-timers",
        name: "Timers (setTimeout / setInterval)",
        arabicName: "المؤقتات",
        category: "BOM (المتصفح)",
        description: "دوال لتنفيذ الكود بعد فترة زمنية محددة.",
        syntax: 'setTimeout(func, delay) | setInterval(func, interval)',
        usage: "تأخير تنفيذ أمر، إنشاء عداد وقت.",
        values: [
            { value: "setTimeout", description: "ينفذ مرة واحدة بعد انتهاء الوقت.", example: "setTimeout(() => alert('Hi'), 1000)" },
            { value: "setInterval", description: "يكرر التنفيذ كل فترة زمنية.", example: "setInterval(tick, 1000)" },
            { value: "clearTimeout", description: "إلغاء المؤقت.", example: "clearTimeout(id)" }
        ],
        examples: [
            {
                title: "عداد تنازلي بسيط",
                code: 'let count = 3;\nconst id = setInterval(() => {\n  console.log(count);\n  count--;\n  if (count < 0) clearInterval(id);\n}, 1000);',
                explanation: "سيطبع 3, 2, 1, 0 ثم يتوقف."
            }
        ],
        notes: [],
        relatedElements: []
    },
    // --- Control Flow (Advanced) ---
    {
        id: "js-switch",
        name: "switch",
        arabicName: "جملة الاختيار",
        category: "التحكم في التدفق",
        description: "تستخدم لتنفيذ كتل مختلفة من الكود بناءً على شروط متعددة لنفس المتغير.",
        syntax: 'switch(expression) {\n  case x:\n    // code\n    break;\n  default:\n    // code\n}',
        usage: "بديل أنظف لـ if...else if الكثيرة.",
        values: [],
        examples: [
            {
                title: "أيام الأسبوع",
                code: 'let day = 1;\nswitch (day) {\n  case 1:\n    console.log("السبت");\n    break;\n  case 2:\n    console.log("الأحد");\n    break;\n  default:\n    console.log("يوم آخر");\n}',
                explanation: "لا تنس كلمة break وإلا سينفذ الكود التالي أيضاً (Fallthrough)."
            }
        ],
        notes: [],
        relatedElements: []
    },
    {
        id: "js-regex",
        name: "RegExp",
        arabicName: "التعابير النمطية",
        category: "معالجة النصوص",
        description: "أنماط تستخدم لمطابقة تركيبات الأحرف في السلاسل النصية.",
        syntax: '/pattern/modifiers',
        usage: "التحقق من صحة البريد الإلكتروني، البحث والاستبدال المعقد.",
        values: [
            { value: "test()", description: "يفحص وجود النمط (يرجع true/false).", example: "/abc/.test(str)" },
            { value: "match()", description: "يرجع مصفوفة بالمطابقات.", example: "str.match(/abc/g)" }
        ],
        examples: [
            {
                title: "التحقق من أرقام فقط",
                code: 'const regex = /^[0-9]+$/;\nconsole.log(regex.test("123")); // true\nconsole.log(regex.test("12a")); // false',
                explanation: "^ يعني البداية، $ يعني النهاية، [0-9]+ يعني أرقام متكررة."
            }
        ],
        notes: [],
        relatedElements: []
    }
];
