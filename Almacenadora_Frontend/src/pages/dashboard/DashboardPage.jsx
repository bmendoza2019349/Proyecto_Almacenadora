import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { Content } from "../../components/dashboard/Content";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useTareas } from "../../shared/hooks";
import "./dashboardPage.css";

export const DashboardPage = () => {
  const {getTareas, allTareas, isFetching} = useTareas()

  useEffect(() => {
    getTareas();
  }, [getTareas]);
  
  if(isFetching){
    return <LoadingSpinner />
  }

  return (
    <div className="dashboard-container">
      <Navbar />
      <Content tareas={allTareas || []} />
    </div>
  );

}

