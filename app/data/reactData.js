export const reactData = {
  title: 'React Interview Questions',
  titleB: 'রিয়েক্ট ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to React concepts for interview preparation',
  basic: [
    {
      question: 'What is React? রিয়েক্ট কি?',
      answer: `
        <p><strong>বাংলা:</strong> রিয়েক্ট হল একটি ওপেন-সোর্স জাভাস্ক্রিপ্ট লাইব্রেরি যা Facebook দ্বারা তৈরি, ব্যবহারকারী ইন্টারফেস (UI) তৈরির জন্য ব্যবহৃত হয়, বিশেষ করে একক পৃষ্ঠা অ্যাপ্লিকেশন (SPA) এর জন্য।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>React uses a component-based architecture.</li>
          <li>It maintains a virtual DOM for efficient updates.</li>
          <li>Declarative syntax makes UI development intuitive.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import React from 'react';
function App() {
  return <h1>Hello, React!</h1>;
}
export default App;
        </code></pre>
      `,
    },
    {
      question: 'What is a component in React? রিয়েক্টে কম্পোনেন্ট কি?',
      answer: `
        <p><strong>বাংলা:</strong> কম্পোনেন্ট হল রিয়েক্টের বিল্ডিং ব্লক, যা UI এর পুনঃব্যবহারযোগ্য অংশ।</p>
        <h4>Types:</h4>
        <ul>
          <li><strong>Functional Components:</strong> Simple JavaScript functions.</li>
          <li><strong>Class Components:</strong> ES6 classes with lifecycle methods.</li>
        </ul>
        <h4>Example (Functional Component):</h4>
        <pre><code>
const Welcome = ({ name }) => <h1>Hello, {name}!</h1>;
        </code></pre>
      `,
    },
    {
      question: 'What is JSX? JSX কি?',
      answer: `
        <p><strong>বাংলা:</strong> JSX (JavaScript XML) হল রিয়েক্টের একটি সিনট্যাক্স এক্সটেনশন যা HTML-এর মতো কোড জাভাস্ক্রিপ্টের মধ্যে লিখতে দেয়।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>JSX is compiled to JavaScript by Babel.</li>
          <li>It allows embedding expressions using curly braces <code>{}</code>.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const element = <h1>Hello, {'World'}!</h1>;
        </code></pre>
      `,
    },
    {
      question: 'What is the virtual DOM? ভার্চুয়াল DOM কি?',
      answer: `
        <p><strong>বাংলা:</strong> ভার্চুয়াল DOM হল DOM এর একটি মেমরি-ভিত্তিক প্রতিরূপ যা রিয়েক্ট দক্ষতার সাথে UI আপডেট করতে ব্যবহার করে।</p>
        <h4>How it Works:</h4>
        <ul>
          <li>React creates a virtual DOM in memory.</li>
          <li>Compares it with the real DOM to find differences (diffing).</li>
          <li>Updates only the changed parts (reconciliation).</li>
        </ul>
      `,
    },
    {
      question: 'What are props in React? রিয়েক্টে প্রপস কি?',
      answer: `
        <p><strong>বাংলা:</strong> প্রপস (Properties) হল কম্পোনেন্টে ডেটা পাস করার উপায়, যা read-only।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Props are passed from parent to child components.</li>
          <li>They are immutable within the child component.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const Greeting = ({ name }) => <h1>Hello, {name}!</h1>;
<Greeting name="Alice" />;
        </code></pre>
      `,
    },
    {
      question: 'What is state in React? রিয়েক্টে স্টেট কি?',
      answer: `
        <p><strong>বাংলা:</strong> স্টেট হল কম্পোনেন্টের অভ্যন্তরীণ ডেটা যা UI আপডেট করতে ব্যবহৃত হয়।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Managed using <code>useState</code> hook in functional components.</li>
          <li>State changes trigger re-renders.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
        </code></pre>
      `,
    },
    {
      question: 'What is the useState hook? useState হুক কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useState</code> হল রিয়েক্টের একটি হুক যা ফাংশনাল কম্পোনেন্টে স্টেট ম্যানেজ করতে ব্যবহৃত হয়।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Returns a state value and a setter function.</li>
          <li>Initial state can be a value or a function.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useState } from 'react';
const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? 'On' : 'Off'}</button>;
};
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between state and props? স্টেট এবং প্রপসের মধ্যে পার্থক্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> স্টেট এবং প্রপস দুটোই ডেটা ম্যানেজ করতে ব্যবহৃত হয় কিন্তু ভিন্ন উদ্দেশ্যে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>State:</strong> Managed internally, mutable, updated via <code>setState</code>.</li>
          <li><strong>Props:</strong> Passed from parent, read-only.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const Child = ({ name }) => <p>Name: {name}</p>;
