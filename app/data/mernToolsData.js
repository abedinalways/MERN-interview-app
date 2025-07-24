export const mernToolsData = {
  title: 'MERN Stack Tools & Concepts',
  titleB: 'মার্ন স্ট্যাক টুলস ও কনসেপ্ট',
  description:
    'Pagination, Search, REST APIs, Error Handling, Performance, Security, and more',
  basic: [
    {
      question: 'What is Pagination in MERN Stack? পেজিনেশন কি?',
      answer: `
        <p><strong>বাংলা:</strong> Pagination হল ডাটাকে ছোট ছোট অংশে (pages) ভাগ করে প্রদর্শন করার একটি প্রক্রিয়া, যা user experience এবং performance উন্নত করে।</p>
        <ul>
          <li>Reduces load time</li>
          <li>Improves UX</li>
          <li>Decreases server load</li>
        </ul>
        <pre><code>// Backend example
app.get('/api/posts', async (req,res)=>{
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page-1)*limit;
  const posts = await Post.find().skip(skip).limit(limit);
  const total = await Post.countDocuments();
  res.json({posts, totalPages: Math.ceil(total/limit)});
});</code></pre>
      `,
    },
    {
      question:
        'How to implement Search in MERN Stack? সার্চ কিভাবে বাস্তবায়ন করবেন?',
      answer: `
        <p><strong>বাংলা:</strong> Search functionality MongoDB regex বা text index দিয়ে করা যায়।</p>
        <pre><code>// Backend search
app.get('/api/search', async (req,res)=>{
  const q = req.query.q;
  const results = await Post.find({
    $or: [
      {title: {$regex:q,$options:'i'}},
      {content: {$regex:q,$options:'i'}}
    ]
  });
  res.json(results);
});</code></pre>
        <p>Frontend-এ debouncing ব্যবহার করা উচিত যাতে প্রতি key press এ API hit না হয়।</p>
      `,
    },
    {
      question: 'What is REST API? REST API কী?',
      answer: `
        <p>REST API হল Representational State Transfer-এর উপর ভিত্তি করে client-server communication-এর একটি standard architecture.</p>
        <ul>
          <li>Stateless</li>
          <li>Uses HTTP methods (GET, POST, PUT, DELETE)</li>
          <li>Resource-based URLs</li>
        </ul>
      `,
    },
    {
      question: 'What is CORS in MERN? CORS কেন লাগে?',
      answer: `
        <p><strong>বাংলা:</strong> CORS (Cross-Origin Resource Sharing) হল security mechanism যা browser কে বলে কোন domain থেকে API access করা যাবে।</p>
        <pre><code>// Enable CORS in Express
import cors from 'cors';
app.use(cors({origin:'http://localhost:3000', credentials:true}));</code></pre>
      `,
    },
    {
      question: 'What is dotenv? .env কেন লাগে?',
      answer: `
        <p><strong>বাংলা:</strong> dotenv package দিয়ে environment variables (.env file) load করা হয় যেমন DB_URL, JWT_SECRET.</p>
        <pre><code>require('dotenv').config();
console.log(process.env.MONGO_URI);</code></pre>
      `,
    },
    {
      question: 'What is MVC pattern? MVC কি?',
      answer: `
        <p>MVC = Model View Controller</p>
        <ul>
          <li>Model → Database layer</li>
          <li>View → Frontend UI</li>
          <li>Controller → Logic & API</li>
        </ul>
        <p>MERN projects সাধারণত MVC pattern অনুসরণ করে।</p>
      `,
    },
    {
      question: 'What is Express middleware?',
      answer: `
        <p>Middleware হল function যা request এবং response এর মধ্যে চলে।</p>
        <pre><code>app.use((req,res,next)=>{
  console.log('Request URL:',req.url);
  next();
});</code></pre>
      `,
    },
    {
      question: 'What is JSON Web Token (JWT)?',
      answer: `
        <p>JWT হল secure token যা authentication & authorization এর জন্য ব্যবহৃত হয়।</p>
        <pre><code>const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'1h'});</code></pre>
      `,
    },
    {
      question: 'What is MongoDB Atlas?',
      answer: `
        <p>MongoDB Atlas হল cloud-based MongoDB database hosting service যা free tier-সহ আসে।</p>
      `,
    },
    {
      question: 'What is CRUD operation?',
      answer: `
        <p>CRUD = Create, Read, Update, Delete operations in database.</p>
        <pre><code>// Example
await Post.create(data); // Create
await Post.find(); // Read
await Post.findByIdAndUpdate(id,data); // Update
await Post.findByIdAndDelete(id); // Delete</code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question: 'How to design REST APIs in MERN Stack?',
      answer: `
        <p>Use proper HTTP methods, validation, and error handling.</p>
        <pre><code>router.post('/posts', async(req,res)=>{
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch(err){
    res.status(400).json({msg:'Invalid data'});
  }
});</code></pre>
      `,
    },
    {
      question: 'How to handle errors in MERN Stack?',
      answer: `
        <p>Backend-এ error middleware এবং frontend-এ try/catch ব্যবহার করতে হয়।</p>
        <pre><code>app.use((err,req,res,next)=>{
  res.status(err.status||500).json({msg:err.message});
});</code></pre>
      `,
    },
    {
      question: 'What is Aggregation in MongoDB?',
      answer: `
        <p>Aggregation pipeline data filter, group, sort ইত্যাদির জন্য ব্যবহার হয়।</p>
        <pre><code>Post.aggregate([
  {$match:{author:'John'}},
  {$group:{_id:'$category', total:{$sum:1}}}
])</code></pre>
      `,
    },
    {
      question: 'How to secure passwords in MERN?',
      answer: `
        <p>bcrypt ব্যবহার করে password hash করতে হবে।</p>
        <pre><code>const hashed = await bcrypt.hash(password,10);
const isMatch = await bcrypt.compare(password,hashed);</code></pre>
      `,
    },
    {
      question: 'How to implement Role-based Access?',
      answer: `
        <p>JWT token এর ভিতরে role দিয়ে verify করতে হবে।</p>
        <pre><code>if(user.role !== 'admin') return res.status(403).json({msg:'Access denied'});</code></pre>
      `,
    },
    {
      question: 'How to connect React with Node backend?',
      answer: `
        <p>Axios বা fetch দিয়ে API call করা হয়।</p>
        <pre><code>const res = await axios.get('http://localhost:5000/api/posts');</code></pre>
      `,
    },
    {
      question: 'What is Mongoose? Why use it?',
      answer: `
        <p>Mongoose হল MongoDB এর জন্য ODM (Object Data Modeling) library যা schema ও validation সহজ করে।</p>
      `,
    },
    {
      question: 'What is Index in MongoDB?',
      answer: `
        <p>Index query speed বাড়ায়।</p>
        <pre><code>db.posts.createIndex({title:1})</code></pre>
      `,
    },
    {
      question: 'How to implement file upload in MERN?',
      answer: `
        <p>Backend-এ multer middleware ব্যবহার করতে হয়।</p>
        <pre><code>import multer from 'multer';
const upload = multer({dest:'uploads/'});
router.post('/upload', upload.single('file'), (req,res)=>{res.send(req.file)})</code></pre>
      `,
    },
    {
      question: 'How to deploy MERN stack?',
      answer: `
        <ul>
          <li>Frontend → Vercel/Netlify</li>
          <li>Backend → Render/Heroku</li>
          <li>Database → MongoDB Atlas</li>
        </ul>
      `,
    },
  ],
  advanced: [
    {
      question: 'How to optimize performance in MERN?',
      answer: `
        <ul>
          <li>Frontend → Code splitting, memoization</li>
          <li>Backend → Caching (Redis), DB indexing</li>
          <li>Database → Projection & limit()</li>
        </ul>
      `,
    },
    {
      question: 'How to implement Server Side Rendering (SSR)?',
      answer: `
        <p>Next.js ব্যবহার করতে হয় যাতে SEO-friendly SSR হয়।</p>
      `,
    },
    {
      question: 'How to implement WebSockets in MERN?',
      answer: `
        <p>Socket.IO ব্যবহার করে real-time communication implement করা যায়।</p>
        <pre><code>io.on('connection',(socket)=>{
  socket.emit('welcome','Hello Client!');
});</code></pre>
      `,
    },
    {
      question: 'What is Rate Limiting?',
      answer: `
        <p>একই user/ip থেকে বেশি request আটকানো। express-rate-limit ব্যবহার করা যায়।</p>
        <pre><code>import rateLimit from 'express-rate-limit';
app.use(rateLimit({windowMs:60*1000, max:100}));</code></pre>
      `,
    },
    {
      question: 'What is Helmet in Express?',
      answer: `
        <p>Helmet security HTTP headers যোগ করে।</p>
        <pre><code>import helmet from 'helmet';
app.use(helmet());</code></pre>
      `,
    },
    {
      question: 'What is Data Validation?',
      answer: `
        <p>Data validate করতে joi বা express-validator ব্যবহার করা যায়।</p>
        <pre><code>import {body,validationResult} from 'express-validator';
router.post('/user',body('email').isEmail(),(req,res)=>{...})</code></pre>
      `,
    },
    {
      question: 'How to scale MERN apps?',
      answer: `
        <ul>
          <li>Use Load Balancer</li>
          <li>Use horizontal scaling with PM2/Cluster</li>
          <li>Optimize DB queries</li>
        </ul>
      `,
    },
    {
      question: 'How to implement Logging?',
      answer: `
        <p>winston/morgan দিয়ে logging করতে পারো।</p>
        <pre><code>import morgan from 'morgan';
app.use(morgan('dev'));</code></pre>
      `,
    },
    {
      question: 'How to handle background jobs?',
      answer: `
        <p>Bull Queue বা Agenda ব্যবহার করতে পারো Redis সহ।</p>
      `,
    },
    {
      question: 'How to secure sensitive keys?',
      answer: `
        <p>.env file এ রাখবে এবং কখনোই git এ push করবে না।</p>
      `,
    },
  ],
};
