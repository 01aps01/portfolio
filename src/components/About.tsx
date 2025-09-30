import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'Python', 'JavaScript', 'AI/ML', 'MATLAB',
    'Backend Development', 'DSA', 'Node.js', 'React',
    'MongoDB', 'Express', 'Firebase'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Education</h3>
            <p className="text-slate-700">B.Tech in Electrical & Electronics Engineering</p>
            <p className="text-slate-600 text-sm mt-2">JSS Academy of Technical Education, Noida</p>
            <p className="text-slate-500 text-sm">2023 - 2027</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Skills</h3>
            <p className="text-slate-700">Full-stack Development (Backend Focus)</p>
            <p className="text-slate-600 text-sm mt-2">AI/ML, Python, JavaScript, DSA</p>
            <p className="text-slate-500 text-sm">MATLAB, Node.js, React</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Experience</h3>
            <p className="text-slate-700">Eager Learner & Fresher</p>
            <p className="text-slate-600 text-sm mt-2">Ready to contribute to innovative projects</p>
            <p className="text-slate-500 text-sm">Open to opportunities</p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
