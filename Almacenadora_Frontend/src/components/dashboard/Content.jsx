/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import {TareasAdd} from "../tareas/TareasAdd"
export const Content = ({agregar}) => {
    return(
        <div className="content-container">
            <Routes>
            <Route path="agregar" element={<TareasAdd/>}/>
            </Routes>
        </div>
    )
}