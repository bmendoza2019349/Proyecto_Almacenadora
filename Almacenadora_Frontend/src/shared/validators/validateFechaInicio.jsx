export const validateFechaInicio = (fechaInicio) => {
    const regex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
    return regex.test(fechaInicio);
}

export const fechaInicioValidateMessage = 'La fecha y hora deben estar en formato YYYY-MM-DD HH:MM:SS';