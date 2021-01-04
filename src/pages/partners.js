import React, {Component} from 'react'
import Partner from '../assets/components/partner'
import partnerArray from '../assets/data/partner-data'

class Partners extends Component {

    
    render() {

        let partners = []
        for (let partner in partnerArray) {
            partners.push(
                <Partner key={partner} name={partnerArray[partner].name} description={partnerArray[partner].description} logo={partnerArray[partner].logo} website={partnerArray[partner].website}/>
            )
        }

        return(
            <div className="partners-container">
                <h2>OUR <span>SUPPLIERS</span></h2>
                <div className="partners-background">
                    {partners}
                </div>
            </div>
        )
    }
}

export default Partners