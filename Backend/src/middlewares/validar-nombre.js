import Tarea from '../tareas/tarea.model.js'

export const validarNombreUnicoTarea = async (req, res, next) => {
    const { nombre } = req.body;
    try {
        const tareaExistenteActiva = await Tarea.findOne({ nombre, activityStatus: true });
        if (tareaExistenteActiva) {
            return res.status(400).json({ msg: `Ya existe una tarea activa con este nombre: ${tareaExistenteActiva.nombre}` });
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error del servidor' });
    }
};