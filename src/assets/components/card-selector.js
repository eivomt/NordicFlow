import React, {Component} from 'react'

import Employee from './employee'

import tm1 from '../1.png'
import tm2 from '../2.png'
import tm3 from '../3.png'
import tm4 from '../4.png'
import tm5 from '../5.png'

import descriptionArray from '../data/bio-description'
import experienceArray from '../data/bio-experience'

import BusinessCard from './business-card'

class CardSelector extends Component {

    render() {
        return(
            <div className="contact-cards-container">

                <div className="team-container">
                    <Employee  number={1} img={tm1} name="Torjus Wæringsåsen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee  number={2} img={tm2} name="Johan Collett" position="Chief Technical Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee  number={3} img={tm3} name="Christian Larsen" position="Head of Project Management" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee  number={4} img={tm4} name="Mark Tuinman" position="Head of Sales & Marketing" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee  number={5} img={tm5} name="Per Einar Wethe" position="Chief Executive Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee  number={6} img={tm2} name="Eirik Ubøe" position="Chief Financial Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>
                </div>

                <BusinessCard></BusinessCard>

            </div>
        )
    }
}

export default CardSelector