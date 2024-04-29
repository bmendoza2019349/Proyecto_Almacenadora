
import mongoose from "mongoose";

const TareaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    fechaInicio: {
        type: Date,
        required: true
    },
    fechaFinal: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        required: true,
        default: "SIN INICIAR"
    },
    persona: {
        type: String,
        required: true
    }
})

export default mongoose.model('Tarea', TareaSchema)
