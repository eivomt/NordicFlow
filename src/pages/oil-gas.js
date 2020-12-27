import React, {Component} from 'react'
import oilImg from '../assets/oil.png'

class Oil extends Component {
    // style={"left: " + getComputedStyle(document.querySelector(".line-container")).left}


    render() {
        return(
            <div className="oil-container">
                <div className="title-container">
                    <h1>Oil & <span>Gas</span></h1>
                </div>

                <h3>Process Top Side, FPSO Process Deck & Onshore Facilities</h3>
                <p>We cover a full range of NORSOK & API standards such as: API610, 674, 675, 676 & 685 with components in compliance with e.g. API 671 & 682</p>

                <ul>
                    <li><span>Process & Utility</span> Pump Packages</li>
                    <li><span>MEG/TEG Methanol Injection</span> Pump Packages</li>
                    <li><span>Seawater Injection & Seawater Lift</span> Pump Packages</li>
                    <li><span>Export</span> Pump Packages</li>
                    <li><span>Chemical Injection</span> Pump Packages</li>
                    <li><span>Misc.</span> Pump Packages</li>
                </ul>

                <img className="bg-img" id="oil-bg" src={oilImg} alt="background"/>
                <div className="bg-img-overlay"/>
            </div>
        )
    }
}

export default Oil