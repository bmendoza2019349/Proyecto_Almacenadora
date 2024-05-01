import Tarea from '../tareas/tarea.model.js';

export const validarFecha = async (req, res, next) => {
    const { nombre, fechaInicio, fechaFinal } = req.body;
    
    const fechaActual = new Date();

    try {
        if (new Date(fechaFinal) < fechaActual) {
            return res.status(400).json({ msg: `La fecha de finalizacion debe ser posterior a la fecha actual, No se puede viajar en el tiempo amigo` });
        }

        if (new Date(fechaInicio) < fechaActual) {
            return res.status(400).json({ msg: `La fecha de inicio debe ser posterior a la fecha actual, No se puede viajar en el tiempo amigo` });
        }

        

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: 'Error del servidor' });
    }
};