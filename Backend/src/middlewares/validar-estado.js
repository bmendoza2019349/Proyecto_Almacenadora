
export const validarEstado = async (req, res, next) => {
    const { estado } = req.body;
    const estadosValidos = ["sin iniciar", "completado", "en progreso"];

    if (!estadosValidos.includes(estado.toLowerCase())) {
        return res.status(400).json({ msg: 'Estado inválido.' });
    }

    next(); 
};