import React, {Component} from 'react'

class Employee extends Component {

    render() {
        return(
            <div className="avatar" onClick={ () => this.props.handleEmployeeClick(this.props)}>
                <div className={this.props.active ? "overlay-container active" : "overlay-container"}>
                    <div className="team-img-overlay"/>
                </div>
                <img className="team-img" src={this.props.img} alt="teammember"/>
                <h3 className={this.props.active ? "active-name" : ""}>{this.props.name}</h3>
                <h4>{this.props.position}</h4>
            </div>
        )
    }
}

export default Employee