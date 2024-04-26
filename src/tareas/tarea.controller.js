import Tarea from "../tareas/tarea.model.js";

export const crearTarea = async (req, res) => {
    try {
        const { nombre, descripcion, fechaInicio, fechaFinal,
            estado, persona } = req.body;

        const tarea = new Tarea({
            nombre,
            descripcion,
            fechaInicio,
            fechaFinal,
            estado,
            persona
        });

        await tarea.save();

        return res.status(200).json({
            msg: "tarea has been added to database",
            nombre,
            fechaInicio,
            fechaFinal,
            estado,
            persona

        });
    } catch (e) {
        console.log(e);
        return res.status(500).send("No se pudo registrar la tarea");

    }
};

export const editarTarea = async (req, res) => {
    try {
        const { nombre, descripcion, fechaInicio, fechaFinal, estado, persona } = req.body;
        const { id } = req.params;
        const tarea = await Tarea.findById(id);

    

        if (nombre) tarea.nombre = nombre;
        if (descripcion) tarea.descripcion = descripcion;
        if (fechaInicio) tarea.fechaInicio = fechaInicio;
        if (fechaFinal) tarea.fechaFinal = fechaFinal;
        if (estado) tarea.estado = estado;
        if (persona) tarea.persona = persona;

        
        await tarea.save();

        return res.status(200).json({
            msg: "Tarea actualizada correctamente",
            tarea
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send("No se pudo actualizar la tarea");
    }
};

export const mostrarTodasLasTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();

        if (!tareas || tareas.length === 0) {
            return res.status(404).json({ msg: "No se encontraron tareas" });
        }

        return res.status(200).json({
            msg: "Lista de todas las tareas",
            tareas
        });
    } catch (error) {

        console.error(error);
        return res.status(500).send("Error al obtener las tareas");
    }
};


export const cambiarEstadoTarea = async (req, res) => {
    try {
        const { id } = req.params; 
        const tarea = await Tarea.findById(id); 

        if (!tarea) {
            return res.status(404).json({ msg: "Tarea no encontrada" });
        }

      
        tarea.estado = tarea.estado === 'Pendiente' ? 'Completado' : 'Pendiente';


        await tarea.save();

        return res.status(200).json({
            msg: `El estado de la tarea ha sido cambiado a ${tarea.estado}`,
            tarea
        });
    } catch (error) {

        console.error(error);
        return res.status(500).send("No se pudo cambiar el estado de la tarea");
    }
};

export const deleteTarea = async(req, res) => {
    try {
        const {id, creador} = req.body;
        const tarea = await Tarea.findById(id);

        await Tarea.findByIdAndDelete(id);
        res.status(200).json({
            msg: 'The homework was deleted successfully.',
        });
    } catch (error) {
        
    }
}