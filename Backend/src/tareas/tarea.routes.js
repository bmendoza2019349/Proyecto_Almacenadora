import { Router } from "express";
import { check } from "express-validator";
import { buscarTareaPorId } from "../helpers/db-validators.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validateCreator } from "../middlewares/validate-creator.js";
import {
  cambiarEstadoTarea,
  crearTarea,
  deleteTarea,
  editarTarea,
  mostrarTodasLasTareas,
} from "./tarea.controller.js";

const router = Router();

router.post(
  "/agregar",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("descripcion", "La descripcion es obligatorio").not().isEmpty(),
    check("fechaInicio", "La fecha de Inicio es obligatorio").not().isEmpty(),
    check("fechaFinal", "La fecha Final es obligatorio").not().isEmpty(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("persona", "El nombre completo de la persona es obligatorio")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  crearTarea
);

router.put(
  "/editar/:id",
  [
    check("id", "Id no valido").isMongoId(),
    check("id").custom(buscarTareaPorId),
    validarCampos,
  ],
  editarTarea
);

router.get("/listar", [], mostrarTodasLasTareas);

router.put(
  "/editarEstado/:id",
  [
    check("id", "Id no valido").isMongoId(),
    check("estado", "El estado es obligatorio").not().isEmpty(),
    check("persona", "El nombre completo de la persona es obligatorio")
      .not()
      .isEmpty(),
  ],
  cambiarEstadoTarea
);

router.delete(
  "/eliminar",
  [
    check("id", "El id es obligatorio").not().isEmpty(),
    check("creador", "El creador es obligatorio").not().isEmpty(),
    validateCreator,
  ],
  deleteTarea
);

export default router;
