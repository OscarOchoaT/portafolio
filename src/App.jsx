import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import PrivacyPolicyMod from '@/components/PrivacyPolicyMod';
import TratamentDataMod from '@/components/TratamentDataMod';
import GDPRMod from '@/components/GDPRMod';
import CookieBanner from "@/components/CookieBanner.jsx"; //

function App() {
  const { toast } = useToast();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNotImplemented = () => {

    toast({
      title: "🚧 Esta funcionalidad aún no está implementada",
      description: "¡Pero no te preocupes! Lo haré pronto. 🚀"
    });
  };

  const handleLink = (href) => {
    if (!href) {
      handleNotImplemented();
    } else {
      window.open(href, '_blank'); // abre en una nueva pestaña
    }
  };

  const [showPrivacidad, setShowPrivacidad] = useState(false);
  const [showTratamiento, setShowTratamiento] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);

  const handleOpenPrivacidad = () => setShowPrivacidad(true);
  const handleOpenTratamiento = () => setShowTratamiento(true);
  const handleOpenGDPR = () => setShowGDPR(true);
  const handleCloseModals = () => {
    setShowPrivacidad(false);
    setShowTratamiento(false);
    setShowGDPR(false);
  };


  return (
      <>
        <Helmet>
          <title>Oscar Ochoa | Desarrollador</title>
          <meta
              name="description"
              content="Portfolio profesional de desarrollador de software especializado en aplicaciones web modernas y soluciones tecnológicas innovadoras."
          />


        </Helmet>

        <div className="min-h-screen">
          <Routes>
            <Route
                path="/"
                element={
                  <>
                    <Header scrollToSection={scrollToSection}
                            onOpenPrivacidad={handleOpenPrivacidad}
                            onOpenTratamiento={handleOpenTratamiento}
                            onOpenGDPR={handleOpenGDPR}
                    />
                    <main>
                      <Hero scrollToSection={scrollToSection} onSocialClick={handleLink} />
                      <About />
                      <Skills />
                      <Projects/>
                      <Contact onOpenPrivacidad={() => setShowPrivacidad(true)}
                               onOpenTratamiento={() => setShowTratamiento(true)}
                               onOpenGDPR={() => setShowGDPR(true)}
                      />
                    </main>
                    <Footer onSocialClick={handleLink}
                            onOpenPrivacidad={() => setShowPrivacidad(true)}
                            onOpenTratamiento={() => setShowTratamiento(true)}
                            onOpenGDPR={() => setShowGDPR(true)}
                    />

                    <PrivacyPolicyMod isOpen={showPrivacidad} onClose={handleCloseModals} />
                    <TratamentDataMod isOpen={showTratamiento} onClose={handleCloseModals} />
                    <GDPRMod isOpen={showGDPR} onClose={handleCloseModals} />

                    <CookieBanner onOpenPrivacidad={() => setShowPrivacidad(true)}
                                  onOpenTratamiento={() => setShowTratamiento(true)}
                                  onOpenGDPR={() => setShowGDPR(true)}
                    />
                  </>


                }
            />
          </Routes>
        </div>
      </>
  );
}

export default App;
