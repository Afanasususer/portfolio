import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Server,
  Database,
  Code,
  Globe,
  Download,
  MapPin,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillBar } from './components/SkillBar';
import { ProjectFilter } from './components/ProjectFilter';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { icon: <Code size={24} />, name: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Server size={24} />, name: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { icon: <Database size={24} />, name: 'Database', items: ['MongoDB', 'Mongoose', 'Redis'] },
    { icon: <Globe size={24} />, name: 'Other', items: ['Git', 'Docker', 'AWS'] },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
      technologies: ['MERN Stack', 'Socket.io', 'JWT'],
      category: 'Full Stack',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      technologies: ['React', 'Express', 'MongoDB', 'Charts.js'],
      category: 'Frontend',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 160 }}
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">MERN Stack Developer</h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">Building modern web applications with passion</p>
          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-indigo-200 transition-colors"
            >
              <Mail size={32} />
            </motion.a>
          </div>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              <Download size={20} />
              Resume
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800"
                  alt="Developer"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Full Stack Developer specializing in the MERN stack. With a strong
                  foundation in both frontend and backend development, I create scalable and efficient
                  web applications that solve real-world problems. My experience includes working with
                  modern technologies and best practices in web development.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">Core Technologies</h3>
                  <div className="space-y-4">
                    <SkillBar skill="MongoDB" level={90} />
                    <SkillBar skill="Express.js" level={85} />
                    <SkillBar skill="React.js" level={95} />
                    <SkillBar skill="Node.js" level={88} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Skills</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index *  0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-indigo-600">{skill.icon}</div>
                  <h3 className="text-xl font-semibold dark:text-white">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Experience</h2>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Featured Projects</h2>
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">Get in Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through the form or my social media profiles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <Mail size={20} className="text-indigo-600" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                  <MapPin size={20} className="text-indigo-600" />
                  <span>Your Location</span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}

export default App;