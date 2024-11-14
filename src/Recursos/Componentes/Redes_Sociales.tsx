import React from "react";
import '../Estilos/Redes_Sociales_CSS.css'
import correo from '../Estilos/Iconos/Correo.png';
import linkeid from '../Estilos/Iconos/Linkeid.png'
import Github from '../Estilos/Iconos/GitHub.png'


const Redes_Sociales: React.FC = () => {
    return (<div className="Redes_Sociales">
        <div className="Contenedor_Imagenes_redes">
            <img className="Imagenes_redes" src={linkeid} alt="Icono de Linkeid" />
        </div>
        <div className="Contenedor_Imagenes_redes">
            <img className="Imagenes_redes" src={Github} alt="Icono de Linkeid" />
        </div>
        <div className="Contenedor_Imagenes_redes">
            <img className="Imagenes_redes" src={correo} alt="Icono de Correo" />
        </div>

    </div>)
}

export default Redes_Sociales;