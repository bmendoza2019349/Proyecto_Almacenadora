import { Router } from "express";
import { check } from "express-validator";
import { crearTarea, cambiarEstadoTarea, mostrarTodasLasTareas } from "./tarea.controller.js"
import { validarCampos,  } from "../middlewares/validar-campos.js";

const router = Router();

router.post(
    "/agregar",
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
        check('fechaInicio', 'La fecha de Inicio es obligatorio').not().isEmpty(),
        check('fechaFinal', 'La fecha Final es obligatorio').not().isEmpty(),
        check('persona', 'El nombre completo de la persona es obligatorio').not().isEmpty(),
        validarCampos,
    ], crearTarea
);

router.get(
    "/listar",
    [
    ],mostrarTodasLasTareas
);

router.put(
    "/editarEstado/:id",
    [], cambiarEstadoTarea
);

export default router;