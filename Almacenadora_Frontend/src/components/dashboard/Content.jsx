import { Route, Routes } from "react-router-dom";
import {Agregar} from "../tareas/TareasAdd"
export const Content = ({agregar}) => {
    return(
        <div className="content-container">
            <Routes>
            <Route path="agregar" element={<Agregar/>}/>
            </Routes>
        </div>
    )
}