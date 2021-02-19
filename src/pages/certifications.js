import React, { Component } from "react";
import Certificate from '../assets/components/certificate'
import achillesImg from '../assets/certificate-logo/achilles.png'
import kiwaImg from '../assets/certificate-logo/kiwa.png'
import epimImg from '../assets/certificate-logo/epim.png'
import norAccredImg from '../assets/certificate-logo/nor-accred.png'
import kiwaCert from '../assets/certificates/ISO 9001_certificate no. 2178.png'
import epimCert from '../assets/certificates/EPIM-certificate.png'
import achillesCert from '../assets/certificates/Achilles-certificate.png'


class Certifications extends Component {

    render() {

        let handleBgClick = () => {
            let pdf = document.querySelector(".active-pdf")
            let bg = document.querySelector(".active-pdf-bg")

            if (document.querySelector(".active-pdf-bg") && document.querySelector(".active-pdf")){
                
                pdf.classList.remove("active-pdf")
                setTimeout(function() {
                    bg.classList.remove("active-pdf-bg")
                }, 500)
            }
        }

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
                    <Certificate pdf={kiwaCert} name="KIWA" logo={kiwaImg} logo2={norAccredImg} cText="Nordic Flow AS` Quality Management System, QMS is certified to ISO 9001:2015. Our QMS is the foundation of quality assurance activities to improve the overall performance and provide a sound basis for sustainable development activities."/>
                    <Certificate pdf={epimCert} name="EPIM JQS" logo={epimImg} cText="Nordic Flow AS is registered in EPIM JQS as a supplier. EPIM JQS is a joint qualification system used by all of the operators on the Norwegian Continental Shelf."/>
                    <Certificate pdf={achillesCert} name="Achilles JQS" logo={achillesImg} cText="Nordic Flow AS is qualified in the Achilles Joint Qualification System for suppliers to the Oil Industry in Norway and Denmark."/>
                </div>

                <div className="cert-pdf-bg" onMouseDown={() => handleBgClick()}></div>
                
            </div>
        )
    }
}

export default Certifications