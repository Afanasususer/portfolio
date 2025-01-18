import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  period: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    organization: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description: 'Leading development of enterprise MERN applications and mentoring junior developers.',
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Digital Innovations Ltd.',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple web applications using the MERN stack.',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science',
    organization: 'Tech University',
    period: '2015 - 2019',
    description: 'Specialized in Web Development and Software Engineering.',
  },
  {
    type: 'certification',
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    period: '2020',
    description: 'Professional certification for cloud development.',
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

export const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

      <div className="space-y-12">
        {timeline.map((item, index) => {
          const Icon = iconMap[item.type];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2"></div>

              {/* Content */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-indigo-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{item.period}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};