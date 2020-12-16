import React, {Component} from 'react'
import tm1 from '../assets/1.png'
import tm2 from '../assets/2.png'
import tm3 from '../assets/3.png'
import tm4 from '../assets/4.png'
import tm5 from '../assets/5.png'

class About extends Component {

    render() {
        return(
            <div className="about-container">

                <section>
                    <div className="about-main">

                        <div className="about-title">
                            <div className="t-line"></div>
                            <h2>NORDIC <span>FLOW</span></h2>
                            <div className="t-line"></div>
                        </div>

                        <h4 className="subtitle">We know pumps, come pump with us</h4>
                        
                        <div className="about-text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde tempora harum enim quam mollitia quos qui? Iure vitae sapiente quis doloribus harum ipsum vero?</p>
                        </div>


                        <h3 id="a-meet">MEET THE <span>TEAM</span></h3>
                        <div className="t-line" id="team-line"/>

                        <div className="team-container">

                            <div className="team-bg"/>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm1} alt="teammember"/>
                                <h3>Torjus Wæringsåsen</h3>
                                <h4>Chief Operating Officer</h4>
                            </div>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm2} alt=""/>
                                <h3>Johan Collett</h3>
                                <h4>Chief Technical Officer</h4>
                            </div>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm3} alt=""/>
                                <h3>Christian Larsen</h3>
                                <h4>Head of Project Management</h4>
                            </div>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm4} alt=""/>
                                <h3>Mark Tuinman</h3>
                                <h4>Head of Sales & Marketing</h4>
                            </div>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm5} alt=""/>
                                <h3>Per Einar Wethe</h3>
                                <h4>Chief Executive Officer</h4>
                            </div>

                            <div className="avatar">
                                <div className="overlay-container">
                                    <div className="team-img-overlay"/>
                                </div>
                                <img className="team-img" src={tm2} alt=""/>
                                <h3>Eirik Ubøe</h3>
                                <h4>Chief Financial Officer</h4>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="bio-section">
                    <div className="bio-container">
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default About