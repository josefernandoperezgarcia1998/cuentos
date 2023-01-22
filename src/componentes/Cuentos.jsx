import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CuentosNav from './CuentosNav';
import Weya from './cuentos/Weya';


const Cuentos = () =>{
    return(
        <div>
        <Router>
            <CuentosNav/>
            <Switch>
            <Route exact path="/weya">
                <Weya/>
            </Route>    
            </Switch>
        </Router>
        </div>
    );
}

export default Cuentos;