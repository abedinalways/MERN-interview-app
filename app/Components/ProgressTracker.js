'use client';
import { useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgressTracker({
  topic,
  totalQuestions,
  completedQuestions,
  setCompletedQuestions,
}) {
  useEffect(() => {
    const saved = localStorage.getItem(`progress-${topic}`);
    if (saved) {
      setCompletedQuestions(new Set(JSON.parse(saved)));
    }
  }, [topic, setCompletedQuestions]);

  const toggleQuestion = questionId => {
    const newCompleted = new Set(completedQuestions);
    if (newCompleted.has(questionId)) {
      newCompleted.delete(questionId);
    } else {
      newCompleted.add(questionId);
    }
    setCompletedQuestions(newCompleted);
    localStorage.setItem(
      `progress-${topic}`,
      JSON.stringify([...newCompleted])
    );
  };

  const progressPercentage = (completedQuestions.size / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-white">Progress / অগ্রগতি</h3>
        <span className="text-sm text-gray-400">
          {completedQuestions.size}/{totalQuestions} Completed
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">
        {progressPercentage.toFixed(0)}% Complete
      </p>
    </div>
  );
}
