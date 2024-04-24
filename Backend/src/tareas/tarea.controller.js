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