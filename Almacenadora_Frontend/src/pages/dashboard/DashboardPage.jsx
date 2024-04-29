import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { Content } from "../../components/dashboard/Content";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import "./dashboardPage.css";

export const DashboardPage = () => {

  return (
    <div className="dashboard-container">
      <Navbar />
      <Content />
    </div>
  );

}
