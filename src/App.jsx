import { useState } from 'react'
import { Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import Navbar from "./Components/Navbar"
import "./styles.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
        <Navbar />
     
    </div>
  );
}

export default App
