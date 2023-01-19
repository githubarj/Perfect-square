import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/2.jpg";

function Contact() {
  return (
    <>
      <Navbar />

      <Hero cName="hero-mid" heroImg={AboutImg} title="Contact" btnClass="hide" />
    </>
  );
}

export default Contact;
