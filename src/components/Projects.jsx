import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Plataforma E-commerce',
      description: 'Tiendas virtuales modernas, seguras y optimizadas para vender desde el primer día.',
      img: '/mockup-commerce.webp',
      tech: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portafolio Web',
      description: 'Perfecto para creativos, freelancers o marcas personales que buscan destacar con estilo.',
      img: '/mockup-portfolio.webp',
      tech: ['React', 'Framer Motion', 'CSS'],
    },
    {
      title: 'Landing Page',
      description: 'Ideal para campañas de alto impacto o presentación de productos/servicios. Diseño enfocado en conversiones.',
      img: '/mockup-landpage.webp',
      tech: ['Vue.js', 'Tailwind', 'SCSS'],
    }
  ];

  return (
    <section id="servicios" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Servicios Más Solicitados</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Lo más solicitado por marcas y profesionales que invierten en una presencia digital de alto nivel.
            ¿Tu proyecto requiere algo diferente? Estoy listo para crearlo contigo, contactame.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card rounded-xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-48 object-cover"
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                 src={project.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-500/20 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
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