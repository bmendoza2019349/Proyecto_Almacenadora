import { Router } from "express";
import { check } from "express-validator";
<<<<<<< HEAD
import { crearTarea, editarTarea } from "./tarea.controller.js"
import { validarCampos } from "../middlewares/validar-campos.js";
import { buscarTareaPorId } from '../helpers/db-validators.js'
import { crearTarea, editarTarea, cambiarEstadoTarea, mostrarTodasLasTareas, deleteTarea } from "./tarea.controller.js"
=======
import { crearTarea, editarTarea, cambiarEstadoTarea, mostrarTodasLasTareas, deleteTarea  } from "./tarea.controller.js"
>>>>>>> developer
import { validarCampos } from "../middlewares/validar-campos.js";
import { buscarTareaPorId } from '../helpers/db-validators.js'
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

<<<<<<< HEAD
router.put(
    "/editar/:id",
    [
        check("id", "Id no valido").isMongoId(),
        check('id').custom(buscarTareaPorId),
        validarCampos,
    ],
    editarTarea
);
=======
    router.put(
        "/editar/:id",
        [
            check("id", "Id no valido").isMongoId(),
            check('id').custom(buscarTareaPorId),
            validarCampos,
        ], 
        editarTarea
    );
>>>>>>> developer


router.get(
    "/listar",
    [
    ], mostrarTodasLasTareas
);

router.put(
    "/editarEstado/:id",
    [
        check("id", "Id no valido").isMongoId(),
        check('estado', 'El estado es obligatorio').not().isEmpty(),
        check('persona', 'El nombre completo de la persona es obligatorio').not().isEmpty(),
    ], cambiarEstadoTarea
);

router.delete(
    "/eliminar",
    [
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('creador', 'El creador es obligatorio').not().isEmpty(),
        validateCreator
    ], deleteTarea);

export default router;