import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Server, Code2, Rocket } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Brain,
      title: 'AI/ML Development',
      description: 'Exploring machine learning algorithms, neural networks, and building intelligent systems. Passionate about natural language processing and computer vision.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Building robust and scalable backend systems using Node.js, Express, and MongoDB. Focus on RESTful APIs and database optimization.',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Code2,
      title: 'Full-Stack Projects',
      description: 'Creating end-to-end web applications with modern frameworks like React and integrating with various backend services and databases.',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Rocket,
      title: 'Software Engineering',
      description: 'Strong foundation in data structures, algorithms, and problem-solving. Committed to writing clean, maintainable, and efficient code.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16"
        >
          Expertise & Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mb-6`}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
