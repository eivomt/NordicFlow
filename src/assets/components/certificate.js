import { Component } from "react";


class Certificate extends Component {

    render() {

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
                {/* <h4 className="cert-view">view certificate</h4> */}
                <p>{this.props.cText}</p>
            </div>
        )
    }
}
export default Certificate