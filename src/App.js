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

  let showMobileMenu = () => {

    let menu = document.querySelector(".menu")
    let content = document.querySelector(".content")

    if (menu.classList.contains("menu-hidden")) {
      menu.classList.remove("menu-hidden")
      content.classList.add("content-hidden")

    } else {
      menu.classList.add("menu-hidden")
      content.classList.remove("content-hidden")
    }
  }

  return (
    <HashRouter>
      <div className="App">

    

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/wind" component={Wind} />
          <Route exact path="/hydrogen" component={Hydrogen} />
          <Route exact path="/oil" component={Oil} />
        </div>

        <div className="nav-container">
          <div className="line-container">
            <div className="line"/>
          </div>
          <nav>
            <NavLink
            exact to="/" replace className="home-link">
              <Logo2/>
            </NavLink>

            <NavLink exact to="/" replace className="mobile-nav-text">
              <h1 className="mobile-nav-text">NORDIC <span>FLOW</span></h1>
            </NavLink>

            <div className="mobile-menu" onClick={() => showMobileMenu()}>
              
              <div className="menu menu-hidden">
                <NavLink
                to="/about" replace className="mobile-nav-link mobile-about-link">
                  <p>About</p>
                </NavLink>

                <NavLink
                to="/contact" replace className="mobile-nav-link mobile-contact-link">
                  <p>Contact</p>
                </NavLink>

                <NavLink
                to="/partners" replace className="mobile-nav-link mobile-partner-link">
                  <p>Partners</p>
                </NavLink>

                <div className="mobile-nav-line"/>

                <NavLink className="mobile-nav-link mobile-wind" to="/wind">
                    <p>Wind</p>
                </NavLink>

                <NavLink className="mobile-nav-link mobile-hydrogen" to="/hydrogen">
                    <p>Hydrogen</p>
                </NavLink>

                <NavLink className="mobile-nav-link mobile-oil" to="/oil">
                    <p>Oil</p>
                </NavLink>
              </div>
            </div>

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
            <div className="nav-bg">
              <div className="bg"></div>
            </div>
          </nav>
        </div>

        <div className="footer">
          <div className="f-line"></div>

            <p className="f-name f-content">+47 95844449</p>
            <p className="f-mail f-content">sales@nordicflow.no</p>

            <div className="f-bg">
              <div className="bg"></div>
            </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
