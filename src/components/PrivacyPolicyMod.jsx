import React from 'react';

const PrivacyPolicyMod = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={handleBackdropClick}>
            <div className="max-h-[90vh] overflow-y-auto w-full max-w-3xl bg-neutral-900 text-gray-200 p-8 rounded-2xl shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-4">Política de Privacidad</h2>

                <p className="mb-4">
                    <strong>Última actualización: Julio 2025</strong>
                </p>

                <p className="mb-4">
                    En <strong>oscarochoa.pro</strong>, la privacidad y seguridad de nuestros visitantes es una prioridad. Esta política describe de forma detallada cómo recolectamos, almacenamos, utilizamos, protegemos y compartimos los datos personales de los usuarios que interactúan con nuestro sitio web y nuestros servicios digitales.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsable del Tratamiento</h2>
                <p className="mb-4">
                    Nombre completo: Oscar Fernando Ochoa Tamayo<br />
                    Correo electrónico: contacto@oscarochoa.pro<br />
                    Dirección: Cartago, Valle del Cauca, Colombia<br />
                    Teléfono: +57 3016201571
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Información que Recolectamos</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Nombre completo</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Información del navegador y dispositivo (IP, sistema operativo, navegador, resolución, etc.)</li>
                    <li>Datos de navegación (páginas visitadas, tiempo de permanencia, clics, comportamiento en el sitio)</li>
                    <li>Geolocalización aproximada</li>
                    <li>Preferencias del usuario, si se recogen mediante cookies o formularios</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Finalidades del Tratamiento</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Atender solicitudes de contacto y prestación de servicios profesionales.</li>
                    <li>Mejorar la experiencia del usuario en el sitio web.</li>
                    <li>Enviar contenidos o comunicaciones informativas o promocionales (solo con consentimiento previo).</li>
                    <li>Cumplir con obligaciones contractuales y legales.</li>
                    <li>Analizar métricas para mejorar funcionalidades y desempeño del sitio.</li>
                    <li>Prevenir fraudes o accesos no autorizados.</li>
                    <li>Ofrecer contenido personalizado o basado en intereses.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Base Legal del Tratamiento</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Consentimiento del titular de los datos</li>
                    <li>Cumplimiento de obligaciones contractuales</li>
                    <li>Obligaciones legales en Colombia</li>
                    <li>Interés legítimo del responsable, en la medida en que no vulneren los derechos del titular</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Transferencia de Datos a Terceros</h2>
                <p className="mb-4">
                    Los datos personales no serán vendidos ni cedidos a terceros sin autorización expresa, salvo:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Proveedores de servicios tecnológicos (hosting, email, analítica web, etc.), quienes actuarán bajo acuerdos de confidencialidad.</li>
                    <li>Autoridades administrativas o judiciales, en cumplimiento de la ley.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Seguridad de la Información</h2>
                <p className="mb-4">
                    Se aplican medidas técnicas, administrativas y organizativas para garantizar la seguridad, confidencialidad e integridad de la información, tales como:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Certificados SSL</li>
                    <li>Control de acceso y encriptación</li>
                    <li>Copias de seguridad periódicas</li>
                    <li>Monitoreo y auditorías técnicas</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Derechos del Titular</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Conocer los datos personales que están siendo tratados</li>
                    <li>Solicitar corrección, actualización o supresión</li>
                    <li>Revocar el consentimiento en cualquier momento</li>
                    <li>Solicitar prueba de la autorización otorgada</li>
                    <li>Ser informado sobre el uso de sus datos</li>
                </ul>
                <p className="mb-4">
                    Puede ejercer estos derechos escribiendo a: <strong>contacto@oscarochoa.pro</strong>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Uso de Cookies</h2>
                <p className="mb-4">
                    Este sitio puede usar cookies propias o de terceros para:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Analítica de navegación</li>
                    <li>Recordar preferencias del usuario</li>
                    <li>Publicidad basada en intereses (si se implementa en el futuro)</li>
                </ul>
                <p className="mb-4">
                    Al navegar por este sitio, usted acepta el uso de cookies. Puede deshabilitarlas desde la configuración de su navegador.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Conservación de los Datos</h2>
                <p className="mb-4">
                    Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades establecidas y conforme a las exigencias legales aplicables.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Modificaciones a Esta Política</h2>
                <p className="mb-4">
                    Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en esta misma sección y entrarán en vigor una vez actualizada la fecha de vigencia.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicyMod;
