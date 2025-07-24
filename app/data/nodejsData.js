export const nodejsData = {
  title: 'Node.js Interview Questions',
  titleB: 'নোডজেএস ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to Node.js concepts for interview preparation',
  basic: [
    {
      question: 'What is Node.js? নোডজেএস কি?',
      answer: `
        <p><strong>বাংলা:</strong> নোডজেএস হলো জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট, যা V8 ইঞ্জিন ব্যবহার করে ব্রাউজারের বাইরে জেএস রান করতে দেয়।</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Non-blocking I/O</li>
          <li>Event-driven</li>
          <li>Cross-platform</li>
        </ul>
        <pre><code>
console.log("Hello, Node.js!");
        </code></pre>
      `,
    },
    {
      question: 'Why use Node.js? নোডজেএস কেন ব্যবহার করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> নোডজেএস ব্যবহারের কারণ:</p>
        <ul>
          <li>Non-blocking I/O</li>
          <li>Event-driven architecture</li>
          <li>Fast (V8 engine)</li>
          <li>Same language for frontend & backend</li>
        </ul>
      `,
    },
    {
      question:
        'Is Node.js single-threaded or multi-threaded? নোডজেএস সিঙ্গেল-থ্রেডেড নাকি মাল্টি-থ্রেডেড?',
      answer: `
        <p><strong>বাংলা:</strong> নোডজেএস সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ ব্যবহার করে, কিন্তু libuv দিয়ে কিছু অ্যাসিনক কাজ ব্যাকগ্রাউন্ড থ্রেড-পুলে হয়।</p>
      `,
    },
    {
      question:
        'What is the difference between blocking and non-blocking code in Node.js? নোডজেএসে ব্লকিং এবং নন-ব্লকিং কোড এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> কোড এক্সিকিউশনের ধরন।</p>
        <ul>
          <li><strong>Blocking:</strong> এক্সিকিউশন থেমে যায় (সিঙ্ক্রোনাস)</li>
          <li><strong>Non-blocking:</strong> এক্সিকিউশন থামে না, কলব্যাক বা প্রমিস পরে কমপ্লিট করে</li>
        </ul>
        <pre><code>
const fs = require('fs');
fs.readFile('file.txt', (err, data) => console.log(data)); // Non-blocking
        </code></pre>
      `,
    },
    {
      question: 'What is the Event Loop in Node.js? নোডজেএসে ইভেন্ট লুপ কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট লুপ অ্যাসিনক্রোনাস কলব্যাকগুলো ম্যানেজ করে, সিঙ্গেল থ্রেড হলেও কনকারেন্ট ব্যবহার দেয়।</p>
      `,
    },
    {
      question: 'What is npm? npm কি?',
      answer: `
        <p><strong>বাংলা:</strong> npm (Node Package Manager) হলো নোডজেএসের ডিফল্ট প্যাকেজ ম্যানেজার যা লাইব্রেরি ইনস্টল এবং ম্যানেজ করতে দেয়।</p>
        <pre><code>
npm install express
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between dependencies and devDependencies? dependencies এবং devDependencies এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ব্যবহারের পরিপ্রেক্ষিত।</p>
        <ul>
          <li><strong>dependencies:</strong> প্রোডাকশনে লাগবে</li>
          <li><strong>devDependencies:</strong> শুধু ডেভেলপমেন্টে দরকার</li>
        </ul>
        <pre><code>
{
  "dependencies": { "express": "^4.18.2" },
  "devDependencies": { "nodemon": "^3.1.0" }
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between require() and import? require() এবং import এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইম্পোর্ট সিনট্যাক্স।</p>
        <ul>
          <li><strong>require():</strong> CommonJS সিনট্যাক্স</li>
          <li><strong>import:</strong> ES Module সিনট্যাক্স (মডার্ন)</li>
        </ul>
        <pre><code>
const express = require('express'); // CommonJS
import express from 'express'; // ES Module
        </code></pre>
      `,
    },
    {
      question: 'What are streams in Node.js? নোডজেএসে স্ট্রিমস কী?',
      answer: `
        <p><strong>বাংলা:</strong> স্ট্রিমস হলো ডেটা চাঙ্ক করে প্রসেস করার সিস্টেম।</p>
        <ul>
          <li>Readable</li>
          <li>Writable</li>
          <li>Duplex</li>
          <li>Transform</li>
        </ul>
        <pre><code>
const fs = require('fs');
const readable = fs.createReadStream('file.txt');
        </code></pre>
      `,
    },
    {
      question: 'What are buffers in Node.js? নোডজেএসে বাফারস কী?',
      answer: `
        <p><strong>বাংলা:</strong> বাফারস হলো বাইনারি ডেটা হ্যান্ডল করার জন্য টেম্পোরারি মেমোরি।</p>
        <pre><code>
const buffer = Buffer.from('Hello');
console.log(buffer); // <Buffer 48 65 6c 6c 6f>
        </code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is middleware in Node.js (Express)? নোডজেএসে (Express) মিডলওয়্যার কী?',
      answer: `
        <p><strong>বাংলা:</strong> মিডলওয়্যার হলো ফাংশন যা রিকোয়েস্ট ও রেসপন্সের মধ্যে রান হয়।</p>
        <pre><code>
const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between synchronous and asynchronous functions in Node.js? নোডজেএসে সিঙ্ক্রোনাস এবং অ্যাসিনক্রোনাস ফাংশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এক্সিকিউশনের ধরন।</p>
        <ul>
          <li><strong>sync function:</strong> ব্লক করে</li>
          <li><strong>async function:</strong> নন-ব্লকিং (কলব্যাক, প্রমিস, অ্যাসিনক/অ্যাওয়েট)</li>
        </ul>
        <pre><code>
const fs = require('fs');
fs.readFile('file.txt', (err, data) => console.log(data)); // Async
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between process.nextTick() and setImmediate()? process.nextTick() এবং setImmediate() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট লুপে এক্সিকিউশন সময়।</p>
        <ul>
          <li><strong>nextTick():</strong> কারেন্ট ফেজ শেষ হওয়ার সাথে রান</li>
          <li><strong>setImmediate():</strong> পরবর্তী ইভেন্ট লুপ ইটারেশনে রান</li>
        </ul>
        <pre><code>
process.nextTick(() => console.log('NextTick'));
setImmediate(() => console.log('Immediate'));
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between readFile and createReadStream? readFile এবং createReadStream এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফাইল পড়ার পদ্ধতি।</p>
        <ul>
          <li><strong>readFile:</strong> পুরো ফাইল একবারে লোড (মেমোরি বেশি লাগে)</li>
          <li><strong>createReadStream:</strong> চাঙ্ক করে পড়ে (বড় ফাইলের জন্য দক্ষ)</li>
        </ul>
        <pre><code>
const fs = require('fs');
fs.createReadStream('file.txt').on('data', chunk => console.log(chunk));
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between cluster and worker_threads? cluster এবং worker_threads এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> থ্রেডিং এপ্রোচ।</p>
        <ul>
          <li><strong>cluster:</strong> একাধিক নোডজেএস প্রসেস তৈরি</li>
          <li><strong>worker_threads:</strong> একটি প্রসেসে একাধিক থ্রেড</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between res.send() and res.json() in Express? Express-এ res.send() এবং res.json() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেসপন্স ফরম্যাট।</p>
        <ul>
          <li><strong>res.send():</strong> কোনো ডেটা পাঠাতে পারে (স্ট্রিং, অবজেক্ট)</li>
          <li><strong>res.json():</strong> সবসময় JSON ফরম্যাটে পাঠায়</li>
        </ul>
        <pre><code>
res.send('Text'); // Text
res.json({ key: 'value' }); // {"key":"value"}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between res.redirect() and res.render()? res.redirect() এবং res.render() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেসপন্স প্রক্রিয়া।</p>
        <ul>
          <li><strong>redirect():</strong> অন্য URL-এ পাঠায়</li>
          <li><strong>render():</strong> টেমপ্লেট রেন্ডার করে রেসপন্স দেয়</li>
        </ul>
        <pre><code>
res.redirect('/new-page');
res.render('template', { data: 'value' });
        </code></pre>
      `,
    },
    {
      question: 'What is CORS in Node.js? নোডজেএসে CORS কি?',
      answer: `
        <p><strong>বাংলা:</strong> CORS (Cross-Origin Resource Sharing) ব্রাউজারকে অন্য ডোমেইন থেকে API রিকোয়েস্ট করতে দেয়।</p>
        <pre><code>
const cors = require('cors');
app.use(cors());
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between REST API and GraphQL? REST API এবং GraphQL এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> API ডিজাইন।</p>
        <ul>
          <li><strong>REST:</strong> ফিক্সড এন্ডপয়েন্ট, একাধিক রিকোয়েস্ট লাগে</li>
          <li><strong>GraphQL:</strong> একটি এন্ডপয়েন্ট, ক্লায়েন্ট যতটুকু ডেটা চায় পায়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between HTTP and HTTPS in Node.js? নোডজেএসে HTTP এবং HTTPS এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সিকিউরিটি।</p>
        <ul>
          <li><strong>HTTP:</strong> প্লেইন টেক্সট, ইনসিকিউর</li>
          <li><strong>HTTPS:</strong> SSL/TLS এনক্রিপশন দিয়ে সিকিউর</li>
        </ul>
      `,
    },
  ],
  advanced: [
    {
      question:
        'What is the difference between middleware and route handler? মিডলওয়্যার এবং রুট হ্যান্ডলার এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> দায়িত্ব।</p>
        <ul>
          <li><strong>Middleware:</strong> রিকোয়েস্ট মডিফাই/চেক করে</li>
          <li><strong>Route handler:</strong> ফাইনাল রেসপন্স পাঠায়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between process.env and dotenv? process.env এবং dotenv এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এনভায়রনমেন্ট ম্যানেজমেন্ট।</p>
        <ul>
          <li><strong>process.env:</strong> এনভায়রনমেন্ট ভ্যারিয়েবল অ্যাক্সেস করে</li>
          <li><strong>dotenv:</strong> .env ফাইল থেকে ভ্যারিয়েবল লোড করে</li>
        </ul>
        <pre><code>
require('dotenv').config();
console.log(process.env.PORT);
        </code></pre>
      `,
    },
    {
      question:
        'What is JWT and how is it used in Node.js? JWT কি এবং নোডজেএসে এটি কীভাবে ব্যবহৃত হয়?',
      answer: `
        <p><strong>বাংলা:</strong> JWT (JSON Web Token) হলো অথেনটিকেশন টোকেন।</p>
        <pre><code>
const jwt = require('jsonwebtoken');
const token = jwt.sign({ id: 1 }, 'secret');
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between cookie-based and token-based authentication? কুকি-ভিত্তিক এবং টোকেন-ভিত্তিক অথেনটিকেশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> অথেনটিকেশন পদ্ধতি।</p>
        <ul>
          <li><strong>cookie-based:</strong> সেশন স্টোর করে</li>
          <li><strong>token-based:</strong> স্টেটলেস, JWT ক্লায়েন্ট-সাইডে থাকে</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between fs.readFileSync() and fs.readFile()? fs.readFileSync() এবং fs.readFile() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফাইল পড়ার সিঙ্ক্রোনাস/অ্যাসিনক্রোনাস পদ্ধতি।</p>
        <ul>
          <li><strong>readFileSync():</strong> সিঙ্ক, ব্লকিং</li>
          <li><strong>readFile():</strong> অ্যাসিনক, নন-ব্লকিং</li>
        </ul>
        <pre><code>
const fs = require('fs');
const data = fs.readFileSync('file.txt'); // Sync
fs.readFile('file.txt', (err, data) => console.log(data)); // Async
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between nodemon and node? nodemon এবং node এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সার্ভার রিস্টার্ট।</p>
        <ul>
          <li><strong>node:</strong> ম্যানুয়ালি রিস্টার্ট করতে হয়</li>
          <li><strong>nodemon:</strong> ফাইল চেঞ্জ হলে অটো রিস্টার্ট</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between CommonJS and ES Modules in Node.js? নোডজেএসে CommonJS এবং ES Modules এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> মডিউল সিস্টেম।</p>
        <ul>
          <li><strong>CommonJS:</strong> require, module.exports</li>
          <li><strong>ESM:</strong> import, export</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between async.waterfall and async.parallel? async.waterfall এবং async.parallel এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যাসিনক্রোনাস টাস্কের নির্দেশ।</p>
        <ul>
          <li><strong>waterfall:</strong> একটার রেজাল্ট পরেরটার ইনপুট হয়</li>
          <li><strong>parallel:</strong> সব অ্যাসিনক টাস্ক একসাথে চলে</li>
        </ul>
        <pre><code>
const async = require('async');
async.parallel([task1, task2], (err, results) => {});
        </code></pre>
      `,
    },
    {
      question:
        'How does Node.js handle multiple requests if it is single-threaded? নোডজেএস কীভাবে মাল্টিপল রিকোয়েস্ট হ্যান্ডল করে যদি এটি সিঙ্গেল-থ্রেডেড হয়?',
      answer: `
        <p><strong>বাংলা:</strong> ইভেন্ট লুপ ও অ্যাসিনক I/O ব্যবহার করে একসাথে মাল্টিপল রিকোয়েস্ট হ্যান্ডল করে।</p>
      `,
    },
    {
      question:
        'What are ways to improve Node.js performance? নোডজেএসের পারফরম্যান্স উন্নত করার উপায় কী?',
      answer: `
        <p><strong>বাংলা:</strong> পারফরম্যান্স বাড়ানোর উপায়:</p>
        <ul>
          <li>Use async/non-blocking code</li>
          <li>Use clustering</li>
          <li>Optimize queries & caching</li>
          <li>Stream large data instead of loading fully</li>
        </ul>
      `,
    },
  ],
};

export default nodejsData;
