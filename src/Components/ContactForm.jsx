import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea  rows="4" placeholder="Message"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
