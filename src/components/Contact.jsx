import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const Contact = ({ onOpenPrivacidad, onOpenTratamiento, onOpenGDPR }) => {
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!aceptaPoliticas) {
      setError('Debes aceptar el tratamiento de datos personales para enviar el mensaje.');
      return;
    }

    setError('');
    setStatus('Enviando...');

    emailjs
        .sendForm(
            'service_lvofcvl',
            'template_twye0w8',
            formRef.current,
            'v4PCnKIBFlMnNlKRd'
        )
        .then(() => {
          setStatus('✅ ¡Mensaje enviado con éxito!');
          formRef.current.reset();
          setAceptaPoliticas(false);
        })
        .catch((error) => {
          console.error(error);
          setStatus('❌ Ocurrió un error al enviar. Intenta nuevamente.');
        });
  };

  return (
      <section id="contacto" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Si estás listo para invertir en una presencia digital profesional y diferenciada, estaré encantado de conocer tu visión.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Mail className="mr-4 text-blue-400" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">oscarfdo2004@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Phone className="mr-4 text-blue-400" size={24} />
                  <div>
                    <h3 className="font-semibold">Teléfono</h3>
                    <p className="text-gray-300">+57 3016201571</p>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <MapPin className="mr-4 text-blue-400" size={24} />
                  <div>
                    <h3 className="font-semibold">Ubicación</h3>
                    <p className="text-gray-300">Cartago, Colombia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-xl"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                      type="text"
                      name="from_name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="Tu nombre"
                      required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Numero de Contacto</label>
                  <input
                      type="text"
                      name="telefono"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="+Indicativo y número"
                      required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                  ></textarea>
                </div>

                {/* Checkbox de autorización */}
                <div className="flex items-start space-x-3">
                  <input
                      type="checkbox"
                      id="aceptaPoliticas"
                      checked={aceptaPoliticas}
                      onChange={(e) => setAceptaPoliticas(e.target.checked)}
                      className="mt-1 accent-blue-500"
                  />
                  <label htmlFor="aceptaPoliticas" className="text-sm text-gray-300 leading-snug">
                    He leído y autorizo el tratamiento de mis datos personales conforme a la{' '}
                    <a onClick={onOpenTratamiento} className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 cursor-pointer italic">
                      Política de Tratamiento de Datos
                    </a>{' '}
                    y la{' '}
                    <a onClick={onOpenPrivacidad} className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 cursor-pointer italic">
                      Política de Privacidad
                    </a>.{' '}
                    En caso de ser ciudadano de la Unión Europea, acepto además el cumplimiento del{' '}
                    <a onClick={onOpenGDPR} className="text-blue-400 underline hover:text-blue-300 transition-colors duration-200 cursor-pointer italic">
                      Reglamento General de Protección de Datos (GDPR).
                    </a>
                  </label>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                {status && <p className="text-green-400 text-sm font-medium">{status}</p>}

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:brightness-110 text-foreground py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
