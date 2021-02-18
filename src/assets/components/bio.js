import React, {Component} from 'react'

class Bio extends Component {

    render() {

        let jobs = []
        for (let x in this.props.experience) {
            jobs.push(
                <div key={x} className="bio-job-container">
                    <p key={x + 1} className="bio-company">{this.props.experience[x].company}</p>
                    <p key={x + 2} className="bio-exp-position">{this.props.experience[x].position}</p>
                    <p key={x + 3} className="bio-duration">{this.props.experience[x].duration}</p>
                </div>
            )
        }

        let description = []
        for (let x in this.props.description) {
            description.push(<p key={x}>{this.props.description[x]}</p>)
        }

        let phone = []
        if (this.props.phone === "tel pending") {
            phone.push(<h4 className="bio-phone">{this.props.phone}</h4>)
        } else {
            phone.push(
            <a href={'tel:' + this.props.phone} className="bio-phone">
                <h4>{this.props.phone}</h4>
            </a>)
        }

        return(
            <div className="bio-main">
                <div className="bio-container">
                    <img src={this.props.img} alt="employee" className="bio-img"/>
                    <div className="bio-name-container">
                        <h2>{this.props.name}</h2>
                        <h4>{this.props.position}</h4>
                    </div>
                    {phone}
                    <a href={'mailto:' + this.props.email} className="bio-email">
                        <h4>{this.props.email}</h4>
                    </a>
                    <div className="bio-description">
                        {description}
                    </div>
                    <h3 className="bio-experience-title">Experience</h3>
                    <div className="bio-experience">
                        {jobs}
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio