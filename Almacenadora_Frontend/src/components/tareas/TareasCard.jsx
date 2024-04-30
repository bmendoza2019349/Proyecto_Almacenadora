export const TareasCard = ({
    id,
    nombre,
    estado,
    persona,
    navigateToTareaHandler
}) => {
    const handleNavigate = () => {
        navigateToTareaHandler(id);
    };

    return (
        <div className=" col-sm-6 mb-3 mb-sm-0">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Estado: {estado}</p>
                    <p className="card-text">Persona: {persona}</p>
                    <a className="btn btn-primary" onClick={handleNavigate}>Eliminar</a>
                    <a className="btn btn-danger" onClick={handleNavigate}>Visualizar Tarea</a>
                </div>
            </div>
        </div>
    );
};