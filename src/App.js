import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './componentes/Home';
import Cuentos from './componentes/Cuentos';
import About from './componentes/About';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/cuentos">
            <Cuentos/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
