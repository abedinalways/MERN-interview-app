export const mongodbData = {
  title: 'MongoDB Interview Questions',
  titleB: 'মঙ্গোডিবি ইন্টারভিউ প্রশ্ন',
  description:
    'Comprehensive guide to MongoDB concepts for interview preparation',
  basic: [
    {
      question: 'What is MongoDB? মঙ্গোডিবি কি?',
      answer: `
        <p><strong>বাংলা:</strong> মঙ্গোডিবি হলো NoSQL ডকুমেন্ট ডেটাবেস, যেখানে ডেটা JSON-লাইক BSON ফরম্যাটে স্টোর হয়।</p>
        <h4>Key Features:</h4>
        <ul>
          <li>Schema-less</li>
          <li>Scalable</li>
          <li>Document-oriented</li>
        </ul>
        <pre><code>
db.collection.insertOne({ name: "Example" });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between SQL and NoSQL databases? SQL এবং NoSQL ডেটাবেসের মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটাবেস স্ট্রাকচার।</p>
        <ul>
          <li><strong>SQL:</strong> টেবিল-ভিত্তিক, স্কিমা ফিক্সড</li>
          <li><strong>NoSQL:</strong> ডকুমেন্ট/কালেকশন-ভিত্তিক, স্কিমা ফ্লেক্সিবল</li>
        </ul>
      `,
    },
    {
      question: 'What is a collection in MongoDB? মঙ্গোডিবিতে কালেকশন কি?',
      answer: `
        <p><strong>বাংলা:</strong> কালেকশন হলো টেবিলের মতো, যেখানে একাধিক ডকুমেন্ট থাকে।</p>
      `,
    },
    {
      question: 'What is a document in MongoDB? মঙ্গোডিবিতে ডকুমেন্ট কি?',
      answer: `
        <p><strong>বাংলা:</strong> ডকুমেন্ট হলো রো-এর মতো, JSON-লাইক কী-ভ্যালু ডেটা।</p>
        <pre><code>
{ name: "Alice", age: 25 }
        </code></pre>
      `,
    },
    {
      question: 'What is BSON in MongoDB? মঙ্গোডিবিতে BSON কি?',
      answer: `
        <p><strong>বাংলা:</strong> BSON হলো বাইনারি JSON ফরম্যাট যা মঙ্গোডিবি ইন্টারনালি স্টোর করে (দ্রুত ও টাইপ-রিচ)।</p>
      `,
    },
    {
      question:
        'What is the difference between MongoDB and MySQL? মঙ্গোডিবি এবং MySQL এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটাবেস ডিজাইন।</p>
        <ul>
          <li><strong>MongoDB:</strong> স্কিমা-লেস, JSON-লাইক</li>
          <li><strong>MySQL:</strong> স্কিমা-ভিত্তিক, রিলেশনাল</li>
        </ul>
      `,
    },
    {
      question: 'What is ObjectId in MongoDB? মঙ্গোডিবিতে ObjectId কি?',
      answer: `
        <p><strong>বাংলা:</strong> ObjectId হলো ইউনিক 12-বাইট আইডেন্টিফায়ার যা মঙ্গোডিবি ডিফল্ট _id হিসেবে দেয়।</p>
        <pre><code>
{ _id: ObjectId("507f1f77bcf86cd799439011") }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between find() and findOne()? find() এবং findOne() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> রেজাল্টের সংখ্যা।</p>
        <ul>
          <li><strong>find():</strong> একাধিক ডকুমেন্ট রিটার্ন করে</li>
          <li><strong>findOne():</strong> প্রথম ম্যাচিং ডকুমেন্ট রিটার্ন করে</li>
        </ul>
        <pre><code>
db.collection.find({ age: 25 });
db.collection.findOne({ age: 25 });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between insertOne() and insertMany()? insertOne() এবং insertMany() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা ইনসার্টের সংখ্যা।</p>
        <ul>
          <li><strong>insertOne():</strong> একটি ডকুমেন্ট ইনসার্ট করে</li>
          <li><strong>insertMany():</strong> একাধিক ডকুমেন্ট ইনসার্ট করে</li>
        </ul>
        <pre><code>
db.collection.insertOne({ name: "Alice" });
db.collection.insertMany([{ name: "Bob" }, { name: "Charlie" }]);
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between updateOne() and updateMany()? updateOne() এবং updateMany() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> আপডেটের স্কোপ।</p>
        <ul>
          <li><strong>updateOne():</strong> প্রথম ম্যাচিং ডকুমেন্ট আপডেট করে</li>
          <li><strong>updateMany():</strong> সব ম্যাচিং ডকুমেন্ট আপডেট করে</li>
        </ul>
        <pre><code>
db.collection.updateOne({ age: 25 }, { $set: { age: 26 } });
db.collection.updateMany({ age: 25 }, { $set: { age: 26 } });
        </code></pre>
      `,
    },
  ],
  intermediate: [
    {
      question:
        'What is the difference between deleteOne() and deleteMany()? deleteOne() এবং deleteMany() এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডিলিটের স্কোপ।</p>
        <ul>
          <li><strong>deleteOne():</strong> প্রথম ম্যাচিং ডকুমেন্ট ডিলিট করে</li>
          <li><strong>deleteMany():</strong> সব ম্যাচিং ডকুমেন্ট ডিলিট করে</li>
        </ul>
        <pre><code>
db.collection.deleteOne({ age: 25 });
db.collection.deleteMany({ age: 25 });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between $set and $unset in MongoDB? মঙ্গোডিবিতে $set এবং $unset এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ফিল্ড ম্যানেজমেন্ট।</p>
        <ul>
          <li><strong>$set:</strong> নতুন ভ্যালু সেট করে বা যোগ করে</li>
          <li><strong>$unset:</strong> ফিল্ড রিমুভ করে</li>
        </ul>
        <pre><code>
db.collection.updateOne({ name: "Alice" }, { $set: { age: 25 } });
db.collection.updateOne({ name: "Alice" }, { $unset: { age: 1 } });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between $push and $addToSet? $push এবং $addToSet এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> অ্যারে আপডেট।</p>
        <ul>
          <li><strong>$push:</strong> অ্যারেতে ভ্যালু যোগ করে (ডুপ্লিকেট অনুমোদন করে)</li>
          <li><strong>$addToSet:</strong> শুধুমাত্র ইউনিক হলে যোগ করে</li>
        </ul>
        <pre><code>
db.collection.updateOne({ name: "Alice" }, { $push: { hobbies: "reading" } });
db.collection.updateOne({ name: "Alice" }, { $addToSet: { hobbies: "reading" } });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between $inc and $mul? $inc এবং $mul এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> মান পরিবর্তন।</p>
        <ul>
          <li><strong>$inc:</strong> ভ্যালু ইনক্রিমেন্ট/ডিক্রিমেন্ট করে</li>
          <li><strong>$mul:</strong> ভ্যালু মাল্টিপ্লাই করে</li>
        </ul>
        <pre><code>
db.collection.updateOne({ name: "Alice" }, { $inc: { age: 1 } });
db.collection.updateOne({ name: "Alice" }, { $mul: { age: 2 } });
        </code></pre>
      `,
    },
    {
      question: 'What is an index in MongoDB? মঙ্গোডিবিতে ইন্ডেক্স কি?',
      answer: `
        <p><strong>বাংলা:</strong> ইন্ডেক্স কোয়েরি দ্রুত করে, ডিফল্ট _id ইন্ডেক্স থাকে।</p>
        <pre><code>
db.collection.createIndex({ name: 1 });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between single field and compound index? সিঙ্গল ফিল্ড এবং কম্পাউন্ড ইন্ডেক্স এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইন্ডেক্সের স্কোপ।</p>
        <ul>
          <li><strong>single field:</strong> একটি ফিল্ডের জন্য ইন্ডেক্স</li>
          <li><strong>compound index:</strong> একাধিক ফিল্ডের জন্য ইন্ডেক্স</li>
        </ul>
        <pre><code>
db.collection.createIndex({ name: 1 }); // Single
db.collection.createIndex({ name: 1, age: -1 }); // Compound
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between covered query and non-covered query? কভারড কোয়েরি এবং নন-কভারড কোয়েরি এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা অ্যাক্সেস।</p>
        <ul>
          <li><strong>covered query:</strong> শুধু ইন্ডেক্স থেকে ডেটা পড়ে</li>
          <li><strong>non-covered:</strong> ফুল ডকুমেন্ট পড়তে হয়</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between aggregation pipeline and mapReduce? অ্যাগ্রিগেশন পাইপলাইন এবং mapReduce এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> প্রসেসিং পদ্ধতি।</p>
        <ul>
          <li><strong>Aggregation pipeline:</strong> দ্রুত ও মডার্ন</li>
          <li><strong>mapReduce:</strong> পুরানো ও ধীর</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between $match and $project in aggregation? অ্যাগ্রিগেশনে $match এবং $project এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা ম্যানিপুলেশন।</p>
        <ul>
          <li><strong>$match:</strong> ফিল্টারিং করে</li>
          <li><strong>$project:</strong> নির্দিষ্ট ফিল্ড সিলেক্ট/মডিফাই করে</li>
        </ul>
        <pre><code>
{ $match: { age: { $gt: 20 } } }
{ $project: { name: 1, age: 1 } }
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between $group and $sort in aggregation? অ্যাগ্রিগেশনে $group এবং $sort এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা প্রসেসিং।</p>
        <ul>
          <li><strong>$group:</strong> ডেটা গ্রুপ করে (SQL GROUP BY-এর মতো)</li>
          <li><strong>$sort:</strong> ডেটা সর্ট করে</li>
        </ul>
        <pre><code>
{ $group: { _id: "$age", count: { $sum: 1 } } }
{ $sort: { count: -1 } }
        </code></pre>
      `,
    },
  ],
  advanced: [
    {
      question:
        'What is the difference between embedded documents and referenced documents? এম্বেডেড ডকুমেন্ট এবং রেফারেন্সড ডকুমেন্ট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা স্টোরেজ।</p>
        <ul>
          <li><strong>embedded:</strong> ডকুমেন্টের ভিতরে নেস্টেড ডেটা স্টোর</li>
          <li><strong>referenced:</strong> অন্য কালেকশনের রেফারেন্স (_id) স্টোর</li>
        </ul>
        <pre><code>
{ name: "Alice", address: { city: "Dhaka" } } // Embedded
{ name: "Alice", addressId: "507f1f77bcf86cd799439011" } // Referenced
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between populate() and lookup? populate() এবং lookup এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা জয়েন।</p>
        <ul>
          <li><strong>populate():</strong> Mongoose-এর ফিচার</li>
          <li><strong>$lookup:</strong> মঙ্গোডিবি অ্যাগ্রিগেশন জয়েনের মতো কাজ</li>
        </ul>
        <pre><code>
User.find().populate('addressId'); // Mongoose
{ $lookup: { from: "addresses", localField: "addressId", foreignField: "_id" } } // Aggregation
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between capped collection and normal collection? ক্যাপড কালেকশন এবং নরমাল কালেকশন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সাইজ লিমিট।</p>
        <ul>
          <li><strong>capped:</strong> ফিক্সড সাইজ, পুরানো ডেটা ওভাররাইট</li>
          <li><strong>normal:</strong> আনলিমিটেড সাইজ</li>
        </ul>
        <pre><code>
db.createCollection("cappedCollection", { capped: true, size: 100000 });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between replica set and sharding? রিপ্লিকা সেট এবং শার্ডিং এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ডেটা ম্যানেজমেন্ট।</p>
        <ul>
          <li><strong>replica set:</strong> ডেটা কপি মাল্টিপল সার্ভারে (হাই অ্যাভেইলেবিলিটি)</li>
          <li><strong>sharding:</strong> ডেটা ডিস্ট্রিবিউট মাল্টিপল সার্ভারে (স্কেলেবিলিটি)</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between primary and secondary replica? প্রাইমারি এবং সেকেন্ডারি রিপ্লিকা এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ভূমিকা।</p>
        <ul>
          <li><strong>primary:</strong> রাইট অপারেশন নেয়</li>
          <li><strong>secondary:</strong> রিড-অনলি কপি</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between $lookup and manual join in application code? $lookup এবং অ্যাপ্লিকেশন কোডে ম্যানুয়াল জয়েন এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> জয়েনের স্থান।</p>
        <ul>
          <li><strong>$lookup:</strong> ডিবি-লেভেল জয়েন</li>
          <li><strong>manual join:</strong> অ্যাপ-লেভেলে ডেটা কম্বাইন (ধীর হতে পারে)</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between MongoDB Atlas and local MongoDB? মঙ্গোডিবি অ্যাটলাস এবং লোকাল মঙ্গোডিবি এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> হোস্টিং।</p>
        <ul>
          <li><strong>Atlas:</strong> ক্লাউড-হোস্টেড মঙ্গোডিবি</li>
          <li><strong>local:</strong> নিজের সার্ভারে রান করা</li>
        </ul>
      `,
    },
    {
      question:
        'What is the difference between $regex and text search? $regex এবং টেক্সট সার্চ এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> সার্চ পদ্ধতি।</p>
        <ul>
          <li><strong>$regex:</strong> সিম্পল প্যাটার্ন ম্যাচ</li>
          <li><strong>text search:</strong> ফুল-টেক্সট ইন্ডেক্স ব্যবহার করে অপটিমাইজড সার্চ</li>
        </ul>
        <pre><code>
db.collection.find({ name: { $regex: /a/ } });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between upsert and normal update? upsert এবং নরমাল আপডেট এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> আপডেট বা ইনসার্ট।</p>
        <ul>
          <li><strong>upsert:</strong> যদি না থাকে তবে ইনসার্ট করে</li>
          <li><strong>normal update:</strong> শুধু এক্সিস্টিং ডকুমেন্ট আপডেট</li>
        </ul>
        <pre><code>
db.collection.updateOne({ name: "Alice" }, { $set: { age: 25 } }, { upsert: true });
        </code></pre>
      `,
    },
    {
      question:
        'What is the difference between Compass and Mongo shell? Compass এবং Mongo শেল এর মধ্যে পার্থক্য কী?',
      answer: `
        <p><strong>বাংলা:</strong> ইন্টারফেস।</p>
        <ul>
          <li><strong>Compass:</strong> GUI টুল</li>
          <li><strong>Mongo shell:</strong> CLI-ভিত্তিক টুল</li>
        </ul>
      `,
    },
  ],
};

export default mongodbData;
