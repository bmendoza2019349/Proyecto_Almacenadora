import { useState } from "react";
import toast from "react-hot-toast"
import { getTareas as getTareasRequest } from "../../services/api";

export const useTareas = () =>{
    const [tareas, setTareas] = useState([])

    const getTareas = async () =>{
        const tareasData = await getTareasRequest()
        if(tareasData.error){
            return toast.error(
                tareasData.e?.response?.data || 'Ocurrio un error al cargar las tareas'
            )
        }

        setTareas({
            tareas: tareasData.data.tareas,
        })
    }

    return{
        getTareas,
        isFetching: !Boolean(tareas),
        allTareas: tareas?.tareas,
    }
}