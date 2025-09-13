
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
          >
            {/* Glow */}
            <div className="absolute -inset-10 z-0 bg-gradient-to-br from-blue-700/40 to-cyan-500/30 blur-3xl opacity-30 rounded-full" />

            {/* Imagen */}
            <img
                className="relative z-10 rounded-2xl shadow-2xl w-full transition-transform duration-500 group-hover:scale-105 group-hover:shadow-3xl border border-white/10 filter brightness-110 contrast-105"
                alt="Oscar Ochoa desarrollador web"
                src="/coding.webp"
            />
          </motion.div>




          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4">Consultor en Desarrollo Full Stack y Ciberseguridad</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Con más de 6 años de experiencia, ayudo a empresas y startups a construir soluciones digitales seguras,
              escalables y alineadas con sus objetivos de negocio. Mi enfoque combina desarrollo web avanzado con prácticas sólidas
              de ciberseguridad, garantizando rendimiento, estabilidad y protección de datos.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              He liderado proyectos complejos para sectores exigentes como tecnología, educacion y salud, donde la precisión
              y la excelencia técnica no son opcionales. Trabajo únicamente con clientes que valoran la calidad y están comprometidos
              con soluciones de alto impacto.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-blue-300">Proyectos Completados</h4>
                <p className="text-2xl font-bold">50+</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-purple-300">Años de Experiencia</h4>
                <p className="text-2xl font-bold">6+</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
