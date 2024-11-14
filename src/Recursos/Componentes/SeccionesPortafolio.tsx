import React from "react"
import '../Estilos/SeccionesPortafolio_CSS.css'
import Lottie from 'lottie-react';
import animacion_inicio from '../Estilos/Animaciones/AnimacionPrincipal.json'

const SeccionesPortafolio: React.FC = () => {



    return (<div className="contenedor_principal">
        <div className="contenedor_secundario">
            <div className="contenedor_terciario">
                <div className="row">
                    <div className="col-6">
                        Animacion
                    </div>
                    <div className="col-6">
                        <Lottie animationData={animacion_inicio} loop={true} autoplay={true} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SeccionesPortafolio;