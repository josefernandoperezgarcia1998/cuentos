import React from 'react'
import logoUnicach from '../components/img/unicach.png'
import Mapa from '../components/Map';
import credentialss from '../components/credentials';
import copa from '../components/img/copainalafondo.jpg'

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentialss.mapsKey}`;


const Home = () =>{
    return (
<div className="contenedorHome">
            
            <div className="w3-container w3-green test cardColor">
                <h1 className="tituloprincipal">Inicio</h1>
                <p>Historias y Relatos de Rersonajes Tradicionales de Copainala</p>
            </div>
            <div className="contenedorFondoImg">
                <img src={copa} alt=""/>
{/*                 <div className="tituloInicio">
                    <h1>Historias y Relatos de Rersonajes Tradicionales de Copainala</h1>
                </div> */}
            </div>
            <div className="w3-container w3-green test cardColor">
                <h1 className="tituloprincipal">Alma Máter</h1>
                <p>Universidad de Ciencias y Artes de Chiapas</p>
            </div>
            <div className="contenedorImagenInicio">
                <img className="logoUnicach" src={logoUnicach} alt="LogoUnicach"/>
            </div>
            <div className="w3-container w3-green test cardColor">
                <h1 className="tituloprincipal">Ubicación</h1>
                <p>Municipio de Copainala</p>
            </div>
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