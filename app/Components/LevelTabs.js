'use client';
import { motion } from 'framer-motion';

const levels = [
  { id: 'basic', name: 'Basic', nameB: 'প্রাথমিক', color: 'green' },
  {
    id: 'intermediate',
    name: 'Intermediate',
    nameB: 'মাধ্যমিক',
    color: 'yellow',
  },
  { id: 'advanced', name: 'Advanced', nameB: 'কঠিন', color: 'red' },
];

export default function LevelTabs({ activeLevel, onLevelChange }) {
  return (
    <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
      {levels.map(level => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 relative ${
            activeLevel === level.id
              ? `bg-${level.color}-600 text-white shadow-lg`
              : 'text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          <div className="text-center">
            <div>{level.name}</div>
            <div className="text-xs font-bangla">{level.nameB}</div>
          </div>
          {activeLevel === level.id && (
            <motion.div
              layoutId="activeTab"
              className={`absolute inset-0 bg-${level.color}-600 rounded-lg`}
              style={{ zIndex: -1 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
