import React, {Component} from 'react'

class BusinessCard extends Component {

    render() {
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
                        <p>{this.props.email}</p>
                    </div>

                    <div className="phone-container">
                        <h4>Phone</h4>
                        <p>{this.props.phone}</p>
                    </div>

                </div>

            </div>
        )
    }
}

export default BusinessCard