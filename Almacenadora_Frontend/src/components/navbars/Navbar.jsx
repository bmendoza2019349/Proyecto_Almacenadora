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
  const navigate = useNavigate()
  navigate('/agregar')
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
    console.log()
  }
  const handleNavigateToListPage = () => {
    navigate('/listar')
  }

  const handleNavigateToEditPage = () => {
    navigate('/editar')
  }

  const handleNavigateToDeletePage = () => {
    navigate('/eliminar')
  }
  const handleNavigateToEstatePage = () => {
    navigate('/estado')
  }

  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Ver Tareas" onClickHandler={handleNavigateToListPage} />
        <NavButton text="Agregar" onClickHandler={handleNavigateToAddPage} />
        <NavButton text="Editar" onClickHandler={handleNavigateToEditPage} />
        <NavButton text="Eliminar" onClickHandler={handleNavigateToDeletePage} />
        <NavButton text="Cambiar Estado" onClickHandler={handleNavigateToEstatePage} />

      </div>
    </div>
  );
};
