import React from 'react';
import {Link} from 'react-router-dom';
import './estilos/NavBar.css';

function NavBar(){

    return (
        <div className="topnav">
                <a><Link to="/">Inicio</Link></a>
                <a><Link to="/cuentos">Cuentos</Link></a>
                <a><Link to="/about">Acerca de</Link></a>
        </div>
    );
}

export default NavBar;