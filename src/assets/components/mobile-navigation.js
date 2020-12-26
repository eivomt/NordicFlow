import React, {Component} from 'react'
import {NavLink} from "react-router-dom";

class MobileNavigation extends Component {

    constructor(props) {
        super(props)

        this.mobileNavRef = React.createRef()

        this.state = {
            open : false,
        }
    }

    handleOutsideClick = (event) => {
        if (this.mobileNavRef && !this.mobileNavRef.current.contains(event.target) && this.state.open) {
            this.toggleMobileMenu()
        }
    }

    toggleMobileMenu = () => {

        let menu = document.querySelector(".menu")
        let content = document.querySelector(".content")
    
        if (menu.classList.contains("menu-hidden")) {

            menu.classList.remove("menu-hidden")
            content.classList.add("content-hidden")
    
            this.setState({
                open : true
            })

        } else {

            menu.classList.add("menu-hidden")
            content.classList.remove("content-hidden")
    
            this.setState({
            open : false
            })
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick)
    }

    render() {
        return(
            <div className="mobile-menu" ref={this.mobileNavRef} onClick={() => this.toggleMobileMenu()}>
              
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

                    {/* <div id="mobile-nav-line-info" className="mobile-nav-line"/>

                    <div className="mobile-nav-info">
                        <p>sales@nordicflow.no</p>
                    </div>
                    <div className="mobile-nav-info">
                        <p>Nesbruveien 75<br/><span>1394 Nesbru</span></p>
                    </div>
                    <div className="mobile-nav-info">
                        <p>+47 95844449</p>
                    </div> */}
                </div>

            </div>
        )
    }
}

export default MobileNavigation