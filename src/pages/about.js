import React, {Component} from 'react'
import tm1 from '../assets/1.png'
import tm2 from '../assets/2.png'
import tm3 from '../assets/3.png'
import tm4 from '../assets/4.png'
import tm5 from '../assets/5.png'

import Employee from '../assets/components/employee'
import Bio from '../assets/components/bio'

import descriptionArray from '../assets/data/bio-description'
import experienceArray from '../assets/data/bio-experience'

class About extends Component {

    constructor(props) {
        super(props)

        this.scrollRef = React.createRef()

        this.state = {
            bioOpen: false,
        }
    }

    handleEmployeeClick = (props) => {
        console.log(props)

        this.setState({
            bioOpen : true,
            bioName : props.fName + " " + props.lName,
            bioPosition : props.position,
            bioImg : props.img,
            bioDescription : props.description,
            bioPhone : props.phone,
            bioEmail : props.email,
            bioExperience : props.experience,
            selected : props.number
        })
    }

    scrollToBottom = () => {
        this.end.scrollIntoView({ behavior: "smooth"})
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    componentDidMount() {
        let list = document.querySelector(".scrollable-list")
        let viewportWidth = window.innerWidth
        setTimeout(() => {
            list.scrollLeft = viewportWidth/2
        }, 400)
    }

    render() {
        return(
            <div className="about-container" ref={this.scrollRef}>

                <section>
                    <div className="about-main">

                        <div className="about-title">
                            <div className="t-line"></div>
                            <h2>NORDIC <span>FLOW</span></h2>
                            <div className="t-line"></div>
                        </div>

                        <h4 className="subtitle">We know pumps, come pump with us</h4>
                        
                        <div className="about-text">
                            <p>We genuinely believe that we can provide the best customer service & technical solutions
                            at a very competitive price. Our team consist of people that have true understanding of the
                            products that we deliver and believe in what we do.</p>
                        </div>


                        <h3 id="a-meet">MEET THE <span>TEAM</span></h3>
                        <div className="t-line" id="team-line"/>

                        <ul className="scrollable-list">
                            
                            <li>
                                <Employee active={ this.state.selected === 1 ? true : false } number={1} img={tm1} fName="Torjus" lName=" Wæringsåsen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 2 ? true : false } number={2} img={tm2} fName="Johan" lName="Collett" position="Chief Technical Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 3 ? true : false } number={3} img={tm3} fName="Christian" lName="Larsen" position="Head of Project Management" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} fName="Mark" lName="Tuinman" position="Head of Sales & Marketing" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 5 ? true : false } number={5} img={tm5} fName="Per Einar" lName="Wethe" position="Chief Executive Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 6 ? true : false } number={6} img={tm2} fName="Eirik" lName="Ubøe" position="Chief Financial Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                        </ul>

                        <div className="team-container">

                            <Employee active={ this.state.selected === 1 ? true : false } number={1} img={tm1} name="Torjus Wæringsåsen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 2 ? true : false } number={2} img={tm2} name="Johan Collett" position="Chief Technical Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 3 ? true : false } number={3} img={tm3} name="Christian Larsen" position="Head of Project Management" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} name="Mark Tuinman" position="Head of Sales & Marketing" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 5 ? true : false } number={5} img={tm5} name="Per Einar Wethe" position="Chief Executive Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 6 ? true : false } number={6} img={tm2} name="Eirik Ubøe" position="Chief Financial Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>

                        </div>
                    </div>
                <div id="scroll-ref" style={{ float:"left", clear: "both", marginTop: "-308px"}} ref={(el) => { this.end = el }}/>
                </section>

                <section id="bio-section">
                    {this.state.bioOpen ? (
                        <Bio name={this.state.bioName} position={this.state.bioPosition} img={this.state.bioImg} description={this.state.bioDescription} phone={this.state.bioPhone} email={this.state.bioEmail} experience={this.state.bioExperience}/>
                        ) : (
                        <div/>
                    )}
                </section>
            </div>
        )
    }
}

export default About