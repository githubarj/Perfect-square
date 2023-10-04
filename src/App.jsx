import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import {AnimatePresence} from "framer-motion"
import "./styles.css";
import Solar from "./routes/Solar";
import Water from "./routes/Water";
import Construction from "./routes/Construction";
import ServiceWeek from "./Components/ServiceWeek";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path = "/solar" element = {<Solar />} />
          <Route path="/water" element =  { <Water /> } />
          <Route path="/ServiceWeek" element = {<ServiceWeek />} />
          <Route path="/construction" element = { <Construction /> } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
