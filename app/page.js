'use client';
import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Server,
  ToolCase,
  Star,
  Trophy,
  Target,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

const technologies = [
  {
    name: 'HTML & CSS',
    nameB: 'এইচটিএমএল ও সিএসএস',
    icon: Globe,
    href: '/html-css',
    color: 'from-orange-500 to-red-500',
    description:
      'Master web fundamentals with semantic markup and modern styling techniques',
    questions: '40+ Questions',
  },
  {
    name: 'JavaScript',
    nameB: 'জাভাস্ক্রিপ্ট',
    icon: Code,
    href: '/javascript',
    color: 'from-yellow-500 to-orange-500',
    description:
      'Deep dive into ES6+, closures, promises, and advanced JavaScript concepts',
    questions: '50+ Questions',
  },
  {
    name: 'React.js',
    nameB: 'রিয়েক্ট',
    icon: Cpu,
    href: '/react',
    color: 'from-blue-500 to-cyan-500',
    description:
      'Component lifecycle, hooks, state management, and performance optimization',
    questions: '45+ Questions',
  },
  {
    name: 'Next.js',
    nameB: 'নেক্সট.জেএস',
    icon: Globe,
    href: '/nextjs',
    color: 'from-gray-700 to-gray-900',
    description:
      'SSR, SSG, API routes, and full-stack Next.js application development',
    questions: '35+ Questions',
  },
  {
    name: 'Node.js',
    nameB: 'নোড.জেএস',
    icon: Server,
    href: '/nodejs',
    color: 'from-green-500 to-emerald-500',
    description:
      'Backend development, Express.js, middleware, and server-side architecture',
    questions: '40+ Questions',
  },
  {
    name: 'MongoDB',
    nameB: 'মংগোডিবি',
    icon: Database,
    href: '/mongodb',
    color: 'from-green-600 to-green-800',
    description:
      'NoSQL database design, aggregation, indexing, and performance tuning',
    questions: '30+ Questions',
  },
  {
    name: 'Authentication',
    nameB: 'প্রমাণীকরণ',
    icon: Lock,
    href: '/authentication',
    color: 'from-purple-500 to-indigo-500',
    description: 'JWT, OAuth, session management, and security best practices',
    questions: '25+ Questions',
  },
  {
    name: 'MERN Stack Tools',
    nameB: 'মার্ন স্ট্যাক টুলস',
    icon: ToolCase,
    href: '/mern-tools',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Essential tools, libraries, and utilities for modern MERN development',
    questions: '35+ Questions',
  },
  {
    name: 'Socket.io',
    nameB: 'সকেট.আইও',
    icon: MessageSquare,
    href: '/socketio',
    color: 'from-teal-500 to-cyan-600',
    description:
      'Real-time communication, WebSockets, and live application features',
    questions: '20+ Questions',
  },
  {
    name: 'Redux',
    nameB: 'রিডাক্স',
    icon: Layers,
    href: '/redux',
    color: 'from-purple-500 to-indigo-500',
    description:
      'State management patterns, Redux Toolkit, and application architecture',
    questions: '30+ Questions',
  },
];

const features = [
  {
    icon: Target,
    title: 'Comprehensive Coverage',
    titleB: 'সম্পূর্ণ কভারেজ',
    description:
      'Every topic covered from basics to advanced concepts with real-world examples',
  },
  {
    icon: Star,
    title: 'Industry Relevant',
    titleB: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড',
    description:
      'Questions based on actual interview experiences from top tech companies',
  },
  {
    icon: Trophy,
    title: 'Career Ready',
    titleB: 'ক্যারিয়ার প্রস্তুতি',
    description:
      'Build confidence with structured learning path and practical insights',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 120,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 leading-tight">
              MERN Stack
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interview Mastery
            </h2>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl font-bangla font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6"
          >
            আপনার স্বপ্নের চাকরির জন্য সম্পূর্ণ প্রস্তুতি
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive interview preparation covering every aspect of the
            MERN stack. From fundamental concepts to advanced architecture
            patterns -
            <span className="text-blue-400 font-semibold">
              {' '}
              master the skills that matter
            </span>{' '}
            in today's competitive job market.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">350+</div>
              <div className="text-gray-400">Interview Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">10</div>
              <div className="text-gray-400">Core Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">3</div>
              <div className="text-gray-400">Difficulty Levels</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <feature.icon className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm font-bangla text-gray-400 mb-4">
                {feature.titleB}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-white mb-4"
          >
            Choose Your Learning Path
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center text-gray-400 mb-12 text-lg"
          >
            Select any technology to start your interview preparation journey
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { type: 'spring', stiffness: 300, damping: 25 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={tech.href}>
                  <div
                    className={`bg-gradient-to-br ${tech.color} p-[2px] rounded-2xl group cursor-pointer overflow-hidden`}
                  >
                    <div className="bg-gray-900 rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-gray-800">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>

                      <div className="relative z-10">
                        <tech.icon className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-all duration-300" />

                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {tech.name}
                          </h3>
                          <span className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                            {tech.questions}
                          </span>
                        </div>

                        <p className="text-base font-bangla text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                          {tech.nameB}
                        </p>

                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                          {tech.description}
                        </p>

                        {/* Hover Arrow */}
                        <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                          <span className="text-sm font-medium">
                            Start Learning
                          </span>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Levels Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">
              Structured Learning Approach
            </h3>
            <p className="text-xl font-bangla text-gray-300 mb-6">
              প্রতিটি বিষয়ে তিনটি লেভেলে সাজানো প্রশ্ন ও উত্তর
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Progress systematically from basic concepts to advanced topics
              with carefully curated questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-2xl font-bold text-green-400">
                  Basic Level
                </h4>
              </div>
              <p className="text-lg font-bangla text-gray-300 mb-3">
                মৌলিক ধারণা ও প্রয়োজনীয় ভিত্তি
              </p>
              <p className="text-gray-400 leading-relaxed">
                Foundation concepts, syntax, and fundamental principles that
                every developer should know
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-yellow-400 mr-3" />
                <h4 className="text-2xl font-bold text-yellow-400">
                  Intermediate
                </h4>
              </div>
              <p className="text-lg font-bangla text-gray-300 mb-3">
                মধ্যম পর্যায়ের কনসেপ্ট ও প্রয়োগ
              </p>
              <p className="text-gray-400 leading-relaxed">
                Advanced features, best practices, and real-world application
                scenarios
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-8 rounded-2xl border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-red-400 mr-3" />
                <h4 className="text-2xl font-bold text-red-400">Advanced</h4>
              </div>
              <p className="text-lg font-bangla text-gray-300 mb-3">
                উন্নত ও জটিল বিষয়াবলী
              </p>
              <p className="text-gray-400 leading-relaxed">
                Complex patterns, performance optimization, and enterprise-level
                considerations
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Ace Your Next Interview?
          </h3>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of developers who have successfully landed their
            dream jobs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
