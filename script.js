// =========================================================================
// CONFIGURACIÓN DEL NEGOCIO (PRECIO COMPLETO A \$5.000)
// =========================================================================
const PRECIO_TAMAL = 5000; 
const CANTIDAD_TAMALES = 1; // Cantidad base para el mensaje


// =========================================================================
// VINCULACIÓN AUTOMÁTICA CON TU ENLACE ACTUAL
// =========================================================================
function configurarEnlaceWhatsApp() {
    // Tu número de celular con el código de país de Colombia (57)
    const numeroTelefono = "573209465919"; 
    
    // Calculamos el valor de la venta
    const totalPagar = CANTIDAD_TAMALES * PRECIO_TAMAL;
    
    // Redactamos el mensaje automático para tu negocio
    const mensaje = `Hola, me gustaría ordenar ${CANTIDAD_TAMALES} tamal(es). El total es de $${totalPagar.toLocaleString()}. ¡Muchas gracias!`;
    
    // Codificamos el texto para que sea compatible con los navegadores web
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Buscamos el enlace <a> tal cual como está en tu HTML actual (línea 12)
    const botonElemento = document.querySelector('a');
    
    // Si el archivo encuentra el enlace, le inyecta el mensaje automáticamente
    if (botonElemento) {
        botonElemento.href = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
        
        // Hace que WhatsApp se abra en una pestaña nueva sin cerrar tu página
        botonElemento.target = "_blank"; 
    }
}


// Ejecuta la vinculación automáticamente en cuanto se carga la página
configurarEnlaceWhatsApp();