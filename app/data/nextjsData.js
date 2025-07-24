export const nextjsData = {
  title: 'Next.js Interview Questions',
  titleB: 'নেক্সটজেএস ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to Next.js concepts for interview preparation',
  basic: [
    {
      question: 'What is Next.js? নেক্সটজেএস কি?',
      answer: `
        <p><strong>বাংলা:</strong> নেক্সটজেএস হলো রিয়েক্ট-এর উপর তৈরি একটি ফ্রেমওয়ার্ক যা SSR (Server Side Rendering), SSG (Static Site Generation), এবং API রুটস সমর্থন করে।</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>File-based routing</li>
        </ul>
        <pre><code>
export default function Home() {
  return <h1>Hello, Next.js!</h1>;
}
        </code></pre>
      `,
    },
    {
      question:
        'What are the main features of Next.js? নেক্সটজেএসের প্রধান বৈশিষ্ট্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> নেক্সটজেএসের মূল বৈশিষ্ট্যগুলো হলো:</p>
        <ul>
          <li>Server-side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>File-based Routing</li>
          <li>API Routes</li>
          <li>Image Optimization</li>
          <li>Automatic Code Splitting</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between SSR, SSG, and CSR in Next.js? নেক্সটজেএসে SSR, SSG এবং CSR এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> এগুলো রেন্ডারিং পদ্ধতির পার্থক্য নির্দেশ করে।</p>
        <ul>
          <li><strong>SSR:</strong> পৃষ্ঠা প্রতি রিকোয়েস্টে সার্ভার থেকে রেন্ডার হয়</li>
          <li><strong>SSG:</strong> বিল্ড টাইমে স্ট্যাটিক HTML জেনারেট হয়</li>
          <li><strong>CSR:</strong> ব্রাউজার সাইডে রিয়েক্ট দিয়ে রেন্ডার হয়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between getStaticProps and getServerSideProps? getStaticProps এবং getServerSideProps এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা ফেচ করার সময় নির্দেশ করে।</p>
        <ul>
          <li><strong>getStaticProps:</strong> বিল্ড টাইমে ডেটা ফেচ করে স্ট্যাটিক পেজ বানায়</li>
          <li><strong>getServerSideProps:</strong> প্রতি রিকোয়েস্টে সার্ভার থেকে ডেটা ফেচ করে</li>
        </ul>
        <pre><code>
export async function getStaticProps() {
  return { props: { data: "static" } };
}
export async function getServerSideProps() {
  return { props: { data: "dynamic" } };
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between getStaticProps and getStaticPaths? getStaticProps এবং getStaticPaths এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডায়নামিক রুটিংয়ের জন্য ব্যবহৃত হয়।</p>
        <ul>
          <li><strong>getStaticProps:</strong> একটি পেজের জন্য স্ট্যাটিক ডেটা ফেচ করে</li>
          <li><strong>getStaticPaths:</strong> ডায়নামিক রুটে কোন পাথগুলো বিল্ড হবে তা নির্ধারণ করে</li>
        </ul>
        <pre><code>
export async function getStaticPaths() {
  return { paths: [{ params: { id: "1" } }], fallback: false };
}
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between App Router (Next.js 13+) and Pages Router? App Router (নেক্সটজেএস 13+) এবং Pages Router এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রাউটিং সিস্টেমের পার্থক্য।</p>
        <ul>
          <li><strong>Pages Router:</strong> /pages ফোল্ডার দিয়ে রাউটিং</li>
          <li><strong>App Router:</strong> /app ফোল্ডার দিয়ে ফাইল-ভিত্তিক রাউটিং + React Server Components</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between Server Components and Client Components? সার্ভার কম্পোনেন্ট এবং ক্লায়েন্ট কম্পোনেন্ট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেন্ডারিং স্থান।</p>
        <ul>
          <li><strong>Server Components:</strong> সার্ভার-সাইডে রেন্ডার হয়, লাইটওয়েট</li>
          <li><strong>Client Components:</strong> ব্রাউজারে রেন্ডার হয়, ইন্টারঅ্যাকটিভিটি দেয়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between dynamic and static routing in Next.js? নেক্সটজেএসে ডায়নামিক এবং স্ট্যাটিক রাউটিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রাউটের ধরন।</p>
        <ul>
          <li><strong>static:</strong> ফিক্সড রুট /about, /contact</li>
          <li><strong>dynamic:</strong> [id].js এর মতো প্যারামিটার দিয়ে পরিবর্তিত হয়</li>
        </ul>
      `,
    },
    {
      question:
        'How does Next.js handle API routes? নেক্সটজেএস কীভাবে API রুটস হ্যান্ডল করে?',
      answer: `
        <p><strong>বাংলা:</strong> /pages/api ফোল্ডারের ফাইলগুলো API এন্ডপয়েন্ট হিসেবে কাজ করে।</p>
        <pre><code>
export default function handler(req, res) {
  res.status(200).json({ message: "API" });
}
        </code></pre>
      `,
    },
    {
      question:
        'What is ISR (Incremental Static Regeneration)? ISR (ইনক্রিমেন্টাল স্ট্যাটিক রিজেনারেশন) কী?',
      answer: `
        <p><strong>বাংলা:</strong> ISR দিয়ে জেনারেট করা স্ট্যাটিক পেজ নির্দিষ্ট সময় পর পুনর্গঠন হয়।</p>
        <pre><code>
export async function getStaticProps() {
  return { props: { revalidate: 10 } }; // Revalidate every 10 seconds
}
        </code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is the difference between Link component and <a> tag? Link কম্পোনেন্ট এবং <a> ট্যাগ এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ন্যাভিগেশনের পদ্ধতি।</p>
        <ul>
          <li><strong>Link:</strong> ক্লায়েন্ট-সাইড ন্যাভিগেশন (দ্রুত)</li>
          <li><strong><a>:</strong> পূর্ণ পেজ রিলোড করে</li>
        </ul>
        <pre><code>
import Link from 'next/link';
<Link href="/about">About</Link>
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between next/image and normal <img>? next/image এবং সাধারণ <img> এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইমেজ হ্যান্ডলিংয়ের উন্নতি।</p>
        <ul>
          <li><strong>next/image:</strong> স্বয়ংক্রিয় ইমেজ অপটিমাইজেশন, লেজি লোডিং, রেসপন্সিভ ইমেজ</li>
          <li><strong><img>:</strong> সাধারণ ইমেজ ট্যাগ</li>
        </ul>
        <pre><code>
import Image from 'next/image';
<Image src="/image.jpg" alt="Image" width={500} height={300} />
        </code></pre>
      `,
    },
    {
      question:
        'How does Next.js optimize performance? নেক্সটজেএস কীভাবে পারফরম্যান্স অপটিমাইজ করে?',
      answer: `
        <p><strong>বাংলা:</strong> পারফরম্যান্স বাড়ানোর উপায়:</p>
        <ul>
          <li>Code Splitting</li>
          <li>Automatic Static Optimization</li>
          <li>Image Optimization</li>
          <li>Prefetching for faster navigation</li>
        </ul>
      `,
    },
    {
      question: 'What is Middleware in Next.js? নেক্সটজেএসে মিডলওয়্যার কী?',
      answer: `
        <p><strong>বাংলা:</strong> মিডলওয়্যার রিকোয়েস্ট আসার আগে রান হয়।</p>
        <pre><code>
export { default } from 'next-auth/middleware';
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between next/head and document.js? next/head এবং document.js এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> হেড ম্যানেজমেন্ট।</p>
        <ul>
          <li><strong>next/head:</strong> প্রতি পেজের জন্য হেড এলিমেন্ট সেট করতে</li>
          <li><strong>_document.js:</strong> পুরো অ্যাপ-লেভেল ডকুমেন্ট স্ট্রাকচার কাস্টমাইজ</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between getInitialProps and getServerSideProps? getInitialProps এবং getServerSideProps এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা ফেচের পুরানো ও নতুন পদ্ধতি।</p>
        <ul>
          <li><strong>getInitialProps:</strong> পুরানো উপায়, ক্লায়েন্ট + সার্ভারে রান হতে পারে</li>
          <li><strong>getServerSideProps:</strong> শুধু সার্ভার-সাইডে প্রতি রিকোয়েস্টে রান</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between client-side fetch and server-side fetch in Next.js? নেক্সটজেএসে ক্লায়েন্ট-সাইড ফেচ এবং সার্ভার-সাইড ফেচ এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফেচের স্থান।</p>
        <ul>
          <li><strong>client-side fetch:</strong> ব্রাউজার থেকে রান হয় (CSR)</li>
          <li><strong>server-side fetch:</strong> সার্ভার থেকে হয় (SSR/SSG)</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between next.config.js and env.local? next.config.js এবং env.local এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> কনফিগারেশনের ধরন।</p>
        <ul>
          <li><strong>next.config.js:</strong> নেক্সটজেএস কনফিগারেশন</li>
          <li><strong>.env.local:</strong> সংবেদনশীল এনভায়রনমেন্ট ভ্যারিয়েবল</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between static export and full SSR? স্ট্যাটিক এক্সপোর্ট এবং ফুল SSR এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেন্ডারিং এপ্রোচ।</p>
        <ul>
          <li><strong>static export:</strong> শুধুমাত্র স্ট্যাটিক HTML জেনারেট</li>
          <li><strong>SSR:</strong> ডায়নামিক পেজ প্রতি রিকোয়েস্টে রেন্ডার</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between rendering on the server and client? সার্ভারে এবং ক্লায়েন্টে রেন্ডারিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেন্ডারিংয়ের স্থান।</p>
        <ul>
          <li><strong>Server rendering:</strong> SEO ফ্রেন্ডলি, ফাস্ট প্রথম লোড</li>
          <li><strong>Client rendering:</strong> ইন্টারঅ্যাকটিভিটি হ্যান্ডল</li>
        </ul>
      `,
    },
  ],
  advanced: [
    {
      question: 'What is prefetching in Next.js? নেক্সটজেএসে প্রিফেচিং কী?',
      answer: `
        <p><strong>বাংলা:</strong> নেক্সটজেএস Link কম্পোনেন্ট ভবিষ্যতে ভিজিট হতে পারে এমন পেজ প্রিফেচ করে।</p>
        <pre><code>
import Link from 'next/link';
<Link href="/about" prefetch>About</Link>
        </code></pre>
      `,
    },
    {
      question:
        'How does Next.js handle SEO better than React SPA? নেক্সটজেএস কীভাবে রিয়েক্ট SPA-এর তুলনায় SEO ভালো হ্যান্ডল করে?',
      answer: `
        <p><strong>বাংলা:</strong> SSR/SSG দিয়ে ফুলি রেন্ডার করা HTML সেন্ড করে।</p>
      `,
    },
    {
      question:
        'What is the difference between _app.js and _document.js? _app.js এবং _document.js এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যাপ স্ট্রাকচার।</p>
        <ul>
          <li><strong>_app.js:</strong> পেজ ইনিশিয়ালাইজ, গ্লোবাল স্টাইল/কনটেক্সট র‌্যাপার</li>
          <li><strong>_document.js:</strong> HTML ডকুমেন্ট স্ট্রাকচার কাস্টমাইজ</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between absolute imports and relative imports in Next.js? নেক্সটজেএসে অ্যাবসোলিউট ইম্পোর্ট এবং রেলেটিভ ইম্পোর্ট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইম্পোর্ট পথ।</p>
        <ul>
          <li><strong>relative import:</strong> ../../component/Button</li>
          <li><strong>absolute import:</strong> @/component/Button (সহজে মেইনটেইন)</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between NextAuth and custom auth implementation? NextAuth এবং কাস্টম অথেনটিকেশন ইমপ্লিমেন্টেশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> অথেনটিকেশন সমাধান।</p>
        <ul>
          <li><strong>NextAuth:</strong> রেডি-মেড সমাধান</li>
          <li><strong>custom auth:</strong> ম্যানুয়ালি JWT/কুকি/সেশন হ্যান্ডল</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between useRouter() and Link component? useRouter() এবং Link কম্পোনেন্ট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ন্যাভিগেশন প্রক্রিয়া।</p>
        <ul>
          <li><strong>useRouter():</strong> প্রোগ্রামেটিক ন্যাভিগেশন</li>
          <li><strong>Link:</strong> ডিক্লারেটিভ ন্যাভিগেশন</li>
        </ul>
        <pre><code>
import { useRouter } from 'next/router';
const router = useRouter();
router.push('/about');
        </code></pre>
      `,
    },
    {
      question:
        'What is dynamic import in Next.js? নেক্সটজেএসে ডায়নামিক ইম্পোর্ট কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডায়নামিক ইম্পোর্ট লেজিলি লোড করা কম্পোনেন্ট।</p>
        <pre><code>
const DynamicComponent = dynamic(() => import('../components/Heavy'));
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between dev, build, and start in Next.js? নেক্সটজেএসে dev, build এবং start এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> কমান্ডের উদ্দেশ্য।</p>
        <ul>
          <li><strong>next dev:</strong> ডেভেলপমেন্ট মোড</li>
          <li><strong>next build:</strong> প্রোডাকশন বিল্ড</li>
          <li><strong>next start:</strong> প্রোডাকশন সার্ভার চালায়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between RSC (React Server Components) and CSR? RSC (React Server Components) এবং CSR এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেন্ডারিং স্থান।</p>
        <ul>
          <li><strong>RSC:</strong> সার্ভার থেকে রেন্ডার, কম JS পাঠায়</li>
          <li><strong>CSR:</strong> ব্রাউজারে রেন্ডার</li>
        </ul>
      `,
    },
    {
      question:
        'What are the deployment options for Next.js? নেক্সটজেএসের ডিপ্লয়মেন্ট অপশনগুলো কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডিপ্লয়মেন্টের পদ্ধতি:</p>
        <ul>
          <li>Vercel (সর্বোত্তম)</li>
          <li>Netlify</li>
          <li>AWS, DigitalOcean</li>
          <li>কাস্টম নোড সার্ভার</li>
        </ul>
      `,
    },
  ],
};

export default nextjsData;
