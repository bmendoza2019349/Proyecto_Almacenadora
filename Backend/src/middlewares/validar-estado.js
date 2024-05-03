export const validarEstado = async (req, res, next) => {
    const { estado } = req.body;
    const estadosValidos = ["completo", "incompleto"];

    if (!estadosValidos.includes(estado.toLowerCase())) { // Convertir el estado a minúsculas antes de verificar
        return res.status(400).json({ msg: 'Estado inválido.' });
    }

    next(); 
};
