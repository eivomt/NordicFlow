import React, {Component} from 'react'
import tm1 from '../assets/employee-img/1.png'
import tm2 from '../assets/employee-img/2.png'
import tm3 from '../assets/employee-img/3.png'
import tm4 from '../assets/employee-img/4.png'
import tm5 from '../assets/employee-img/5.png'
import tm6 from '../assets/employee-img/6.png'

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
            learnMoreOpen : false,
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
        setTimeout(() => {
            this.scrollToBottom()
        }, 400);
    }

    scrollToBottom = () => {
        this.end.scrollIntoView({ behavior: "smooth"})
    }

    componentDidMount() {
        let list = document.querySelector(".scrollable-list")
        let viewportWidth = window.innerWidth
        setTimeout(() => {
            list.scrollLeft = viewportWidth/2
        }, 400)
    }

    learnMore = () => {
        let text = document.querySelector(".learn-more-text")
        this.state.learnMoreOpen ? (
            text.classList.remove("learn-more-active")
            ) : (
                text.classList.add("learn-more-active")
            )
        this.setState({learnMoreOpen : !this.state.learnMoreOpen})
        // if (!this.state.bioOpen) {
        //     setTimeout(() => {
        //         this.scrollToBottom()
        //     }, 400);
        // }
    }

    render() {
        return(
            <div className="about-container" ref={this.scrollRef}>
                <section>
                    <div className="about-main">

                        <div className="about-title">
                            <h2>NORDIC <span>FLOW</span></h2>
                        </div>

                        <h4 className="subtitle">Your provider of pumps & pump solutions</h4>
                        
                        <div className="about-text">
                            <p>We genuinely believe that we can provide the best customer service & technical solutions
                            at a very competitive price. Our team consist of people that have true understanding of the
                            products that we deliver and believe in what we do.</p>
                        </div>
                        <div className="learn-more">
                            <p className="learn-more-click" onClick={() => {this.learnMore()}}>learn more . . .</p>
                            <div className="learn-more-text-container">
                                <p className="learn-more-text">
                                    NORDIC <span>FLOW</span> specializes in pump and process solutions for various
                                    industries, with a highly experienced team with background from the oil & gas market with the toughest requirements.
                                    <br/>
                                    <br/>
                                    Combined we have more than 80 years of experience. We aim to serve our
                                    customers with high quality products and systems in compliance to their requirements.
                                    <br/>
                                    <br/>
                                    We deliver a full range of Pump Packages in compliance with the highest
                                    standards and requirements, suitable for ATEX zones and harsh environments.
                                </p>
                            </div>
                        </div>


                        <h3 id="a-meet">MEET THE <span>TEAM</span></h3>
                        <div className="t-line" id="team-line"/>

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


                            <li>
                                <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} fName="Mark" lName="Tuinman" position="Head of Sales & Marketing" phone="+47 46943819" email="mt@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 5 ? true : false } number={5} img={tm5} fName="Per Einar" lName="Wethe" position="Chief Executive Officer" phone="+47 45246880" email="pew@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                            <li>
                                <Employee active={ this.state.selected === 6 ? true : false } number={6} img={tm6} fName="Eirik" lName="Ubøe" position="Chief Financial Officer" phone="+47 41292712" email="eu@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>
                            </li>

                        </ul>

                        <div className="team-container">

                            <Employee active={ this.state.selected === 1 ? true : false } number={1} img={tm1} fName="Torjus" lName="Wæringsaasen" position="Chief Operating Officer" phone="+47 41522557" email="tw@nordicflow.no" description={descriptionArray[0]} experience={experienceArray[0]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 2 ? true : false } number={2} img={tm2} fName="Johan" lName="Collett" position="Chief Technical Officer" phone="+47 95844449" email="jc@nordicflow.no" description={descriptionArray[1]} experience={experienceArray[1]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 3 ? true : false } number={3} img={tm3} fName="Christian" lName="Larssen" position="Head of Project Management" phone="+47 92817937" email="cel@nordicflow.no" description={descriptionArray[2]} experience={experienceArray[2]} handleEmployeeClick={this.handleEmployeeClick}/>


                            <Employee active={ this.state.selected === 4 ? true : false } number={4} img={tm4} fName="Mark" lName="Tuinman" position="Head of Sales & Marketing" phone="+47 46943819" email="mt@nordicflow.no" description={descriptionArray[3]} experience={experienceArray[3]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 5 ? true : false } number={5} img={tm5} fName="Per Einar" lName="Wethe" position="Chief Executive Officer" phone="+47 45246880" email="pew@nordicflow.no" description={descriptionArray[4]} experience={experienceArray[4]} handleEmployeeClick={this.handleEmployeeClick}/>

                            <Employee active={ this.state.selected === 6 ? true : false } number={6} img={tm6} fName="Eirik" lName="Ubøe" position="Chief Financial Officer" phone="+47 41292712" email="eu@nordicflow.no" description={descriptionArray[5]} experience={experienceArray[5]} handleEmployeeClick={this.handleEmployeeClick}/>

                        </div>
                    </div>
                <div id="scroll-ref" style={{ float:"left", clear: "both", marginTop: "-150px"}} ref={(el) => { this.end = el }}/>
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