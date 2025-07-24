'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Database, BookOpen, Zap } from 'lucide-react';
import websocketData from '../data/websocketData';
import ProgressTracker from '../Components/ProgressTracker';

// ✅ Tabs Component
const LevelTabs = ({ activeLevel, onLevelChange }) => {
  const levels = [
    { id: 'basic', label: 'Basic', icon: BookOpen },
    { id: 'intermediate', label: 'Intermediate', icon: Database },
    { id: 'advanced', label: 'Advanced', icon: Zap },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {levels.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onLevelChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            activeLevel === id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
};

// ✅ SearchBar Component
const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="relative mb-6">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <input
        type="text"
        placeholder="Search questions... / প্রশ্ন খুঁজুন..."
        value={searchTerm}
        onChange={e => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

// ✅ QuestionCard Component
const QuestionCard = ({
  question,
  answer,
  index,
  questionId,
  toggleQuestion,
  isCompleted,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left"
        >
          <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
            {question}
          </h3>
        </button>
        <button
          onClick={() => toggleQuestion(questionId)}
          className="text-gray-400 hover:text-green-500 transition-colors"
        >
          {isCompleted ? (
            <BookOpen size={20} className="text-green-500" />
          ) : (
            <BookOpen size={20} />
          )}
        </button>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="text-gray-300 prose prose-invert max-w-none mt-4"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </motion.div>
  );
};

// ✅ Main WebSocket Page
export default function WebsocketPage() {
  const [activeLevel, setActiveLevel] = useState('basic');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(
    websocketData[activeLevel] || []
  );
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  const STORAGE_KEY = 'progress-WebSocket';

  // ✅ Load completed state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCompletedQuestions(new Set(JSON.parse(saved)));
    }
  }, []);

  // ✅ Search handler
  const handleSearch = term => {
    setSearchTerm(term);
    if (!term) {
      setFilteredQuestions(websocketData[activeLevel] || []);
      return;
    }
    const filtered = (websocketData[activeLevel] || []).filter(
      item =>
        item.question.toLowerCase().includes(term.toLowerCase()) ||
        item.answer.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  // ✅ Level Change Handler
  const handleLevelChange = level => {
    setActiveLevel(level);
    setSearchTerm('');
    setFilteredQuestions(websocketData[level] || []);
  };

  // ✅ Toggle Completed Question
  const toggleQuestion = questionId => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(questionId)) {
      newCompleted.delete(questionId);
    } else {
      newCompleted.add(questionId);
    }
    setCompletedQuestions(newCompleted);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...newCompleted]));
  };

  const totalQuestions =
    (websocketData.basic?.length || 0) +
    (websocketData.intermediate?.length || 0) +
    (websocketData.advanced?.length || 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* ✅ Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Database className="text-green-500" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              {websocketData.title}
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            {websocketData.titleB}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {websocketData.description}
          </p>
        </motion.div>

        {/* ✅ Tabs + Search + Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LevelTabs
            activeLevel={activeLevel}
            onLevelChange={handleLevelChange}
          />
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <ProgressTracker
            topic="WebSocket"
            totalQuestions={totalQuestions}
            completedQuestions={completedQuestions}
            setCompletedQuestions={setCompletedQuestions}
          />
        </motion.div>

        {/* ✅ Questions List */}
        <motion.div
          key={activeLevel}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => {
              const questionId = `${activeLevel}-${index}`;
              return (
                <QuestionCard
                  key={questionId}
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  questionId={questionId}
                  toggleQuestion={toggleQuestion}
                  isCompleted={completedQuestions.has(questionId)}
                />
              );
            })
          ) : (
            <div className="text-center py-12">
              <Search className="mx-auto text-gray-600 mb-4" size={48} />
              <p className="text-gray-400 text-lg">
                No questions found matching {searchTerm}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
