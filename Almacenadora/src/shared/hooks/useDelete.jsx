import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eliminar as eliminarRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useDelete = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const navigate = useNavigate()

    const eliminate = async (id) => {
        setIsDeleting(true);
        const response = await eliminarRequest(id);
        setIsDeleting(false);

        if (response.error) {
            console.error(response.error);
            return toast.error(
                response.error.message ||
                    "Ocurrió un error al eliminar la tarea. Por favor, inténtalo de nuevo."
            );
        }
        navigate('/')
    };

    return {
        eliminate,
        isDeleting,
    };
};
