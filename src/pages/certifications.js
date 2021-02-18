import { Component } from "react";
import Certificate from '../assets/components/certificate'
import achillesImg from '../assets/certificate-logo/achilles.png'
import kiwaImg from '../assets/certificate-logo/kiwa.png'
import epimImg from '../assets/certificate-logo/epim.png'
import norAccredImg from '../assets/certificate-logo/nor-accred.png'
import isoImg from '../assets/certificates/ISO 9001_certificate no. 2178.png'


class Certifications extends Component {
    render() {
        return(
            <div className="cert-container">
                <div className="cert-title">
                    <h2>CERTIFICATES</h2>
                </div>
                <div className="cert-intro-text">
                    <p>Nordic Flow has obtained necessary certifications required to be recognized as a committed supplier in our business areas</p>
                </div>
                <div className="cert-subtitle">
                    <h3>OUR <span>CERTIFICATIONS</span></h3>
                </div>
                <div className="certificates-container">
                    <Certificate name="Achilles JQS" logo={achillesImg} cText="Nordic Flow AS is qualified in the Achilles Joint Qualification System for suppliers to the Oil Industry in Norway and Denmark."/>
                    <Certificate name="KIWA" logo={kiwaImg} logo2={norAccredImg} cText="Nordic Flow AS` Quality Management System, QMS is certified to ISO 9001:2015. Our QMS is the foundation of quality assurance activities to improve the overall performance and provide a sound basis for sustainable development activities."/>
                    <Certificate name="EPIM JQS" logo={epimImg} cText="Nordic Flow AS is registered in EPIM JQS as a supplier. EPIM JQS is a joint qualification system used by all of the operators on the Norwegian Continental Shelf."/>
                </div>

                {/* <div className="cert-pdf-bg"></div> */}
                {/* <div className="cert-pdf-placeholder">
                    <img src={isoImg} alt="" className="pdf"/>
                </div> */}
            </div>
        )
    }
}

export default Certifications