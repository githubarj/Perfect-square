import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AnimatedPage from "../Components/AnimatedPage";
import "./past.css";


// pictures

import AboutImg from "../assets/banner1.jpg";
import BasicSlider from "../Components/BasicSlider";

import slide1 from "../assets/1.jpg";
import slide2 from "../assets/10.jpg";
import slide3 from "../assets/2.jpg";
import slide4 from "../assets/solar2.jpg";

function Solar() {
  const slides = [AboutImg];
  return (
    <>
      <Navbar />

      <AnimatedPage>
        <Hero
          cName="hero-mid"
          heading="hero-h2"
          middle="hero-text"
          images={slides}
          h2="Solar"
          btnClass="hide"
        />

        <div className="main">
          <div className="content">
            <h1>Get lighting in your home</h1>
            <p>
              Go green and save money with outsolar power solutions. we offer a
              wide range of solar panel systems that are designed to provide
              clean energy for homes and businesses. Our experienced technicians
              ensure that your solar power system is customized to meet your
              energy needs and budget.Switch to solar power and enjoy the
              benefits of reduced electricity costs.

            </p>
          </div>
          <div className="slider">
            <BasicSlider
            slide1 = {slide1}
            slide2 = {slide2}
            slide3 = {slide3}
            slide4 = {slide4}
             />
          </div>
        </div>

        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Solar;
