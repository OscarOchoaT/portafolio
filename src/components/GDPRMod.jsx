import React from 'react';

const GDPRMod = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        // Si haces clic en el fondo (no en el contenido), se cierra
        if (e.target === e.currentTarget) {
            onClose();
        }
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

                <h2 className="text-2xl font-bold mb-4">Política de Privacidad – Reglamento General de Protección de Datos (GDPR)</h2>
                <p className="mb-4">
                    <strong>Última actualización: Julio 2025</strong>
                </p>
                <p className="mb-4">
                    Esta política aplica exclusivamente al tratamiento de datos personales de usuarios ubicados en países de la Unión Europea (UE) o del Espacio Económico Europeo (EEE), conforme al Reglamento General de Protección de Datos (Reglamento UE 2016/679, en adelante "GDPR").
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsable del Tratamiento</h2>
                <p className="mb-4">
                    Nombre: Oscar Fernando Ochoa Tamayo<br />
                    Correo: contacto@oscarochoa.pro<br />
                    Dirección: Cartago, Valle del Cauca, Colombia<br />
                    Teléfono: +57 3016201571
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Datos Personales Recolectados</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Nombre completo</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Dirección IP</li>
                    <li>Datos del navegador y del dispositivo</li>
                    <li>Ubicación geográfica aproximada</li>
                    <li>Preferencias de navegación</li>
                    <li>Información proporcionada a través de formularios</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Finalidad del Tratamiento</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Responder a solicitudes realizadas a través del sitio web</li>
                    <li>Gestionar comunicaciones informativas y promocionales (con consentimiento previo)</li>
                    <li>Mejorar la experiencia del usuario</li>
                    <li>Cumplir obligaciones legales y contractuales</li>
                    <li>Realizar análisis estadísticos de uso del sitio</li>
                    <li>Garantizar la seguridad del sitio y prevenir accesos no autorizados</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Base Legal para el Tratamiento</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Consentimiento explícito del titular</li>
                    <li>Ejecución de un contrato o medidas precontractuales</li>
                    <li>Cumplimiento de una obligación legal</li>
                    <li>Interés legítimo, siempre que no prevalezcan los derechos del usuario</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Derechos del Usuario</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Acceso a sus datos personales</li>
                    <li>Rectificación de datos inexactos o incompletos</li>
                    <li>Supresión de sus datos (“derecho al olvido”)</li>
                    <li>Oposición al tratamiento</li>
                    <li>Limitación del tratamiento</li>
                    <li>Portabilidad de sus datos</li>
                    <li>Retiro del consentimiento en cualquier momento</li>
                    <li>Presentar una reclamación ante una autoridad de control</li>
                </ul>
                <p className="mb-4">
                    Puede ejercer sus derechos escribiendo a: <strong>contacto@oscarochoa.pro</strong>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Transferencia Internacional de Datos</h2>
                <p className="mb-4">
                    Dado que el sitio y sus servicios están operados desde Colombia, los datos personales pueden ser transferidos fuera del EEE. Estas transferencias se realizan aplicando medidas de seguridad adecuadas, tales como cláusulas contractuales estándar aprobadas por la Comisión Europea.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Retención de Datos</h2>
                <p className="mb-4">
                    Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con los fines del tratamiento, o hasta que el titular solicite su supresión.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Cookies y Tecnologías Similares</h2>
                <p className="mb-4">
                    Este sitio puede utilizar cookies y tecnologías similares con fines de analítica, personalización o marketing. Al ingresar desde la UE, se presentará un sistema de consentimiento activo para permitir o rechazar su uso. Las cookies no esenciales solo se activarán con su aprobación explícita.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Seguridad de la Información</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Certificado SSL</li>
                    <li>Encriptación de datos</li>
                    <li>Control de acceso y monitoreo</li>
                    <li>Copias de seguridad regulares</li>
                    <li>Evaluación periódica de vulnerabilidades</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Modificaciones a Esta Política</h2>
                <p className="mb-4">
                    Nos reservamos el derecho de modificar esta política para adaptarnos a cambios normativos o técnicos. Cualquier cambio será publicado en esta misma sección y, si corresponde, notificado a los usuarios.
                </p>
            </div>
        </div>

    );
};

export default GDPRMod;
