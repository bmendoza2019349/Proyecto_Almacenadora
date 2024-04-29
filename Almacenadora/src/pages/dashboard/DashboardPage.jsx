import { useEffect, useState } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./dashboardPage.css";
import { useAdd } from "../../shared/hooks/useAdd";
import { useDelete } from "../../shared/hooks/useDelete"; 
import { Agregar } from '../../components/tareas/TareasAdd';
import { Eliminar } from "../../components/tareas/TareasDelete";

export const DashboardPage = () => {
  const { isFetching } = useAdd();
  const { isDeleting } = useDelete(); 
  if(isFetching){

  }
  if(isDeleting){

  }
  
  return (
    <div className="dashboard-container">
      <Navbar />
      <Agregar />
      <Eliminar /> 
    </div>
  );
};

