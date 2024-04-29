import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./dashboardPage.css";
import { useAdd } from "../../shared/hooks/useAdd";
import {Agregar} from '../../components/tareas/TareasAdd'

export const DashboardPage = () => {

  const {isFetching} = useAdd()

  if(isFetching){

  }
  return (
    <div className="dashboard-container">
      <Navbar />
    </div>
  );

}
