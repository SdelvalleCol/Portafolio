import React from 'react';
import BarraDeBuqueda from '../Componentes/BarraDeBuqueda';
import Redes_Sociales from '../Componentes/Redes_Sociales';
import SeccionesPortafolio from '../Componentes/SeccionesPortafolio';
import '../Estilos/SeccionesPortafolio_CSS.css'

const Home: React.FC = () => {
  return (
    <div>
      <BarraDeBuqueda />
      <Redes_Sociales />
      <SeccionesPortafolio />

    </div>
  )
}


export default Home;
