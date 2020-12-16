import React from 'react'

import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Partners from './pages/partners'
import Wind from './pages/wind'
import Hydrogen from './pages/hydrogen'
import Oil from './pages/oil-gas'

import Logo2 from './assets/logo2'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">

        <div className="nav-container">
          <div className="line-container">
            <div className="line"/>
          </div>
          <nav>
            <NavLink
            exact to="/" replace className="home-link">
              <Logo2/>
            </NavLink>

            <NavLink
            to="/about" replace className="nav-link about-link">
              <p>About</p>
            </NavLink>

            <NavLink
            to="/contact" replace className="nav-link contact-link">
              <p>Contact</p>
            </NavLink>

            <NavLink
            to="/partners" replace className="nav-link partner-link">
              <p>Partners</p>
            </NavLink>

            <div className="line"></div>
            <div className="nav-bg"></div>
          </nav>
        </div>

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/wind" component={Wind} />
          <Route exact path="/hydrogen" component={Hydrogen} />
          <Route exact path="/oil" component={Oil} />
        </div>

        <div className="footer">
          <div className="f-line"></div>

            <p className="f-name f-content">+47 98742683</p>
            <p className="f-mail f-content">torjus@nordicflow.no</p>

            <div className="f-bg"></div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
