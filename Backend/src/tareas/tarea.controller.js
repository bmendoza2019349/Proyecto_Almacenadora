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
