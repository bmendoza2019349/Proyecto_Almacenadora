import { useState } from "react";
import { Input } from "../Input";
import { TextField } from '@material-ui/core';
import {
    
    validateEstado,
    estadoValidateMessage,
    validateDescription,
    descriptionValidateMessage,
    validateNombre,
    nombreValidateMessage,
    validateFechaInicio,
    fechaInicioValidateMessage,
    validateFechaFinal,
    fechaFinalValidateMessage
} from "../../shared/validators";

import { useAdd } from "../../shared/hooks/useAdd";
import DateTimeInput from "../DateTimeInput";

export const Agregar = ({ switchAddHandler }) => {
    const { agregar, isLoading } = useAdd();

    const [formState, setFormState] = useState({
        nombre: {
            value: "",
            isValid: false,
            showError: false,
        },
        descripcion: {
            value: "",
            isValid: false,
            showError: false,
        },
        fechaInicio: {
            value: "",
            isValid: false,
            showError: false,
        },
        fechaFinal: {
            value: "",
            isValid: false,
            showError: false,
        },
        estado: {
            value: "",
            isValid: false,
            showError: false,
        },
        persona: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };
    
    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "nombre":
                isValid = validateNombre(value);
                break;
            case "descripcion":
                isValid = validateDescription(value);
                break;
            case "fechaInicio":
                isValid = validateFechaInicio(value);
                break;
            case "fechaFinal":
                isValid = validateFechaFinal(value);
                break;
            case "estado":
                isValid = validateEstado(value);
                break;
            case "persona":
                isValid = validateNombre(value);
                break;

            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));
    }

    const handleAgregar = (event) => {
        event.preventDefault();
        agregar(formState.nombre.value,
            formState.descripcion.value,
            formState.fechaInicio.value,
            formState.fechaFinal.value,
            formState.estado.value,
            formState.persona.value,);
    };

    const isSubmitButtonDisable = isLoading ||
    !formState.nombre.isValid ||
    !formState.descripcion.isValid ||
    !formState.fechaInicio.isValid ||
    !formState.fechaFinal.isValid ||
    !formState.estado.isValid ||
    !formState.persona.isValid;

    return (
        <div className="mini-ventana">
            <form>
                {/* Input para Nombre */}
                <Input
                    field="nombre"
                    label="Nombre"
                    value={formState.nombre.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.nombre.showError}
                    validationMessage={nombreValidateMessage}
                />
                {/* Input para Descripcion */}
                <Input
                    field="descripcion"
                    label="Descripción"
                    value={formState.descripcion.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.descripcion.showError}
                    validationMessage={descriptionValidateMessage}
                />
                {/* DateTimeInput para Fecha de Inicio */}
                <DateTimeInput
                    field="fechaInicio"
                    label="Fecha y hora de Inicio"
                    value={formState.fechaInicio.value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.fechaInicio.showError}
                    validationMessage={fechaInicioValidateMessage}
                />
                {/* DateTimeInput para Fecha Final */}
                <DateTimeInput
                    field="fechaFinal"
                    label="Fecha y hora Final"
                    value={formState.fechaFinal.value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.fechaFinal.showError}
                    validationMessage={fechaFinalValidateMessage}
                />
                {/* Select para Estado */}
                <select
                    value={formState.estado.value}
                    onChange={(e) => handleInputValueChange(e.target.value, "estado")}
                    onBlur={() => handleInputValidationOnBlur(formState.estado.value, "estado")}
                >
                    <option value="">Selecciona una opción</option>
                    <option value="sin iniciar">Sin Iniciar</option>
                    <option value="en progreso">En Progreso</option>
                    <option value="completado">Completado</option>
                </select>
                {/* Input para Persona */}
                <Input
                    field="persona"
                    label="Persona"
                    value={formState.persona.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.persona.showError}
                />
                {/* Botón de AgregarTarea */}
                <button onClick={handleAgregar} disabled={isSubmitButtonDisable}>
                    Agregar Tarea
                </button>
            </form>
        </div>
    )
}