import React, {Component} from 'react'

class Contact extends Component {

    render() {
        return(
            <div className="contact-container">

                <h2>GET IN <span>TOUCH</span></h2>

                <div className="form-container">
                    <form action="">
                        <label htmlFor="mail">Your email</label>
                        <input type="email" name="mail" id="mail"/>
                        <br/>
                        <label htmlFor="subject">Subject</label>
                        <input list="subjects" name="subject" id="subject"/>
                        <datalist id="subjects">
                            <option value="Sales"/>
                            <option value="Complaints"/>
                            <option value="Pumps"/>
                        </datalist>
                        <br/>
                        <label htmlFor="message">Message</label>
                        <input type="text" name="message" id="message"/>
                        <br/>
                        <input type="submit"/>
                    </form>
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
                        <h3>+47 95844449</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact