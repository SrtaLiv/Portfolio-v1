import { useEffect, useState } from 'react';
import './inicio.scss';
import { text } from '@fortawesome/fontawesome-svg-core';

function Inicio() {
    return (
        <div className='inicio'>
            <h4>Hola! Qué tal?</h4>
            <h1>soy<span> Oli</span></h1>
            <img alt="Abre foto de perfil" draggable="true" src="https://pbs.twimg.com/profile_images/1802921319207407616/9X6R2I2f_400x400.jpg" />
            <h3>Desarrolladora de <span>Software</span></h3>

            <div className='descripcion'>
                <p>Desde chica me apasiona la <span>tecnologia</span>.
                    <br></br>
                    <br></br>
                    Empecé en el mundo de la programacion en el 2021 con cursos de Desarrollo Web.
                    Aprendi de forma autodidacta hasta que en 2023 empece una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informaticas para continuar mi formación.
                    Me considero una persona que no se conforma fácil y que da lo mejor de si. 
                    <br></br>
                    <br></br>
                    Además de estudiar creo contenido en <span>redes sociales</span> donde recomiendo recursos para programadores. Muchas gracias por pasarte por aquí.
                </p>
        
            </div>



        </div>
    )
}

export default Inicio;

