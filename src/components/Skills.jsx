
import React from 'react';
import { motion } from 'framer-motion';
import { Code, ShieldCheck, Lock, FileText, Bug, Search, Activity, AlertCircle } from 'lucide-react';


const Skills = () => {
  const skills = [
    { name: 'Desarrollo Full Stack', icon: Code, description: 'HTML, CSS, JS, PHP, TS, SQL, Python, Java' },
    { name: 'Seguridad en Desarrollo', icon: ShieldCheck, description: 'CI/CD, análisis SAST/DAST, control de dependencias' },
    { name: 'Criptografía Aplicada', icon: Lock, description: 'TLS, RSA, SHA256, JWT, hashing, autenticación, cifrado' },
    { name: 'Normativas y Buenas Prácticas', icon: FileText, description: 'ISO/IEC 27001, NIST, GDPR, OWASP, CIS Controls' },
    { name: 'Ciber Seguridad', icon: Bug, description: 'Pentest, DDoS, DoS, WAF, SQLi, XSS' },
    { name: 'Análisis de Vulnerabilidades', icon: Search, description: 'Nessus, OpenVAS, Burp Suite, Nmap, Nikto, Metasploit' },
    { name: 'Monitoreo y Detección de Intrusos (SIEM)', icon: Activity, description: 'Splunk, Wazuh, ELK, logs, análisis forense básico' },
    { name: 'Respuesta ante Incidentes (IR)', icon: AlertCircle, description: 'Análisis, contención, erradicación, reporte técnico' },
  ];

  const technologies = [
    'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js', 'HTML', 'CSS',
    'SCSS', 'SASS', 'Redis', 'Flutter', 'Blade',
    'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Java', 'Kotlin', "PHP"
  ];

  return (
    <section id="habilidades" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Habilidades</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones excepcionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card glass-effect p-6 rounded-xl text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-4 shadow-lg hover:scale-105 transition-transform duration-300 text-foreground">
                <skill.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-white/20 text-sm font-medium text-foreground"

              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
