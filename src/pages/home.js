import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import windImg from '../assets/home-img/wind.png'
import hydrogenImg from '../assets/home-img/hydrogen.png'
import oilImg from '../assets/home-img/oil.png'


class Home extends Component {

    render() {
        return(
            <div className="home-container">
                <div className="home">
                    <h3 className="home-text">Your provider of pumps & pump solutions</h3>
                    <NavLink className="home-btn wind" to="/wind">
                        <img src={windImg} alt=""/>
                        <div className="home-img-overlay">
                            <p className="home-btn-text">Offshore Wind</p>
                        </div>
                    </NavLink>

                    <NavLink className="home-btn hydrogen" to="/hydrogen">
                        <img src={hydrogenImg} alt=""/>
                        <div className="home-img-overlay">
                            <p className="home-btn-text">Hydrogen</p>
                        </div>
                    </NavLink>

                    <NavLink className="home-btn oil" to="/oil">
                        <img src={oilImg} alt=""/>
                        <div className="home-img-overlay">
                            <p className="home-btn-text">Oil & Gas</p>
                        </div>
                    </NavLink>

                </div>
            </div>
        )
    }
}

export default Home