const Parent = () => {
  const [count, setCount] = useState(0);
  return <Child name="Alice" />;
};
        </code></pre>
      `,
    },
    {
      question: 'What are React hooks? রিয়েক্ট হুক কি?',
      answer: `
        <p><strong>বাংলা:</strong> হুক হল ফাংশন যা ফাংশনাল কম্পোনেন্টে স্টেট এবং লাইফসাইকেল ফিচার ব্যবহার করতে দেয়।</p>
        <h4>Common Hooks:</h4>
        <ul>
          <li><code>useState</code>: Manages state.</li>
          <li><code>useEffect</code>: Handles side effects.</li>
          <li><code>useContext</code>: Accesses context.</li>
        </ul>
      `,
    },
    {
      question: 'What is the purpose of useEffect? useEffect এর উদ্দেশ্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useEffect</code> হুক সাইড এফেক্ট (যেমন ডেটা ফেচিং, সাবস্ক্রিপশন) ম্যানেজ করতে ব্যবহৃত হয়।</p>
        <h4>Key Points:</h4>
        <ul>
          <li>Runs after render.</li>
          <li>Accepts a cleanup function to prevent memory leaks.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useEffect, useState } from 'react';
const DataFetcher = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []);
  return <p>{data ? data.name : 'Loading...'}</p>;
};
        </code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is conditional rendering in React? রিয়েক্টে কন্ডিশনাল রেন্ডারিং কি?',
      answer: `
        <p><strong>বাংলা:</strong> কন্ডিশনাল রেন্ডারিং হল শর্তের উপর ভিত্তি করে UI রেন্ডার করা।</p>
        <h4>Techniques:</h4>
        <ul>
          <li>If statements</li>
          <li>Ternary operators</li>
          <li>Logical && operator</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const UserStatus = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>;
};
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between controlled and uncontrolled components? কন্ট্রোল্ড এবং আনকন্ট্রোল্ড কম্পোনেন্টের মধ্যে পার্থক্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> ফর্ম কম্পোনেন্ট দুই ধরনের হতে পারে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>Controlled:</strong> Form data managed by React state.</li>
          <li><strong>Uncontrolled:</strong> Form data managed by DOM, accessed via refs.</li>
        </ul>
        <h4>Example (Controlled):</h4>
        <pre><code>
