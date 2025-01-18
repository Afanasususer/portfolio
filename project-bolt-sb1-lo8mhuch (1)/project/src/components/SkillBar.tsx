import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
  color?: string;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, level, color = 'indigo' }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-${color}-600 rounded-full`}
        />
      </div>
    </div>
  );
};