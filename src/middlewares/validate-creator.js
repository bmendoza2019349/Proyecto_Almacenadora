import Tarea from "../tareas/tarea.model.js";

export const validateCreator = async (req, res, next) => {
    const { id, creador } = req.body;
    try {
        const tarea = await Tarea.findById(id);

        if (!tarea) {
            return res.status(404).json({ msg: 'Task not found.' });
        }
        if (tarea.persona !== creador) {
            return res.status(403).json({ msg: 'You are not authorized to delete this task.' });
        }
        next(); // Move to the next middleware if validation passes
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Server error.' });
    };
};