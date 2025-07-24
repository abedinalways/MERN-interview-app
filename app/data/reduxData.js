export const reduxData = {
  title: 'Redux Interview Questions',
  titleB: 'রেডাক্স ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to Redux concepts for interview preparation',
  basic: [
    {
      question: 'What is Redux? রেডাক্স কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স একধরনের স্টেট ম্যানেজমেন্ট লাইব্রেরি, যেখানে অ্যাপ্লিকেশনের স্টেট গুলো এক জায়গায় রাখা হয় (স্টোর)।</p>
        <p><strong>English:</strong> Redux is a predictable state container for JavaScript apps.</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Centralized state</li>
          <li>Predictable state updates</li>
        </ul>
      `,
    },
    {
      question: 'Why do we use Redux? কেন রেডাক্স ব্যবহার করি?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স ব্যবহারের কারণ:</p>
        <ul>
          <li>Centralized state management</li>
          <li>Predictable behavior</li>
          <li>Easy debugging with Redux DevTools</li>
          <li>Works with any UI layer</li>
        </ul>
      `,
    },
    {
      question:
        'What are the core principles of Redux? রেডাক্স এর মূল ধারণা কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্সের মূল নীতি:</p>
        <ul>
          <li><strong>Single source of truth:</strong> একটাই স্টোর থাকে</li>
          <li><strong>State is read-only:</strong> সরাসরি স্টেট চেঞ্জ করা যায় না</li>
          <li><strong>Changes via pure functions:</strong> রিডিউসার দিয়ে স্টেট পরিবর্তন হয়</li>
        </ul>
      `,
    },
    {
      question: 'What are the main components of Redux?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্সের প্রধান উপাদান:</p>
        <ul>
          <li><strong>Store:</strong> স্টেট ধরে</li>
          <li><strong>Action:</strong> কী করতে হবে তা বর্ণনা করে</li>
          <li><strong>Reducer:</strong> পিওর ফাংশন যা স্টেট আপডেট করে</li>
          <li><strong>Dispatch:</strong> অ্যাকশন রিডিউসারে পাঠায়</li>
        </ul>
      `,
    },
    {
      question: 'What is a Store in Redux?',
      answer: `
        <p><strong>বাংলা:</strong> স্টোর হলো রেডাক্স এর কেন্দ্র যেখানে পুরো অ্যাপের স্টেট থাকে।</p>
        <pre><code>
const store = createStore(reducer);
        </code></pre>
      `,
    },
    {
      question: 'What is an Action in Redux?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যাকশন হলো একটি সাধারণ JavaScript অবজেক্ট যার মধ্যে টাইপ এবং অপশনাল পেইলোড থাকে।</p>
        <pre><code>
{ type: "INCREMENT", payload: 5 }
        </code></pre>
      `,
    },
    {
      question: 'What is a Reducer?',
      answer: `
        <p><strong>বাংলা:</strong> রিডিউসার হলো পিওর ফাংশন, যা স্টেট + অ্যাকশন নিয়ে নতুন স্টেট রিটার্ন করে।</p>
        <pre><code>
function counterReducer(state = 0, action) {
  if (action.type === "INCREMENT") return state + 1
  return state
}
        </code></pre>
      `,
    },
    {
      question: 'How does Redux work?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স কীভাবে কাজ করে:</p>
        <ul>
          <li>অ্যাকশন ডিসপ্যাচ করা হয়</li>
          <li>রিডিউসার হ্যান্ডল করে</li>
          <li>নতুন স্টেট তৈরি হয়</li>
          <li>স্টোর আপডেট হয়</li>
          <li>UI রিরেন্ডার হয়</li>
        </ul>
      `,
    },
    {
      question: 'What is dispatch in Redux?',
      answer: `
        <p><strong>বাংলা:</strong> dispatch() ফাংশন দিয়ে আমরা অ্যাকশন স্টোরে পাঠাই।</p>
        <pre><code>
dispatch({ type: "INCREMENT" })
        </code></pre>
      `,
    },
    {
      question: 'What is Redux DevTools?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স ডেভটুলস হলো ডিবাগিং টুল, যেটা দিয়ে তুমি স্টেট চেঞ্জ ট্র্যাক করতে পারো।</p>
      `,
    },
  ],
  intermediate: [
    {
      question: 'What is the difference between Redux and Context API?',
      answer: `
        <p><strong>বাংলা:</strong> ছোট অ্যাপে Context API যথেষ্ট, বড় অ্যাপে রেডাক্স ভালো।</p>
        <ul>
          <li><strong>Redux:</strong> More powerful, predictable, middleware support</li>
          <li><strong>Context API:</strong> Simple global state, small apps এর জন্য</li>
        </ul>
      `,
    },
    {
      question: 'What is Redux Thunk?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স থাঙ্ক হলো মিডলওয়্যার যা অ্যাসিনক লজিক হ্যান্ডল করতে দেয়, যেমন API কল।</p>
        <pre><code>
export const fetchData = () => async (dispatch) => {
  const data = await fetch("/api/data")
  dispatch({ type: "SET_DATA", payload: data })
}
        </code></pre>
      `,
    },
    {
      question: 'What is Middleware in Redux?',
      answer: `
        <p><strong>বাংলা:</strong> মিডলওয়্যার হলো ফাংশন যা ডিসপ্যাচ এবং রিডিউসারের মাঝে বসে কাজ করে। যেমন → থাঙ্ক, লগার ইত্যাদি।</p>
      `,
    },
    {
      question: 'What is the difference between Redux and MobX?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স স্ট্রিক্ট ও প্রেডিক্টেবল, মবএক্স ফ্লেক্সিবল।</p>
        <ul>
          <li><strong>Redux:</strong> strict, pure function, predictable</li>
          <li><strong>MobX:</strong> more flexible, reactive programming style</li>
        </ul>
      `,
    },
    {
      question: 'What is Redux Toolkit (RTK)?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স টুলকিট হলো রেডাক্স এর অফিসিয়াল, মডার্ন অ্যাপ্রোচ যেটা বয়লারপ্লেট কমায়।</p>
        <pre><code>
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1
  }
})
        </code></pre>
      `,
    },
    {
      question: 'Why Redux Toolkit is recommended over traditional Redux?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স টুলকিটের সুবিধা:</p>
        <ul>
          <li>Less boilerplate</li>
          <li>Built-in Immer (immutable updates easy)</li>
          <li>Built-in Thunk support</li>
          <li>DevTools integration</li>
        </ul>
      `,
    },
    {
      question: 'What is createSlice in Redux Toolkit?',
      answer: `
        <p><strong>বাংলা:</strong> createSlice() একসাথে রিডিউসার, অ্যাকশনস, এবং ইনিশিয়াল স্টেট তৈরি করে।</p>
      `,
    },
    {
      question: 'How do you connect Redux to a React app?',
      answer: `
        <p><strong>বাংলা:</strong> রেডাক্স কীভাবে রিঅ্যাক্ট অ্যাপে সংযুক্ত করবেন:</p>
        <ul>
          <li>react-redux ইনস্টল করুন</li>
          <li>অ্যাপকে <Provider store={store}> দিয়ে মোড়ক দিন</li>
          <li>useSelector দিয়ে স্টেট পড়ুন</li>
          <li>useDispatch দিয়ে অ্যাকশন পাঠান</li>
        </ul>
        <pre><code>
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
        </code></pre>
      `,
    },
    {
      question: 'What is the difference between useSelector and useDispatch?',
      answer: `
        <p><strong>বাংলা:</strong> ব্যবহারের পার্থক্য:</p>
        <ul>
          <li><strong>useSelector:</strong> স্টোর থেকে স্টেট পড়ে</li>
          <li><strong>useDispatch:</strong> অ্যাকশন স্টোরে পাঠায়</li>
        </ul>
        <pre><code>
const count = useSelector(state => state.count);
const dispatch = useDispatch();
dispatch({ type: "INCREMENT" });
        </code></pre>
      `,
    },
    {
      question: 'When should you NOT use Redux?',
      answer: `
        <p><strong>বাংলা:</strong> কখন রেডাক্স ব্যবহার করা উচিত নয়:</p>
        <ul>
          <li>ছোট অ্যাপ যেখানে সিম্পল লোকাল স্টেট যথেষ্ট</li>
          <li>যখন স্টেট খুব সিম্পল এবং গ্লোবালি শেয়ার করার দরকার নেই</li>
        </ul>
      `,
    },
  ],
  advanced: [],
};

export default reduxData;
