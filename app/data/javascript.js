export const javascriptData = {
  title: 'JavaScript Interview Questions',
  titleB: 'জাভাস্ক্রিপ্ট ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to JavaScript concepts for interview preparation',
  basic: [
    {
      question: 'What is JavaScript? জাভাস্ক্রিপ্ট কি?',
      answer: `
        <p><strong>বাংলা:</strong> জাভাস্ক্রিপ্ট হলো একটি লাইটওয়েট, ইন্টারপ্রেটেড প্রোগ্রামিং ল্যাঙ্গুয়েজ যা ব্রাউজার এবং সার্ভার (নোডজেএস দিয়ে) দুই জায়গায়ই চলে।</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Dynamic typing</li>
          <li>Event-driven</li>
          <li>Supports asynchronous programming</li>
        </ul>
        <pre><code>
console.log("Hello, JavaScript!");
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between var, let, and const? var, let এবং const এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো জাভাস্ক্রিপ্টে ভেরিয়েবল ডিক্লারেশনের জন্য ব্যবহৃত হয়।</p>
        <ul>
          <li><strong>var:</strong> function-scoped, redeclare করা যায়</li>
          <li><strong>let:</strong> block-scoped, redeclare করা যায় না</li>
          <li><strong>const:</strong> block-scoped, value reassign করা যায় না</li>
        </ul>
        <pre><code>
var a = 1;
let b = 2;
const c = 3;
// c = 4; // Error
        </code></pre>
      `,
    },
    {
      question: 'What is hoisting in JavaScript? জাভাস্ক্রিপ্টে হোয়িস্টিং কী?',
      answer: `
        <p><strong>বাংলা:</strong> হোয়িস্টিং মানে ভেরিয়েবল এবং ফাংশন ডিক্লারেশন কোডের শুরুতে উঠে যায়।</p>
        <p>let/const hoist হয় কিন্তু initialize হয় না।</p>
        <pre><code>
console.log(x); // undefined
var x = 5;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between == and ===? == এবং === এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো তুলনা করার জন্য ব্যবহৃত হয়।</p>
        <ul>
          <li><strong>==:</strong> শুধুমাত্র মান চেক করে (type convert করে)</li>
          <li><strong>===:</strong> মান + টাইপ উভয়ই চেক করে (strict equality)</li>
        </ul>
        <pre><code>
console.log(5 == "5"); // true
console.log(5 === "5"); // false
        </code></pre>
      `,
    },
    {
      question: 'What is a closure? ক্লোজার কী?',
      answer: `
        <p><strong>বাংলা:</strong> ক্লোজার হলো একটি ফাংশন যা তার প্যারেন্ট স্কোপের ভেরিয়েবল অ্যাক্সেস করতে পারে, এমনকি প্যারেন্ট ফাংশন এক্সিকিউট হয়ে গেলেও।</p>
        <pre><code>
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between undefined and null? undefined এবং null এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো মানের অভাব বা শূন্যতা নির্দেশ করে।</p>
        <ul>
          <li><strong>undefined:</strong> ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু মান দেওয়া হয়নি</li>
          <li><strong>null:</strong> ইচ্ছাকৃতভাবে খালি মান</li>
        </ul>
        <pre><code>
let a;
console.log(a); // undefined
let b = null;
console.log(b); // null
        </code></pre>
      `,
    },
    {
      question:
        'What are arrow functions and how are they different? অ্যারো ফাংশন কী এবং এগুলো কীভাবে ভিন্ন?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যারো ফাংশন ছোট সিনট্যাক্স দেয় এবং this-এর lexical scope বজায় রাখে।</p>
        <pre><code>
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between synchronous and asynchronous JavaScript? সিঙ্ক্রোনাস এবং অ্যাসিনক্রোনাস জাভাস্ক্রিপ্টের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো কোড এক্সিকিউশনের ধরন নির্দেশ করে।</p>
        <ul>
          <li><strong>synchronous:</strong> লাইন দিয়ে লাইন এক্সিকিউট হয়</li>
          <li><strong>asynchronous:</strong> কিছু টাস্ক (যেমন API কল) অপেক্ষা না করে পরে কমপ্লিট হয়</li>
        </ul>
        <pre><code>
setTimeout(() => console.log("Async"), 1000);
console.log("Sync");
        </code></pre>
      `,
    },
    {
      question:
        'What is the event loop in JavaScript? জাভাস্ক্রিপ্টে ইভেন্ট লুপ কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট লুপ ব্রাউজারে অ্যাসিনক্রোনাস কলব্যাকগুলো কিউ থেকে নিয়ে মেইন থ্রেড ফ্রি হলে এক্সিকিউট করে।</p>
        <pre><code>
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// Output: Start, End, Timeout
        </code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is the difference between var hoisting and function hoisting? var হোয়িস্টিং এবং ফাংশন হোয়িস্টিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> হোয়িস্টিং ভিন্নভাবে কাজ করে।</p>
        <ul>
          <li><strong>Function declarations:</strong> ফুলি হোয়িস্ট হয়</li>
          <li><strong>var:</strong> শুধু ডিক্লেয়ার হয়, undefined থাকে</li>
        </ul>
        <pre><code>
sayHi(); // works
function sayHi() { console.log("Hi"); }
console.log(x); // undefined
var x = 5;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between primitive and reference types? প্রিমিটিভ এবং রেফারেন্স টাইপের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা স্টোরেজের পদ্ধতি ভিন্ন।</p>
        <ul>
          <li><strong>primitive:</strong> মান সরাসরি স্টোর হয় (string, number, boolean, null, undefined, symbol)</li>
          <li><strong>reference:</strong> অবজেক্ট/অ্যারে রেফারেন্স হিসেবে স্টোর হয়</li>
        </ul>
        <pre><code>
let a = 5;
let b = a;
b = 10; // a remains 5
let obj1 = { value: 5 };
let obj2 = obj1;
obj2.value = 10; // obj1.value also 10
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between shallow copy and deep copy? শ্যালো কপি এবং ডিপ কপি এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> কপির গভীরতা ভিন্ন।</p>
        <ul>
          <li><strong>shallow copy:</strong> শুধু প্রথম স্তর কপি হয়</li>
          <li><strong>deep copy:</strong> নেস্টেড অবজেক্ট পর্যন্ত পূর্ণ কপি</li>
        </ul>
        <pre><code>
let obj = { a: 1, b: { c: 2 } };
let shallow = { ...obj };
shallow.b.c = 3; // obj.b.c also 3
let deep = JSON.parse(JSON.stringify(obj));
deep.b.c = 4; // obj.b.c remains 3
        </code></pre>
      `,
    },
    {
      question: 'What are template literals? টেমপ্লেট লিটারাল কী?',
      answer: `
        <p><strong>বাংলা:</strong> ব্যাকটিকস \`\` ব্যবহার করে মাল্টি-লাইন স্ট্রিং এবং \${variable} এম্বেড করা যায়।</p>
        <pre><code>
const name = "Alice";
const greeting = \`Hello, \${name}!
How are you today?\`;
console.log(greeting);
        </code></pre>
      `,
    },
    {
      question:
        'What is destructuring in JavaScript? জাভাস্ক্রিপ্টে ডিস্ট্রাকচারিং কী?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যারে বা অবজেক্ট থেকে মান সহজে এক্সট্র্যাক্ট করা।</p>
        <pre><code>
const user = { name: "Alice", age: 25 };
const { name, age } = user;
const arr = [1, 2];
const [a, b] = arr;
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between forEach, map, filter, and reduce? forEach, map, filter এবং reduce এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো অ্যারে ম্যানিপুলেশনের জন্য।</p>
        <ul>
          <li><strong>forEach:</strong> শুধু লুপ করে</li>
          <li><strong>map:</strong> নতুন অ্যারে রিটার্ন করে</li>
          <li><strong>filter:</strong> শর্ত মিললে মান রিটার্ন করে</li>
          <li><strong>reduce:</strong> সব মান রিডিউস করে একটি মান রিটার্ন করে</li>
        </ul>
        <pre><code>
[1, 2, 3].forEach(x => console.log(x));
const mapped = [1, 2, 3].map(x => x * 2); // [2, 4, 6]
const filtered = [1, 2, 3].filter(x => x > 1); // [2, 3]
const reduced = [1, 2, 3].reduce((sum, x) => sum + x, 0); // 6
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between synchronous callback and asynchronous callback? সিঙ্ক্রোনাস কলব্যাক এবং অ্যাসিনক্রোনাস কলব্যাক এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এক্সিকিউশন সময় ভিন্ন।</p>
        <ul>
          <li><strong>synchronous callback:</strong> সঙ্গে সঙ্গে রান হয়</li>
          <li><strong>asynchronous callback:</strong> পরে রান হয়</li>
        </ul>
        <pre><code>
setTimeout(() => console.log("Async"), 0); // asynchronous
console.log("Sync"); // synchronous
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between stack and heap memory? স্ট্যাক এবং হিপ মেমোরি এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> মেমোরি ব্যবস্থাপনার জায়গা।</p>
        <ul>
          <li><strong>stack:</strong> প্রিমিটিভ মান স্টোর হয়</li>
          <li><strong>heap:</strong> রেফারেন্স/অবজেক্ট স্টোর হয়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between mutable and immutable data types? মিউটেবল এবং ইমিউটেবল ডেটা টাইপের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> পরিবর্তনের ক্ষমতা।</p>
        <ul>
          <li><strong>mutable:</strong> পরিবর্তন হয় (objects, arrays)</li>
          <li><strong>immutable:</strong> পরিবর্তন হয় না (string, number, boolean)</li>
        </ul>
        <pre><code>
let arr = [1, 2];
arr.push(3); // mutable
let str = "hello";
str[0] = "H"; // immutable
        </code></pre>
      `,
    },
    {
      question: 'What are higher-order functions? হায়ার অর্ডার ফাংশন কী?',
      answer: `
        <p><strong>বাংলা:</strong> যে ফাংশন অন্য ফাংশনকে আর্গুমেন্ট হিসেবে নেয় বা রিটার্ন করে।</p>
        <pre><code>
const multiply = (x) => (y) => x * y;
console.log(multiply(2)(3)); // 6
        </code></pre>
      `,
    },
  ],
  advanced: [
    {
      question:
        'What is the difference between function declaration and function expression? ফাংশন ডিক্লারেশন এবং ফাংশন এক্সপ্রেশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডিক্লারেশন এবং এক্সপ্রেশনের আচরণ ভিন্ন।</p>
        <ul>
          <li><strong>declaration:</strong> হোয়িস্ট হয়</li>
          <li><strong>expression:</strong> ভেরিয়েবলে অ্যাসাইন হয়, হোয়িস্ট হয় না</li>
        </ul>
        <pre><code>
sayHi(); // works
function sayHi() { console.log("Hi"); }
const sayHello = function() { console.log("Hello"); };
sayHello(); // works
// sayHello(); // Error if before declaration
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between shallow equality and deep equality? শ্যালো ইকুয়ালিটি এবং ডিপ ইকুয়ালিটি এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> তুলনার গভীরতা।</p>
        <ul>
          <li><strong>shallow equality:</strong> শুধু রেফারেন্স চেক করে</li>
          <li><strong>deep equality:</strong> নেস্টেড মানগুলো চেক করে</li>
        </ul>
        <pre><code>
let a = [1, [2]];
let b = [1, [2]];
console.log(a === b); // false (shallow)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true (deep)
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between event bubbling and capturing? ইভেন্ট বাবলিং এবং ক্যাপচারিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট প্রপাগেশনের দিক।</p>
        <ul>
          <li><strong>bubbling:</strong> চাইল্ড থেকে প্যারেন্ট পর্যন্ত</li>
          <li><strong>capturing:</strong> প্যারেন্ট থেকে চাইল্ড পর্যন্ত</li>
        </ul>
        <pre><code>
document.querySelector('div').addEventListener('click', () => console.log('Div'), true); // capturing
        </code></pre>
      `,
    },
    {
      question: 'What is a promise in JavaScript? জাভাস্ক্রিপ্টে প্রমিস কী?',
      answer: `
        <p><strong>বাংলা:</strong> প্রমিস হলো অ্যাসিনক্রোনাস কাজের জন্য একটি অবজেক্ট, যা ভবিষ্যতে রেজলভ বা রিজেক্ট হবে।</p>
        <pre><code>
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});
promise.then(result => console.log(result));
        </code></pre>
      `,
    },
    {
      question: 'What is async/await? অ্যাসিনক/অ্যাওয়েট কী?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যাসিনক/অ্যাওয়েট প্রমিস হ্যান্ডল করার সহজ সিনট্যাক্স, অ্যাসিনক ফাংশন সবসময় প্রমিস রিটার্ন করে।</p>
        <pre><code>
async function fetchData() {
  let result = await new Promise(resolve => setTimeout(() => resolve("Data"), 1000));
  console.log(result);
}
fetchData();
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between JSON.stringify() and JSON.parse()? JSON.stringify() এবং JSON.parse() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা কনভার্সনের জন্য।</p>
        <ul>
          <li><strong>stringify:</strong> অবজেক্ট → JSON স্ট্রিং</li>
          <li><strong>parse:</strong> JSON স্ট্রিং → অবজেক্ট</li>
        </ul>
        <pre><code>
let obj = { name: "Alice" };
let str = JSON.stringify(obj); // {"name":"Alice"}
let parsed = JSON.parse(str); // {name: "Alice"}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between deep clone and structuredClone()? ডিপ ক্লোন এবং structuredClone() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ক্লোনিং পদ্ধতি।</p>
        <p>structuredClone() মডার্ন API, ডিপ কপি করে নেস্টেড অবজেক্ট সহ।</p>
        <pre><code>
let obj = { a: { b: 1 } };
let clone = structuredClone(obj);
clone.a.b = 2; // obj.a.b remains 1
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between debounce and throttle? ডিবাউন্স এবং থ্রটল এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট হ্যান্ডলিংয়ের সময় নিয়ন্ত্রণ।</p>
        <ul>
          <li><strong>debounce:</strong> শেষ ইভেন্টের পর ডিলে করে রান হয়</li>
          <li><strong>throttle:</strong> নির্দিষ্ট টাইম গ্যাপে লিমিটেড বার রান হয়</li>
        </ul>
        <pre><code>
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between localStorage, sessionStorage, and cookies? localStorage, sessionStorage এবং cookies এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা স্টোরেজের সময়কাল।</p>
        <ul>
          <li><strong>localStorage:</strong> ব্রাউজার বন্ধ হলেও ডেটা থাকে</li>
          <li><strong>sessionStorage:</strong> ট্যাব বন্ধ হলে ডেটা চলে যায়</li>
          <li><strong>cookies:</strong> ছোট ডেটা, সার্ভারেও সেন্ড হয়</li>
        </ul>
        <pre><code>
localStorage.setItem("key", "value");
sessionStorage.setItem("key", "value");
document.cookie = "key=value; max-age=3600";
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between undefined, NaN, and isNaN()? undefined, NaN এবং isNaN() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> মানের অবস্থা।</p>
        <ul>
          <li><strong>undefined:</strong> কোনো মান নেই</li>
          <li><strong>NaN:</strong> Not a Number (অবৈধ সংখ্যা ফলাফল)</li>
          <li><strong>isNaN(x):</strong> x সংখ্যা কিনা চেক করে</li>
        </ul>
        <pre><code>
let a;
console.log(a); // undefined
console.log(NaN); // NaN
console.log(isNaN("abc")); // true
        </code></pre>
      `,
    },
  ],
};

export default javascriptData;