const ControlledForm = () => {
  const [value, setValue] = useState('');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
};
        </code></pre>
      `,
    },
    {
      question: 'What is the key prop in React? রিয়েক্টে key প্রপ কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>key</code> প্রপ লিস্টে আইটেম চিহ্নিত করতে ব্যবহৃত হয়।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Helps React identify which items have changed.</li>
          <li>Improves performance during re-renders.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const List = ({ items }) => (
  <ul>
    {items.map(item => <li key={item.id}>{item.name}</li>)}
  </ul>
);
        </code></pre>
      `,
    },
    {
      question: 'What is React Router? রিয়েক্ট রাউটার কি?',
      answer: `
        <p><strong>বাংলা:</strong> রিয়েক্ট রাউটার হল একটি লাইব্রেরি যা SPA-তে ক্লায়েন্ট-সাইড রাউটিং পরিচালনা করে।</p>
        <h4>Key Components:</h4>
        <ul>
          <li><code>BrowserRouter</code>: Wraps the app.</li>
          <li><code>Route</code>: Defines paths.</li>
          <li><code>Link</code>: Navigates without reloading.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { BrowserRouter, Route, Link } from 'react-router-dom';
const App = () => (
  <BrowserRouter>
    <Link to="/home">Home</Link>
    <Route path="/home" component={Home} />
  </BrowserRouter>
);
        </code></pre>
      `,
    },
    {
      question: 'What is the useContext hook? useContext হুক কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useContext</code> হুক কনটেক্সট API থেকে ডেটা অ্যাক্সেস করতে ব্যবহৃত হয়।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Avoids prop drilling.</li>
          <li>Provides global state access.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { createContext, useContext } from 'react';
const ThemeContext = createContext('light');
const Component = () => {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
};
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between useEffect and useLayoutEffect? useEffect এবং useLayoutEffect এর মধ্যে পার্থক্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> দুটোই সাইড এফেক্টের জন্য ব্যবহৃত হয় কিন্তু রান টাইমিং ভিন্ন।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>useEffect:</strong> Runs after render, async.</li>
          <li><strong>useLayoutEffect:</strong> Runs synchronously after DOM updates, before paint.</li>
        </ul>
        <h4>Example (useLayoutEffect):</h4>
        <pre><code>
import { useLayoutEffect, useRef } from 'react';
const Component = () => {
  const divRef = useRef();
  useLayoutEffect(() => {
    divRef.current.style.height = '100px';
  }, []);
  return <div ref={divRef}></div>;
};
        </code></pre>
      `,
    },
    {
      question: 'What is prop drilling? প্রপ ড্রিলিং কি?',
      answer: `
        <p><strong>বাংলা:</strong> প্রপ ড্রিলিং হল ডেটা প্যারেন্ট থেকে চাইল্ড কম্পোনেন্টে প্রপসের মাধ্যমে পাস করা।</p>
        <h4>Issues:</h4>
        <ul>
          <li>Makes code complex.</li>
          <li>Hard to maintain in deep component trees.</li>
        </ul>
        <h4>Solution:</h4>
        <p>Use Context API or state management libraries.</p>
      `,
    },
    {
      question: 'What are React fragments? রিয়েক্ট ফ্র্যাগমেন্ট কি?',
      answer: `
        <p><strong>বাংলা:</strong> ফ্র্যাগমেন্ট একাধিক এলিমেন্ট রিটার্ন করতে দেয় বিনা অতিরিক্ত DOM নোড।</p>
        <h4>Syntax:</h4>
        <ul>
          <li><code><></code> or <code><React.Fragment></code></li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const Component = () => (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
        </code></pre>
      `,
    },
    {
      question: 'What is the purpose of useRef? useRef এর উদ্দেশ্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useRef</code> হুক DOM এলিমেন্ট বা মান ধরে রাখতে ব্যবহৃত হয় যা রি-রেন্ডারে পরিবর্তন হয় না।</p>
        <h4>Uses:</h4>
        <ul>
          <li>Access DOM elements.</li>
          <li>Store mutable values without triggering re-renders.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useRef } from 'react';
const FocusInput = () => {
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between useState and useReducer? useState এবং useReducer এর মধ্যে পার্থক্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> দুটোই স্টেট ম্যানেজমেন্টের জন্য, তবে ভিন্ন পরিস্থিতিতে ব্যবহৃত হয়।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>useState:</strong> Simple state updates.</li>
          <li><strong>useReducer:</strong> Complex state logic with reducer function.</li>
        </ul>
        <h4>Example (useReducer):</h4>
        <pre><code>
import { useReducer } from 'react';
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return <button onClick={() => dispatch({ type: 'increment' })}>{state.count}</button>;
};
        </code></pre>
      `,
    },
  ],
  advanced: [
    {
      question: 'What is reconciliation in React? রিয়েক্টে রিকনসিলিয়েশন কি?',
      answer: `
        <p><strong>বাংলা:</strong> রিকনসিলিয়েশন হল রিয়েক্টের প্রক্রিয়া যা ভার্চুয়াল DOM এবং রিয়েল DOM এর মধ্যে পার্থক্য খুঁজে বের করে আপডেট করে।</p>
        <h4>Process:</h4>
        <ul>
          <li>Compares virtual DOM with real DOM (diffing).</li>
          <li>Updates only changed nodes.</li>
        </ul>
      `,
    },
    {
      question: 'What is the purpose of React.memo? React.memo এর উদ্দেশ্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>React.memo</code> ফাংশনাল কম্পোনেন্টের অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করে।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Memoizes component based on props.</li>
          <li>Improves performance for props-heavy components.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { memo } from 'react';
const Child = memo(({ value }) => <p>{value}</p>);
        </code></pre>
      `,
    },
    {
      question: 'What is the useCallback hook? useCallback হুক কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useCallback</code> ফাংশন মেমোইজ করে যাতে অপ্রয়োজনীয় রি-রেন্ডার এড়ানো যায়।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Prevents function recreation on re-renders.</li>
          <li>Useful when passing functions as props.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useCallback, useState } from 'react';
const Child = ({ onClick }) => <button onClick={onClick}>Click</button>;
const Parent = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => setCount(count + 1), [count]);
  return <Child onClick={handleClick} />;
};
        </code></pre>
      `,
    },
    {
      question: 'What is the useMemo hook? useMemo হুক কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useMemo</code> কম্পিউটেশনাল মান মেমোইজ করে পারফরম্যান্স উন্নত করে।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Memoizes expensive calculations.</li>
          <li>Runs only when dependencies change.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { useMemo, useState } from 'react';
const Component = ({ numbers }) => {
  const sum = useMemo(() => numbers.reduce((a, b) => a + b, 0), [numbers]);
  return <p>Sum: {sum}</p>;
};
        </code></pre>
      `,
    },
    {
      question:
        'What are higher-order components (HOCs)? হায়ার-অর্ডার কম্পোনেন্ট (HOC) কি?',
      answer: `
        <p><strong>বাংলা:</strong> HOC হল ফাংশন যা একটি কম্পোনেন্ট নিয়ে আরেকটি কম্পোনেন্ট রিটার্ন করে।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Reuses component logic.</li>
          <li>Examples: Authentication, logging.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
const withAuth = Component => {
  return props => {
    const isAuthenticated = true; // Example
    return isAuthenticated ? <Component {...props} /> : <p>Login required</p>;
  };
};
const Protected = withAuth(() => <p>Protected Content</p>);
        </code></pre>
      `,
    },
    {
      question: 'What is Redux in React? রিয়েক্টে রিডাক্স কি?',
      answer: `
        <p><strong>বাংলা:</strong> রিডাক্স হল একটি স্টেট ম্যানেজমেন্ট লাইব্রেরি যা রিয়েক্টের সাথে ব্যবহৃত হয়।</p>
        <h4>Key Concepts:</h4>
        <ul>
          <li><strong>Store:</strong> Single source of truth.</li>
          <li><strong>Actions:</strong> Payloads of information.</li>
          <li><strong>Reducers:</strong> Update state.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { createStore } from 'redux';
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    default: return state;
  }
};
const store = createStore(reducer);
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between useEffect and componentDidMount? useEffect এবং componentDidMount এর মধ্যে পার্থক্য কি?',
      answer: `
        <p><strong>বাংলা:</strong> <code>useEffect</code> ফাংশনাল কম্পোনেন্টে ব্যবহৃত হয়, আর <code>componentDidMount</code> ক্লাস কম্পোনেন্টে।</p>
        <h4>Differences:</h4>
        <ul>
          <li><strong>useEffect:</strong> Runs after every render, can be limited with dependencies.</li>
          <li><strong>componentDidMount:</strong> Runs only once after mount.</li>
        </ul>
        <h4>Example (componentDidMount):</h4>
        <pre><code>
class Component extends React.Component {
  componentDidMount() {
    console.log('Mounted');
  }
  render() {
    return <p>Hello</p>;
  }
}
        </code></pre>
      `,
    },
    {
      question:
        'What is server-side rendering (SSR) in React? রিয়েক্টে সার্ভার-সাইড রেন্ডারিং (SSR) কি?',
      answer: `
        <p><strong>বাংলা:</strong> SSR হল সার্ভারে HTML রেন্ডার করে ক্লায়েন্টে পাঠানো।</p>
        <h4>Benefits:</h4>
        <ul>
          <li>Improves SEO.</li>
          <li>Faster initial page load.</li>
        </ul>
        <h4>Example (Next.js):</h4>
        <pre><code>
export async function getServerSideProps() {
  const data = await fetchData();
  return { props: { data } };
}
const Page = ({ data }) => <p>{data.name}</p>;
        </code></pre>
      `,
    },
    {
      question: 'What is the React Context API? রিয়েক্ট কনটেক্সট API কি?',
      answer: `
        <p><strong>বাংলা:</strong> কনটেক্সট API গ্লোবাল ডেটা শেয়ার করতে ব্যবহৃত হয়।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Avoids prop drilling.</li>
          <li>Provides a way to pass data through component tree.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { createContext } from 'react';
const Context = createContext(null);
const Provider = ({ children }) => (
  <Context.Provider value={{ theme: 'dark' }}>{children}</Context.Provider>
);
        </code></pre>
      `,
    },
    {
      question: 'What is lazy loading in React? রিয়েক্টে লেজি লোডিং কি?',
      answer: `
        <p><strong>বাংলা:</strong> লেজি লোডিং হল কম্পোনেন্ট ডিমান্ডের ভিত্তিতে লোড করা।</p>
        <h4>Purpose:</h4>
        <ul>
          <li>Reduces initial bundle size.</li>
          <li>Improves performance.</li>
        </ul>
        <h4>Example:</h4>
        <pre><code>
import { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./Component'));
const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
        </code></pre>
      `,
    },
  ],
};

export default reactData;
