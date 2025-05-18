import { useState } from "react";
import Navbar from "./Elements/Navbar/Navbar";
import HeroSection from "./Elements/Hero/Hero";
import BankingServices from "./Elements/BankingServices/BankingServices";
import WhatWeDo from "./Elements/BankingServices/WhatWeDo";
import WhyChooseUs from "./Elements/WhyChooseUs/WhyChooseUs";
import Footer from "./Elements/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
     
      <WhatWeDo />
      <BankingServices />
      <WhyChooseUs />
      <Footer />
    
    </>
  );
}

export default App;
