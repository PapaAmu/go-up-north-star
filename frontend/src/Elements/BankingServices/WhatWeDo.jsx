import { useRef } from "react";
import { FaShieldAlt, FaChartLine, FaLayerGroup } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";
import { motion, useInView } from "framer-motion";
import OfficePic from "../../assets/office.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhatWeOffer = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="container">
      <section
        ref={sectionRef}
        className="rounded-3xl bg-gradient-to-r from-[#e7f5ed] to-white py-12"
      >
        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-2xl py-12 text-center md:text-4xl font-semibold text-gray-900"
        >
          What Do We Offer?
        </motion.h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center p-6">
          {/* Left: Image + Label */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src={OfficePic}
              alt="Financial Experts"
              className="md:h-[400px] md:ml-[200px] object-content rounded-2xl"
            />
            <div className="absolute h-20 bg-amber-500 w-64 bottom-2 right-2 p-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-amber-600">↗</div>
            </div>
            <div className="absolute w-64 bottom-0 right-0 bg-amber-700 p-4 flex justify-between items-center">
              <div className="font-semibold text-white">
                Best Financial Experts Because
              </div>
              <div className="text-4xl font-bold text-amber-300 md:block hidden">↗</div>
            </div>
          </motion.div>

          {/* Right: Offer List */}
          <div className="space-y-6">
            <div className="pb-6 text-xl text-gray-800">
              Our mission is to empower our community through accessible and
              fair financial services, promoting economic growth and stability.
            </div>
            <ul className="space-y-4">
              {[
                // Convert list to map for easier animation reuse
                {
                  icon: <FaShieldAlt />,
                  title: "Security Guarantee",
                  desc: "Your data and funds will be securely protected.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Investing",
                  desc: "You can easily invest your money and spot more facilities.",
                },
                {
                  icon: <FaLayerGroup />,
                  title: "Multiple Method",
                  desc: "You can try the multiple methods and tap into more features.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gray-800 text-amber-500 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
                       </ul>

            {/* Centered Button */}
            <div className="flex justify-center">
              <motion.button
                variants={fadeUpVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="inline-flex items-center gap-2 bg-gray-950 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
              >
                More About-Us
                <span className="bg-amber-500 p-2 rounded-full">
                  <TiInfoLarge className="w-4 h-4 text-black" />
                </span>
              </motion.button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeOffer;
