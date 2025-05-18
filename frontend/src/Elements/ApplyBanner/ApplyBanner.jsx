import React from "react";
// import coinImage from "../../assets/coin.png"; // Replace with your actual image path

const ApplyBanner = () => {
  return (
    <><div className="container">
        
    <section className="relative flex justify-center items-center py-20">
      {/* Floating coin */}
      {/* <img
        src={coinImage}
        alt="coin"
        className="absolute -top-10 w-20 h-20 object-contain z-10 animate-float"
      /> */}

      <div className="relative bg-gradient-to-r from-amber-400 to-amber-700 text-white rounded-3xl py-16 w-full text-center overflow-hidden shadow-lg">
        {/* Left angled shape */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-32 bg-amber-600 rounded-lg rotate-[20deg] -ml-8"></div>

        {/* Right angled shape */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-36 bg-amber-400 rounded-lg rotate-[20deg] -mr-10"></div>

        <h2 className="text-5xl font-semibold mb-4">
          Simplify payments<br />management
        </h2>
        <p className="text-sm text-purple-100 mb-6 max-w-md mx-auto">
          Easy and fast international business account that saves you money
          wherever you want to use it.
        </p>

        <button className="bg-white text-purple-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-100 transition">
          Apply Now
        </button>
      </div>
    </section>
    </div></>
  );
};

export default ApplyBanner;
