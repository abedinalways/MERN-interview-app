'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';

export default function QuestionCard({
  question,
  answer,
  level,
  index,
  questionId,
  toggleQuestion,
  isCompleted,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const levelColors = {
    basic: 'border-green-500 bg-green-900/20',
    intermediate: 'border-yellow-500 bg-yellow-900/20',
    advanced: 'border-red-500 bg-red-900/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border rounded-lg p-4 ${levelColors[level]} card-hover`}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 text-left flex items-center justify-between"
        >
          <h3 className="text-lg font-semibold text-white">{question}</h3>
          {isOpen ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </button>
        <button
          onClick={() => toggleQuestion(questionId)}
          className="ml-4 flex items-center space-x-2 text-gray-300 hover:text-white"
          title={isCompleted ? 'Mark as unread' : 'Mark as read'}
        >
          <CheckCircle
            className={`w-5 h-5 ${
              isCompleted ? 'text-green-500' : 'text-gray-400'
            }`}
          />
          <span className="text-sm font-bangla">
            {isCompleted
              ? 'অপঠিত হিসেবে চিহ্নিত করুন'
              : 'পঠিত হিসেবে চিহ্নিত করুন'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <div
              className="text-gray-300 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
