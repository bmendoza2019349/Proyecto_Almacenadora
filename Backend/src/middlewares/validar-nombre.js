import Tarea from '../tareas/tarea.model.js'

export const validarNombreUnicoTarea = async (req, res, next) => {
    const { nombre } = req.body;
    try {
        const tareaExistente = await Tarea.findOne({ nombre });
        if (tareaExistente) {
            return res.status(400).json({ msg: `Ya existe una tarea con este nombre: ${tareaExistente.nombre}` });
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error del servidor' });
    }
};