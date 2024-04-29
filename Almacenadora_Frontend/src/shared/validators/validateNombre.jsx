export const validateNombre = (nombre) => {
    return nombre.length >= 2 && nombre.length <= 20
}

export const nombreValidateMessage = 'El nombre debe de tener entre 2 y 20 caracteres'