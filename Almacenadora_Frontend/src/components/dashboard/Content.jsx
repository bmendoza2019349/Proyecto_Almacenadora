import { Route, Routes } from "react-router-dom";
import {Agregar} from "../tareas/TareasAdd"
import { Tareas } from "../tareas/Tareas";

export const Content = ({ tareas }) => {
    return (
        <div className="content-container">
            <Routes>
                <Route path="agregar" element={<Agregar/>}/>
                <Route path="tareas" element={<Tareas tareas={tareas} />}/> 
            </Routes>
        </div>
    );
};