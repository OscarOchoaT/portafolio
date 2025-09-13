import React from 'react';

const TratamentDataMod = ({ isOpen, onClose }) => {
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

                <h2 className="text-2xl font-bold mb-4">Política de Tratamiento de Datos Personales</h2>
                <p className="mb-4">
                    <strong>Última actualización: Julio 2025</strong>
                </p>
                <p className="mb-4">
                    La presente política se expide conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013, y demás normas que regulan la protección de datos personales en Colombia. Tiene como finalidad garantizar los derechos de los titulares y establecer los criterios para el tratamiento de los datos recolectados.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Responsable del Tratamiento</h2>
                <p className="mb-4">
                    Nombre: Oscar Fernando Ochoa Tamayo<br />
                    Correo: contacto@oscarochoa.pro<br />
                    Dirección: Cartago, Valle del Cauca<br />
                    Teléfono: +57 3016201571
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Ámbito de Aplicación</h2>
                <p className="mb-4">
                    Esta política aplica a toda recolección, almacenamiento, uso, circulación, supresión o cualquier otra forma de tratamiento de datos personales que realice Oscar Ochoa, tanto en medios físicos como digitales, incluyendo el sitio web oscarochoa.pro.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Tipos de Datos Tratados</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Datos de contacto (nombre, correo, teléfono)</li>
                    <li>Datos técnicos (IP, navegador, dispositivo)</li>
                    <li>Datos suministrados voluntariamente a través de formularios</li>
                    <li>Datos de navegación recogidos mediante cookies</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Finalidades del Tratamiento</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Dar respuesta a solicitudes y consultas.</li>
                    <li>Contactar para agendar reuniones, propuestas o asesorías.</li>
                    <li>Enviar comunicaciones informativas, técnicas o promocionales.</li>
                    <li>Cumplir obligaciones contractuales y legales.</li>
                    <li>Hacer análisis estadísticos del uso del sitio.</li>
                    <li>Garantizar la seguridad del sitio y prevenir accesos no autorizados.</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Principios Aplicables</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Legalidad: Tratamiento conforme a la ley</li>
                    <li>Finalidad: Uso exclusivo para los fines autorizados</li>
                    <li>Libertad: Consentimiento libre, previo e informado</li>
                    <li>Veracidad: Datos veraces y actualizados</li>
                    <li>Transparencia: El titular puede consultar en todo momento</li>
                    <li>Seguridad: Protección adecuada contra riesgos</li>
                    <li>Confidencialidad: Uso restringido y controlado</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Derechos de los Titulares</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Acceder a sus datos personales</li>
                    <li>Solicitar corrección o actualización</li>
                    <li>Solicitar la supresión de los datos</li>
                    <li>Revocar la autorización para el tratamiento</li>
                    <li>Ser informados sobre el uso de los datos</li>
                </ul>
                <p className="mb-4">
                    Para ejercer estos derechos, deberá enviar una solicitud a: <strong>contacto@oscarochoa.pro</strong>
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Procedimiento para el Ejercicio de Derechos</h2>
                <p className="mb-4">
                    Toda solicitud debe contener:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Nombre completo del titular</li>
                    <li>Petición concreta (acceso, actualización, eliminación, etc.)</li>
                    <li>Pruebas de identidad (cuando aplique)</li>
                    <li>Medio de contacto para la respuesta</li>
                </ul>
                <p className="mb-4">
                    La solicitud será atendida en un término máximo de 15 días hábiles.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">8. Tratamiento de Datos Sensibles o de Menores</h2>
                <p className="mb-4">
                    No se recolectan datos sensibles ni información de menores de edad. Si por error se llegara a recolectar, será suprimida de inmediato.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">9. Transferencia Internacional de Datos</h2>
                <p className="mb-4">
                    Aunque no se realiza actualmente, si en el futuro se llegara a transferir información a otros países, se garantizará el cumplimiento de estándares adecuados de protección de datos, conforme a lo dispuesto en la legislación colombiana.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">10. Registro Nacional de Bases de Datos</h2>
                <p className="mb-4">
                    El responsable se compromete a registrar las bases de datos, si es requerido, ante la Superintendencia de Industria y Comercio, conforme al marco legal colombiano.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">11. Vigencia</h2>
                <p className="mb-4">
                    La presente política rige a partir de su publicación y tendrá una duración indefinida mientras persista el tratamiento de los datos personales por parte del responsable.
                </p>
            </div>
        </div>
    );
};

export default TratamentDataMod;
