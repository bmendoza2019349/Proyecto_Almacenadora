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

export const eliminarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByIdAndDelete(id);

        if (!tarea) {
            return res.status(404).json({ msg: "Tarea no encontrada" });
        }

        return res.status(200).json({ msg: "Tarea eliminada correctamente" });
    } catch (e) {
        console.log(e);
        return res.status(500).send("No se pudo eliminar la tarea");
    }
};