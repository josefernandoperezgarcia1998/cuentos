import React from 'react'
import logoUnicach from './img/unicach.png'
import Mapa from './Map';
import credentialss from './credentials';
import copa from './img/copainalafondo.jpg'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentialss.mapsKey}`;

const Home = () =>{
    return (

        <div className="contenedorHome">
            
            <div className="w3-container w3-green">
                <h1 className="tituloprincipal">Inicio</h1>
                <p>Historias y Relatos de Rersonajes Tradicionales de Copainala</p>
            </div>
            <div className="contenedorFondoImg">
                <img src={copa} alt=""/>
{/*                 <div className="tituloInicio">
                    <h1>Historias y Relatos de Rersonajes Tradicionales de Copainala</h1>
                </div> */}
            </div>
            <h2 className="tituloLogoUnach">Alma Máter</h2>
            <div className="contenedorImagenInicio">
                <img className="logoUnicach" src={logoUnicach} alt="LogoUnicach"/>
            </div>
            <h2 className="tituloLogoUnach">Ubicación del municipio Copainala</h2>
            <Mapa
                googleMapURL= {mapURL}
                containerElement= {<div style={{height:'400px'}}/>}
                mapElement= {<div style={{height:'100%'}} />}
                loadingElement= {<p>Cargando</p>}

            />
            <footer className="containerFooter">
                <p>Hecho con ♥️ por JFPG</p>
            </footer>
        </div>
    );
}

export default Home;