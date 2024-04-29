import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { agregar as agregarRequest } from "../../services/api";

export const useAdd = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const agregar = async (nombre, descripcion, fechaInicio, fechaFinal, estado, persona) => {
        setIsLoading(true)
        const response = await agregarRequest({
            nombre,
            descripcion,
            fechaInicio,
            fechaFinal,
            estado,
            persona
        })
        console.log(response)
        setIsLoading(false)

        if (response.error) {
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'ocurrio un error al agregar tarea, intentalo otra vez')
        }

        navigate('/')
    }
    return {
        agregar,
        isLoading
    }
}
