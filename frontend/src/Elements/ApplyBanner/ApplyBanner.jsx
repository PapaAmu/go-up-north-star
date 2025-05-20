import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ApplyBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  return (
    <div className="container px-4">
      <section className="relative flex justify-center items-center py-16 sm:py-20">
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-r from-amber-600 to-amber-900 text-white rounded-3xl w-full text-center overflow-hidden shadow-lg px-6 sm:px-12 py-12 sm:py-16"
        >
          {/* Left angled shape */}
          <div className="absolute z-0 left-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-48 h-28 sm:h-36 bg-amber-500 rounded-lg rotate-[20deg] -ml-6 sm:-ml-8"></div>

          {/* Right angled shape */}
          <div className="absolute z-0 right-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-48 h-28 sm:h-36 bg-amber-700 rounded-lg rotate-[20deg] -mr-6 sm:-mr-10"></div>

          {/* Foreground content */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Simplify payments
              <br className="hidden sm:block" />
              management
            </h2>
            <p className="text-sm sm:text-base text-purple-100 mb-6 max-w-md mx-auto">
              Easy and fast personal and business account that saves you money
              wherever you want to use it.
            </p>

            <button className="bg-white text-purple-900 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-100 transition">
              Apply Now
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ApplyBanner;
