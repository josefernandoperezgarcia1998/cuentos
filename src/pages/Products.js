import React from 'react'

const Products = () =>{
    return (
        <div className="aboutContainer test ">
            <div className="w3-container w3-green cardColor">
                <h1 className="tituloprincipal">Acerca de la Aplicación</h1>
                <p>En esta sección se encuentra información referente a esta aplicación.</p>
            </div>

            <div className="cardAbout">
                <div className="cardTitle">
                    <h4 className="subTitulos">Nombre de la Tesis</h4>
                </div>
                <div className="cardDesc">
                <h2 className="titulosPrincipales">TRADICIÓN ORAL DE COPAINALÁ: MITOS, LEYENDAS Y RELATOS VARIOS; UNA PROPUESTA PARA SU CONSERVACIÓN MEDIANTE UNA APLICACIÓN PARA DISPOSITIVOS MÓVILES</h2>
                </div>
            </div>

            <div className="cardAbout">
                <div className="cardTitle">
                    <h4 className="subTitulos">Asesor de Tesis</h4>
                </div>
                <div className="cardDesc">
                <h2 className="titulosPrincipales">Mtro. Juan Ramón Álvarez Vázquez</h2>
                </div>
            </div>

            <div className="cardAbout">
                <div className="cardTitle">
                    <h4 className="subTitulos">Integrantes</h4>
                </div>
                <div className="cardDesc">
                    <h2 className="titulosPrincipales">Christian Mauricio Zenteno Fernández</h2>
                    <h2 className="titulosPrincipales">Israel Antonio Vázquez Estrada</h2>
                </div>
            </div>

            <div className="cardAbout">
                <div className="cardTitle">
                    <h4 className="subTitulos">Carrera</h4>
                </div>
                <div className="cardDesc">
                    <h2 className="titulosPrincipales">Licenciatura en Lenguas con Enfoque Turístico</h2>
                </div>
            </div>

            <div className="cardAbout">
                <div className="cardTitle">
                    <h4 className="subTitulos">Universidad</h4>
                </div>
                <div className="cardDesc">
                    <h2 className="titulosPrincipales">Universidad de Ciencias y Artes de Chiapas</h2>
                </div>
            </div>

            <div className="cardAbout">
                <div className="cardTitle colab">
                    <h4 className="subTitulos">Colaborador Externo</h4>
                </div>
                <div className="cardDesc">
                    <h2 className="titulosPrincipales">José Fernando Pérez García</h2> 
                </div>
            </div>
            <footer className="containerFooter">
                <p>Hecho con ♥️ por JFPG</p>
            </footer>
        </div>
    );
}

export default Products;