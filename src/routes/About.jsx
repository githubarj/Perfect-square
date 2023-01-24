import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

import AboutImg from "../assets/night.jpg";

function About() {
  const slides = [AboutImg];

  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heading="hero-h2"
        images={slides}
        h2="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
