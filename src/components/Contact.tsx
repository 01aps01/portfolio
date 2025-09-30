import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-slate-900' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp', color: 'hover:text-green-600' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden" ref={ref}>
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/20 to-transparent"
        style={{
          clipPath: "polygon(0 50%, 10% 40%, 20% 50%, 30% 45%, 40% 55%, 50% 50%, 60% 45%, 70% 50%, 80% 40%, 90% 50%, 100% 45%, 100% 100%, 0 100%)"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-300 mb-16 text-lg"
        >
          Let's connect and build something amazing together
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-semibold">your.email@example.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-semibold">+91 XXXXX XXXXX</p>
                </div>
              </motion.a>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-slate-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400 resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-slate-400">
            © 2025 Akhand Pratap Singh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
