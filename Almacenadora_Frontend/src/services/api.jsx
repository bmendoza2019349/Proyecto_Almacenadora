import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/api_Almacenadora/v1',
    timeout: 5000
})

export const agregar = async (data) => {
    try {
        return await apiClient.post('/tareas/agregar', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}