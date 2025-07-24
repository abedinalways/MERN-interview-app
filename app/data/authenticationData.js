export const authenticationData = {
  title: 'Authentication Interview Questions',
  titleB: 'অথেনটিকেশন ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to authentication concepts for interview preparation',
  basic: [
    {
      question:
        'What is authentication vs authorization? অথেনটিকেশন বনাম অথোরাইজেশন কী?',
      answer: `
        <p><strong>বাংলা:</strong> অথেনটিকেশন ও অথোরাইজেশনের পার্থক্য।</p>
        <ul>
          <li><strong>Authentication:</strong> ইউজারকে ভেরিফাই করা (লগইন)</li>
          <li><strong>Authorization:</strong> কোন রিসোর্স ইউজার অ্যাক্সেস করতে পারবে সেটা কন্ট্রোল করা</li>
        </ul>
      `,
    },
    {
      question: 'What is Firebase Authentication? ফায়ারবেস অথেনটিকেশন কি?',
      answer: `
        <p><strong>বাংলা:</strong> ফায়ারবেস অথেনটিকেশন হলো রেডি-মেড অথেনটিকেশন সার্ভিস, যেখানে ইমেইল/পাসওয়ার্ড, গুগল, ফেসবুক ইত্যাদি প্রোভাইডার দিয়ে লগইন করা যায়।</p>
        <pre><code>
firebase.auth().signInWithEmailAndPassword(email, password);
        </code></pre>
      `,
    },
    {
      question:
        'What are the main authentication methods in Firebase? ফায়ারবেসে প্রধান অথেনটিকেশন পদ্ধতি কী কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফায়ারবেসের প্রধান অথেনটিকেশন পদ্ধতি:</p>
        <ul>
          <li>ইমেইল/পাসওয়ার্ড</li>
          <li>OAuth প্রোভাইডার (গুগল, গিটহাব, ফেসবুক)</li>
          <li>ফোন অথেনটিকেশন</li>
          <li>অ্যানোনিমাস অথ</li>
        </ul>
      `,
    },
    {
      question: 'What is JWT? JWT কি?',
      answer: `
        <p><strong>বাংলা:</strong> JWT (JSON Web Token) হলো কমপ্যাক্ট, সাইনড টোকেন যা অথেনটিকেশন ও ডেটা এক্সচেঞ্জের জন্য ব্যবহৃত হয়।</p>
        <pre><code>
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMifQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        </code></pre>
      `,
    },
    {
      question: 'What is the structure of a JWT token? JWT টোকেনের গঠন কী?',
      answer: `
        <p><strong>বাংলা:</strong> JWT তিন অংশে বিভক্ত:</p>
        <ul>
          <li><strong>Header:</strong> অ্যালগরিদম তথ্য</li>
          <li><strong>Payload:</strong> ইউজার ডেটা</li>
          <li><strong>Signature:</strong> টোকেন ভেরিফাই করা</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between Firebase Auth token and custom JWT? ফায়ারবেস অথ টোকেন এবং কাস্টম JWT এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> উৎস ও প্রক্রিয়া।</p>
        <ul>
          <li><strong>Firebase token:</strong> ফায়ারবেস-জেনারেটেড</li>
          <li><strong>Custom JWT:</strong> ম্যানুয়ালি সার্ভার-সাইডে জেনারেট করা</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between session-based auth and token-based auth? সেশন-ভিত্তিক অথ এবং টোকেন-ভিত্তিক অথ এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> স্টোরেজ লোকেশন।</p>
        <ul>
          <li><strong>Session auth:</strong> সার্ভার মেমোরিতে স্টোর হয়</li>
          <li><strong>Token auth:</strong> ক্লায়েন্ট-সাইডে স্টোর হয় (লোকালস্টোরেজ/কুকি)</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between access token and refresh token? অ্যাক্সেস টোকেন এবং রিফ্রেশ টোকেন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ব্যবহার ও মেয়াদ।</p>
        <ul>
          <li><strong>access token:</strong> শর্ট-লিভড, API অ্যাক্সেসের জন্য</li>
          <li><strong>refresh token:</strong> লং-লিভড, নতুন অ্যাক্সেস টোকেন ইস্যু করতে</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between HttpOnly cookie and localStorage for JWT? JWT-এর জন্য HttpOnly কুকি এবং লোকালস্টোরেজ এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সিকিউরিটি।</p>
        <ul>
          <li><strong>HttpOnly cookie:</strong> XSS আক্রমণ-সেফ</li>
          <li><strong>localStorage:</strong> সহজ কিন্তু ভাল্লুনারেবল</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between stateful and stateless authentication? স্টেটফুল এবং স্ট্যাটলেস অথেনটিকেশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> স্টেট ম্যানেজমেন্ট।</p>
        <ul>
          <li><strong>Stateful:</strong> সার্ভার সেশন ট্র্যাক করে</li>
          <li><strong>Stateless:</strong> টোকেন ভেরিফাই করলেই হয় (JWT)</li>
        </ul>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'How does Firebase verify users? ফায়ারবেস কীভাবে ইউজার ভেরিফাই করে?',
      answer: `
        <p><strong>বাংলা:</strong> ফায়ারবেস অথেনটিকেশন ইন্টারনালি JWT টোকেন জেনারেট করে, যা ফায়ারবেস ব্যাকএন্ড ভেরিফাই করে।</p>
      `,
    },
    {
      question: 'What is Firebase ID token? ফায়ারবেস ID টোকেন কি?',
      answer: `
        <p><strong>বাংলা:</strong> ফায়ারবেস ID টোকেন হলো শর্ট-লিভড JWT যা ইউজার আইডেনটিটি প্রমাণ করে।</p>
        <pre><code>
firebase.auth().currentUser.getIdToken();
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between Firebase Admin SDK and Client SDK? ফায়ারবেস অ্যাডমিন SDK এবং ক্লায়েন্ট SDK এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ব্যবহারের স্থান।</p>
        <ul>
          <li><strong>Client SDK:</strong> ইউজার সাইড লগইন/রেজিস্টার</li>
          <li><strong>Admin SDK:</strong> সার্ভার-সাইড ভেরিফিকেশন ও ইউজার ম্যানেজমেন্ট</li>
        </ul>
      `,
    },
    {
      question:
        'How to secure API routes with Firebase Auth? ফায়ারবেস অথ দিয়ে API রুটস কীভাবে সিকিউর করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> ক্লায়েন্ট থেকে ID টোকেন পাঠাবে, সার্ভার-সাইডে admin.auth().verifyIdToken() দিয়ে ভেরিফাই করবে।</p>
        <pre><code>
const admin = require('firebase-admin');
admin.auth().verifyIdToken(idToken).then(decodedToken => {});
        </code></pre>
      `,
    },
    {
      question:
        'How to verify JWT on the server? সার্ভারে JWT কীভাবে ভেরিফাই করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> jsonwebtoken.verify(token, secret_key) দিয়ে সিগনেচার ম্যাচ করে ভ্যালিডিটি চেক করা হয়।</p>
        <pre><code>
const jwt = require('jsonwebtoken');
jwt.verify(token, 'secret_key', (err, decoded) => {});
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between symmetric and asymmetric JWT signing? সিমেট্রিক এবং অ্যাসিমেট্রিক JWT সাইনিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> কী ব্যবহার।</p>
        <ul>
          <li><strong>Symmetric:</strong> একই সিক্রেট কী দিয়ে সাইন ও ভেরিফাই</li>
          <li><strong>Asymmetric:</strong> প্রাইভেট কী দিয়ে সাইন, পাবলিক কী দিয়ে ভেরিফাই</li>
        </ul>
      `,
    },
    {
      question:
        'How does JWT prevent tampering? JWT কীভাবে ট্যাম্পারিং প্রতিরোধ করে?',
      answer: `
        <p><strong>বাংলা:</strong> JWT-এর সিগনেচার অংশ সিক্রেট কী দিয়ে সাইন করা, মডিফাই করলে ভেরিফাই ফেইল হয়।</p>
      `,
    },
    {
      question: 'What are common attacks on JWT? JWT-এ কমন আক্রমণ কী কী?',
      answer: `
        <p><strong>বাংলা:</strong> JWT-এর সাধারণ আক্রমণ:</p>
        <ul>
          <li>টোকেন থেফট</li>
          <li>এক্সপায়ার্ড টোকেন রিইউজ</li>
          <li>দুর্বল সিক্রেট কী ব্রুট ফোর্স</li>
        </ul>
      `,
    },
    {
      question:
        'How to protect JWT from XSS & CSRF attacks? JWT-কে XSS এবং CSRF আক্রমণ থেকে কীভাবে রক্ষা করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> সুরক্ষা পদ্ধতি:</p>
        <ul>
          <li>JWT-কে HttpOnly কুকিতে স্টোর করুন</li>
          <li>CSRF টোকেন ব্যবহার করুন সংবেদনশীল রিকোয়েস্টের জন্য</li>
        </ul>
      `,
    },
    {
      question:
        'What is Anonymous Authentication in Firebase? ফায়ারবেসে অ্যানোনিমাস অথেনটিকেশন কি?',
      answer: `
        <p><strong>বাংলা:</strong> ইউজার কোনো ক্রেডেনশিয়াল ছাড়াই টেম্পোরারি লগইন করতে পারে (গেস্ট ইউজার)।</p>
        <pre><code>
firebase.auth().signInAnonymously();
        </code></pre>
      `,
    },
  ],
  advanced: [
    {
      question:
        'How to revoke a Firebase ID token? ফায়ারবেস ID টোকেন কীভাবে রিভোক করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> ফায়ারবেস অ্যাডমিন SDK দিয়ে revokeRefreshTokens(uid) কল করলে সব টোকেন ইনভ্যালিড হয়।</p>
        <pre><code>
admin.auth().revokeRefreshTokens(uid);
        </code></pre>
      `,
    },
    {
      question:
        'What is Multi-factor Authentication (MFA)? মাল্টি-ফ্যাক্টর অথেনটিকেশন (MFA) কি?',
      answer: `
        <p><strong>বাংলা:</strong> একাধিক ভেরিফিকেশন মেথড ব্যবহার করে সিকিউরিটি বাড়ানো (যেমন: পাসওয়ার্ড + OTP)।</p>
      `,
    },
    {
      question:
        'What is the difference between signInWithPopup and signInWithRedirect in Firebase? ফায়ারবেসে signInWithPopup এবং signInWithRedirect এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> লগইন প্রক্রিয়া।</p>
        <ul>
          <li><strong>Popup:</strong> একই পেজে লগইন পপআপ ওপেন হয়</li>
          <li><strong>Redirect:</strong> পুরো পেজ রিডাইরেক্ট হয়ে লগইন করে</li>
        </ul>
        <pre><code>
firebase.auth().signInWithPopup(provider);
firebase.auth().signInWithRedirect(provider);
        </code></pre>
      `,
    },
    {
      question:
        'How does JWT handle expiration? JWT কীভাবে এক্সপায়ারি হ্যান্ডল করে?',
      answer: `
        <p><strong>বাংলা:</strong> পেইলোডের exp ফিল্ডে এক্সপায়ারি টাইম থাকে, এক্সপায়ার হলে সার্ভার রিজেক্ট করে।</p>
        <pre><code>
{
  "exp": 1625097600 // Unix timestamp
}
        </code></pre>
      `,
    },
    {
      question:
        'Why JWT is called stateless authentication? JWT কেন স্ট্যাটলেস অথেনটিকেশন বলা হয়?',
      answer: `
        <p><strong>বাংলা:</strong> কারণ JWT নিজেই ইউজার ইনফো ক্যারি করে, সার্�ভারে সেশন স্টোর করতে হয় না।</p>
      `,
    },
  ],
};

export default authenticationData;
