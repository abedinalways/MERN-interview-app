'use client';
import { useState } from 'react';
import QuestionCard from './QuestionCard';
import ProgressTracker from './ProgressTracker';


export default function TechSection({ data, topic }) {
  const [searchTerm, setSearchTerm] = useState('');
  const totalQuestions =
    (data.basic?.length || 0) +
    (data.intermediate?.length || 0) +
    (data.advanced?.length || 0);

  const renderQuestions = (completedQuestions, toggleQuestion) => {
    const filteredQuestions = {
      basic: data.basic?.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      intermediate: data.intermediate?.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      advanced: data.advanced?.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };

    return (
      <div className="space-y-8">
        <div className="relative w-full mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search questions... / প্রশ্ন খুঁজুন..."
            className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
          />
        </div>
        {['basic', 'intermediate', 'advanced'].map(
          level =>
            filteredQuestions[level]?.length > 0 && (
              <div
                key={level}
                className={`p-6 rounded-lg shadow-md ${getLevelStyle(level)}`}
              >
                <div className={getLevelHeaderStyle(level)}>
                  <h2 className="text-2xl font-bold text-white capitalize">
                    {level} Level /{' '}
                    <span className="font-bangla">
                      {level === 'basic'
                        ? 'মৌলিক'
                        : level === 'intermediate'
                        ? 'মধ্যম'
                        : 'উন্নত'}{' '}
                      স্তর
                    </span>
                  </h2>
                </div>
                <div className="mt-4 space-y-4">
                  {filteredQuestions[level].map((item, index) => {
                    const questionId = `${level}-${index}`;
                    return (
                      <QuestionCard
                        key={questionId}
                        question={item.question}
                        answer={item.answer}
                        level={level}
                        index={index}
                        questionId={questionId}
                        toggleQuestion={toggleQuestion}
                        isCompleted={completedQuestions.has(questionId)}
                      />
                    );
                  })}
                </div>
              </div>
            )
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
        {data.title}
      </h1>
      <h2 className="text-2xl font-bangla text-gray-300 text-center mb-6">
        {data.titleB}
      </h2>
      <p className="text-gray-400 text-center mb-8">{data.description}</p>
      <ProgressTracker topic={topic} totalQuestions={totalQuestions}>
        {renderQuestions}
      </ProgressTracker>
    </div>
  );
}

function getLevelStyle(level) {
  switch (level) {
    case 'basic':
      return 'bg-gray-800 bg-opacity-10 backdrop-blur-md border border-green-500';
    case 'intermediate':
      return 'bg-gray-800 border border-blue-500 shadow-lg';
    case 'advanced':
      return 'bg-gray-800 bg-opacity-80 backdrop-blur-md border border-purple-500';
  }
}

function getLevelHeaderStyle(level) {
  switch (level) {
    case 'basic':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-t-lg';
    case 'intermediate':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-t-lg';
    case 'advanced':
      return 'bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-t-lg';
  }
}
