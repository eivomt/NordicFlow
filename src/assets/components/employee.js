import React, {Component} from 'react'

class Employee extends Component {

    render() {

        return(
            <div className={this.props.pending ? "avatar pending" : "avatar"} onClick={ () => this.props.handleEmployeeClick(this.props)}>
                <div className={this.props.active ? "overlay-container active" : "overlay-container"}>
                    <div className="team-img-overlay"/>
                </div>
                <img className="team-img" src={this.props.img} alt="teammember"/>
                <h3 className={this.props.active ? "active-name" : ""}><span className="f-name">{this.props.pending ? "TBA" : this.props.fName}</span> <span className="l-name">{this.props.pending ? "" : this.props.lName}</span></h3>
                <h4>{this.props.pending ? "Pending Contract" : this.props.position}</h4>
            </div>
        )
    }
}

export default Employee