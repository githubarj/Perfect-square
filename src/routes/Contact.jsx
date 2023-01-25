import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

import AboutImg from "../assets/2.jpg";
import AnimatedPage from "../Components/AnimatedPage";


function Contact() {
   const slides = [AboutImg];
  return (
    <>
      <Navbar />
      <AnimatedPage>
        <Hero
          cName="hero-mid"
          heading="hero-h2"
          images={slides}
          h2="Contact"
          btnClass="hide"
        />
        <ContactForm />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Contact;
