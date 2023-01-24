import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Offering from "../Components/Offering";

import AboutImg from "../assets/night.jpg";





function Service() {
   const slides = [AboutImg];
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heading = "hero-h2"
        images={slides}
        h2="Services"
        btnClass="hide"
      />

      <Offering />

      <Footer />
    </>
  );
}

export default Service;
