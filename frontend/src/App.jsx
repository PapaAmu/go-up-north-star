import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Elements/Navbar/Navbar";
import HeroSection from "./Elements/Hero/Hero";
import BankingServices from "./Elements/BankingServices/BankingServices";
import WhatWeDo from "./Elements/BankingServices/WhatWeDo";
import WhyChooseUs from "./Elements/WhyChooseUs/WhyChooseUs";
import Footer from "./Elements/Footer/Footer";
import ContactInfo from "./Elements/ContactInfo/TalkToUs"; // this will be routed
import ApplyBanner from "./Elements/ApplyBanner/ApplyBanner";
import Loans from "./Elements/Loans/Loans";
import Investors from "./Elements/Investors/Investors";
import NewsAndUpdates from "./Elements/NewsAndUpdates/NewsAndUpdates";
import "./App.css";

function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <BankingServices />
      <WhyChooseUs />
      <ApplyBanner />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talk-to-us" element={<ContactInfo />} />
        <Route path="/money-loan" element={<Loans />} />
        <Route path="/investing" element={<Investors />} />
        <Route path="/news-and-updates" element={<NewsAndUpdates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
