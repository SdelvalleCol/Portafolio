import React from "react"
import '../Estilos/Estilos.css'
import Lottie from 'lottie-react';
import animacion_inicio from '../Estilos/Animaciones/AnimacionPrincipal.json'

const SeccionesPortafolio: React.FC = () => {
    const [texto_constructor, Set_texto_constructor] = React.useState('');
    const texto_base = "Recibiendo ideas, nutriendo sueños y creando futuro!";
    const textoConstructorRef = React.useRef(texto_constructor);
    const indexRef = React.useRef(0);

    React.useEffect(() => {
        textoConstructorRef.current = texto_constructor;
    }, [texto_constructor]);

    React.useEffect(() => {
        let Animacion_Texto: NodeJS.Timeout;
        let Animacion_final: NodeJS.Timeout;
        let activo: boolean = false;

        // Animación de escritura
        Animacion_Texto = setInterval(() => {
            const index = indexRef.current;
            Set_texto_constructor((prevTexto) => {
                const nuevoTexto = prevTexto + texto_base[index];
                return nuevoTexto;
            });
            if (indexRef.current === texto_base.length - 1) {
                clearInterval(Animacion_Texto);
                console.log(textoConstructorRef.current)
                const texto_final_true = texto_base;
                const texto_final_false = texto_final_true.slice(0, -1);
                // Animación Final
                Animacion_final = setInterval(() => {
                    Set_texto_constructor(() => {
                        activo = !activo;
                        return activo ? texto_final_true : texto_final_false;
                    });
                }, 1000);
            }
            indexRef.current += 1;
        }, 100);

        return () => {
            clearInterval(Animacion_Texto);
            clearInterval(Animacion_final);
        };
    }, []);

    return (
        <div className="seccion_global">
            <section className="lotes_secciones">
                <div className="row" style={{
                    width: '100%',
                }}>
                    <div className="col-6 centrado_global">
                        <p className="typing-effect ">{texto_constructor}</p>
                    </div>
                    <div className="col-6 centrado_global">
                        <div className="animacion_dimensiones centrado_global">
                            <Lottie animationData={animacion_inicio} loop={true} autoplay={true} />
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default SeccionesPortafolio;