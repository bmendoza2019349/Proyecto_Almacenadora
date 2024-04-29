import React from 'react';
import { TextField } from '@material-ui/core';

const DateTimeInput = ({ field, label, value, onChangeHandler, onBlurHandler, showErrorMessage, validationMessage }) => {
    // Función para manejar el cambio en el campo de fecha y hora
    const handleDateTimeChange = (event) => {
        // Pasar el valor del campo al manejador de cambio
        onChangeHandler(event.target.value, field);
    };

    return (
        <TextField
            id={field}
            label={label}
            type="datetime-local"
            // El valor debe ser un string vacío si es null o undefined para evitar un warning
            value={value || ''}
            onChange={handleDateTimeChange} // Usar la función de manejo de cambio personalizada
            onBlur={onBlurHandler} // Usar el manejador onBlur proporcionado
            error={showErrorMessage}
            helperText={showErrorMessage ? validationMessage : ''}
            InputLabelProps={{
                shrink: true,
            }}
        />
    );
}

export default DateTimeInput;
