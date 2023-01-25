import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Offering from "../Components/Offering";
import Trait from "../Components/Traits";
import AnimatedPage from "../Components/AnimatedPage";


// pictured
import slide1 from "../assets/1.jpg"
import slide2 from "../assets/2.jpg"
import slide3 from "../assets/3.jpg"




function Home() {
  const slides = [
    slide3,
    slide1,
    slide2,
  ]
  return (
    <>
      <Navbar />

      <AnimatedPage>
        <Hero
          parentWidth="100%"
          cName="hero"
          images={slides}
          middle="hero-text"
          title="TRUST QUALITY DURABILITY"
          text="What can we do for you?"
          buttonText="Our Services"
          url="/"
          btnClass="show"
        />

        <Offering />
        <Trait />
        <Footer />
      </AnimatedPage>
    </>
  );
}

export default Home;
