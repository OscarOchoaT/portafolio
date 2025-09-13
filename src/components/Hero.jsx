
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Github, Instagram, Linkedin} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ scrollToSection, onSocialClick }) => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/OscarOchoaT' },
    { icon: Instagram, href: 'https://www.instagram.com/devoscarochoa' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/oscarochoat' },
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        style={{ y: heroY }}
        className="text-center z-10 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/30 pulse-glow floating-animation"
            alt="Oscar Ochoa desarrollador web"
           src="/profile.jpg" />
        </motion.div>

        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
        >
          Elevo tu presencia <span className="gradient-text">Digital</span>
        </motion.h1>

        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
        >
          Soy Oscar, Desarrollador Full Stack especializado en soluciones de alto rendimiento, diseño centrado en el usuario y tecnologías de vanguardia para marcas que exigen calidad superior.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('servicios')}
            className="bg-gradient-to-r from-primary to-accent hover:from-blue-700 hover:to-cyan-500 text-foreground px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Servicios
          </Button>
          <Button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-black to-zinc-800 hover:from-zinc-800 hover:to-zinc-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contactar
          </Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {socialLinks.map((social, index) => (
            <motion.button
              key={index}
              onClick={() => onSocialClick(social.href)}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full glass-effect hover:bg-white/20 transition-all duration-300"
            >
              <social.icon size={24} />
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent to-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-200"></div>
      </div>

    </section>
  );
};

export default Hero;
