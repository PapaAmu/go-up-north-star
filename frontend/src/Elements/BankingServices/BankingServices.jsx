import {
  FaPiggyBank,
  FaChartLine,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: <FaPiggyBank className="text-white text-2xl" />,
    title: "Flexible Savings Plans",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Community Investment Pools",
  },
  {
    icon: <FaUsers className="text-white text-2xl" />,
    title: "Group Contributions & Payouts",
  },
  {
    icon: <FaWallet className="text-white text-2xl" />,
    title: "Growth & Profit Sharing",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
    },
  }),
};

const BankingServices = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="container" >
      <section
        ref={sectionRef}
        className="bg-gradient-to-r from-white to-[#e7f5ed] p-6 rounded-3xl"
      >
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 px-4 md:px-0"
          >
            <h2 className="text-2xl md:text-4xl text-gray-900">
              Explore our <br /> community financial offerings
            </h2>
            <p className="text-gray-600 text-sm max-w-md">
              Discover simple ways to save, grow your money, and participate in shared wealth through trusted community-led initiatives.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex items-center gap-2 bg-gray-950 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-400 transition">
                Explore More
                <span className="bg-amber-600 text-white p-2 rounded-full">
                  <BsArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 px-4 md:px-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="bg-white rounded-2xl p-5 shadow hover:shadow-md transition flex flex-col items-center text-center"
              >
                <div className="bg-gray-900 p-4 rounded-full mb-4">
                  {service.icon}
                </div>
                <p className="text-sm font-medium text-gray-800">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BankingServices;
