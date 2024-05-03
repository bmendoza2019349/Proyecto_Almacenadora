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
        const {id} = req.params;
        const {  nombre, descripcion, fechaInicio, fechaFinal, persona } = req.body;
        const tarea = await Tarea.findById(id);

    

        if (nombre) tarea.nombre = nombre;
        if (descripcion) tarea.descripcion = descripcion;
        if (fechaInicio) tarea.fechaInicio = fechaInicio;
        if (fechaFinal) tarea.fechaFinal = fechaFinal;
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

export const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({ activityStatus: { $ne: false } });

        if (!tareas || tareas.length === 0) {
            return res.status(404).json({ msg: "No se encontraron tareas" });
        }

        return res.status(200).json({
            msg: "Lista de todas las tareas activas",
            tareas
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error al obtener las tareas");
    }
};


export const cambiarEstadoTarea = async (req, res) => {
    try {
        const {id} = req.params;
        const { estado } = req.body;

        const tarea = await Tarea.findById(id);


        tarea.estado = estado.toUpperCase();
        const tareaEditada = await tarea.save();

        return res.status(200).json({
            msg: `El estado de la tarea ha sido cambiado a ${tareaEditada.estado}`,
            tarea: tareaEditada
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("No se pudo cambiar el estado de la tarea");
    }
};

export const deleteTarea = async(req, res) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findById(id);

        tarea.activityStatus = false;
        
        await tarea.save();

        return res.status(200).json({
            msg: "Tarea eliminada correctamente",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send("No se pudo eliminar la tarea");
    }
};