import React from "react";
import '../Estilos/BarraDeBusqueda_CSS.css'
import foto_perfil from '../Estilos/Imagenes/FotoPerfil.png'

const BarraDeBuqueda: React.FC = () => {
    return (
        <div className="navbar">
            <div className="informacion_navbar">
                <div className="row" style={{ width: "100%" }}>
                    <div className="col-1">
                        <img className="foto_perfil" src={foto_perfil} alt="Foto de perfil" />
                    </div>
                    <div className="col-5">
                        <p className="texto_perfil">
                            Santiago Del Valle
                        </p>
                        <p className="texto_perfil texto_perfil_subtitulo">
                            Ingeniero de sistemas
                        </p>
                    </div>
                    <div className="col-2">
                        <p className="texto_perfil secciones_barra">Sobre mi</p>
                    </div>
                    <div className="col-2">
                        <p className="texto_perfil secciones_barra">Experiencia</p>
                    </div>
                    <div className="col-2">
                        <p className="texto_perfil secciones_barra">Proyectos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarraDeBuqueda;
