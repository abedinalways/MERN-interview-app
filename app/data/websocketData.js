export const websocketData = {
  title: 'WebSocket & Socket.IO Interview Questions',
  titleB: 'ওয়েবসকেট এবং সকেট.IO ইন্টারভিউ প্রশ্ন',
  description: 'Comprehensive guide to WebSocket and Socket.IO concepts for interview preparation',
  basic: [
    {
      question: 'What is WebSocket? ওয়েবসকেট কি?',
      answer: `
        <p><strong>বাংলা:</strong> ওয়েবসকেট হলো একটি ফুল-ডুপ্লেক্স কমিউনিকেশন প্রোটোকল যা ক্লায়েন্ট ও সার্ভারের মধ্যে দ্বিমুখী যোগাযোগের জন্য একটি দীর্ঘস্থায়ী TCP সংযোগ ব্যবহার করে। এটি HTTP-এর মতো পুনরাবৃত্ত অনুরোধের প্রয়োজন নেই।</p>
        <p><strong>English:</strong> WebSocket is a full-duplex communication protocol that allows bidirectional communication between a client and server over a single, long-lived TCP connection. Unlike HTTP, it does not require repeated requests for updates.</p>
      `
    },
    {
      question: 'What is the difference between HTTP and WebSocket? HTTP এবং ওয়েবসকেট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> যোগাযোগ পদ্ধতির পার্থক্য:</p>
        <ul>
          <li><strong>HTTP:</strong> রিকোয়েস্ট-রেসপন্স প্রোটোকল (ক্লায়েন্টই যোগাযোগ শুরু করে)</li>
          <li><strong>WebSocket:</strong> স্থায়ী, দ্বিমুখী যোগাযোগ যেখানে নতুন সংযোগ প্রতিষ্ঠা করার দরকার নেই</li>
        </ul>
      `
    },
    {
      question: 'What is Socket.IO? সকেট.IO কি?',
      answer: `
        <p><strong>বাংলা:</strong> সকেট.IO হলো ওয়েবসকেটের উপর তৈরি একটি জাভাস্ক্রিপ্ট লাইব্রেরি যা রিয়েল-টাইম, ইভেন্ট-ভিত্তিক যোগাযোগ প্রদান করে এবং ওয়েবসকেট নেই এমন সময়ে ফলব্যাক অপশন (যেমন পোলিং) সরবরাহ করে।</p>
        <p><strong>English:</strong> Socket.IO is a JavaScript library built on top of WebSockets that provides real-time, event-based communication with fallback options (like polling) when WebSocket is unavailable.</p>
      `
    },
    {
      question: 'How is Socket.IO different from pure WebSocket? সকেট.IO ও পিওর ওয়েবসকেট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফিচারের পার্থক্য:</p>
        <ul>
          <li><strong>Socket.IO:</strong> ওয়েবসকেটের মধ্যে ব্যবহৃত হয়, ফলব্যাক ট্রান্সপোর্ট সমর্থন করে</li>
          <li><strong>WebSocket:</strong> শুধুমাত্র ওয়েবসকেট, অটো-রিকানেকশন বা মাল্টিপ্লেক্সিং নেই</li>
        </ul>
      `
    },
    {
      question: 'What are the key features of Socket.IO? সকেট.IO এর প্রধান বৈশিষ্ট্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সকেট.IO এর মূল বৈশিষ্ট্য:</p>
        <ul>
          <li>অটোমেটিক রিকানেকশন</li>
          <li>মাল্টিপ্লেক্সিং মাল্টিপল সংযোগ</li>
          <li>রুম ও নেমস্পেস সমর্থন</li>
          <li>ফলব্যাক সমর্থন (XHR, লং পোলিং)</li>
          <li>বিল্ট-ইন ইভেন্ট (কানেক্ট, ডিসকানেক্ট ইত্যাদি)</li>
        </ul>
      `
    },
    {
      question: 'What are WebSocket lifecycle events? ওয়েবসকেট লাইফসাইকেল ইভেন্ট কী কী?',
      answer: `
        <p><strong>বাংলা:</strong> ওয়েবসকেটের জীবনচক্র ইভেন্ট:</p>
        <ul>
          <li><strong>onopen:</strong> সংযোগ প্রতিষ্ঠিত হলে</li>
          <li><strong>onmessage:</strong> মেসেজ পাওয়া গেলে</li>
          <li><strong>onerror:</strong> ত্রুটি হলে</li>
          <li><strong>onclose:</strong> সংযোগ বন্ধ হলে</li>
        </ul>
      `
    },
    {
      question: 'How do you establish a WebSocket connection in JavaScript? জাভাস্ক্রিপ্টে ওয়েবসকেট সংযোগ কীভাবে প্রতিষ্ঠা করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> ওয়েবসকেট সংযোগ প্রতিষ্ঠার উদাহরণ:</p>
        <pre><code>
const socket = new WebSocket('ws://localhost:3000');
socket.onopen = () => console.log('Connected');
socket.onmessage = (event) => console.log('Message:', event.data);
socket.onclose = () => console.log('Disconnected');
        </code></pre>
      `
    },
    {
      question: 'How do you install and use Socket.IO in Node.js? নোডজেএসে সকেট.IO কীভাবে ইনস্টল এবং ব্যবহার করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> সকেট.IO ইনস্টল ও ব্যবহার:</p>
        <pre><code>
npm install socket.io
const io = require('socket.io')(3000);
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('welcome', 'Hello Client!');
});
        </code></pre>
      `
    },
    {
      question: 'How do you connect a client to Socket.IO server? ক্লায়েন্ট কীভাবে সকেট.IO সার্ভারে সংযুক্ত হবে?',
      answer: `
        <p><strong>বাংলা:</strong> ক্লায়েন্ট সংযোগের উদাহরণ:</p>
        <pre><code>
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io('http://localhost:3000');
  socket.on('welcome', (msg) => console.log(msg));
</script>
        </code></pre>
      `
    },
    {
      question: 'What are Socket.IO namespaces? সকেট.IO নেমস্পেস কি?',
      answer: `
        <p><strong>বাংলা:</strong> নেমস্পেস একই সার্ভারে একাধিক এন্ডপয়েন্ট তৈরি করে যা লজিক আলাদা করে।</p>
        <pre><code>
const chat = io.of('/chat');
chat.on('connection', (socket) => console.log('Chat namespace connected'));
        </code></pre>
      `
    }
  ],
  intermediate: [
    {
      question: 'What are Socket.IO rooms? সকেট.IO রুম কি?',
      answer: `
        <p><strong>বাংলা:</strong> রুম হলো সকেটের লজিক্যাল গ্রুপিং যা নির্দিষ্ট গ্রুপে মেসেজ পাঠাতে ব্যবহৃত হয়।</p>
        <pre><code>
socket.join('room1');
io.to('room1').emit('message', 'Hello room1');
        </code></pre>
      `
    },
    {
      question: 'How do you broadcast a message to all connected clients? সব সংযুক্ত ক্লায়েন্টে মেসেজ ব্রডকাস্ট কীভাবে করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> সব ক্লায়েন্টে ব্রডকাস্ট:</p>
        <pre><code>
io.emit('broadcast', 'Hello everyone!');
        </code></pre>
      `
    },
    {
      question: 'How do you broadcast a message to everyone except the sender? প্রেরক ছাড়া সবাইকে মেসেজ ব্রডকাস্ট কীভাবে করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> প্রেরক ছাড়া ব্রডকাস্ট:</p>
        <pre><code>
socket.broadcast.emit('newUser', 'Someone joined!');
        </code></pre>
      `
    },
    {
      question: 'How do you handle Socket.IO disconnection? সকেট.IO ডিসকানেকশন কীভাবে হ্যান্ডল করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> ডিসকানেকশন হ্যান্ডলিং:</p>
        <pre><code>
socket.on('disconnect', (reason) => {
  
});
        </code></pre>
      `
    },
    {
      question: 'How do you enable auto-reconnection in Socket.IO? সকেট.IO-তে অটো-রিকানেকশন কীভাবে সক্ষম করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> অটো-রিকানেকশন কনফিগারেশন:</p>
        <pre><code>
const socket = io('http://localhost:3000', {
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
});
        </code></pre>
      `
    },
    {
      question: 'How do you send JSON data via WebSocket? ওয়েবসকেটের মাধ্যমে JSON ডেটা কীভাবে পাঠাবেন?',
      answer: `
        <p><strong>বাংলা:</strong> JSON ডেটা পাঠানোর উদাহরণ:</p>
        <pre><code>
socket.send(JSON.stringify({ type: 'chat', message: 'Hello' }));
        </code></pre>
      `
    },
    {
      question: 'What is the difference between long polling and WebSocket? লং পোলিং এবং ওয়েবসকেট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> দক্ষতার পার্থক্য:</p>
        <ul>
          <li><strong>Long Polling:</strong> ক্লায়েন্ট পুনরাবৃত্ত HTTP রিকোয়েস্ট করে (অপরিণত)</li>
          <li><strong>WebSocket:</strong> একটি ওপেন সংযোগে তাৎক্ষণিক আপডেট (দক্ষ)</li>
        </ul>
      `
    },
    {
      question: 'Can Socket.IO work without WebSocket? সকেট.IO ওয়েবসকেট ছাড়া কাজ করতে পারে কি?',
      answer: `
        <p><strong>বাংলা:</strong> হ্যাঁ, সকেট.IO ওয়েবসকেট সমর্থিত না থাকলে HTTP লং পোলিং-এ ফলব্যাক করতে পারে।</p>
      `
    },
    {
      question: 'How do you secure WebSocket connections? ওয়েবসকেট সংযোগ কীভাবে সুরক্ষিত করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> সুরক্ষা পদ্ধতি:</p>
        <ul>
          <li>WSS (ওয়েবসকেট সিকিউর) ব্যবহার করুন</li>
          <li>টোকেন দিয়ে ইউজার অথেনটিকেশন</li>
          <li>আগত মেসেজ ভ্যালিডেট করুন</li>
          <li>CORS সীমাবদ্ধতা প্রয়োগ করুন</li>
        </ul>
      `
    },
    {
      question: 'How to detect if a WebSocket connection is open? ওয়েবসকেট সংযোগ খোলা আছে কীভাবে চেক করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> সংযোগ চেক:</p>
        <pre><code>
if (socket.readyState === WebSocket.OPEN) {
  socket.send('Still connected');
}
        </code></pre>
      `
    }
  ],
  advanced: [
    {
      question: 'How do you implement authentication with Socket.IO? সকেট.IO-তে অথেনটিকেশন কীভাবে ইমপ্লিমেন্ট করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> অথেনটিকেশন ইমপ্লিমেন্টেশন:</p>
        <pre><code>
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (isValidToken(token)) next();
  else next(new Error('Unauthorized'));
});
        </code></pre>
      `
    },
    {
      question: 'How do you handle version mismatch between client and server in Socket.IO? সকেট.IO-তে ক্লায়েন্ট ও সার্ভারের মধ্যে ভার্সন মিসম্যাচ কীভাবে হ্যান্ডল করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> ভার্সন চেক বা হ্যান্ডশেক স্টেপ যোগ করা যেতে পারে।</p>
      `
    },
    {
      question: 'What is the difference between WebSocket and SSE (Server-Sent Events)? ওয়েবসকেট এবং SSE (সার্ভার-সেন্ট ইভেন্টস) এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> যোগাযোগ দিক:</p>
        <ul>
          <li><strong>WebSocket:</strong> দ্বিমুখী যোগাযোগ</li>
          <li><strong>SSE:</strong> একমুখী (সার্ভার → ক্লায়েন্ট) ইভেন্ট স্ট্রিম</li>
        </ul>
      `
    },
    {
      question: 'How do you handle scalability for Socket.IO? সকেট.IO-এর জন্য স্কেলেবিলিটি কীভাবে হ্যান্ডল করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> স্কেলিং পদ্ধতি:</p>
        <ul>
          <li>রেডিস অ্যাডাপ্টার ব্যবহার করুন</li>
          <li>লোড ব্যালেন্সারের পেছনে মাল্টিপল সার্ভার</li>
          <li>socket.io-redis ব্যবহার করুন</li>
        </ul>
      `
    },
    {
      question: 'What are common use cases of Socket.IO? সকেট.IO-এর সাধারণ ব্যবহার ক্ষেত্র কী কী?',
      answer: `
        <p><strong>বাংলা:</strong> সকেট.IO-এর ব্যবহার ক্ষেত্র:</p>
        <ul>
          <li>চ্যাট অ্যাপ্লিকেশন</li>
          <li>রিয়েল-টাইম ড্যাশবোর্ড</li>
          <li>মাল্টিপ্লেয়ার গেম</li>
          <li>নোটিফিকেশন</li>
          <li>সহযোগী টুল (গুগল ডক্স স্টাইল)</li>
        </ul>
      `
    }
  ]
};

export default websocketData;