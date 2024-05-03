import { Router } from "express";
import { check } from "express-validator";
import { crearTarea, editarTarea, cambiarEstadoTarea, getTareas, deleteTarea  } from "./tarea.controller.js"
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarEstado } from "../middlewares/validar-estado.js"
import { validarNombreUnicoTarea } from "../middlewares/validar-nombre.js";
import {buscarTareaPorId } from '../helpers/db-validators.js'
import { validateCreator } from "../middlewares/validate-creator.js";
import { validarFecha } from "../middlewares/validar-fecha.js";

const router = Router();

router.post(
    "/agregar",
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion es obligatorio').not().isEmpty(),
        check('fechaInicio', 'La fecha de Inicio es obligatorio').not().isEmpty(),
        check('fechaFinal', 'La fecha Final es obligatorio').not().isEmpty(),
        check('persona', 'El nombre completo de la persona es obligatorio').not().isEmpty(),
       // validarFecha,
      //  validarNombreUnicoTarea,
        validarCampos,
        validarEstado
    ], crearTarea);

    router.put(
        "/editar/:id",
        [
            check("id", "Id no valido").isMongoId(),
            check('id').custom(buscarTareaPorId),
            validarCampos,
        ], 
        editarTarea
    );

    router.get(
        "/listar",
        [
        ],getTareas
    );
    
    router.put(
        "/editarEstado/:id",  
        [   
            check("id", "Id no valido").isMongoId(),
            check('id').custom(buscarTareaPorId),
            check('estado', "Ingrese el estado").not().isEmpty(),
            validarEstado,
        ], cambiarEstadoTarea
    );

    router.delete(
        "/eliminar/:id",
        [
            check('id', 'El id es obligatorio').not().isEmpty(),
          //  check('creador', 'El creador es obligatorio').not().isEmpty(),
         // validateCreator
        ],deleteTarea);

export default router;