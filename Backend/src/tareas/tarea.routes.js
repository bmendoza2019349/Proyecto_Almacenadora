import { Router } from "express";
import { check } from "express-validator";
import { crearTarea, deleteTarea } from "./tarea.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validateCreator } from "../middlewares/validate-creator.js";

const router = Router();

router.post(
    "/agregar",
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
        check('fechaInicio', 'La fecha de Inicio es obligatorio').not().isEmpty(),
        check('fechaFinal', 'La fecha Final es obligatorio').not().isEmpty(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('persona', 'El nombre completo de la persona es obligatorio').not().isEmpty(),
        validarCampos,
    ], crearTarea);

router.delete(
    "/eliminar",
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('creador', 'El creador es obligatorio').not().isEmpty(),
        validateCreator
    ],deleteTarea);

export default router;