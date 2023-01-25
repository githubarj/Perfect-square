import "./ContactFormStyles.css";
import { useRef } from "react"
import emailjs from "@emailjs/browser";


function ContactForm() {

   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_y9j6qq2",
         "template_2ydmj0n",
         form.current,
         "yeT6mDoMNVA7sdQmZ"
       )
       .then(
         (result) => {
           console.log(result.text);
           e.target.reset();
         },
         (error) => {
           console.log(error.text);
         }
       );
   };

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input className="first"/>
        <input type="text" placeholder="Name" name="from_name"/>
        <input type="text" placeholder="Email" name="user_email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea rows="4" placeholder="Message" name="message"></textarea>
        <input type="submit" value="Send Message" className="submit" />
      </form>
    </div>
  );
}

export default ContactForm;
