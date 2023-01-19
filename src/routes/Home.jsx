import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Offering from "../Components/Offering";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1458&q=80"
        title = "TRUST QUALITY DURABILITY"
        text = "What can we do for you?"
        buttonText = "Our Services"
        url = "/"
        btnClass = "show"
      />

      <Offering/>
    </>
  );
}

export default Home;
