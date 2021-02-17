import React, {Component} from 'react'
import hydrogenImg from '../assets/home-img/hydrogen.png'

class Hydrogen extends Component {

    render() {
        return(
            <div className="hydrogen-container">
                <div className="title-container">
                    <h1>Hydrogen</h1>
                </div>
                <h3>With our expertise in liquid process handling, we are able to provide assistance with both technical solutions and technical support.</h3>

                <div className="text-container">
                    <p>For the World to reach the Paris agreements goal of keeping a global temperature rise below 2°C above pre-industrial levels this century, Green Hydrogen will be a key solution.</p>

                    <p>Due to the Ultra clean H2O that is used for the electrolysis process, all equipment in contact with the process liquid needs to follow strict cleaning protocols.</p>

                    <ul>
                        <li>Electropolished Heat Exchangers</li>
                        <li>Electropolished wet parts in all pump equipment</li>
                    </ul>
                </div>

                <img className="bg-img" id="oil-bg" src={hydrogenImg} alt="background"/>
                <div className="bg-img-overlay"/>
            </div>
        )
    }
}

export default Hydrogen