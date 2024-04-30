import { useNavigate } from "react-router-dom";
import { TareasCard } from "./TareasCard";
export const Tareas = ({ tareas }) => {
    const navigate = useNavigate()

    const handleNavigateToTarea = (id) => {
        navigate(`/tarea/${id}`)
    }

    return (
        <div className="tareas-container d-flex justify-content-center">
            {tareas.map((c) => (
                <TareasCard
                    key={c.id}
                    id={c.id}
                    nombre={c.nombre}
                    estado={c.estado}
                    persona={c.persona}
                    navigateToTareaHandler={handleNavigateToTarea}
                />
            ))}
        </div>
    )
}