import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import PopUp from "./components/PopUp";
import { useState } from "react";
import "./App.css";

function App() {
  const [timedPopUp, setTimedPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopUp(true)
    }, 2000)
  }, [])
  
  return (
    <>
    <PopUp trigger={timedPopUp} triggerSet={setTimedPopUp}>
      <p>This is my triggered popup</p> 
    </PopUp>
    <Router>
    <div className="route-env">
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
    </>
  );
}

export default App;