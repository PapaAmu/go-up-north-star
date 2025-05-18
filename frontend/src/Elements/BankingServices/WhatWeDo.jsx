import { FaShieldAlt, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";

import OfficePic from "../../assets/office.webp";

const WhatWeOffer = () => {
  return (
    <>
    <div className="container">
    <section className="rounded-3xl bg-gradient-to-r from-[#e7f5ed] to-white py-12">
      <h2 className="text-2xl py-12 text-center md:text-5xl font-semibold text-gray-900">
        What Do We Offer?
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center p-6">
        {/* Left: Image + Label */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={OfficePic} // Replace with actual image path
            alt="Financial Experts"
            className="md:h-[400px] ml-[200px] object-content rounded-2xl"
          />
          <div className="absolute h-20 bg-amber-500 w-64 bottom-2 right-2 p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-amber-600">↗</div>
          </div>
          <div className="absolute w-64 bottom-0  right-0 bg-amber-700 p-4 flex justify-between items-center">
            <div className="font-semibold text-white">
              Best Financial Experts Because
            </div>
            <div className="text-4xl font-bold text-amber-300">↗</div>
          </div>
        </div>

        {/* Right: Offer List */}
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-gray-800 text-amber-500 p-3 rounded-full">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Security Guarantee
                </h3>
                <p className="text-sm text-gray-600">
                  Your data and funds will be securely protected.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-gray-800 text-amber-500 p-3 rounded-full">
                <FaChartLine />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Investing</h3>
                <p className="text-sm text-gray-600">
                  You can easily invest your money and spot more facilities.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-gray-800 text-amber-500 p-3 rounded-full">
                <FaLayerGroup />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Multiple Method</h3>
                <p className="text-sm text-gray-600">
                  You can try the multiple methods and tap into more features.
                </p>
              </div>
            </li>
          </ul>

          <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-2 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition">
            Learn More
            <span className="bg-amber-500 p-2 rounded-full">
              <TiInfoLarge className="w-4 h-4 text-black" />
            </span>
          </button>
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default WhatWeOffer;
