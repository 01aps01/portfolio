import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Google Drive Clone',
      description: 'A full-featured cloud storage application with file upload, download, and management capabilities. Built with a focus on backend architecture and scalable storage solutions.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Firebase Storage', 'REST API'],
      gradient: 'from-blue-500 to-cyan-500',
      objectives: [
        'Implement secure file upload and storage',
        'Create RESTful API for file operations',
        'Integrate cloud storage with Firebase',
        'Build scalable backend architecture'
      ]
    },
    {
      title: 'Astrea - Space Biology Engine',
      description: 'An innovative web application that leverages AI to summarize and visualize 608 NASA bioscience publications. Features a dynamic dashboard powered by LLM and RAG technology.',
      technologies: ['Python', 'LLM', 'RAG', 'React', 'Tailwind CSS', 'JavaScript', 'Jina Embeddings'],
      gradient: 'from-purple-500 to-pink-500',
      objectives: [
        'Process and embed NASA bioscience research papers',
        'Implement RAG for intelligent document retrieval',
        'Create interactive data visualization dashboard',
        'Build AI-powered search and summarization'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                  Project {index + 1}
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>

                <p className="text-slate-700 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Objectives:</h4>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, objIndex) => (
                      <li key={objIndex} className="flex items-start">
                        <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 mr-3`}></span>
                        <span className="text-slate-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Github size={20} />
                    View Code
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
