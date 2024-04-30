import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";


const NavLogo = () => {

  return (
    <div className="nav-logo-container">
      <img
        className="nav-logo"
        width="100%"
        height="100%"
        src={logo}
        alt="Logo.svg"
      />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigateToAddPage = () => {
    navigate('/agregar')
  }

  const handleNavigateToAddPersonPage = () => {
    navigate('/agregarPersona')
  }
  const handleNavigateToListPage = () => {
    navigate('/tareas')
  }


  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
      <NavButton text="Tareas" data-bs-target="#agregarTarea" onClickHandler={handleNavigateToListPage} />
        <NavButton text="Agregar Tarea" onClickHandler={handleNavigateToAddPage} />
        <NavButton text="Agregar Persona" onClickHandler={handleNavigateToAddPersonPage} />
        

      </div>
    </div>
  );
};
