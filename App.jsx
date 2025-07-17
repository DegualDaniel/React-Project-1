import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./nav";  
import Home from "./Component/Home";
import Waitlist from "./Component/Waitlist";


function App() {
  

  return (
    <div>
      <Nav />   
      <Home/>
      <Waitlist/>
      

    </div>
  );
}

export default App;
