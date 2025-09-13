import React from 'react';
import {Github, Instagram, Linkedin} from 'lucide-react';

const Footer = ({ onSocialClick, onOpenPrivacidad, onOpenTratamiento, onOpenGDPR }) => {
  return (
      <footer className="bg-black/40 py-8 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2025 Oscar Developer. Todos los derechos reservados.
            </p>

            <div className="flex justify-center space-x-6 mt-4">
              {[
                { icon: Github, href: 'https://github.com/OscarOchoaT' },
                { icon: Instagram, href: 'https://www.instagram.com/devoscarochoa' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/oscarochoat' },
              ].map((social, index) => (
                  <button
                      key={index}
                      onClick={() => onSocialClick(social.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <social.icon size={20} />
                  </button>
              ))}
            </div>

            <div className="mt-6 space-x-4">
              <button
                  onClick={onOpenPrivacidad}
                  className="hover:text-white underline transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <span>|</span>
              <button
                  onClick={onOpenTratamiento}
                  className="hover:text-white underline transition-colors duration-300"
              >
                Política de Tratamiento de Datos
              </button>
              <span>|</span>
              <button
                  onClick={onOpenGDPR}
                  className="hover:text-white underline transition-colors duration-300"
              >
                GDPR
              </button>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
