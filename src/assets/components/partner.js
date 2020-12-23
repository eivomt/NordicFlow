import React, {Component} from 'react'

class Partner extends Component {

    
    render() {

        let description = []
        let ul = []

         if (Array.isArray(this.props.description)) {
            for (let x in this.props.description) {
                if (Array.isArray(this.props.description[x])) {
                    for (let y in this.props.description[x]) {
                        ul.push(<li key={y}>{this.props.description[x][y]}</li>)
                    }
                    description.push(<ul key={x}>{ul}</ul>)
                } else {
                    description.push(<p key={x}>{this.props.description[x]}</p>)
                }
            }
        } else {
            description.push(<p>{this.props.description}<br/></p>)
        }

        return(
            <div className="partner-container">
                <a href={this.props.website} target="_blank" rel="noreferrer">
                    <img src={this.props.logo} alt="partner-logo" className="partner-logo"/>
                </a>
                <a href={this.props.website} target="_blank" rel="noreferrer" className="name-link">
                    <h3>{this.props.name}</h3>
                </a>
                <div className="partner-description">
                    {description}
                </div>
            </div>
        )
    }
}

export default Partner