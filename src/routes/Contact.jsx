import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

import AboutImg from "../assets/2.jpg";


function Contact() {
   const slides = [AboutImg];
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heading = "hero-h2"
        images={slides}
        h2="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
