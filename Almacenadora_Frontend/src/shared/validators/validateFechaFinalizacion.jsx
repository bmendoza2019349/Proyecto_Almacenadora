export const validateFechaFinal = (fechaFinal) => {
    const regex = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}$/;
    return regex.test(fechaFinal);
}

export const fechaFinalValidateMessage = 'La fecha y hora deben estar en formato YYYY-MM-DD HH:MM:SS';