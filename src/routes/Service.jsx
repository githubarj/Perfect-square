import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../Components/Footer";
import Offering from "../Components/Offering";




function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Services"
        btnClass="hide"
      />

      <Offering />

      <Footer />
    </>
  );
}

export default Service;
