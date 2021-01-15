import React, {Component} from 'react'

class BusinessCard extends Component {

    render() {

        let phone = []
        if (this.props.phone === "tel pending") {
            phone.push(<p>{this.props.phone}</p>)
        } else {
            phone.push(
                <a href={'tel:' + this.props.phone}>
                    <p>{this.props.phone}</p>
                </a>
            )
        }

        return(
            <div className="business-card">
                <img src={this.props.img} alt={this.props.name} className="card-img"/>
                <div className="card-info">
                    <div className="name-title-container">
                        <h2>{this.props.name}</h2>
                        <h3>{this.props.position}</h3>
                    </div>
                    <div className="mail-container">
                        <h4>Email</h4>
                        <a href={'mailto:' + this.props.email}>
                            <p>{this.props.email}</p>
                        </a>
                    </div>

                    <div className="phone-container">
                        <h4>Phone</h4>
                        {phone}
                    </div>

                </div>

            </div>
        )
    }
}

export default BusinessCard