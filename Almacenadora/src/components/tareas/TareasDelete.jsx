import { useState } from "react";
import { useDelete } from "../../shared/hooks/useDelete"; 

export const Eliminar = () => {
    const { eliminar, isDeleting } = useDelete(); 

    const [taskId, setTaskId] = useState(""); // Estado para almacenar el ID de la tarea a eliminar
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar si se ha enviado la solicitud de eliminación

    const handleInputChange = (event) => {
        setTaskId(event.target.value); // actualiza el estado con el ID de la tarea ingresado por el usuario
    };

    const handleEliminar = (event) => {
        event.preventDefault();
        // Llama a la función de eliminación con el ID de la tarea
        eliminar(taskId);
        setIsSubmitted(true); // Marca que se ha enviado la solicitud de eliminación
    };

    return (
        <div className="mini-ventana">
            <h2>Eliminar Tarea</h2>
            <form onSubmit={handleEliminar}>
                <label htmlFor="taskId">ID de la Tarea:</label>
                <input
                    type="text"
                    id="taskId"
                    name="taskId"
                    value={taskId}
                    onChange={handleInputChange}
                />
                <button type="submit" disabled={isDeleting || taskId === ""}>
                    {isDeleting ? "Eliminando..." : "Eliminar Tarea"}
                </button>
                {isSubmitted && !isDeleting && <p>Solicitud de eliminación enviada con éxito.</p>}
            </form>
        </div>
    );
};
