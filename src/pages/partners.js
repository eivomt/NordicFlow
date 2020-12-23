import React, {Component} from 'react'
import Partner from '../assets/components/partner'
import partnerArray from '../assets/data/partner-data'

class Partners extends Component {

    render() {
        return(
            <div className="partners-container">
                <h2>OUR <span>PARTNERS</span></h2>
                <div className="partners-background">
                    <Partner name={partnerArray[0].name} description={partnerArray[0].description} logo={partnerArray[0].logo} website="https://www.celerosft.com/en-us/brands/clydeunion-pumps"/>
                    <Partner name={partnerArray[1].name} description={partnerArray[1].description} logo={partnerArray[1].logo} website="https://www.wepuko.de/en/homepage"/>
                </div>
            </div>
        )
    }
}

export default Partners