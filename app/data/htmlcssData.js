export const htmlcssData = {
  title: 'HTML & CSS Interview Questions',
  titleB: 'এইচটিএমএল ও সিএসএস ইন্টারভিউ প্রশ্ন',
  description: 'Core concepts of HTML and CSS for web development',
  basic: [
    {
      question:
        'What is the difference between HTML and HTML5? HTML এবং HTML5 এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> HTML5 হলো HTML-এর সর্বশেষ সংস্করণ, যা নতুন ফিচার এবং উন্নতি নিয়ে এসেছে।</p>
        <h4>Key Differences:</h4>
        <ul>
          <li><strong>HTML:</strong> Basic markup language for web structure.</li>
          <li><strong>HTML5:</strong> Adds semantic elements (<code>&lt;header&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>), multimedia tags (<code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, <code>&lt;canvas&gt;</code>), and APIs like <code>localStorage</code>, <code>sessionStorage</code> for offline storage.</li>
        </ul>
        <h4>Example of HTML5 Semantic Tags:</h4>
        <pre><code>
&lt;header&gt;
  &lt;h1&gt;Welcome&lt;/h1&gt;
&lt;/header&gt;
&lt;section&gt;
  &lt;article&gt;Content here&lt;/article&gt;
&lt;/section&gt;
&lt;footer&gt;Copyright 2025&lt;/footer&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What are semantic HTML elements? সিমান্টিক HTML উপাদানগুলো কী?',
      answer: `
        <p><strong>বাংলা:</strong> সিমান্টিক উপাদানগুলো অর্থপূর্ণ, যা ব্রাউজার এবং ডেভেলপারদের কনটেন্টের অর্থ বুঝতে সাহায্য করে।</p>
        <h4>Examples:</h4>
        <ul>
          <li><code>&lt;header&gt;</code>: Page or section header</li>
          <li><code>&lt;footer&gt;</code>: Page or section footer</li>
          <li><code>&lt;section&gt;</code>: Thematic content grouping</li>
          <li><code>&lt;article&gt;</code>: Independent content</li>
        </ul>
        <h4>Benefits:</h4>
        <ul>
          <li>Improves accessibility</li>
          <li>Better SEO</li>
          <li>Clearer code structure</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between inline, block, and inline-block elements? ইনলাইন, ব্লক এবং ইনলাইন-ব্লক উপাদানের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> HTML উপাদানগুলোর ডিসপ্লে প্রকার তাদের লেআউট নির্ধারণ করে।</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Block:</strong> Takes full width, starts on a new line (e.g., <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>)</li>
          <li><strong>Inline:</strong> Takes only content width, stays in line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>)</li>
          <li><strong>Inline-block:</strong> Inline but allows setting width/height (e.g., <code>&lt;img&gt;</code>)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
div { display: block; } /* Full width, new line */
span { display: inline; } /* Content width, same line */
img { display: inline-block; } /* Content width, settable height/width */
        </code></pre>
      `,
    },
    {
      question: 'What are meta tags in HTML? HTML-এ মেটা ট্যাগ কী?',
      answer: `
        <p><strong>বাংলা:</strong> মেটা ট্যাগগুলো <code>&lt;head&gt;</code> সেকশনে থাকে এবং পেজের মেটাডেটা প্রদান করে।</p>
        <h4>Common Meta Tags:</h4>
        <ul>
          <li><code>&lt;meta charset="UTF-8"&gt;</code>: Character encoding</li>
          <li><code>&lt;meta name="description" content="Page description"&gt;</code>: SEO description</li>
          <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>: Responsive viewport</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="description" content="Learn HTML and CSS"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;/head&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between id and class in HTML? HTML-এ id এবং class-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> id এবং class উপাদান চিহ্নিত করতে ব্যবহৃত হয়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>id:</strong> Unique identifier, used once per page (e.g., <code>id="header"</code>)</li>
          <li><strong>class:</strong> Non-unique, used on multiple elements (e.g., <code>class="button"</code>)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;div id="unique-header"&gt;Header&lt;/div&gt;
&lt;button class="btn"&gt;Click me&lt;/button&gt;
&lt;button class="btn"&gt;Another button&lt;/button&gt;

#css
#unique-header { background: blue; }
.btn { background: green; }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between relative, absolute, fixed, and sticky positioning in CSS? CSS-এ relative, absolute, fixed এবং sticky পজিশনিং-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> CSS পজিশনিং উপাদানের লেআউট নিয়ন্ত্রণ করে।</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>relative:</strong> Moves relative to its normal position</li>
          <li><strong>absolute:</strong> Positioned relative to nearest positioned ancestor</li>
          <li><strong>fixed:</strong> Fixed relative to viewport, doesn't scroll</li>
          <li><strong>sticky:</strong> Toggles between relative and fixed based on scroll</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.relative { position: relative; top: 10px; left: 10px; }
.absolute { position: absolute; top: 20px; left: 20px; }
.fixed { position: fixed; top: 0; right: 0; }
.sticky { position: sticky; top: 0; }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between inline CSS, internal CSS, and external CSS? ইনলাইন, ইন্টারনাল এবং এক্সটারনাল CSS-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> CSS বিভিন্ন উপায়ে প্রয়োগ করা যায়।</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Inline CSS:</strong> Inside element's <code>style</code> attribute</li>
          <li><strong>Internal CSS:</strong> Inside <code>&lt;style&gt;</code> tag in <code>&lt;head&gt;</code></li>
          <li><strong>External CSS:</strong> Separate <code>.css</code> file linked via <code>&lt;link&gt;</code></li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;!-- Inline CSS --&gt;
&lt;div style="color: blue;"&gt;Inline&lt;/div&gt;

&lt;!-- Internal CSS --&gt;
&lt;head&gt;
  &lt;style&gt;
    .internal { color: green; }
  &lt;/style&gt;
&lt;/head&gt;

&lt;!-- External CSS --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What are pseudo-classes and pseudo-elements? সিউডো-ক্লাস এবং সিউডো-এলিমেন্ট কী?',
      answer: `
        <p><strong>বাংলা:</strong> সিউডো-ক্লাস এবং সিউডো-এলিমেন্ট CSS-এ উপাদানের নির্দিষ্ট অবস্থা বা অংশ স্টাইল করতে ব্যবহৃত হয়।</p>
        <h4>Pseudo-classes:</h4>
        <p>Define element states (e.g., <code>:hover</code>, <code>:focus</code>)</p>
        <h4>Pseudo-elements:</h4>
        <p>Style specific parts of an element (e.g., <code>::before</code>, <code>::after</code>)</p>
        <h4>Example:</h4>
        <pre><code>
a:hover { color: red; } /* Pseudo-class */
p::before { content: "★"; } /* Pseudo-element */
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between em, rem, px, and % in CSS units? CSS ইউনিটে em, rem, px এবং %-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> CSS ইউনিটগুলো স্টাইলিং এর জন্য size নির্ধারণ করে।</p>
        <h4>Units:</h4>
        <ul>
          <li><strong>px:</strong> Fixed pixel size</li>
          <li><strong>em:</strong> Relative to parent element's font-size</li>
          <li><strong>rem:</strong> Relative to root (<code>html</code>) font-size</li>
          <li><strong>%:</strong> Percentage of parent element's size</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
html { font-size: 16px; }
.parent { font-size: 20px; }
.em { font-size: 1.5em; } /* 30px (1.5 * 20px) */
.rem { font-size: 1.5rem; } /* 24px (1.5 * 16px) */
.percent { width: 50%; } /* 50% of parent width */
        </code></pre>
      `,
    },
    {
      question: 'What are media queries in CSS? CSS-এ মিডিয়া কোয়েরি কী?',
      answer: `
        <p><strong>বাংলা:</strong> মিডিয়া কোয়েরি responsive design-এর জন্য ব্যবহৃত হয়, যা ডিভাইসের স্ক্রিন সাইজ অনুযায়ী CSS পরিবর্তন করে।</p>
        <h4>Example:</h4>
        <pre><code>
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
@media (min-width: 769px) {
  body {
    font-size: 16px;
  }
}
        </code></pre>
        <h4>Use Cases:</h4>
        <ul>
          <li>Responsive layouts</li>
          <li>Device-specific styling</li>
          <li>Orientation-based styling</li>
        </ul>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is the difference between relative and absolute paths in HTML? HTML-এ relative এবং absolute পাথের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> HTML-এ পাথ ফাইল বা রিসোর্সের লোকেশন নির্দেশ করে।</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Relative Path:</strong> Path relative to current file (e.g., <code>../images/logo.png</code>)</li>
          <li><strong>Absolute Path:</strong> Full path from root or domain (e.g., <code>/images/logo.png</code> or <code>https://example.com/images/logo.png</code>)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;img src="../images/logo.png"&gt; &lt;!-- Relative --&gt;
&lt;img src="/images/logo.png"&gt; &lt;!-- Absolute (root-relative) --&gt;
&lt;img src="https://example.com/images/logo.png"&gt; &lt;!-- Absolute (full URL) --&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between <link> and <script> tags? <link> এবং <script> ট্যাগের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> <code>&lt;link&gt;</code> এবং <code>&lt;script&gt;</code> ট্যাগ বাহ্যিক রিসোর্স লোড করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>&lt;link&gt;</strong>: Loads external CSS (<code>rel="stylesheet"</code>)</li>
          <li><strong>&lt;script&gt;</strong>: Loads external JavaScript</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between responsive and adaptive design? রেসপনসিভ এবং অ্যাডাপ্টিভ ডিজাইনের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেসপনসিভ এবং অ্যাডাপ্টিভ ডিজাইন ডিভাইসের জন্য লেআউট অপটিমাইজ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Responsive:</strong> Fluid layout, auto-adjusts to screen size using percentages, rem, etc.</li>
          <li><strong>Adaptive:</strong> Predefined layouts for specific screen sizes (e.g., mobile, tablet, desktop)</li>
        </ul>
        <h4>Example (Responsive):</h4>
        <pre><code>
.container {
  width: 100%;
  max-width: 1200px;
}
@media (max-width: 768px) {
  .container { width: 90%; }
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between z-index and stacking context? z-index এবং stacking context-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> z-index এবং stacking context উপাদানের layer অর্ডার নিয়ন্ত্রণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>z-index:</strong> Defines element's stacking order (higher value = front)</li>
          <li><strong>Stacking Context:</strong> Created by positioned elements (e.g., <code>position: relative/absolute/fixed</code> with <code>z-index</code>)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.parent { position: relative; z-index: 1; }
.child { position: absolute; z-index: 2; }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between relative units (%) and viewport units (vh, vw)? Relative ইউনিট (%) এবং viewport ইউনিট (vh, vw)-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> Relative এবং viewport ইউনিট সাইজ নির্ধারণের জন্য ব্যবহৃত হয়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>%:</strong> Relative to parent element's size</li>
          <li><strong>vh/vw:</strong> Relative to viewport height (1vh = 1% of viewport height) or width (1vw = 1% of viewport width)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.parent { width: 500px; }
.percent { width: 50%; } /* 250px */
.vh { height: 50vh; } /* 50% of viewport height */
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between position: absolute and position: fixed? position: absolute এবং position: fixed-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> absolute এবং fixed পজিশনিং লেআউটে উপাদানের অবস্থান নির্ধারণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>absolute:</strong> Positioned relative to nearest positioned ancestor</li>
          <li><strong>fixed:</strong> Positioned relative to viewport, doesn't move on scroll</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.absolute { position: absolute; top: 10px; left: 10px; }
.fixed { position: fixed; top: 10px; right: 10px; }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between inline SVG and external SVG? ইনলাইন SVG এবং এক্সটারনাল SVG-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> SVG গ্রাফিক্স HTML-এ দুইভাবে ব্যবহৃত হয়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Inline SVG:</strong> SVG code directly in HTML, easily styled/animated with CSS/JS</li>
          <li><strong>External SVG:</strong> Loaded via <code>&lt;img&gt;</code> or <code>&lt;object&gt;</code>, harder to style</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;!-- Inline SVG --&gt;
&lt;svg width="100" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" fill="blue" /&gt;
&lt;/svg&gt;

&lt;!-- External SVG --&gt;
&lt;img src="circle.svg" alt="Circle"&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What are the new form input types in HTML5? HTML5-এ নতুন ফর্ম ইনপুট টাইপগুলো কী?',
      answer: `
        <p><strong>বাংলা:</strong> HTML5 নতুন ইনপুট টাইপ যোগ করেছে।</p>
        <h4>New Input Types:</h4>
        <ul>
          <li><code>email</code></li>
          <li><code>url</code></li>
          <li><code>date</code></li>
          <li><code>color</code></li>
          <li><code>range</code></li>
          <li><code>number</code></li>
          <li><code>search</code></li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;input type="email" name="email"&gt;
&lt;input type="date" name="dob"&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between <strong> and <b>? <strong> এবং <b>-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> <code>&lt;strong&gt;</code> এবং <code>&lt;b&gt;</code> দুটোই টেক্সটকে bold করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>&lt;strong&gt;</strong>: Semantic, indicates important content</li>
          <li><strong>&lt;b&gt;</strong>: Visual bold styling, no semantic meaning</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;strong&gt;Important text&lt;/strong&gt;
&lt;b&gt;Bold text&lt;/b&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between <em> and <i>? <em> এবং <i>-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> <code>&lt;em&gt;</code> এবং <code>&lt;i&gt;</code> দুটোই টেক্সটকে italic করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>&lt;em&gt;</strong>: Semantic, indicates emphasis</li>
          <li><strong>&lt;i&gt;</strong>: Visual italic styling, no semantic meaning</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;em&gt;Emphasized text&lt;/em&gt;
&lt;i&gt;Italic text&lt;/i&gt;
        </code></pre>
      `,
    },
  ],
  advanced: [
    {
      question:
        'What is the difference between min-width, max-width, and width in CSS? CSS-এ min-width, max-width এবং width-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> CSS-এ width properties উপাদানের সাইজ নিয়ন্ত্রণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>width:</strong> Fixed width (e.g., <code>200px</code>)</li>
          <li><strong>min-width:</strong> Minimum width limit</li>
          <li><strong>max-width:</strong> Maximum width limit</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.container {
  width: 500px;
  min-width: 300px;
  max-width: 800px;
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between CSS Grid and Flexbox? CSS গ্রিড এবং ফ্লেক্সবক্সের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> CSS গ্রিড এবং ফ্লেক্সবক্স লেআউট তৈরির জন্য ব্যবহৃত হয়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Flexbox:</strong> 1D layout (row or column)</li>
          <li><strong>Grid:</strong> 2D layout (rows and columns simultaneously)</li>
        </ul>
        <h4>Example (Flexbox):</h4>
        <pre><code>
.flex-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
        </code></pre>
        <h4>Example (Grid):</h4>
        <pre><code>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between CSS transitions and animations? CSS ট্রানজিশন এবং অ্যানিমেশনের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ট্রানজিশন এবং অ্যানিমেশন উপাদানের ভিজুয়াল পরিবর্তন নিয়ন্ত্রণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Transition:</strong> Effect on state change (e.g., hover)</li>
          <li><strong>Animation:</strong> Continuous motion using keyframes</li>
        </ul>
        <h4>Example (Transition):</h4>
        <pre><code>
button {
  transition: background 0.3s ease;
}
button:hover {
  background: blue;
}
        </code></pre>
        <h4>Example (Animation):</h4>
        <pre><code>
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}
.element {
  animation: slide 2s infinite;
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between inline-style and CSS classes in performance? ইনলাইন স্টাইল এবং CSS ক্লাসের পারফরম্যান্সে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইনলাইন স্টাইল এবং CSS ক্লাস পারফরম্যান্স এবং মেইনটেন্যান্সে ভিন্ন।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Inline Style:</strong> Hard to maintain, no caching, overrides harder</li>
          <li><strong>CSS Classes:</strong> Reusable, maintainable, cached by browser</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;!-- Inline --&gt;
&lt;div style="color: blue;"&gt;Text&lt;/div&gt;

&lt;!-- Class --&gt;
&lt;div class="text-blue"&gt;Text&lt;/div&gt;
&lt;style&gt;
.text-blue { color: blue; }
&lt;/style&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between absolute vs relative URL in link tags? লিঙ্ক ট্যাগে absolute এবং relative URL-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> লিঙ্ক ট্যাগে URL-এর ধরন রিসোর্সের লোকেশন নির্দেশ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Absolute URL:</strong> Full URL with domain (e.g., <code>https://example.com/style.css</code>)</li>
          <li><strong>Relative URL:</strong> Relative to current file (e.g., <code>css/style.css</code>)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;link rel="stylesheet" href="https://example.com/style.css"&gt; &lt;!-- Absolute --&gt;
&lt;link rel="stylesheet" href="css/style.css"&gt; &lt;!-- Relative --&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between opacity:0, visibility:hidden, and display:none? opacity:0, visibility:hidden এবং display:none-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এই প্রোপার্টিগুলো উপাদানের দৃশ্যমানতা নিয়ন্ত্রণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>opacity:0:</strong> Invisible but takes space, can be animated</li>
          <li><strong>visibility:hidden:</strong> Hidden but takes space, cannot be animated</li>
          <li><strong>display:none:</strong> Completely removed from layout</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
.hidden1 { opacity: 0; }
.hidden2 { visibility: hidden; }
.hidden3 { display: none; }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between inline script and external script? ইনলাইন স্ক্রিপ্ট এবং এক্সটারনাল স্ক্রিপ্টের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> স্ক্রিপ্ট লোড করার দুটি উপায়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Inline Script:</strong> Directly in HTML, harder to maintain</li>
          <li><strong>External Script:</strong> Separate JS file, better for caching and maintainability</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;!-- Inline --&gt;
&lt;script&gt;console.log('Hello');&lt;/script&gt;

&lt;!-- External --&gt;
&lt;script src="script.js"&gt;&lt;/script&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between defer and async in <script>? <script>-এ defer এবং async-এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> <code>defer</code> এবং <code>async</code> স্ক্রিপ্ট লোডিং নিয়ন্ত্রণ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>async:</strong> Script loads and executes immediately, may disrupt HTML parsing</li>
          <li><strong>defer:</strong> Script loads during parsing, executes after HTML is parsed</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;script async src="script.js"&gt;&lt;/script&gt;
&lt;script defer src="script.js"&gt;&lt;/script&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between relative, absolute, and fixed links in navigation? নেভিগেশনে relative, absolute এবং fixed লিঙ্কের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> নেভিগেশন লিঙ্কের ধরন লোকেশন নির্দেশ করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Relative:</strong> Relative to current page (e.g., <code>about.html</code>)</li>
          <li><strong>Absolute:</strong> Full path or URL (e.g., <code>https://example.com/about</code>)</li>
          <li><strong>Fixed:</strong> Same link across all pages (e.g., homepage link)</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
&lt;a href="about.html"&gt;About&lt;/a&gt; &lt;!-- Relative --&gt;
&lt;a href="https://example.com/about"&gt;About&lt;/a&gt; &lt;!-- Absolute --&gt;
&lt;a href="/"&gt;Home&lt;/a&gt; &lt;!-- Fixed --&gt;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between progressive enhancement and graceful degradation? প্রোগ্রেসিভ এনহান্সমেন্ট এবং গ্রেসফুল ডিগ্রেডেশনের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এই দুটি পদ্ধতি ব্রাউজার সামঞ্জস্য নিশ্চিত করে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Progressive Enhancement:</strong> Build basic version first, add advanced features for modern browsers</li>
          <li><strong>Graceful Degradation:</strong> Build full-featured version, provide fallbacks for older browsers</li>
        </ul>
        <h4>Example (Progressive Enhancement):</h4>
        <pre><code>
&lt;!-- Basic HTML --&gt;
&lt;form action="/submit"&gt;
  &lt;input type="text" name="name"&gt;
&lt;/form&gt;

&lt;!-- Enhanced with JS --&gt;
&lt;script&gt;
  document.querySelector('form').addEventListener('submit', validateForm);
&lt;/script&gt;
        </code></pre>
      `,
    },
  ],
};

export default htmlcssData;
