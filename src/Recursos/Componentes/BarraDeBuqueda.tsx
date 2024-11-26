import React from "react";
import '../Estilos/Estilos.css'
import foto_perfil from '../Estilos/Imagenes/FotoPerfil.png'

const BarraDeBuqueda: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg barra_de_busqueda_contenedor">
            <div className="barra_de_busqueda">
                <section className="seccion_imagen row">
                    <div className="col-4">
                        <img src={foto_perfil} alt="" />
                    </div>
                    <div className="col-8">
                        <p className="texto_imagen_nombre">Santiago Andres Del Valle Pinilla</p>
                        <p className="texto_imagen_titulo">Ingeniero de Sistemas e Informatica</p>
                    </div>
                </section>
                <section className="seccion_contenido row">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="col-3">
                            <a className="nav-item nav-link active" href="#">
                                Sobre mi
                            </a>
                        </div>
                        <div className="col-3">
                            <a className="nav-item nav-link" href="#">Experiencia</a>
                        </div>
                        <div className="col-3">
                            <a className="nav-item nav-link" href="#">Estudios</a>
                        </div>
                        <div className="col-3">
                            <a className="nav-item nav-link" href="#">Contactame</a>
                        </div>
                    </div>
                </section>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav >
    );
}

export default BarraDeBuqueda;
