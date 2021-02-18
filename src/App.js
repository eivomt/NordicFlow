import React from 'react'

import Home from './pages/home'
import About from './pages/about'
import Certifications from './pages/certifications'
import Contact from './pages/contact'
import Partners from './pages/partners'
import Wind from './pages/wind'
import Hydrogen from './pages/hydrogen'
import Oil from './pages/oil-gas'

import Logo2 from './assets/NF-logo/logo2'

import MobileNavigation from './assets/components/mobile-navigation'

import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

function App() {

  let showCertBtn = () => {
    let certBtn = document.querySelector(".cert-link")
    certBtn.classList.add("cert-show")
  }

  let hideCertBtn = () => {
    setTimeout(function() {
      let certBtn = document.querySelector(".cert-link")
      certBtn.classList.remove("cert-show")
    }, 3500)
  }

  return (
    <HashRouter>
      <div className="App">

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/certifications" component={Certifications} />
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

            <NavLink exact to="/" replace className="nav-title">
              <h1>NORDIC <span>FLOW</span></h1>
            </NavLink>

            <NavLink exact to="/" replace className="mobile-nav-text">
              <h1 className="mobile-nav-text">NORDIC <span>FLOW</span></h1>
            </NavLink>

            <MobileNavigation/>

            <NavLink
            to="/about" replace className="nav-link about-link"
            onMouseEnter={() => showCertBtn()}
            onMouseLeave={() => hideCertBtn()}>
              <p>About</p>
            </NavLink>

            <NavLink
            to="/certifications" replace className="nav-link cert-link">
              <p>Certificates</p>
            </NavLink>

            <NavLink
            to="/contact" replace className="nav-link contact-link">
              <p>Contact</p>
            </NavLink>

            <NavLink
            to="/partners" replace className="nav-link partner-link">
              <p>Suppliers</p>
            </NavLink>

            <div className="line"></div>
            <div className="nav-bg">
              <div className="bg"></div>
            </div>
          </nav>
        </div>

        <div className="footer">
          <div className="f-line"></div>

            <p className="f-name f-content">
              <a href="tel:+47 41522557">
                +47 41522557
              </a>
            </p>
            <p className="f-mail f-content">
              <a href="mailto:sales@nordicflow.no">sales@nordicflow.no</a>
            </p>

            <div className="f-bg">
              <div className="bg"></div>
            </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
