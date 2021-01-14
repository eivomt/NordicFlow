import React, {Component} from 'react'

import Employee from './employee'

import tm1 from '../1.png'
import tm2 from '../2.png'
import tm3 from '../3.png'
import tm4 from '../4.png'
import tm5 from '../5.png'
import tm6 from '../6.png'

import descriptionArray from '../data/bio-description'
import experienceArray from '../data/bio-experience'

import BusinessCard from './business-card'

class CardSelector extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cardSelected : true,
            cardName : "Johan Collett",
            cardPosition : "Chief Technical Officer",
            cardMail : "jc@nordicflow.no",
            cardPhone : "+47 95844449",
            cardImg : tm2,
            selected : 2
        }
    }

    handleEmployeeClick = (props) => {
        this.setState({
            cardSelected : true,

            cardName : props.fName + " " + props.lName,
            cardPosition : props.position,
            cardMail : props.email,
            cardPhone : props.phone,
            cardImg : props.img,
            selected : props.number
        })
    }

    render() {
        return(
            <div className="contact-cards-container">

                <ul className="scrollable-list">
                            
                    <li>
                        <Employee active={ this.state.selected === 1 ? true : false } number={1} img={tm1} fName="Torjus" lName=" Wæringsaasen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                    <li>
                        <Employee active={ this.state.selected === 2 ? true : false } number={2} img={tm2} fName="Johan" lName="Collett" position="Chief Technical Officer" phone="+47 95844449" email="jc@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                    <li>
                        <Employee active={ this.state.selected === 3 ? true : false } number={3} img={tm3} fName="Christian" lName="Larssen" position="Head of Project Management" phone="+47 92817937" email="cel@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                    {/* Mark tlf: +47 46943819 */}
                    <li>
                        <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} fName="Mark" lName="Tuinman" position="Head of Sales & Marketing" phone="tel pending" email="mt@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                    <li>
                        <Employee active={ this.state.selected === 5 ? true : false } number={5} img={tm5} fName="Per Einar" lName="Wethe" position="Chief Executive Officer" phone="+47 45246880" email="pew@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                    <li>
                        <Employee active={ this.state.selected === 6 ? true : false } number={6} img={tm6} fName="Eirik" lName="Ubøe" position="Chief Financial Officer" phone="+47 41292712" email="eu@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>
                    </li>

                </ul>

                <div className="team-container">
                    <Employee active={ this.state.selected === 1 ? true : false }  number={1} img={tm1} fName="Torjus" lName="Wæringsaasen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee active={ this.state.selected === 2 ? true : false }  number={2} img={tm2} fName="Johan" lName="Collett" position="Chief Technical Officer" phone="+47 95844449" email="jc@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee active={ this.state.selected === 3 ? true : false }  number={3} img={tm3} fName="Christian" lName="Larssen" position="Head of Project Management" phone="+47 92817937" email="cel@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>

                    {/* Mark tlf: +47 46943819 */}
                    <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} fName="Mark" lName="Tuinman" position="Head of Sales & Marketing" phone="tel pending" email="mt@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee active={ this.state.selected === 5 ? true : false }  number={5} img={tm5} fName="Per Einar" lName="Wethe" position="Chief Executive Officer" phone="+47 45246880" email="pew@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>

                    <Employee active={ this.state.selected === 6 ? true : false }  number={6} img={tm6} fName="Eirik" lName="Ubøe" position="Chief Financial Officer" phone="+47 41292712" email="eu@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>
                </div>

                {this.state.cardSelected ? (<BusinessCard name={this.state.cardName} position={this.state.cardPosition} email={this.state.cardMail} phone={this.state.cardPhone}
                img={this.state.cardImg}/>) : (<div/>)}

            </div>
        )
    }
}

export default CardSelector