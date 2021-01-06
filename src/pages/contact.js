import React, {Component} from 'react'
import CardSelector from '../assets/components/card-selector'
import ContactForm from '../assets/components/contact-form'

class Contact extends Component {
    constructor(props) {
        super(props)

        this.scrollRef = React.createRef()

        this.state = {
            cardsOpened : false,
        }
    }

    handleParticularClick = () => {
        this.setState({
            cardsOpened : true
        })
        setTimeout(() => {
            let list = document.querySelector(".scrollable-list")
        let viewportWidth = window.innerWidth
        list.scrollLeft = viewportWidth/2
        }, 400)
        
    }

    scrollToBottom = () => {
        this.end.scrollIntoView({ behavior: "smooth"})
    }

    componentDidUpdate() {
        this.scrollToBottom()
    }

    render() {
        return(
            <div className="contact">

                <section>

                    <div className="contact-container">

                        <h2>GET IN <span>TOUCH</span></h2>

                        <ContactForm/>

                        <div className="team-link-container">
                            <p id="contact-click" onClick={ () => { this.handleParticularClick() }}>Looking for someone <span>in particular</span>?</p>
                        </div>

                        <div className="contact-info-container">
                            <div className="info-email">
                                <h4>Email</h4>
                                <h3>sales@nordicflow.no</h3>
                            </div>
                            <div className="info-address">
                                <h4>Address</h4>
                                <h3>Nesbruveien 75<br/><span>1394 Nesbru</span></h3>
                            </div>
                            <div className="info-phone">
                                <h4>Phone</h4>
                                <h3>+47 41522557</h3>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact-particular">
                    {this.state.cardsOpened ? (<CardSelector/>) : (<div/>)}

                    

                </section>
                <div id="contact-scroll-ref" style={{ float:"left", clear: "both", marginTop: "-0px"}} ref={(el) => { this.end = el }}/>
            </div>
        )
    }
}

export default Contact