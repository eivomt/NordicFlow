import React, { Component } from "react";


class Certificate extends Component {


    render() {


        let showCertificate = () => {
            let pdf = document.getElementById(this.props.name + "-pdf")
            let bg = document.querySelector(".cert-pdf-bg")
            let top = window.scrollY + 106

            // window.scrollTo(0,0)
            bg.classList.add("active-pdf-bg")
            setTimeout(function() {
                pdf.style.top = top.toString() + "px"
                pdf.classList.add("active-pdf")
            }, 300)
        }

        let logo = []

        if (this.props.logo2) {
            logo.push(
                <div className="cert-logo">
                    <img src={this.props.logo} alt={this.props.name + "logo"}/>
                    <div className="cert-extra-logo">
                        <img src={this.props.logo2} alt={this.props.name + "logo"} id={this.props.name + "2"}/>
                    </div>
                </div>
            )
        } else {
            logo.push(
                <div className="cert-logo">
                    <img src={this.props.logo} alt={this.props.name + "logo"}/>
                </div>
            )
        }


        return(
            <div className="certificate">
                {logo}
                <h3>{this.props.name}</h3>
                <h4 className="cert-view" onMouseDown={() => showCertificate()}>view certificate</h4>
                <p>{this.props.cText}</p>

                <div className="pdf-container" id={this.props.name + "-pdf"} ref={this.wrapperRef}>
                    <img src={this.props.pdf} alt="" className="pdf"/>
                </div>
            </div>
        )
    }
}
export default Certificate