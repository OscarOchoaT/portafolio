import React, { useEffect, useState } from "react";

export default function CookieBanner({onOpenPrivacidad, onOpenTratamiento, onOpenGDPR }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem("cookiesAccepted");
        if (!accepted) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 bg-neutral-900 text-gray-200 p-4 rounded-xl shadow-lg w-full max-w-sm animate-fadeIn">

        <p className="text-sm mb-2">
                Usamos cookies para mejorar tu experiencia de navegación y analizar el uso del sitio. Al continuar, aceptas nuestra{" "}
                <a
                    onClick={onOpenPrivacidad}
                    className="hover:text-white underline transition-colors duration-300 cursor-pointer"
                >
                    Política de Privacidad
                </a>
                <span> | </span>
                <a
                    onClick={onOpenTratamiento}
                    className="hover:text-white underline transition-colors duration-300 cursor-pointer"
                >
                    Política de Tratamiento de Datos
                </a>
                <span> | </span>
                <a
                    onClick={onOpenGDPR}
                    className="hover:text-white underline transition-colors duration-300 cursor-pointer"
                >
                    GDPR
                </a>.
            </p>
            <div className="text-right">
                <button
                    onClick={handleAccept}
                    className="bg-white text-black px-4 py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
                >
                    Aceptar
                </button>
            </div>
        </div>
    );
}
