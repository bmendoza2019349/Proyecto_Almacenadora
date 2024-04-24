import { Router } from "express";
import { check } from "express-validator";
import { crearTarea, eliminarTarea  } from "./tarea.controller.js"
import { validarCampos } from "../middlewares/validar-campos.js";
import { buscarTareaPorId } from '../helpers/db-validators.js';

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
        "/eliminar/:id",
        [
            check("id", "Id no valido").isMongoId(),
            check('id').custom(buscarTareaPorId),
            validarCampos,
        ], 
        eliminarTarea
    );

export default router;