import Tarea from "../tareas/tarea.model.js"; 

export const buscarTareaPorId = async (tareaId) => {
    try {
        const tarea = await Tarea.findById(tareaId);

        if (!tarea) {
            throw new Error("Tarea no encontrada");
        }
        return tarea;
    } catch (error) {
        throw new Error("Error al buscar la tarea");
    }
};