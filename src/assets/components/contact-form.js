import React from 'react'
import emailjs from 'emailjs-com';

function ContactForm() {

    function sendEmail(e) {
      e.preventDefault()
  
      emailjs.sendForm('gmail', 'template_d7ygx4j', e.target, 'user_4yJW6xOsOp2REExJ1L3Nz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
  
        alert("Message sent")
        e.target.reset()
  
    }
  
    return (

        <div className="form-container">
            <form action="" id="mail-form" autoComplete="off" onSubmit={sendEmail}>
                <label htmlFor="from_mail">Your email</label>
                <br/>
                <input required type="email" name="from_mail" id="mail"/>
                <br/>
                <label htmlFor="subject">Subject</label>
                <br/>
                <select name="subject" id="subject">
                    <option value="Other">Other</option>
                    <option value="After Sale">After Sale</option>
                    <option value="Service">Service</option>
                    <option value="New sale">New Sale</option>
                    <option value="Claim">Claim</option>
                </select>
                <br/>
                <label htmlFor="message">Message</label>
                <br/>
                <textarea required name="message" id="message" cols="30" rows="10" form="mail-form"/>
                <br/>
                <input value="SEND" type="submit" id="submit"/>
            </form>
        </div>
    )
  }

export default ContactForm