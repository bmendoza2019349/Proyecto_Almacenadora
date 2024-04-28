export const validateEstado = (estado) => {
    // Array que contiene los estados válidos
    const estadosValidos = ['sin iniciar', 'en progreso', 'completado'];
    // Verificar si el estado proporcionado está en el array de estados válidos
    return estadosValidos.includes(estado.toLowerCase());
}

export const estadoValidateMessage = 'El estado debe ser "sin iniciar", "en progreso" o "completado"';