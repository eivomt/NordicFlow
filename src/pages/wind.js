import React, {Component} from 'react'
import windImg from '../assets/home-img/wind.png'

class Wind extends Component {

    render() {
        return(
            <div className="wind-container">
                <div className="title-container">
                    <h1>Offshore <span>Wind</span></h1>
                </div>
                <div className="hvdc-container">
                    <h2>HVDC</h2>
                    <div className="explanation-container">
                        <h3>High Voltage Direct Current (HVDC) link built to transmit offshore wind power to the power grid.</h3>
                    </div>

                    <p>Nordic Flow can provide equipment, expertise and technical support for all liquid handling on HVDC platform.</p>
                    <ul>
                        <li>Heat exchangers</li>
                        <li>Seawater lift pumps</li>
                        <li>Hypochlorite skid</li>
                        <li>Misc. Utility pumps</li>
                        <li>Filter package</li>
                    </ul>
                </div>
                <div className="floating-turbine-container">
                    <h2>Floating Turbine</h2>

                    <div className="explanation-container">
                        <h3>A floating wind turbine is an offshore wind turbine mounted on a floating structure that allows the turbine to generate electricity in water depths where fixed-foundation turbines are not feasible</h3>
                    </div>

                    <p>Nordic Flow can provide all types of pump solutions for Floating Turbines like:</p>
                    <ul>
                        <li>Ballast pumps</li>
                        <li>Drain pumps</li>
                    </ul>
                    <p>We also provide state of the art condition monitoring systems for pumps and motors in a cloud based solution, providing real-time monitoring for the whole wind park.</p>
                </div>

                <img className="bg-img" id="oil-bg" src={windImg} alt="background"/>
                <div className="bg-img-overlay"/>

            </div>
        )
    }
}

export default Wind