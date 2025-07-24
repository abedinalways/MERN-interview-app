'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Database, BookOpen, Zap } from 'lucide-react';
import ProgressTracker from '../Components/ProgressTracker';

import htmlcssData from '../data/htmlcssData';


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

export default function htmlcssPage() {
  const [activeLevel, setActiveLevel] = useState('basic');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(
    htmlcssData[activeLevel]
  );
  const [completedQuestions, setCompletedQuestions] = useState(new Set());

  useEffect(() => {
    const saved = localStorage.getItem(`progress-${'htmlcss'}`);
    if (saved) {
      setCompletedQuestions(new Set(JSON.parse(saved)));
    }
  }, []);

  const handleSearch = term => {
    setSearchTerm(term);
    if (!term) {
      setFilteredQuestions(htmlcssData[activeLevel]);
      return;
    }
    const filtered = htmlcssData[activeLevel].filter(
      item =>
        item.question.toLowerCase().includes(term.toLowerCase()) ||
        item.answer.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  const handleLevelChange = level => {
    setActiveLevel(level);
    setSearchTerm('');
    setFilteredQuestions(htmlcssData[level]);
  };

  const toggleQuestion = questionId => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(questionId)) {
      newCompleted.delete(questionId);
    } else {
      newCompleted.add(questionId);
    }
    setCompletedQuestions(newCompleted);
    localStorage.setItem(
      `progress-${'htmlcss'}`,
      JSON.stringify([...newCompleted])
    );
  };

  const totalQuestions =
    (htmlcssData.basic?.length || 0) +
    (htmlcssData.intermediate?.length || 0) +
    (htmlcssData.advanced?.length || 0);
  const progressPercentage = (completedQuestions.size / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Database className="text-green-500" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              {htmlcssData.title}
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
            {htmlcssData.titleB}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {htmlcssData.description}
          </p>
        </motion.div>

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
            topic="react"
            totalQuestions={totalQuestions}
            completedQuestions={completedQuestions}
            setCompletedQuestions={setCompletedQuestions}
          />
        </motion.div>

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
                No questions found matching "{searchTerm}"
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
